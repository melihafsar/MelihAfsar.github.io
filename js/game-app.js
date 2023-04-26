let score = 0;
const scoreElement = document.getElementById("score");
scoreElement.textContent = `Score: ${score}`;

function startGame() {
    alert("Oyun başlıyor. Meyveleri toplamaya çalışın(+1). Bombalardan kaçın(-3). Sebzeleri de toplamayın(-1). 20 puan topladığınızda oyunu kazanırsınız.");
}

startGame();

function createFruitOrBomb() {
  const fruitOrBomb = document.createElement("img");
  const isBomb = Math.random() < 0.2; // %20 ihtimalle bomba oluşturulacak
  const fruitType = Math.floor(Math.random() * 5) + 1; // 1-5 arasında rastgele bir sayı üretilecek
  if (isBomb) {
    fruitOrBomb.src = "static/images/game/bomb.png";
    fruitOrBomb.className = "bomb";
  } else {
    if (fruitType === 1) {
      fruitOrBomb.src = "static/images/game/meyve1.png";
    }
    if (fruitType === 2) {
        fruitOrBomb.src = "static/images/game/meyve2.png";
    }
    if (fruitType === 3) {
        fruitOrBomb.src = "static/images/game/meyve3.png";
    }
    if (fruitType === 4) {
        fruitOrBomb.src = "static/images/game/meyve4.png";
    }
    if (fruitType === 5) {
        fruitOrBomb.src = "static/images/game/meyve5.png";
    }

    fruitOrBomb.className = "fruit";
  }
  fruitOrBomb.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  fruitOrBomb.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  document.body.appendChild(fruitOrBomb);
}

function createVegetable() {
    const vegetable = document.createElement("img");
    const vegetableType = Math.floor(Math.random() * 5) + 1; // 1-5 arasında rastgele bir sayı üretilecek
    if (vegetableType === 1) {
        vegetable.src = "static/images/game/sebze1.png";
    }
    if (vegetableType === 2) {
        vegetable.src = "static/images/game/sebze2.png";
    }
    if (vegetableType === 3) {
        vegetable.src = "static/images/game/sebze3.png";
    }
    if (vegetableType === 4) {
        vegetable.src = "static/images/game/sebze4.png";
    }
    if (vegetableType === 5) {
        vegetable.src = "static/images/game/sebze5.png";
    }
    vegetable.className = "vegetable";
    vegetable.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    vegetable.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    document.body.appendChild(vegetable);
}

function moveVegetables() {
    const vegetables = document.querySelectorAll(".vegetable");
    vegetables.forEach((item) => {
        const speed = 2;
        item.style.top = parseInt(item.style.top) + speed + "px";
        if (parseInt(item.style.top) > window.innerHeight) {
            item.remove();
        }
    });
    requestAnimationFrame(moveVegetables);
}

createVegetable();
moveVegetables();

setInterval(createFruitOrBomb, 600);
setInterval(createVegetable, 1000);

function moveFruitsAndBombs() {
  const fruitsAndBombs = document.querySelectorAll(".fruit, .bomb");
  fruitsAndBombs.forEach((item) => {
    const speed = item.classList.contains("fruit") ? 4 : 3; // Meyveler daha hızlı hareket etsin
    item.style.top = parseInt(item.style.top) + speed + "px";
    if (parseInt(item.style.top) > window.innerHeight) {
      item.remove();
    }
  });
  requestAnimationFrame(moveFruitsAndBombs);
}

function updateScore(points) {
  score += points;
  if (score < 0) { // Puan negatif olamaz
    score = 0;
  }
  scoreElement.textContent = `Score: ${score}`;
  if (score >= 20) {
    endGame("Tebrikler Oyunu Kazandınız!");
  }
}

function endGame(message) {
  alert(message);
  window.location.reload();
}

createFruitOrBomb();
moveFruitsAndBombs();

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("fruit")) {
    event.target.remove();
    updateScore(1);
    createFruitOrBomb();
  } else if (event.target.classList.contains("bomb")) {
    event.target.remove();
    updateScore(-3);
    createFruitOrBomb();
  } else if (event.target.classList.contains("vegetable")) {
    event.target.remove();
    updateScore(-1);
    createVegetable();
  }
});
