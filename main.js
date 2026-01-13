gsap.from(".navbar", {
  y: -60,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1.2
});

gsap.from(".benefit", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".benefits",
    start: "top 80%"
  }
});

gsap.from(".product-card", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".products",
    start: "top 80%"
  }
});
