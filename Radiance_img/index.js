var prev = document.getElementById("prev") ;
var next = document.getElementById("next") ;
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
    "Radiance_img/bg1.png",
    "Radiance_img/bg2.png",
    "Radiance_img/bg3.png",
    "Radiance_img/bg4.png",
    "Radiance_img/bg5.png",
);
var lan = backgroundImg.length;
 var i = 0;
 next.onclick = function(){
    i++;
     if(i>=lan){
         i=0;
         hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
         thumbnail[i].classList.add("active");
         thumbnail[i+4].classList.remove("active");
         

     }
      else{
         hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
         thumbnail[i].classList.add("active");
         thumbnail[i-1].classList.remove("active");
        
     }
     
    
    }

    prev.onclick = function(){
     i--;
     if(i<0){
         i=lan-1;
        hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
         thumbnail[i].classList.add("active");
         thumbnail[i-i].classList.remove("active"); 
     }
     else{
         hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
         thumbnail[i].classList.add("active");
         thumbnail[i+1].classList.remove("active");
         
     }
    
 }
//    var prev = document.getElementById("prev") ;
    //    var next = document.getElementById("next") ;
    //    var thumbnail = document.getElementsByClassName("thumbnail");
    //    var hero = document.getElementById("hero");

    //    var backgroundImg = new Array(
    //        "Radiance_img/bg1.png",
    //        "Radiance_img/bg2.png",
    //        "Radiance_img/bg3.png",
    //        "Radiance_img/bg4.png",
    //        "Radiance_img/bg5.png",
    //    );
    //     let i = 0;
    //     next.onclick = function(){
    //         if(i < 4){
    //             hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
    //             thumbnail[i+1].classList.add("active");
    //             thumbnail[i].classList.remove("active");
    //             i++; 
    //         }
           
    //     }
    //     prev.onclick = function(){
    //         if(i > 0){
    //             hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
    //             thumbnail[i-1].classList.add("active");
    //             thumbnail[i].classList.remove("active");
    //             i--; 
    //         }
           
    //     }

//     var prev = document.getElementById("prev") ;
// var next = document.getElementById("next") ;
// var thumbnail = document.getElementsByClassName("thumbnail");
// var hero = document.getElementById("hero");

// var backgroundImg = new Array(
//     "Radiance_img/bg1.png",
//     "Radiance_img/bg2.png",
//     "Radiance_img/bg3.png",
//     "Radiance_img/bg4.png",
//     "Radiance_img/bg5.png",
// );
// var lan = backgroundImg.length;
//  var i = 0;
//  next.onclick = function(){
//     i++;
//      if(i>=lan){
//          i=0;
//          hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
//          thumbnail[i].classList.add("active");
//          thumbnail[i+4].classList.remove("active");
         

//      }
//       else{
//          hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
//          thumbnail[i].classList.add("active");
//          thumbnail[i-1].classList.remove("active");
        
//      }
     
    
//     }

//     prev.onclick = function(){
//      i--;
//      if(i<0){
//          i=lan-1;
//         hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
//          thumbnail[i].classList.add("active");
//          thumbnail[i-i].classList.remove("active"); 
//      }
//      else{
//          hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
//          thumbnail[i].classList.add("active");
//          thumbnail[i+1].classList.remove("active");
         
//      }
    
//  }
