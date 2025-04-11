let palm = document.querySelector('.palm');
let fist = document.querySelector('.fist');
let scissors = document.querySelector('.scissors');
let div = document.querySelector('.two');
let h1 = document.querySelector('#h1');
let p = document.querySelector('.Clicker');


const computerChoice = () => {
    const array = ['Paper','Scissors','Rock'];
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


let btn = document.getElementById('revealBtn');

btn.addEventListener('click', () => {
    if(div.querySelector('.computer-choice')){
        let p1 = 'The Computer Choice Is Already Displayed On The Screen';
        p.textContent = p1;
        return;
    }
    let computer = computerChoice();
    console.log(`Computer Choice is ${computer}`)
    if(computer === 'Paper' && div.querySelector('.palm')){
        h1.textContent = 'It Is A Tie!!'
        let image = palm.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Rock' && div.querySelector('.fist')){
        h1.textContent = 'It Is A Tie!!';
        let image = fist.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Scissors' && div.querySelector('.scissors')){
        h1.textContent = 'It Is A Tie!!';
        let image = scissors.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Scissors' && div.querySelector('.palm')){
        h1.textContent = 'Computer Won!!'
        let image = scissors.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Rock' && div.querySelector('.palm')){
        h1.textContent = 'You Won!!'
        let image = fist.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Paper' && div.querySelector('.fist')){
        h1.textContent = 'Computer Won!!';
        let image = palm.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Scissors' && div.querySelector('.fist')){
        h1.textContent = 'You Won!!';
        let image = scissors.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Rock' && div.querySelector('.scissors')){
        h1.textContent = 'Computer Won!!';
        let image = fist.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }else if(computer === 'Paper' && div.querySelector('.scissors')){
        h1.textContent = 'You won!!';
        let image = palm.cloneNode(true);
        image.classList.add('computer-choice');
        div.appendChild(image);
    }
});


palm.addEventListener('click', () => {
    div.appendChild(palm.cloneNode(true));
});


fist.addEventListener('click',() => {
    div.appendChild(fist.cloneNode(true));
});

scissors.addEventListener('click',() => {
    div.appendChild(scissors.cloneNode(true));
});