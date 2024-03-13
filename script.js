document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
        document.getElementById("quote").textContent = `"${data.content}" - ${data.author}`;
        fetchAuthorImage(data.author);
    })
        .catch(error => {
        console.error("Error fetching quote:", error);
    });

});
