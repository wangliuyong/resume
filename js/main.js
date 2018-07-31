//滚动时给导航栏添加渐变的背景
window.onscroll = function() {
  //console.log(window.scrollY);
  var navBar = document.getElementById("navBar");
  if (window.scrollY > 0) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};
//鼠标进入显示子菜单，离开时隐藏子菜单
//let li = document.getElementsByClassName('tiggerSubMenu');
let navLi = document.querySelectorAll("div.topNavBar nav>ul>li");
for (let i = 0; i < navLi.length; i++) {
  navLi[i].onmouseenter = function(event) {
    /*
        console.log(this);
        let brother = this.getElementsByTagName("ul")[0];
        let brother = event.currentTarget.nextSibling;
        if (brother.nodeType === 3) {
            brother = brother.nextSibling;
        }
        brother.classList.add("active");
        */
    this.classList.add("active");
  };
  navLi[i].onmouseleave = function(event) {
    /*
        let brother = this.getElementsByTagName("ul")[0];

        let brother = event.currentTarget.nextSibling;
        if (brother.nodeType === 3) {
            brother = brother.nextSibling;
        }
        brother.classList.remove("active");
        */
    this.classList.remove("active");
  };
  //跳转
  navLi[i].onclick = function(event) {
    //let liId = event.target.href;浏览器会默认添加域名http://event
    event.preventDefault(); //阻止目标默认事件和行为

    let targetId = event.target.getAttribute("href"); //"#About".......
    console.log(targetId);
    let element = document.querySelector(targetId);
    let top = element.offsetTop;
    console.log(top);
    window.scrollTo(0, top - 55);
    //debugger;
    //console.log(element.getBoundingClientRect()); //返回元素的大小以及相对于视口的位置
  };
}

//项目标题添加下划线
PortfolioAll.onclick = function() {
  PortfolioBar.className = "bar state-1";
};
PortfolioNative.onclick = function() {
  PortfolioBar.className = "bar state-2";
  ``;
};
PortfolioFramework.onclick = function() {
  PortfolioBar.className = "bar state-3";
};
