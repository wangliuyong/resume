!function() {
  navLi = document.querySelectorAll("div.topNavBar nav>ul>li");
  //跳转
  for (let i = 0; i < navLi.length; i++) {
    navLi[i].onclick = function(event) {
      //let liId = event.target.href;浏览器会默认添加域名http://event
      event.preventDefault(); //阻止目标默认事件和行为

      let targetId = event.target.getAttribute("href"); //"#About".......

      let element = document.querySelector(targetId);

      //let n = 10; //移动的次数
      //let T = 1000; //总时长
      //let t = T / n; //每次移动需要的时间
      let currentS = window.scrollY; //滚轮到顶部的距离
      let targetS = element.offsetTop - 55; //目标元素到顶部的距离
      let S = targetS - currentS; //移动的距离
      /*
      let s = S / n; //每次移动的距离
      let i = 0;
      let id = setInterval(() => {
        ++i;
        if (i > n) {
          clearInterval(id);
        } else {
          window.scrollTo(0, currentS + s * i);
        }
      }, t);
      */
      /*************tween缓动函数库************************************************************/
      // Setup the animation loop.
      let t = Math.abs((S / 100) * 300);
      if (t > 500) {
        t = 500;
      }

      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);

      var coords = { y: currentS }; // Start at (0, 0)
      var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
        .to({ y: targetS }, t) // Move to (300, 200) in 1 second.
        .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
        .onUpdate(function() {
          window.scrollTo(0, coords.y);
        })
        .start(); // Start the tween immediately.

      /******************************************************************************** */

      //console.log(element);
      //let top = element.offsetTop;
      //console.log(top);
      //window.scrollTo(0, top - 55);
      //debugger;
      //console.log(element.getBoundingClientRect()); //返回元素的大小以及相对于视口的位置
    };
  }
}.call();
