// let btn = document.getElementById('btn');
// let h1 = document.getElementById('h1');
// let box = document.getElementById('box');
// let boxs = document.getElementById('boxs');
// let imge = document.getElementById('imge');
// window.onscroll = function (){
//     let value = scrollY; 
    
//     h1.style.fontSize = value + 'px';
//     box.style.right = value + 'px';
//     if (scrollY <= value){
//         box.style.right = 7 / 1 + 'px';
//     }

//     imge.style.right = value + 'px';
//     if (scrollY === 4500){
//         imge.style.right = 4500 * 1 + 'px';
//     }
//     else{
//         imge.style.right = value  + 'px';
//     }
// }

// let bgimge = document.querySelector(".img-content");
// gsap.registerplugin(ScrollTrigger);

// gsap.fromeTo(bgimge,{
//     clipPath: "circle (5% at 77% 40%)",
// },{
//     clipPath: "circle (75% at 50% 50%)",
//     case: "none",

//     ScrollTrigger: {
//         Trigger: bgimge,
//         scrup: 1,
//         Start: "top center",
//         end: "top center-=200"
//     }
// })


var mybotton = document.getElementById('goup');

window.onscroll = function () {

    // console.log(scrollY)
    'user strict';

    if (window.pageYOffset >= 1700){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

};

mybotton.onclick = function () {
    'user strict';

    window.scrollTo({
        top: 0,       
        behavior: "smooth",
    });
}

// Start For disaper in Section Screen
// let disaper = document.getElementById('disaper');

// window.onscroll = function() {
//     let value = scrollY;

//     if (scrollY >= 3200){
//         // disaper.style.opacity = '1';
//         disaper.style.transform ='translateY: 0px';
//     }
//     else{
//         disaper.style.opacity = '1';
//         disaper.style.transform = 'translateY: 0' + 'px';
//     }
// }




document.querySelectorAll('.vedio-container video').forEach(vid => {
    vid.onclick = () => {
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
})

document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';
}
