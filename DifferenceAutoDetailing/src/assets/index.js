
// headerFunctions = {
//   menuAnimation : function( 
//     menuBtn = document.querySelector("#menuBtn"),
//     mobileNav= document.querySelector('#mobileNav'),
//     menuOpen = false)
//     {
//       console.log(menuBtn)
//       menuBtn.addEventListener('click',() => {
//         if (!menuOpen){
//           mobileNav.classList.add('open');
//           menuOpen = true;
//           console.log(menuOpen);
//         } else {
//           mobileNav.classList.remove('open');
//           menuOpen = false;
//           console.log(menuOpen);
//         }
//       })
//       document.addEventListener('keydown', (event) => {
//         if (menuOpen && event.key == "Escape"){
//           mobileNav.classList.remove('open');
//           menuOpen = false;
//           console.log(menuOpen);
//         }
//       })
//   }
// }
 

// function runFunctions()
// {
//   console.log("runFunctions")
//   headerFunctions.menuAnimation();
// }

// runFunctions();