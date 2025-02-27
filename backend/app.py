import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv

# ✅ Load environment variables
load_dotenv()

# ✅ Fetch API Key correctly
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# ✅ Debugging print statements
print(f"🔍 .env file loaded: {bool(GEMINI_API_KEY)}")
print(f"🔑 GEMINI_API_KEY: {GEMINI_API_KEY[:5]}********")  # Hide most of the key for security

# ✅ Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS)

# ✅ Configure Google Gemini AI
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel("gemini-1.5-pro")  # Ensure model version is available
else:
    raise ValueError("⚠️ Missing GEMINI_API_KEY in .env file!")

# ✅ API Route to Handle Chatbot Messages
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        user_message = data.get("message", "").strip()

        if not user_message:
            return jsonify({"reply": "⚠️ Please enter a message."}), 400

        response = model.generate_content(user_message)
        return jsonify({"reply": response.text})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"reply": "⚠️ AI chatbot encountered an error."}), 500

# ✅ Run Flask Server
if __name__ == "__main__":
    app.run(port=5000, debug=True)
