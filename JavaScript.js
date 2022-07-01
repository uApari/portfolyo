gsap.registerPlugin(ScrollTrigger);

gsap.to(".paragraph", {
  opacity: 0,
  duration: 25,
});
gsap.to(".paragraph", {
  x: 450,
  y: 355,
  duration: 10,
});
gsap.to(".scroll", {
  opacity: 0,
  duration: 25,
});
gsap.to(".scroll", {
  x: 550,
  y: 275,
  duration: 10,
});

gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

gsap.to(".kare", {
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".kare",
    start: "center 99%",
    end: "center 30%",
    toggleActions: "restart reverse restart reverse",
    // markers: {
    //   startColor: "purple",
    //   endColor: "blue",
    //   fontSize: "3rem",
    //   indent: 50,
    // },
  },
});
gsap.to(".dragon", {
  x: -1580,

  duration: 5,
});
gsap.to(".dragon2", {
  duration: 3,
  x: 1200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".kare",
    start: "center 99%",
    end: "center 30%",
  },
});
