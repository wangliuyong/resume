//鼠标进入显示子菜单，离开时隐藏子菜单
//let li = document.getElementsByClassName('tiggerSubMenu');
navLi = document.querySelectorAll("div.topNavBar nav>ul>li");
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
}