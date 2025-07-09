function toggleCard(card) {
    const isOpen = card.classList.contains('expanded');
    const article = card.querySelector('.full-article');
  
    if (isOpen) {
      article.style.maxHeight = "0px";
      card.classList.remove('expanded');
    } else {
      article.style.maxHeight = article.scrollHeight + "px";
      card.classList.add('expanded');
    }
  }

  
  function saveArticle() {
    const title = document.getElementById("article-title").value;
    const content = document.getElementById("article-content").value;
  
    const article = {
      id: Date.now(),
      title,
      content
    };
  
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.push(article);
    localStorage.setItem("articles", JSON.stringify(articles));
  
    alert("تم حفظ المقال!");
  }



  window.onload = function () {
    const container = document.getElementById("articles-container");
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
  
    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "article-card";
      card.innerHTML = `
        <h2>${article.title}</h2>
        <div class="article-content">${article.content}</div>
      `;
  
      card.addEventListener("click", () => {
        const content = card.querySelector(".article-content");
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
  
      container.appendChild(card);
    });
  };
  