"use strict";

!function () {
  var view = document.getElementById("navBar");

  var controller = {
    view: null,

    init: function init() {
      this.view = view;
      this.bindEvent();
    },

    bindEvent: function bindEvent() {
      window.addEventListener('scroll', function () {
        //滚动后给导航栏添加背景
        //console.log(window.scrollY);
        if (window.scrollY > 0) {
          view.classList.add("sticky");
        } else {
          view.classList.remove("sticky");
        }
      });
    }
  };
  controller.init();
}.call();