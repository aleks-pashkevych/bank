"use strict";
const column = document.querySelectorAll(".emphasize");
const btn = document.querySelectorAll(".business__btn");
// TODO: body onClick close footer menu!
const burgerMenuIcon = document.querySelector(".header__burger");
const closeIcon = document.querySelector(".burger__close");
const burgerIcon = document.querySelector(".burger__icon");

const footerMenu = document.querySelectorAll(".footer__column-headline");

column.forEach((col) => {
  col.classList.remove("on-move");
  col.onmouseover = () => {
    column.forEach((col) => {
      col.classList.remove("on-move");
    });
    col.classList.add("on-move");
  };
  col.onmouseleave = () => {
    column.forEach((col) => {
      col.classList.remove("on-move");
    });
  };
});

btn.forEach((btn) => {
  btn.onclick = () => {
    const d = new Date();
    alert(`The Button has been clicked at: ${d.toString()}`);
  };
});

if (burgerMenuIcon) {
  const burgerMenu = document.querySelector(".header__list-wrapper");
  let menuOpen = false;
  const showCloseBurgerMenuIcon = () => {
    burgerIcon.classList.add("hide");
    closeIcon.classList.remove("hide");
    closeIcon.classList.add("active");
  };
  const hideCloseBurgerMenuIcon = () => {
    closeIcon.classList.remove("active");
    closeIcon.classList.add("hide");
    burgerIcon.classList.remove("hide");
    // burgerIcon.classList.add("active");
  };
  burgerMenuIcon.onclick = () => {
    if (menuOpen == false) {
      burgerMenu.classList.add("active");
      showCloseBurgerMenuIcon();
      document.body.classList.add("lock");
      menuOpen = true;
    } else if (menuOpen == true) {
      burgerMenu.classList.remove("active");
      document.body.classList.remove("lock");
      hideCloseBurgerMenuIcon();
      menuOpen = false;
    }
  };
  burgerMenu.onclick = () => {
    burgerMenu.classList.remove("active");
    document.body.classList.remove("lock");
    hideCloseBurgerMenuIcon();
    menuOpen = false;
  };
}

if (footerMenu) {
  const menuItems = document.querySelectorAll(".footer__column-menu");
  let menuOpen = false;
  for (let i = 0; i < footerMenu.length; i++) {
    footerMenu[i].onclick = () => {
      if (menuOpen == false) {
        menuItems[i].classList.remove("hide");
        menuItems[i].classList.add("active");
        menuOpen = true;
      } else {
        menuItems[i].classList.add("hide");
        menuItems[i].classList.remove("active");
        menuOpen = false;
      }
    };
  }
}
