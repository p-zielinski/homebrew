from pathlib import Path
from openai import OpenAI
client = OpenAI(api_key="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")

speech_file_path = Path(__file__).parent / "speech.mp3"
response = client.audio.speech.create(
  model="tts-1",
  voice="onyx",
  input="""
  
Wow, you've just written your first Python code—congratulations! Now, let's explore variables. Variables are essential in programming; think of them as containers for storing data. In Python, creating a variable is simple. For example, x = "Homebrew is the new Harvard" assigns the text Homebrew is the new Harvard to a variable named x. This means you can use x later in your code to refer to this text. If you're curious about what a piece of Python code does, you can copy it and paste it into the code editor below.""",
)

response.stream_to_file('6.variables.mp3')


