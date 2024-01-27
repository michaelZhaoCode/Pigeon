import cohere
co = cohere.Client('yTir03SIfA0ft4J5G3pRIOBYKDOvyJY0OcAFrrRv')

# define the function of paraphrasing text in a speaking way in different eras
def paraphrase(text, style):
    """
    Style is an integer between 0 and 4
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
    prompt=f'Replace the following text in {x[style]}: \n {user_input}',
    )
    print(response)

# Call the function
user_input = "A king, historically a central figure in monarchies, symbolizes authority, leadership, and governance. Clad in regal attire, a king typically inherits the throne or ascends through conquest, wielding both political and symbolic power. Tasked with the welfare of the realm, a king's reign is marked by decisions that shape the course of history. Whether remembered for benevolent rule or tyrannical oppression, the legacy of a king echoes through time. Kingship embodies a complex interplay of tradition, responsibility, and the dynamics of ruling a kingdom. Beyond the royal trappings, a king's true measure lies in the impact on the lives of the people."
paraphrase(user_input, 0)


