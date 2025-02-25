document.addEventListener("DOMContentLoaded", function() {
    fetch("../header.html")
        .then(response => response.text())  // 讀取 HTML 內容
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});


