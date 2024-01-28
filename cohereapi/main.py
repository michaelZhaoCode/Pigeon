import cohere
co = cohere.Client('yTir03SIfA0ft4J5G3pRIOBYKDOvyJY0OcAFrrRv')

# define the function of rephrasing text in a speaking style in different eras(old English)
def paraphrase(text, style):
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
        0 : "Medieval Era (5th to 15th century)",
        1 : "Renaissance (14th to 17th century)",
        2 : "Victorian Era (19th century)",
        3 : "Roaring Twenties (1920s)",
        4 : "World War II Era (1930s-1940s)",
        5 : "1960s Counterculture",
        6 : "1980s MTV Generation",
        7 : "Digital Age (2000s-present)"
    }

    response = co.generate(
    prompt=f'Rewrite the following text in the writing style of the {x[style]}: \n {text}',
    )
    return response

# Call the function
# user_input = "Hello, my friend? How are you?"
# paraphrase(user_input, 0)


