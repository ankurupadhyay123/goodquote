document.addEventListener("DOMContentLoaded", function () {
    displayRandomQuote();

    document.getElementById("refresh-button").addEventListener("click", function() {
        displayRandomQuote();
    });

    function displayRandomQuote() {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
            document.getElementById("quote").textContent = `"${data.content}" - ${data.author}`;
            fetchAuthorImage(data.author);
        })
            .catch(error => {
            console.error("Error fetching quote:", error);
        });
    }

    function fetchAuthorImage(authorName) {
        const query = encodeURIComponent(authorName);
        const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=YOUR_UNSPLASH_ACCESS_KEY`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
            const imageUrl = data.results[0].urls.regular;
            document.getElementById("author-image").src = imageUrl;
        })
            .catch(error => {
            console.error("Error fetching author image:", error);
        });
    }
});
