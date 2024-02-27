let tl = gsap.timeline();

function time() {
  let loading = 0;
  setInterval(() => {
    loading += Math.floor(Math.random() * 10);
    if(loading < 100) {
      document.querySelector('#loader h2').innerText = loading + "%";
      loading++;
    } else {
      document.querySelector('#loader h2').innerText = 100 + "%";
    }
  }, 150)
}

time();

tl.to('#loader h2', {
  scale: 1.2,
  delay: 1,
  onStart: time()
})

tl.to('#loader', {
  transform: 'translateY(-100%)',
  delay: 1,
  duration: 2,
  scrub: 1
})

gsap.to('.page1 h1', {
  transform: 'translateX(-100%)',
  duration: 2,
  fontWeight: 100,
  scrollTrigger: {
    trigger: '.page1',
    start: 'top 0',
    end: 'bottom 200',
    markers: true,
    pin: true,
    scrub: 2
  }
})