function homeanime() {
  gsap.set(".flines", { scale: 5 });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 6,
    },
  });
  tl.to(
    ".video",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".flines",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".left",
      {
        xPercent: -10,
        stagger: 0.05,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".right",
      {
        xPercent: 10,
        stagger: 0.05,
        ease: Power4,
      },
      "b"
    );
}
function realPageAnime() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrup: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function teamAnime() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
function para1Anime() {
  let clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === "") clutter += `<span>&nbsp;<span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 80%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}
function para2Anime() {
  let clutter = "";
  document
    .querySelector(".textpara2")
    .textContent.split("")
    .forEach(function (e) {
      if (e === "") clutter += `<span>&nbsp;<span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara2").innerHTML = clutter;

  gsap.set(".textpara2 span", { opacity: 0.1 });
  gsap.to(".textpara2 span", {
    scrollTrigger: {
      trigger: ".para2",
      start: "top 80%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}
function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
function capsulesAnime() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrup: 1,
    },
    y: 0,
    ease: Power4,
  });
}
function bodyColorChange(){
    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
          trigger: e,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: function () {
            document.body.setAttribute("theme", e.dataset.color);
          },
          onEnterBack: function () {
            document.body.setAttribute("theme", e.dataset.color);
          },
        });
      });
}

loco();
homeanime();
realPageAnime();
teamAnime();
para1Anime();
para2Anime();
capsulesAnime();
bodyColorChange();
