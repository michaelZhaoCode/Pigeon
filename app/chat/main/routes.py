from flask import session, redirect, url_for, render_template, request
from . import main
from .forms import LoginForm

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

@main.route('/', methods=['GET', 'POST'])
def index():
    """Login form to enter a room."""
    form = LoginForm()
    if form.validate_on_submit():
        session['name'] = form.name.data
        # session['room'] = form.room.data
        return redirect(url_for('.myconversations'))
    elif request.method == 'GET':
        form.name.data = session.get('name', '')
        # form.room.data = session.get('room', '')
    return render_template('index.html', form=form)


@main.route('/chat')
def chat():
    """Chat room. The user's name and room must be stored in
    the session."""
    chattingWith = request.args.get('user')
    print("We are chatting with", chattingWith)
    name = session.get('name', '')
    room = session.get('room', '')

    # populate the messages from the database
    user = DATABASE[name]
    conversations = user["conversations"]
    messages = []
    for conversation in conversations:
        if conversation["user"] == chattingWith:
            for message in conversation["messages"]:
                messages.append(message["from"] + ": " + message["message"])
            break
    return render_template('chat.html', name=name, room=room, messages=messages, chattingWith=chattingWith)

    # if name == '' or room == '':
    #     return redirect(url_for('.index'))
    # return ender_template('chat.html', name=name, room=room)r

@main.route('/myconversations')
def myconversations():
    """Conversations. This page contains the lisut of conversations
    the user has had with other users"""
    # get the conversations from the database
    name = session.get('name', '')
    user = DATABASE[name]
    conversations = user["conversations"]
    return render_template('myconversations.html', conversations=conversations, name=name)
    