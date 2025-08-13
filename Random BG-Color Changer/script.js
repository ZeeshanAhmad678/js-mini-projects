function randomColor(){
    const hexValues = '0123456789ABCDEF';
    colorValue = '#';
    for (let i = 0; i < 6; i++) {
        colorValue += hexValues[Math.floor(Math.random() * 16)];
    }
    return colorValue;
}

let intervalId = null;

document.querySelector('#start').addEventListener('click', () =>{
    if(intervalId == null){
        intervalId = setInterval( () => {
            let currColor = randomColor();
            document.body.style.backgroundColor = currColor;
        } , 500)

        document.querySelector('#start').disabled = true;}
});


document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    document.querySelector('#start').disabled = false;
})
