window.addEventListener('scroll',()=>{
  //滚动后给导航栏添加背景
    //console.log(window.scrollY);
    var navBar = document.getElementById("navBar");
    if (window.scrollY > 0) {
      navBar.classList.add("sticky");
    } else {
      navBar.classList.remove("sticky");
    }
})