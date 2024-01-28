from openai import OpenAI

client = OpenAI(
    api_key="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"
)


def generate_image(text: str) -> str:
    response = client.images.generate(
        model="dall-e-3",
        prompt=f"Create a vintage, old-fashioned photograph as a postcard image for the following text: {text}",
        size="1024x1024",
        quality="standard",
        n=1,
    )

    image_url = response.data[0].url
    return image_url
