import sys
sys.path.append("../..")

import app.sqll as sqll

def setupTestDatabase():
    sqll.initialize_database()
    sqll.add_chatroom(["Michael", "John"], "MichaelandJohn")

def getChatrooms(user):
    chatrooms = sqll.get_chatrooms(user)
    return chatrooms

def getConversation(chatroom_id):
    messages = []
    for message in sqll.get_messages(chatroom_id):
        messages.append({"from": message["username"], "message": message["text"]})
    return messages

def saveMessage(username, chatroom_id, text):
    print("Saving message from " + username + " in chatroom " + str(chatroom_id) + ": " + text)
    sqll.add_message(username, text, chatroom_id)
    return None