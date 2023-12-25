gsap.registerPlugin(ScrollTrigger);

function createScrollAnimation(selector, y, duration) {
  gsap.to(selector, {
    y: y,
    duration: duration,
    scrollTrigger: {
      trigger: ".content",
      scrub: 4,
      start: "top 100%",
      end: "top 30%",
      markers: true
    }
  });
}

createScrollAnimation("#sixth", 110, 1);
createScrollAnimation("#fifth", 120, 2);
createScrollAnimation("#forth", 200, 3);
createScrollAnimation("#third", 200, 5);
createScrollAnimation("#second", 120, 5);

// 特殊なアニメーションが必要な要素のために、個別の呼び出し
gsap.to(".blur", {
  y: -100,
  duration: 3,
  scrollTrigger: {
    trigger: ".content",
    scrub: 4,
    start: "top 100%",
    end: "top 30%",
    markers: true
  }
});

gsap.to(".title", {
  y: -50,
  scale: 1.5,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".content",
    scrub: 4,
    start: "top 100%",
    end: "top 50%",
    markers: true
  }
});
