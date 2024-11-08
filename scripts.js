// Load news and image data from JSON
document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            loadNews(data.news);
            loadImageOfTheDay(data.imageOfTheDay);
        });
});

function loadNews(news) {
    const newsGrid = document.getElementById("news-grid");
    news.forEach(item => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");
        newsCard.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        newsGrid.appendChild(newsCard);
    });
}

function loadImageOfTheDay(imageData) {
    document.getElementById("image-of-the-day-img").src = imageData.image;
    document.getElementById("image-of-the-day-title").textContent = imageData.title;
    document.getElementById("image-of-the-day-description").textContent = imageData.description;
}

function startListening() {
    alert("Listening feature coming soon!");
}
