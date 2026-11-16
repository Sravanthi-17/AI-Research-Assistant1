# AI Research Assistant 🔍

An AI-powered web application that helps users research topics by searching the web, generating concise summaries, and displaying relevant research sources.

Built using **Python, Flask, JavaScript, HTML, CSS, and Tavily Search API**.

## 🚀 Features

- Search for information on any research topic.
- Generate AI-based answers using Tavily's answer feature.
- Retrieve up to five relevant web search results.
- Display source titles, descriptions, and clickable website links.
- Simple and user-friendly interface.
- Handle empty search queries and API errors.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Flask | Web application framework |
| HTML | Webpage structure |
| CSS | Frontend styling |
| JavaScript | Frontend functionality |
| Tavily Search API | Web search and generated answers |
| Requests | HTTP API communication |
| python-dotenv | Environment variable management |
| Git & GitHub | Version control |

## 📁 Project Structure

```text
AI-Research-Assistant/
│
├── app.py
├── requirements.txt
├── .env
├── .gitignore
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── venv/
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Sravanthi-17/AI-Research-Assistant1.git
```

### 2. Navigate to the project folder

```bash
cd AI-Research-Assistant1
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

For Windows CMD:

```bash
venv\Scripts\activate.bat
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Configure the Tavily API key

Create a `.env` file in the project root directory.

Add your Tavily API key:

```env
TAVILY_API_KEY=your_tavily_api_key
```

Get your API key from [Tavily](https://tavily.com/).

**Important:** Never share or upload your API key publicly.

### 7. Run the application

```bash
python app.py
```

### 8. Open the application

Visit:

```text
http://127.0.0.1:5000
```

Enter a research topic and click the Search button to explore the results.

## 🔄 Application Workflow

1. The user enters a research topic in the frontend.
2. JavaScript captures the search query.
3. The Fetch API sends a POST request to the Flask backend.
4. Flask receives and validates the query.
5. The backend sends the query to the Tavily Search API.
6. Tavily returns a generated answer and relevant search results.
7. Flask sends the response back to the frontend in JSON format.
8. JavaScript displays the summary and research sources.

## 🔗 API Integration

**Tavily Search API**

Endpoint:

```text
POST https://api.tavily.com/search
```

The application uses the following parameters:

- `query`: User's research topic.
- `search_depth`: Basic search.
- `max_results`: 5.
- `include_answer`: True.

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Developing web applications using Flask.
- Integrating third-party REST APIs.
- Handling JSON requests and responses.
- Connecting frontend and backend components.
- Using JavaScript Fetch API and asynchronous functions.
- Managing API keys using environment variables.
- Using Git and GitHub for version control.

## 👩‍💻 Author

**Sravanthi**

GitHub: [Sravanthi-17](https://github.com/Sravanthi-17)

Project Repository: [AI Research Assistant](https://github.com/Sravanthi-17/AI-Research-Assistant1)

---

⭐ If you find this project useful, consider giving the repository a star!
