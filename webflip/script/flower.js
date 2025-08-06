onload = () =>{
        document.body.classList.remove("container");
};

function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.innerHTML = '❤️'; // Bisa diganti 💖💘
    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = (2 + Math.random() * 3) + 's';
    love.style.fontSize = (20 + Math.random() * 20) + 'px';
    document.querySelector('.love-container').appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 5000);
}

// Bikin love muncul setiap 300ms
setInterval(createLove, 300);
