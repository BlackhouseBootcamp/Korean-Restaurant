const getFooterBar = document.querySelector(".footerBar");
fetch("/admin/resources/html/footer/footer.html")
    .then(res => res.text())
    .then(data => {
        getFooterBar.innerHTML = data;
    });
