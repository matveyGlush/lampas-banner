document.addEventListener('DOMContentLoaded', () => {
    let toDayFromNow = (new Date("Sep 20, 2024 23:59:59").getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;

    new FlipDown(toDayFromNow)
    .start()
    .ifEnded(() => {
        document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
    });
});