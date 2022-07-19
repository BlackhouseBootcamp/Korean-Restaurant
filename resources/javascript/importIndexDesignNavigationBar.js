const getNavigationBar = document.querySelector('.navigationBar')
fetch('/koreanRestaurantsSmartSite/resources/html/header/navigationBarDesign.html')
.then(res=>res.text())
.then(data=>{
    getNavigationBar.innerHTML=data
})


