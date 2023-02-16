const column = document.querySelectorAll(".emphasize");
const btn = document.querySelectorAll(".business__btn");

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
