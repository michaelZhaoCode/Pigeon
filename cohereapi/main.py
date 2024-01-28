import cohere

co = cohere.Client('yTir03SIfA0ft4J5G3pRIOBYKDOvyJY0OcAFrrRv')


# define the function of rephrasing text in a speaking style in different eras(old English)
def paraphrase(text, style, history, instructions):
    """
    Style is an integer between 0 and 7
    0 : Medieval Era (5th to 15th century)
    1 : Renaissance (14th to 17th century)
    2 : Victorian Era (19th century)
    3 : Roaring Twenties (1920s)
    4 : World War II Era (1930s-1940s)
    5 : 1960s Counterculture
    6 : 1980s MTV Generation
    7 : Digital Age (2000s-present)

    @param text - the text the user wants to send
    @param style - the style or the era we want to convert to 
    """

    x = {
        0: "Medieval Era (5th to 15th century)",
        1: "Renaissance (14th to 17th century)",
        2: "Victorian Era (19th century)",
        3: "Roaring Twenties (1920s)",
        4: "World War II Era (1930s-1940s)",
        5: "1960s Counterculture",
        6: "1980s MTV Generation",
        7: "Digital Age (2000s-present)"
    }

    response = co.chat(
        message=f'Follow these instructions: {instructions} \n Rewrite the following text in the writing style of the {x[style]}: \n {text}',
        chat_history=history
    )
    return response.text


def analyze(history):
    response = co.chat(
        message=f'Look your previous responses and identify some common patterns in your responses that one can follow for generating similar future responses. Write this in a list format. Include only the patterns and no additional text',
        chat_history=history
    )
    return response.text


# Call the function
# user_input = "Hello, my friend? How are you?"
# print(paraphrase(user_input, 0, []))

# print(analyze([
#     {"role": "USER", "message": "Who discovered gravity?"},
#     {"role": "CHATBOT", "message": "The man who is widely credited with discovering gravity is Sir Isaac Newton"},
#     {"role": "USER", "message": "Who discovered the lightbulb?"},
#     {"role": "CHATBOT", "message": "The man who is widely credited with discovering the light bulb is Thomas Edison"}
# ]))
