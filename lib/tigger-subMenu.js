"use strict";

!function () {

    var view = document.querySelectorAll("div.topNavBar nav>ul>li");

    var controller = {
        view: null,
        init: function init() {
            this.view = view;

            console.log(view);
            this.bindEvent();
        },

        bindEvent: function bindEvent() {
            //鼠标进入显示子菜单，离开时隐藏子菜单
            //let li = document.getElementsByClassName('tiggerSubMenu');
            for (var i = 0; i < view.length; i++) {
                view[i].onmouseenter = function (event) {
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
                view[i].onmouseleave = function (event) {
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
        }
    };

    controller.init();
}.call();