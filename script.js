let currentPage = 1;
let currentQuery = "everything";
let totalPages = 1;
let pageSize=22;
const apiKey = "YOUR_API_KEY_HERE";

const fetchNews = async (page = 1, query = "everything") => {
  const fromDate = new Date().toISOString().split("T")[0];
  //let fromDate = "2025-04-05";

  const url = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&pageSize=${pageSize}&language=en&page=${page}&sortBy=popularity&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.status === "ok") {
      displayNews(data.articles);
      //document.getElementById("resultCount").innerText = data.totalResults;
      totalPages = Math.ceil(data.totalResults / pageSize);
    } else {
      console.error("API Error:", data.message);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const displayNews = (articles) => {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  if (articles.length === 0) {
    container.innerHTML = `<p class="text-center">No results found.</p>`;
    return;
  }

  articles.forEach((article) => {
    const readMore = new URLSearchParams(article).toString(); // encodes all params
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
    <div class="card h-100">
      <img height=200 src="${article.urlToImage || "https://via.placeholder.com/150"}" class="card-img-top rounded" alt="image">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description || ""}</p>
        <a class="btn btn-primary mt-auto" href="readMore.html?${readMore}">Read More</a>
      </div>
    </div>
  `;
//   <button class="btn btn-primary mt-auto" onclick='openDetailPage(${JSON.stringify(article).replace(/'/g, "\\'")})'>Read More</button>
    container.appendChild(col);
  });
};

function openDetailPage(article) {
  localStorage.setItem("newsDetail", JSON.stringify(article));
  window.location.href = "readMore.html";
}

// Handle search form
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("searchInput").value.trim();
  if (q !== "") {
    currentQuery = q;
    currentPage = 1;
    fetchNews(currentPage, currentQuery);
  }
});

// Pagination
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchNews(currentPage, currentQuery);
  } else {
    alert("You are already on the first page.");
  }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      fetchNews(currentPage, currentQuery);
    } else {
      alert("You are already on the last page.");
    }
});

// Initial load
fetchNews(currentPage, currentQuery);
