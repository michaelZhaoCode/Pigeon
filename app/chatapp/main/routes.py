from flask import session, redirect, url_for, render_template, request
from . import main
from .forms import LoginForm, NewConversation
from .databasee import getConversation, getChatrooms

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
    return render_template('index.html', form=form)

@main.route('/chat')
def chat():
    """Chat room. The user's name and room must be stored in
    the session."""
    active_chatroom = request.args.get('active_chatroom')
    session['active_chatroom'] = active_chatroom
    name = session.get('name', '')
    room = session.get('room', '')

    # populate the messages from the database
    messages = []
    for message in getConversation(active_chatroom):
        messages.append(message["from"] + ": " + message["message"])

    return render_template('chat.html', name=name, room=room, messages=messages, active_chatroom=active_chatroom)


@main.route('/myconversations')
def myconversations():
    """Conversations. This page contains the lisut of conversations
    the user has had with other users"""
    # get the conversations from the database
    name = session.get('name', '')
    chatrooms = getChatrooms(name)
    return render_template('myconversations.html', chatrooms=chatrooms, name=name)

@main.route('/new_conversation')
def new_conversation():
    """New conversation. This page allows the user to start a new
    conversation with another user"""
    form = NewConversation()
    if form.validate_on_submit():
        session['targetUsername'] = form.username.data
        return redirect(url_for('.myconversations'))
    elif request.method == 'GET':
        form.username.data = session.get('username', '')
    
    return render_template('new_conversation.html', form=form)
    