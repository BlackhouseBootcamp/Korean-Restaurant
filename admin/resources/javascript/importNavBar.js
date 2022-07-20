const getNavigationBar = document.querySelector(".navigationBar");
fetch("/admin/resources/html/header/navBar.html")
    .then(res => res.text())
    .then(data => {
        getNavigationBar.innerHTML = data;
    });
