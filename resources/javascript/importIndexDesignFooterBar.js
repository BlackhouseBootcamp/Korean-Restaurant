const getFooterBar = document.querySelector(".footerBar");
fetch("/resources/html/footer/footerBarDesign.html")
    .then(res => res.text())
    .then(data => {
        getFooterBar.innerHTML = data;
    });
