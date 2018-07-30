//滚动时给导航栏添加渐变的背景
window.onscroll = function () {
    //console.log(window.scrollY);
    var navBar = document.getElementById('navBar');
    if (window.scrollY > 0) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove("sticky");
    }
}
//给子菜单添加鼠标进入事件
//let li = document.getElementsByClassName('tiggerSubMenu');
let li = document.querySelectorAll("nav>ul>li");
console.log(li);
for (let i = 0; i < li.length; i++) {
    li[i].onmouseenter = function (event) {
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
    }
    li[i].onmouseleave = function (event) {
        /*
        let brother = this.getElementsByTagName("ul")[0];

        let brother = event.currentTarget.nextSibling;
        if (brother.nodeType === 3) {
            brother = brother.nextSibling;
        }
        brother.classList.remove("active");
        */
        this.classList.remove("active");
    }
}





























//项目标题添加下划线
PortfolioAll.onclick = function () {
    PortfolioBar.className = "bar state-1";
}
PortfolioNative.onclick = function () {
    PortfolioBar.className = "bar state-2";
    ``
}
PortfolioFramework.onclick = function () {
    PortfolioBar.className = "bar state-3";
}