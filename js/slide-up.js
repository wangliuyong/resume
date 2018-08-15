window.addEventListener('scroll',()=>{
    //高亮导航条
  let slideTag = document.querySelectorAll("[sign-y]");
  let inner = document.querySelector(".inner");
  inner.classList.add("active");
  let minIndex = 0;
  for (let i = 0; i < slideTag.length; i++) {
    if (
      Math.abs(slideTag[i].offsetTop - window.scrollY) <
      Math.abs(slideTag[minIndex].offsetTop - window.scrollY)
    ) {
      minIndex = i;
    }
  }

  slideTag[minIndex].classList.add("slideInto");

  let id = slideTag[minIndex].id;
  let a = document.querySelector('[href="#' + id + '"]');

  let li = a.parentNode.parentNode.children;
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("highlight");
  }
  a.parentNode.classList.add("highlight");
})