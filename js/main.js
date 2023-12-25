gsap.registerPlugin(ScrollTrigger);


// ベースの作成
function createScrollAnimation(selector, y, duration) {
  gsap.to(selector, {
    y: y,
    duration: duration,
    scrollTrigger: {
      trigger: ".content",
      scrub: 4,
      start: "top 100%",
      end: "top 30%",
    }
  });
}

// ここの値を入れる
createScrollAnimation("#sixth", 110, 1);
createScrollAnimation("#fifth", 120, 2);
createScrollAnimation("#forth", 200, 3);
createScrollAnimation("#third", 200, 5);
createScrollAnimation("#second", 120, 5);

// 枠の部分
gsap.to(".blur", {
  y: -100,
  duration: 3,
  scrollTrigger: {
    trigger: ".content",
    scrub: 4,
    start: "top 100%",
    end: "top 30%",
  }
});

// Heading
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
  }
});
