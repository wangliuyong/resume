!function(){
  var view = document.getElementById("navBar");

  var controller={
    view:null,

    init:function(){
      this.view=view;
      this.bindEvent();
    },

    bindEvent: function () {
      window.addEventListener('scroll', () => {
        //滚动后给导航栏添加背景
        //console.log(window.scrollY);
        if (window.scrollY > 0) {
          view.classList.add("sticky");
        } else {
          view.classList.remove("sticky");
        }
      })
    }
  }
  controller.init();

  
}.call()