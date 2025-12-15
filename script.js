const buttons = document.querySelectorAll(".choiceBtn");
const landing = document.getElementById("landing");
const wrapped = document.getElementById("wrapped");
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bg-music");
const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    // BUTTON CLICK → SHOW WRAPPED + PLAY MUSIC
    buttons.forEach(button => {
    button.addEventListener("click", () => {
    landing.style.display = "none";
    wrapped.style.display = "flex";

    slides.forEach(slide => slide.classList.remove("active"));
    slides[0].classList.add("active");
    wrapped.style.background = slides[0].getAttribute("data-bg");

    // Update progress bar
    updateDots();

    // Play music
    music.volume = 0.5; // optional: lower volume
    music.play();

        currentSlide = 0;
    });
});

// CLICK ANYWHERE ON WRAPPED → NEXT SLIDE
wrapped.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove("active");
        currentSlide++;
        slides[currentSlide].classList.add("active");
        wrapped.style.background = slides[currentSlide].getAttribute("data-bg");

        // Update progress bar
        updateDots();
    }
});

// FUNCTION TO UPDATE PROGRESS BAR
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}
const letterText = `My dearest ky,

hehe love letter code ito pero ANG BILIS NG PANAHON! like we just sharing reels and asaran lang noon but look at us, we reached 2 years on this relationship! We are both maturing and have own goals na cause we are college students now... But that doesn't mean na my love will change or fade, It's always you and I choose you every single day.
Tanging pahinga kita at takbuhan kapag magulo at inaaway ng mundo. I'll stil be your one and only kakampi sa lahat and you deserve more than a good life, you must have a happy and peaceful one. I'm so glad that I'm here with you...

Thank you for being my kakampi sa lahat and resting place, Happy Anniversary!

will always love you,
Jeff`;

// Typewriter function
function typeLetter() {
    const letterElement = document.getElementById("love-letter");
    letterElement.textContent = ""; // clear previous content
    let index = 0;

    const typing = setInterval(() => {
        letterElement.textContent += letterText.charAt(index);
        index++;
        if (index === letterText.length) clearInterval(typing);
    }, 60); // adjust speed (50ms per character)
}

// Trigger typewriter only when final slide appears
wrapped.addEventListener("click", () => {
    if (currentSlide === slides.length - 1) {
        typeLetter();
    }
});
