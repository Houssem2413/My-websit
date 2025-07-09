const PASSWORD = "كعلوص"; // غيّرها لكلمة مرورك الخاصة

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadArticles();
  } else {
    errorMsg.textContent = "كلمة المرور غير صحيحة!";
  }
}

function addArticle() {
  const title = document.getElementById("article-title").value;
  const content = document.getElementById("article-content").value;

  if (title && content) {
    const article = { title, content };
    let articles = JSON.parse(localStorage.getItem("articles") || "[]");
    articles.push(article);
    localStorage.setItem("articles", JSON.stringify(articles));
    loadArticles();
  }
}

function deleteArticle(index) {
  let articles = JSON.parse(localStorage.getItem("articles") || "[]");
  articles.splice(index, 1);
  localStorage.setItem("articles", JSON.stringify(articles));
  loadArticles();
}

function loadArticles() {
  const container = document.getElementById("articles-container");
  container.innerHTML = "";
  let articles = JSON.parse(localStorage.getItem("articles") || "[]");

  articles.forEach((article, index) => {
    const div = document.createElement("div");
    div.className = "article";
    div.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.content}</p>
      <button class="delete-btn" onclick="deleteArticle(${index})">حذف</button>
    `;
    container.appendChild(div);
  });
}
