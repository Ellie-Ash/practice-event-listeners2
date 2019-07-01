document.querySelector("#activate-flight").addEventListener("click", () => {
    const flight = document.querySelector("#flight")
    flight.classList.toggle("enabled");
    console.log(event);
});

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    const mind = document.querySelector("#mindreading")
    mind.classList.toggle("enabled");
    console.log(event);
})

document.querySelector("#activate-xray").addEventListener("click", () => {
    const xray = document.querySelector("#xray");
    xray.classList.toggle("enabled");
    console.log(event);
})


/*not working??*/

document.querySelectorAll("#deactivate-all").addEventListener("click", () => {
    const disableall = document.querySelector(".power-disabled");
    disableall.classList.toggle("enabled");
    console.log(event);
})
