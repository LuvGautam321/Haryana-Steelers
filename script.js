var cursr = document.querySelector(".cursor");
var cursr1 = document.querySelector(".cursor1");
document.addEventListener("mousemove",function(dets){
 cursr.style.left = dets.x+"px",
 cursr.style.top = dets.y+"px",
 cursr1.style.left = dets.x-120+"px",
 cursr1.style.top = dets.y-120+"px"
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration: 0.5,
    height: "75px",
   scrollTrigger:{
    trigger:"#nav",
    scroller: "body",
    
    start:"top -10%",
    end:"top -11%",
    scrub: 1
   }
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger: {
      trigger:".main",
      scroller:"body",
      start:"top -30%",
      end:"top -100%",
      scrub:2
    }
})
gsap.from(".aboutus img,.abus",{
   y:50,
   opacity:0,
   duration:2,
   scrollTrigger:{
    trigger:".aboutus",
    scoller:"body",
    start:"top 60%",
    end: "top 55%",
    scrub:2
   }
})
gsap.from(".cards,.cardt",{
  scale: 0.9,
  opacity:0,
  duration:2,
  scrollTrigger:{
   trigger:".cards,.cardt",
   scoller:"body",
   start:"top 70%",
   end: "top 65%",
   scrub:2
  }
})
gsap.from(".page3 h1",{
  y:50,
  scrollTrigger:{
   trigger:".page3 h1",
   scoller:"body",
   start:"top 70%",
   end: "top 65%",
   scrub:2
  }
})