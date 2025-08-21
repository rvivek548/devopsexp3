from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Create a new ChatBot instance
chatbot = ChatBot("MyChatbot")

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Train the chatbot on English language data
trainer.train("chatterbot.corpus.english")

# Start interacting with the chatbot
print("Type ':q' or 'quit' to exit.")
while True:
    user_input = input("You: ")
    if user_input.lower() in (":q", "quit", "exit"):
        break
    response = chatbot.get_response(user_input)
    print(f"Chatbot: {response}")
