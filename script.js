// // const rippleButton = document.querySelector(".ripple-button");
// const rippleButtons = document.querySelectorAll(".ripple-button");

function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
}

// rippleButtons.forEach(rippleButton => {
//     rippleButton.addEventListener('click', (e) => {

//         mousePositionToCustomProp(e, rippleButton);
//         rippleButton.classList.add("pulse");

//         rippleButton.addEventListener(
//             "animationend",
//             () => {
//                 rippleButton.classList.remove("pulse");
//             },
//             { once: true }
//         );

//     });
// });

[].map.call(document.querySelectorAll(".ripple-button"), element =>{
    element.addEventListener('click',e=>{
        e = e.touches ? e.touches[0] : e;
        mousePositionToCustomProp(e, element);
        element.classList.add("pulse");
        element.addEventListener(
        "animationend",
            () => {
                element.classList.remove("pulse");
            },
            { once: true }
        );
        // console.log(e);
    })
})

