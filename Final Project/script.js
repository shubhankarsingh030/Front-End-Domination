function loadingAnimation () {
        let tl = gsap.timeline()
    tl.from(".line h1",{
        y:200,
        stagger:0.2,
        duration:0.6,
        delay:0.5,
    })
    tl.from("#line-part1, .line h2",{
        opacity:0,
        onStart: function () {
            let h5timer = document.querySelector("#line-part1 h5");
            let grow = 0
            setInterval(function(){
                if(grow<100){
                    h5timer.innerHTML = grow++
                }else{
                    h5timer.innerHTML = grow
                }
            },30);
        },
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:3,
    });
    tl.from("#page1",{
        delay:0.2,
        y:1200,
        opacity:0,
        duration:0.5,
        ease:Power4
    })
    tl.to("#loader",{
        display:"none",
    })
    tl.from("#nav",{
        opacity:0
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,h3,#hero4 h1",{
        y:120,
        stagger:0.2
    })
}
loadingAnimation()

function cursorAnimation () {
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    });
    
    Shery.makeMagnet("#nav-part2 h4");
};
cursorAnimation(); 