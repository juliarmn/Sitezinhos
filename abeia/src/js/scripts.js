const mobileButton = document.querySelector(".header__mobile-button");//Pega do html e guarda aqui
//query: método que pega as coisa
// function handleMobileHeader(){
//   if(mobileButton.classList.contains("active")){
//     mobileButton.classList.remove("active");
//   } else {
//     mobileButton.classList.add("active");
//   }
// }
// const handleMobileHeader = () => {
//   if(mobileButton.classList.contains("active")){
//     mobileButton.classList.remove("active");
//   } else {
//     mobileButton.classList.add("active");
//   }
// }
// mobileButton.addEventListener("click", handleMobileHeader);
mobileButton.addEventListener("click", ()=>{
  if(mobileButton.classList.contains("active")){
    mobileButton.classList.remove("active");
  } else {
    mobileButton.classList.add("active");
  }
});