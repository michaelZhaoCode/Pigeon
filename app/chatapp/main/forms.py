from flask_wtf import FlaskForm
from wtforms.fields import StringField, SubmitField
from wtforms.validators import DataRequired


class LoginForm(FlaskForm):
    """Accepts a nickname and a room."""
    name = StringField('Name', validators=[DataRequired()])
    room = StringField('Room', validators=[DataRequired()])
    submit = SubmitField('Enter Chatroom')

class NewConversation(FlaskForm):
    """Accepts a username to start a new conversation with"""
    username = StringField('Username', validators=[DataRequired()])
    submit = SubmitField('Start Conversation')
