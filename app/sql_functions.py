import sqlite3
from datetime import datetime


DATABASE_NAME = 'database.db'


def initialize_database():
    create_user_table()
    create_chatroom_table()
    create_chat_members_table()
    create_messages_table()
    create_postcards_table()


def reset_database():
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
        tables = cursor.fetchall()

        for table in tables:
            if table[0] != "sqlite_sequence":
                cursor.execute(f"DROP TABLE {table[0]}")

        conn.commit()

    initialize_database()


def create_user_table():
    """Schema
    User ID: int - unused
    Username: str
    Bio: str
    Font: BLOB
    """
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        command = f"CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY AUTOINCREMENT, username nvarchar(100) UNIQUE, bio TEXT, font BLOB)"
        cursor.execute(command)
        conn.commit()


def create_chat_members_table():
    """Schema
    ID: int - unused
    Chat ID: int
    Username: str
    """
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        command = f"CREATE TABLE IF NOT EXISTS chat_members (id INTEGER PRIMARY KEY AUTOINCREMENT, chatroom_id INTEGER, username nvarchar(100))"
        cursor.execute(command)
        conn.commit()


def create_chatroom_table():
    """Schema
    Chat ID: int
    Chatroom name: str
    """
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        command = f"CREATE TABLE IF NOT EXISTS chatrooms (chatroom_id INTEGER PRIMARY KEY AUTOINCREMENT, name nvarchar(100))"
        cursor.execute(command)
        conn.commit()


def create_messages_table():
    """Schema
    ID: int - unused
    Username: str
    Chatroom id: int
    Text: str
    Timestamp: str
    """
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        command = f"CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, username nvarchar(100), chatroom_id INTEGER, text TEXT, time nvarchar(100))"
        cursor.execute(command)
        conn.commit()


def create_postcards_table():
    """Schema
    ID: int - unused
    Sender: str
    Recipient: str
    Text: str
    Image link: str
    Timestamp: str
    """
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        command = f"CREATE TABLE IF NOT EXISTS postcards (id INTEGER PRIMARY KEY AUTOINCREMENT, sender nvarchar(100), recipient nvarchar(100), text TEXT, image_link TEXT, time nvarchar(100))"
        cursor.execute(command)
        conn.commit()


# TODO: load message history based on good generations
# Then augment prompts with examples and also secondary model to generate rules/patterns
def create_generations_table():
    """Schema
    Username: str
    Input: str
    Output: str
    """
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        command = f"CREATE TABLE IF NOT EXISTS generations (chatroom_id INTEGER PRIMARY KEY AUTOINCREMENT, name nvarchar(100))"
        cursor.execute(command)
        conn.commit()



def add_user(username: str, font_filepath: str):
    with open(font_filepath, 'rb') as file:
        font_data = file.read()

    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""INSERT INTO users (username, bio, font) VALUES (?, ?, ?)""", (username, "Nice to meet you!", font_data))
        conn.commit()


def get_postcards(username: str) -> list[dict]:
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""SELECT * FROM postcards WHERE sender = ? OR recipient = ?""",
                       (username, username))
        results = cursor.fetchall()

    output = []
    for result in results:
        output.append({
            "sender": result[1],
            "recipient": result[2],
            "text": result[3],
            "image_link": result[4],
            "time": result[5]
        })

    return output


def add_postcard(sender: str, receiver: str, text: str, image_link: str):
    now = datetime.now().strftime("%I:%M:%S %p")

    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""INSERT INTO postcards (sender, recipient, text, image_link, time) VALUES (?, ?, ?, ?, ?)""",
                       (sender, receiver, text, image_link, now))
        conn.commit()


def add_chatroom(usernames: list[str], chatroom_name: str):
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""INSERT INTO chatrooms (name) VALUES (?)""",
                       (chatroom_name,))
        conn.commit()
        chatroom_id = cursor.lastrowid

        for username in usernames:
            cursor.execute("""INSERT INTO chat_members (chatroom_id, username) VALUES (?, ?)""",
                           (chatroom_id, username))
            conn.commit()


def get_chatrooms(username: str) -> list[dict]:
    output = []
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""SELECT chatroom_id FROM chat_members WHERE username = ?""",
                       (username,))
        results = cursor.fetchall()
        for result in results:
            chatroom_id = result[0]
            cursor.execute("SELECT name FROM chatrooms WHERE chatroom_id = ?", (chatroom_id,))
            chatroom_name = cursor.fetchone()[0]

            output.append({
                "chatroom_id": chatroom_id,
                "chatroom_name": chatroom_name
            })

    return output


def add_chat_member(username: str, chatroom_id: int):
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""INSERT INTO chat_members (chatroom_id, username) VALUES (?, ?)""",
                       (chatroom_id, username))
        conn.commit()


def get_messages(chatroom_id: int) -> list[dict]:
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        query = """
        SELECT messages.*, users.font 
        FROM messages 
        INNER JOIN users ON messages.username = users.username 
        WHERE messages.chatroom_id = ?
        """
        cursor.execute(query, (chatroom_id,))
        results = cursor.fetchall()

    output = []
    for result in results:

        output.append({
            "username": result[1],
            "text": result[3],
            "time": result[4],
            "font": result[5]
        })

    return output


def add_message(username: str, text: str, chatroom_id: int):
    now = datetime.now().strftime("%I:%M:%S %p")

    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""INSERT INTO messages (username, chatroom_id, text, time) VALUES (?, ?, ?, ?)""",
                       (username, chatroom_id, text, now))
        conn.commit()


def get_bio(username: str) -> dict:
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""SELECT bio, font FROM users WHERE username = ?""",
                       (username,))
        result = cursor.fetchone()

    output = {"bio": result[0], "font": result[1]}

    return output


def change_bio(username: str, new_bio: str):
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute("""UPDATE users SET bio = ? WHERE username = ?""",
                       (new_bio, username))


def view_table(table):
    with sqlite3.connect(DATABASE_NAME, check_same_thread=False) as conn:
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM {table}")
        for a in cursor.fetchall():
            print(a)
