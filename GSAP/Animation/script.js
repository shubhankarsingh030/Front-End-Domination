let tl = gsap.timeline()

tl.from("#nav h4",{
    y:-50,
    opacity:0,
    delay:0.1,
    duration:0.7,
    stagger:0.2
})
tl.from("#nav a",{
    y:-50,
    opacity:0,
    delay:0.1,
    duration:0.7,
    stagger:0.2
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    delay:0.1,
    duration:0.7,
    stagger:0.2
})
tl.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    delay:0.1,
    duration:0.7,
    stagger:0.5
})
tl.from("#footer",{
    y:500,
    rotate:45,
    opacity:0,
    delay:0.1,
    duration:0.7,
    stagger:0.5
})