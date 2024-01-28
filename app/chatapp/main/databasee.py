
def getMichaelPeople():
    return ["John", "Jane"]

def getConversation(person1, person2):
    return [{
          "from": person1,
          "message": "Hello"
        },
        {
          "from": person2,
          "message": "Hi"
        },
        {
          "from": person1,
          "message": "How are you?"
        },
        {
          "from": person2,
          "message": "I'm fine, and you?"
        },
        {
          "from": person1,
          "message": "I'm fine too"
        }
    ]

def saveConversation(person1, person2, conversation):
    print("Saving conversation between " + person1 + " and " + person2)
    print(conversation)
    return None