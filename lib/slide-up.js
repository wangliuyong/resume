"use strict";

!function () {

  var view = document.querySelectorAll("[sign-y]");

  var controller = {
    view: null,

    init: function init() {
      this.view = view;
      this.bindEvent();
    },

    bindEvent: function bindEvent() {
      var _this = this;

      window.addEventListener('scroll', function () {
        //高亮导航条
        var inner = document.querySelector(".inner");
        var minIndex = 0;

        inner.classList.add("active");

        for (var i = 0; i < view.length; i++) {
          if (Math.abs(_this.view[i].offsetTop - window.scrollY) < Math.abs(_this.view[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
          }
        }

        _this.view[minIndex].classList.add("slideInto");

        var id = _this.view[minIndex].id;
        var a = document.querySelector('[href="#' + id + '"]');

        var li = a.parentNode.parentNode.children;
        for (var _i = 0; _i < li.length; _i++) {
          li[_i].classList.remove("highlight");
        }
        a.parentNode.classList.add("highlight");
      });
    }
  };
  controller.init();
}.call();