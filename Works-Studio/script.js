let tl = gsap.timeline();
let elem = document.querySelectorAll(".elem");
let page2 = document.querySelector("#page2")


function loader() {
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "power1",
    });
    tl.from(
        "#yellow2",
        {
            top: "100%",
            delay: 0.5,
            duration: 0.5,
            ease: "power1",
        },
        "anim"
    );
    tl.to(
        "#loader h1",
        {
            delay: 0.6,
            duration: 0.5,
            color: "black",
        },
        "anim"
    );
    tl.to("#loader", {
        opacity: 0,
    });
    tl.to("#loader", {
        display: "none",
    });
}
loader();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    
    document.querySelector("#footer h2").addEventListener("click",() => {
        scroll.scrollTo(0)
    })
    
    elem.forEach(function(ele){
        ele.addEventListener("mouseenter",function(){
            let bgimg = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })
    
    
}
loco();

  