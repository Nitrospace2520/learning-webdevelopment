/* gsap.to("#box", {
  x: 650,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.5,
  boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.5)",
  zIndex: 1,
});

gsap.to(".thing", {
  backgroundColor: "black",
  scale: 1.5,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
  zIndex: 0,
  display: "none",
}); */

/* // For Infinite animation with yoyo effect means reverse the animation
gsap.from("h2", {
  // x: -200,
  // rotate: 360,
  duration: 2,
  y: 200,
  opacity: 0,
  delay: 1,
  scale: 0.5,
  color: "red",
  stagger: 0.5,
  repeat: -1,
  yoyo: true,
}); */

/*
// Timeline Animation:=
const timeline = gsap.timeline();

timeline.to("#box1", {
  x: 650,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "#00f",
  borderRadius: "50%",
  boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.5)",
  zIndex: 1,
});

timeline.to("#box2", {
  x: 650,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "#009",
  scale: 0.5,
  boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.5)",
  zIndex: 1,
});

timeline.to("#box3", {
  x: 650,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "#003",
  scale: 0.5,
  boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.5)",
  zIndex: 1,
}); */

const timeline = gsap.timeline();
timeline.from("h2", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

timeline.from("nav ul li", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

timeline.from("main", {
  duration: 2,
  y: 100,
  opacity: 0,
  scale: 0.5,
  color: "red",
  stagger: 0.5,
  delay: 1,
});
