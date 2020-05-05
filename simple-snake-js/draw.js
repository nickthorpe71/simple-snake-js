const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            console.log("eating");
            fruit.pickLocation();
        }

    }, 50) //This means the time interval is every 50 miliseconds
}());

window.addEventListener('keydown', ((evt) => {
    //console.log(evt); //This will display the event and provide useful info
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
