!function () {

  var view = document.querySelectorAll("[sign-y]");

  var controller={
    view:null,

    init:function(){
      this.view=view;
      this.bindEvent();
    },

    bindEvent: function () {
      window.addEventListener('scroll', () => {
        //高亮导航条
        let inner = document.querySelector(".inner");
        let minIndex = 0;

        inner.classList.add("active");
        
        for (let i = 0; i < view.length; i++) {
          if (
            Math.abs(this.view[i].offsetTop - window.scrollY) <
            Math.abs(this.view[minIndex].offsetTop - window.scrollY)
          ) {
            minIndex = i;
          }
        }

        this.view[minIndex].classList.add("slideInto");

        let id = this.view[minIndex].id;
        let a = document.querySelector('[href="#' + id + '"]');

        let li = a.parentNode.parentNode.children;
        for (let i = 0; i < li.length; i++) {
          li[i].classList.remove("highlight");
        }
        a.parentNode.classList.add("highlight");
      })
    }
  }
  controller.init();

  
}.call()