DATABASE = {
    "Michael": {
        "password": "password",
        "conversations": [
            {
                "user": "John",
                "messages": [
                    {
                        "from": "Michael",
                        "message": "Hello John"
                    },
                    {
                        "from": "John",
                        "message": "Hello Michael"
                    }
                ]
            },
            {
                "user": "Jane",
                "messages": [
                    {
                        "from": "Michael",
                        "message": "Hello Jane"
                    },
                    {
                        "from": "Jane",
                        "message": "Hello Michael"
                    }
                ]
            }
        ]
    },
}

def addMessage(fromPerson, toPerson, message):
    # fromPerson will be in database
    if fromPerson not in DATABASE:
        return False
    
    convos = DATABASE[fromPerson]["conversations"]
    found = False
    for convo in convos:
        if convo["user"] == toPerson:
            convo["messages"].append({"from": fromPerson, "message": message})
            found = True
            break
    return True