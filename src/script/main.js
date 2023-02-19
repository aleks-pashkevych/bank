const column = document.querySelectorAll(".emphasize");
const btn = document.querySelectorAll(".business__btn");

const burgerMenuIcon = document.querySelector(".header__burger");
const closeIcon = document.querySelector(".burger__close");
const burgerIcon = document.querySelector(".burger__icon");
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
  // burgerMenuIcon.setAttribute(
  //   "style",
  //   "background-image: assets/images/burger-icon.jpg"
  // );
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
