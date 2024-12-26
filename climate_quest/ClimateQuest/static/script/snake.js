const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 9 * box, y: 10 * box }];
let direction = "RIGHT";
let food = {
    x: Math.floor(Math.random() * 19) * box,
    y: Math.floor(Math.random() * 19) * box,
};
let score = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    else if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

function drawGame() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let segment of snake) {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x, segment.y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "UP") headY -= box;
    if (direction === "DOWN") headY += box;
    if (direction === "LEFT") headX -= box;
    if (direction === "RIGHT") headX += box;

    if (
        headX < 0 ||  
        headY < 0 ||  
        headX > canvas.width ||  
        headY > canvas.height ||  
        snake.some((segment) => segment.x === headX && segment.y === headY)
    ) {
        clearInterval(game);
        alert("Game Over");
        return;
    }

    const newHead = { x: headX, y: headY };
    snake.unshift(newHead);

    if (headX === food.x && headY === food.y) {
        score++;
        document.getElementById("score").innerText = score;
        food = {
            x: Math.floor(Math.random() * 19) * box,
            y: Math.floor(Math.random() * 19) * box,
        };
    } else {
        snake.pop();
    }
}

const game = setInterval(drawGame, 100);
