$('document').ready(function(){
    // Animations
    let lotties = [
    (line1Anim = lottie.loadAnimation({
        container: document.querySelector(".bg-img"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: window.location.origin+"/assets/lottie/bg-1.json"
    }))]
    // Adds frame parameter to enable scrubbing with scrollTrigger
    lotties.forEach(l => l.frame = 0);
    let lottieLoaded = 0;
    // Checks if each lottie loaded
    lotties.forEach(function(e) {
        e.addEventListener("DOMLoaded", function() {
            lottieLoaded++
            isComplete()
        });
    });
    // Runs only after all lotties loaded
    function isComplete() {
        if (lottieLoaded >= lotties.length) {
            tlReady()
        }
    }
    function tlReady() {
        let line1Tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".bg-img",
                start: "top center",
                end: "center center",
                markers: false,
                pin: false,
                invalidateOnRefresh: true,
                scrub: true
            }
        });
        line1Tl
        .to(line1Anim, {
            frame: line1Anim.totalFrames - 1,
            ease: "none",
            duration: 2,
            onUpdate: () => line1Anim.goToAndStop(line1Anim.frame, true),
        });
    }
});