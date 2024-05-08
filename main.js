document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    document.getElementById("menu-button").addEventListener("click", function() {
        var menuList = document.getElementById("menu-list");
        if (menuList.style.display === "none" || menuList.style.display === "") {
            menuList.style.display = "block";
        } else {
            menuList.style.display = "none";
        }
    });
});

function loadRandomDadJoke() {
    fetch('https://icanhazdadjoke.com/search?term=portuguese', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const joke = data.results[randomIndex].joke;
        document.getElementById('dad-joke').innerText = joke;
    })
    .catch(error => console.error('Erro ao carregar a piada do papai:', error));
}