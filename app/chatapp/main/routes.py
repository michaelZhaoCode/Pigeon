from flask import session, redirect, url_for, render_template, request
from . import main
from .forms import LoginForm
from .databasee import getConversation, getMichaelPeople

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
    session['chattingWith'] = chattingWith
    
    name = session.get('name', '')
    room = session.get('room', '')

    # populate the messages from the database
    messages = []
    for message in getConversation(name, chattingWith):
        messages.append(message["from"] + ": " + message["message"])
    return render_template('chat.html', name=name, room=room, messages=messages, chattingWith=chattingWith)


@main.route('/myconversations')
def myconversations():
    """Conversations. This page contains the lisut of conversations
    the user has had with other users"""
    # get the conversations from the database
    name = session.get('name', '')
    people = getMichaelPeople()
    print(people)
    return render_template('myconversations.html', conversations=people, name=name)
    