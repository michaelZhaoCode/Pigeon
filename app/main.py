from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import sql
from base64 import b64encode

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"


@app.route('/register/', methods=['POST'])
@cross_origin()
def register():
    username = request.get_json()['username']
    # TODO: incorporate font
    sql.add_user(username, font_filepath="main.py")

    return 200


@app.route('/view_postcards/', methods=['POST'])
@cross_origin()
def view_postcards():
    username = request.get_json()['username']
    output = sql.get_postcards(username)

    return jsonify({"output": output})


@app.route('/send_postcard/', methods=['POST'])
@cross_origin()
def send_postcard():
    sender = request.get_json()['sender']
    receiver = request.get_json()['receiver']
    text = request.get_json()['text']
    # TODO: incorporate DALLE to get image link
    image_link = ""

    sql.add_postcard(sender, receiver, text, image_link)

    return 200


@app.route('/rewrite_postcard/', methods=['POST'])
@cross_origin()
def rewrite_postcard():
    text = request.get_json()['text']
    # TODO: incorporate rewrite
    new_text = ""

    return jsonify({"output": new_text})


@app.route('/view_chatrooms/', methods=['POST'])
@cross_origin()
def view_chatrooms():
    username = request.get_json()['username']
    output = sql.get_chatrooms(username)

    return jsonify({"output": output})


@app.route('/create_chatroom/', methods=['POST'])
@cross_origin()
def create_chatroom():
    usernames = request.get_json()['usernames']
    chatroom_name = request.get_json()['chatroom_name']
    sql.add_chatroom(usernames, chatroom_name)

    return 200


@app.route('/choose_chatroom/', methods=['POST'])
@cross_origin()
def choose_chatroom():
    chatroom_id = request.get_json()['chatroom_id']
    output = sql.get_messages(chatroom_id)

    for message in output:
        binary_font = message['font']
        encoded_font = b64encode(binary_font).decode("utf-8")
        message['font'] = encoded_font

    return jsonify({"output": output})


@app.route('/send_chat/', methods=['POST'])
@cross_origin()
def send_chat():
    username = request.get_json()['username']
    chatroom_id = request.get_json()['chatroom_id']
    text = request.get_json()['text']

    sql.add_message(username, text, chatroom_id)

    return 200


@app.route('/view_profile/', methods=['POST'])
@cross_origin()
def view_profile():
    username = request.get_json()['username']
    output = sql.get_bio(username)

    return jsonify(output)


@app.route('/edit_bio/', methods=['POST'])
@cross_origin()
def edit_bio():
    username = request.get_json()['username']
    text = request.get_json()['text']

    sql.change_bio(username, text)

    return 200
