# 📰 News Aggregator Website using HTML, Bootstrap and JavaScript
🎥 [Watch Demo Video](https://youtu.be/AlJ8WE9JrwI)

# Sample Snapshot
![Image](https://github.com/user-attachments/assets/fc8767ed-2629-4588-a7c2-685463560caf)


A simple and responsive News Aggregator Website built using HTML, Bootstrap, and Vanilla JavaScript. It fetches the latest headlines from a news API and allows users to search specific types of news (like technology, sports, business, etc.). Each article can be opened on a dedicated Read More page.

🚀 Features
📰 Fetches top news headlines from a public API

🔎 Search functionality for specific categories or keywords

💻 Responsive design with Bootstrap 5

🧱 News displayed as Bootstrap cards

📄 Clicking on a card redirects to a Read More page

💾 Uses localStorage to transfer data between pages

🛠️ Tech Stack
Frontend: HTML5, CSS3, Bootstrap 5

Logic: JavaScript (ES6)

API: NewsAPI.org

Storage: localStorage

📁 Folder Structure
bash
Copy
Edit
news-aggregator/
│
├── index.html              # Homepage with news & search
├── readMore.html           # Displays full article
├── css/
│   └── style.css           # Optional custom styles
├── js/
│   ├── main.js             # API calls, search, news display
│   └── readMore.js         # Reads & displays full article
🔧 Setup Instructions
Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/news-aggregator.git
cd news-aggregator
Get an API Key

Visit https://newsapi.org

Create an account and get your free API key

Insert Your API Key

Open js/main.js

Replace 'YOUR_API_KEY_HERE' with your API key

Run the Project

Open index.html in your browser

💡 How It Works
Default headlines are loaded on page load

Users can type keywords (e.g., "sports", "bitcoin", "India") in the search bar

On clicking a news card, the article data is saved in localStorage

readMore.html reads this data and displays the full content

📸 Screenshots
Add screenshots showing:

Homepage with search bar

News cards display

Read More page

🧑‍💻 Author
Sayak Saha

💼 MCA Student, Future Institute of Engineering and Management

🌐 GitHub (if applicable)

📃 License
This project is licensed under the MIT License.
