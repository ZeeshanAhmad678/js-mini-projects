const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');




buttons.forEach( (button) =>{
    button.addEventListener('click' , (event) =>{
        switch(event.target.id){
            case "aqua":
                body.style.backgroundColor = event.target.id;
                break;
            case "greenyellow":
                body.style.backgroundColor = event.target.id;
                break;
            case "orangered":
                body.style.backgroundColor = event.target.id;
                break;
            case "rebeccapurple":
                body.style.backgroundColor = event.target.id;
                h2.style.color = '#fff';
                h3.style.color = '#fff';
                break;
               

        }
        
    })
})