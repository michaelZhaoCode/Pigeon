from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from base64 import b64encode
from createFont import finalCreateFont

import sql_functions
from cohereapi.main import paraphrase, analyze
from dalle import generate_image


app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"


@app.route('/register/', methods=['POST'])
@cross_origin()
def register():
    username = request.get_json()['username']
    font_path = request.get_json()['font_path']

    # write username, file_path to details.csv
    with open("details.csv", "w") as file:
        file.write(username + ",")
        file.write(font_path + "")
    finalCreateFont()
    sql_functions.add_user(username, font_filepath=f"{username}.ttf")

    return 200


@app.route('/view_postcards/', methods=['POST'])
@cross_origin()
def view_postcards():
    username = request.get_json()['username']
    output = sql_functions.get_postcards(username)
    generations = sql_functions.get_generations(username)

    if len(generations) > 1:
        instructions = analyze(generations)
        sql_functions.change_postcard_style(instructions)

    return jsonify({"output": output})


@app.route('/send_postcard/', methods=['POST'])
@cross_origin()
def send_postcard():
    sender = request.get_json()['sender']
    receiver = request.get_json()['receiver']
    text = request.get_json()['text']
    image_link = generate_image(text)

    sql_functions.add_generation(sender, "Give me a good example of postcard text", text)

    sql_functions.add_postcard(sender, receiver, text, image_link)

    return 200


@app.route('/rewrite_postcard/', methods=['POST'])
@cross_origin()
def rewrite_postcard():
    text = request.get_json()['text']
    style = request.get_json()['style']
    username = request.get_json()['username']
    chat_history = sql_functions.get_generations(username)
    instructions = sql_functions.get_postcard_style(username)

    new_text = paraphrase(text, int(style), chat_history, instructions)

    return jsonify({"output": new_text})


@app.route('/view_chatrooms/', methods=['POST'])
@cross_origin()
def view_chatrooms():
    username = request.get_json()['username']
    output = sql_functions.get_chatrooms(username)

    return jsonify({"output": output})


@app.route('/create_chatroom/', methods=['POST'])
@cross_origin()
def create_chatroom():
    usernames = request.get_json()['usernames']
    chatroom_name = request.get_json()['chatroom_name']
    sql_functions.add_chatroom(usernames, chatroom_name)

    return 200


@app.route('/choose_chatroom/', methods=['POST'])
@cross_origin()
def choose_chatroom():
    chatroom_id = request.get_json()['chatroom_id']
    output = sql_functions.get_messages(chatroom_id)

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

    sql_functions.add_message(username, text, chatroom_id)

    return 200


@app.route('/view_profile/', methods=['POST'])
@cross_origin()
def view_profile():
    username = request.get_json()['username']
    output = sql_functions.get_bio(username)

    return jsonify(output)


@app.route('/edit_bio/', methods=['POST'])
@cross_origin()
def edit_bio():
    username = request.get_json()['username']
    text = request.get_json()['text']

    sql_functions.change_bio(username, text)

    return 200

@app.route('/create_font', methods=['POST'])
@cross_origin()
def create_font():
    data = request.get_json()
    print("data: ", data)
    username = data['username']
    font_path = data['font_path']

    # write username, file_path to details.csv
    with open("details.csv", "w") as file:
        file.write(username + ",")
        file.write(font_path + "")
    finalCreateFont()
    return 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
