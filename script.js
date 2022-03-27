function textRGB() {
    let text = document.getElementById('rgb-color');

    text.innerText = '(' + Math.floor(Math.random() * (255) + 1) + ', ' + Math.floor(Math.random() * (255) + 1) + ', ' + Math.floor(Math.random() * (255) + 1) + ')';
}
textRGB();

function coloringBalls() {
    let balls = document.querySelectorAll('.ball');
    let correctBall = Math.floor(Math.random() * 6);
    let text = document.getElementById('rgb-color');

    for (index = 0; index < balls.length; index++) {
        balls[index].style.backgroundColor = 'rgb' + '(' + Math.floor(Math.random() * (255) + 1) + ', ' + Math.floor(Math.random() * (255) + 1) + ', ' + Math.floor(Math.random() * (255) + 1) + ')';
    }
    balls[correctBall].style.backgroundColor = 'rgb' + text.innerText;
}
coloringBalls();

function clickCircle() {
    let containerBalls = document.getElementById('container-ball');
    let mensagem = document.getElementById('mensagem');
    let feedBack = document.createElement('p');

    feedBack.id = 'answer'
    feedBack.innerText = 'Escolha uma cor';
    mensagem.appendChild(feedBack);

    containerBalls.addEventListener('click', function (event) {
        let text = document.getElementById('rgb-color');
        let feedBack = document.getElementById('answer');
        let correctColor = 'rgb' + text.innerText;
        let colorSelect = event.target.style.backgroundColor;

        if (colorSelect == correctColor) {
            feedBack.innerText = 'Acertou!';
            atualizaScore(3);
        } else {
            feedBack.innerText = 'Errou! Tente novamente!';
            atualizaScore(0);
        }
    })
}
clickCircle();

function reset() {
    let button = document.getElementById('reset-game');

    button.addEventListener('click', function () {

        let feedBack = document.getElementById('answer')

        if (feedBack !== 'Escolha uma cor') {
            feedBack.innerText = 'Escolha uma cor';
        }
        textRGB();
        coloringBalls();
    })
}
reset();

let point = 0

function atualizaScore(incremento = 0) {

    let scoreText = document.getElementById('score')

    point += incremento;
    scoreText.innerText = `Placar: ${point}`;
}
