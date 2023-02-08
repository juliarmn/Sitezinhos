const mobileButton = document.querySelector(".header__mobile-button");//Pega do html e guarda aqui
const mobileHeader = document.querySelector(".header__links");
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
    mobileHeader.classList.remove("active");
  } else {
    mobileButton.classList.add("active");
    mobileHeader.classList.add("active");
  }
});

function bubbles(){
  var count = 900;
  var section = document.querySelector('section')
  var i = 0;
  while (i < count) {
    var bubble = document.createElement('i');
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var size = Math.random() * 10;
    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';
    bubble.style.width = 1 + size + 'px';
    bubble.style.height = 1 + size + 'px';
    
    bubble.style.animationDuration = 5+size+'s'
    bubble.style.animationDelay = -size+'s'

    section.appendChild(bubble);
    i++
  }
}
bubbles()





