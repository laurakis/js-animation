(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    const tlBtn = gsap.timeline({ paused: true });
    const btn = document.querySelector(".burger");
    const closeBtn = document.querySelector(".close");
    const menu = document.querySelector(".menu");

    tl.from(".hero__title", {
      opacity: 0,
      y: 100,
      duration: 0.7,
    })
      .from(".hero__btn", { opacity: 0, y: 50, duration: 0.7 }, "-=0.7")
      .from(".hero__descr", { opacity: 0, duration: 0.7 })
      .from("#img1", { opacity: 0, duration: 0.7 }, "-=0.5")
      .from("#img2", { opacity: 0, duration: 0.7 }, "-=0.5")
      .from("#img3", { opacity: 0, duration: 0.7 }, "-=0.5")
      .from(".photos__author", { opacity: 0, duration: 0.7 }, "-=0.5");

    tlBtn
      .fromTo(".menu", { opacity: 0 }, { duration: 0.5, opacity: 1 }, "-=0.7")
      .fromTo(
        ".menu__top",
        { y: -60, opacity: 0, duration: 0.5 },
        { duration: 1, opacity: 1, y: 0 }
      )
      .fromTo(
        ".nav__list",
        { opacity: 0, y: 70 },
        { delay: 0.5, duration: 0.5, opacity: 1, y: 0 },
        "-=0.9"
      )
      .fromTo(
        ".social",
        { opacity: 0, y: 30 },
        { delay: 0.5, duration: 0.5, opacity: 1, y: 0 },
        "-=0.9"
      )
      .fromTo(
        ".menu__right",
        { opacity: 0, y: 40 },
        { delay: 0.5, duration: 0.5, opacity: 1, y: 0 },
        "-=0.9"
      );

    btn.onclick = function () {
      menu.classList.add("menu--open");
      tlBtn.play();
    };

    closeBtn.onclick = function () {
      tlBtn.reverse();
      function close() {
        menu.classList.remove("menu--open");
      }
      setTimeout(close, 1000);
    };
  });
})();
