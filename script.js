const text = document.getElementById("text");

gsap.to(text, {
  xPercent: -100,
  duration: 6,
  ease: "linear",
  repeat: -1,
});

const text2 = document.getElementById("text2");

gsap.to(text2, {
  xPercent: -100,
  duration: 6,
  ease: "linear",
  repeat: -1,
});
