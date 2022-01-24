import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
    // Fade in clock with glitch effect
    function second_passed() {
        document.querySelector(".clock").classList.remove("is-off");
    }
    setTimeout(second_passed, 2000);

    // Turn glitch on/off
    document.querySelector(".switcher").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".screen").classList.toggle("glitch");
    });

    // Update current time
    var newDate = new Date();
    newDate.setDate(newDate.getDate());

    setInterval(function () {
        var hours = new Date().getHours();
        var seconds = new Date().getSeconds();
        var minutes = new Date().getMinutes();

        var realTime =
            (hours < 10 ? "0" : "") + hours +
            " : " +
            (minutes < 10 ? "0" : "") + minutes +
            " : " +
            (seconds < 10 ? "0" : "") + seconds;
        
        document.querySelector(".time").innerHTML = realTime;
        document.querySelector(".time").setAttribute("data-time", realTime);
    }, 1000);
});
