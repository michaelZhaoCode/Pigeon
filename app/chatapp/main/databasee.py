import sys
sys.path.append("../..")

import app.sql_functions as sql_functions

def setupTestDatabase():
    sql_functions.initialize_database()
    sql_functions.add_chatroom(["Michael", "John"], "MichaelandJohn")

def getChatrooms(user):
    chatrooms = sql_functions.get_chatrooms(user)
    return chatrooms

def getConversation(chatroom_id):
    messages = []
    for message in sql_functions.get_messages(chatroom_id):
        messages.append({"from": message["username"], "message": message["text"]})
    return messages

def saveMessage(username, chatroom_id, text):
    print("Saving message from " + username + " in chatroom " + str(chatroom_id) + ": " + text)
    sql_functions.add_message(username, text, chatroom_id)
    return None