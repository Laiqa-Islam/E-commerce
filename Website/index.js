let cursor=document.querySelector("#cursor");
let cursor_blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    cursor.style.left=dets.x -10 + "px";
    cursor.style.top=dets.y -10 + "px";
    cursor_blur.style.left=dets.x - 100 + "px";
    cursor_blur.style.top=dets.y -100 + "px";
})

let allAs=document.querySelectorAll(".nav-as");
console.log(allAs)
allAs.forEach(item=>{
    item.addEventListener("mouseenter",function(){
        cursor.style.scale=2.5;
        cursor.style.border="1px solid ";
        cursor.style.backgroundColor="transparent";
        cursor.style.filter="none"
    })
    item.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border="0px solid #fff";
        cursor.style.backgroundColor="white"
    })
})



gsap.to("nav", {
    duration:0.5,
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -35%",
        end: "top -80%",
        scrub:2
    }
})


gsap.from(".card",{
    opacity:0,
    scale:0.8,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        stagger:0.1,
        // markers:true,
        start:"top 60%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".text-heading",{
    y:"40px",
    duration:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:".text p",
        scroller: "body",
        stagger:0.2,
        // markers:true,
        start: "top 60%",
        end: "top 80%",
        scrub:2
    }
})

gsap.from(".text p",{
    y:"-40px",
    duration:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:".text p",
        scroller: "body",
        stagger:0.2,
        // markers:true,
        start: "top 60%",
        end: "top 80%",
        scrub:2
    }
})


