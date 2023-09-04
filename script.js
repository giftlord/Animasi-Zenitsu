const button = document.getElementById('button');
const animation = document.getElementById('zenitsuAnimation');

let x = 0;
let y = 0;
const animationDuration = 4000;
const movementDuration = 5000;
const resetDuration = 5020;

button.addEventListener('click', begin);

function begin(){
    let startTime;
    animation.style.left = '0px';
    animation.style.top = '0px';
    animation.src = 'zenitsu.gif';
    requestAnimationFrame(step);

    function step(timesTamp){
        if(!startTime) startTime = timesTamp;
        const progress = timesTamp - startTime;

        if(progress < movementDuration){
            x = (progress / movementDuration) * 300;
            y = (progress / movementDuration) * 300;
            animation.style.left = x + 'px';
            animation.style.top = y + 'px';
            requestAnimationFrame(step);
        } else if(progress < resetDuration){
            animation.style.left ='0px'
            animation.style.top = '0px'
            requestAnimationFrame(step);
        } else {
            animation.src = 'zenitsu.jpg'
        }
    }
}