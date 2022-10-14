 // navigaton  menu
//  const menuBtn = document.querySelector(".menu-btn")
//  const navigation = document.querySelector(".navigation")
 const showBtn = document.getElementById("show")
 const showText = document.querySelector(".show-text")
 
 
//  menuBtn.addEventListener("click",() => { 
//      menuBtn.classList.toggle("active")
//      navigation.classList.toggle("active")
//  }) 
 

 showBtn.addEventListener("click",()=> {
    showText.style.display = "block"
 })