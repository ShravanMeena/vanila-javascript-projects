const modalCloseBtn = document.querySelector(".modalClose")
const modalOpanBtn = document.querySelector("#modalOpen")
const toggleModal = document.querySelector(".toggleModal")

window.addEventListener("DOMContentLoaded", function(){
    toggleModal.style.display="none";
})

modalCloseBtn.addEventListener("click",function(){
    toggleModal.style.display="none";
    modalOpanBtn.style.display="block";
})

modalOpanBtn.addEventListener("click",function(){
    toggleModal.style.display="block";
    modalOpanBtn.style.display="none";

})