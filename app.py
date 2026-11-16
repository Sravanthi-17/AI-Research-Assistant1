
from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create Flask application
app = Flask(__name__)

# Get Tavily API key
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/search", methods=["POST"])
def search():

    data = request.get_json()
    query = data.get("query", "").strip()

    if not query:
        return jsonify({"error": "Please enter a search query"}), 400

    url = "https://api.tavily.com/search"

    payload = {
        "api_key": TAVILY_API_KEY,
        "query": query,
        "search_depth": "basic",
        "max_results": 5,
        "include_answer": True
    }

    try:
        response = requests.post(url, json=payload, timeout=30)
        response.raise_for_status()

        return jsonify(response.json())

    except requests.exceptions.RequestException as e:
        return jsonify({"error": "Search failed. Please try again."}), 502


if __name__ == "__main__":
    app.run(debug=True)
