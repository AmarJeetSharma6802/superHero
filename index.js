gsap.to(".ten", {
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
        path: [
            { x: 100, y: -50 },
            { x: 200, y: 100 },
            { x: 0, y: 150 },
            { x: -200, y: 100 },
            { x: -100, y: -50 },
            { x: 0, y: 0 }
        ],
        curviness: 1.25,
        autoRotate: true
    }
});

// Generate multiple animated circles
for (let i = 0; i <= 100; i++) {
    let newCircle = document.createElement("div");
    newCircle.classList.add("gola-child");
    newCircle.style.backgroundColor = getRandomColor();
    newCircle.style.width = getRandomSize();
    newCircle.style.height = newCircle.style.width;
    document.querySelector(".gola-parent").appendChild(newCircle);

    // Apply GSAP animation to each circle
    gsap.to(newCircle, {
        duration: 2 + Math.random() * 3,
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
}

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate random sizess
function getRandomSize() {
    return 0.3 + Math.random() * 0.3 + "rem";
}