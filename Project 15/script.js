let form = document.querySelector('form');
let input = document.querySelector('input');
let main = document.querySelector('main');
let btn = document.getElementById('btn');
let label = document.querySelector('.labels')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    
    if(email.length > 21 || !email.includes('@')){
        alert('Your Email Should have less than 21 characters and should be valid')
        input.style.backgroundColor = '#FFE8E8';
        input.style.color = 'red';
        input.style.border = '1px solid red';
        label.innerHTML = `
            <label>Email address</label>
            <p class="labelP">Valid email required</p>
        `;
    }else{
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
        input.style.border = '1px solid hsl(0, 0%,58%)';

        label.innerHTML = `
            <label>Email address</label>
        `
            main.innerHTML = `
            <div class="main-info">
                <img src="./assets/images/icon-success.svg" class="img3">
                <h1 class="h1-2">Thanks for<br> subscribing!</h1>
                <p class="text">A confirmation email has been sent to<br> <span>${email}</span>
                Please open it and click<br> the button inside to confirm your subscription.</p>
                <button class="btn2">Dismiss message</button>
            </div>
        `
        let btn2 = document.querySelector('.btn2');
        btn2.addEventListener('click',() => {
            main.innerHTML = `
                <div class="main-div">
            <div class="div1">
                <div class="info-div">
                    <h1 class="h1-1">Stay updated!</h1>
                    <p class="paragraph1">Join 60,000+ product managers receiving monthly<br>updates on:</p>
                </div>
                <div class="checked">
                    <div class="success">
                        <img src="assets/images/icon-list.svg" class="img1">
                        <p class="paragraph2">Product discovery and building what matters</p>
                    </div>
                    <div class="success">
                        <img src="assets/images/icon-list.svg" class="img1">
                        <p class="paragraph2">Measuring to ensure updates are a success</p>
                    </div>
                    <div class="success">
                        <img src="assets/images/icon-list.svg" class="img1">
                        <p class="paragraph2">And much more!</p>
                    </div>
                </div>
                <form>
                    <div class="div2">
                        <div class="labels">
                            <label>Email address</label>
                        </div>
                        <input type="email" name="email" placeholder="email@company.com" required>
                    </div>
                    <button id="btn">Subscribe to monthly newsletter</button>
                </form>
            </div>
            <div class="div3">
                <div class="image-div">
                    <img src="assets/images/illustration-sign-up-desktop.svg" class="img2">
                </div>
            </div>
        </div>
        `;
        });
    }
});