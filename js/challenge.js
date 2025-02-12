

document.addEventListener('DOMContentLoaded', function(){
    let count = 0;
    
    const counterElement = document.getElementById('counter')
    const Decrementer = document.getElementById('minus')
    const Incrementor = document.getElementById('plus')
    const likeButton = document.getElementById('heart')
    const likeCounterElement = document.querySelector('.likes')
    let likeCount = 0
    const pauseButton = document.getElementById('pause')
    let intervalId
    
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    intervalId = setInterval(() => {
        count++;
        updateCounter();
    }, 1000)
    
    Decrementer.addEventListener("click", () => {
        count--;
        updateCounter();
    });
    
    Incrementor.addEventListener("click", () => {
        count++;
        updateCounter();
    });
    
    function updateLikeCount(){
        likeCounterElement.textContent = `Likes: ${likeCount}`
    }
    
    likeButton.addEventListener('click', function() {
        likeCount++;
        updateLikeCount();
    });
    
    pauseButton.addEventListener('click', () => {
        clearInterval(intervalId);
    });
    })
    