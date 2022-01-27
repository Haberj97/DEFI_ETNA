
const drop_btn = document.querySelector(".drop-btn");
const menu_wrapper = document.querySelector(".wrapper");

drop_btn.onclick = (() =>{
    menu_wrapper.classList.toggle("show");
});