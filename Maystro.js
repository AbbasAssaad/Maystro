function getRandomPrize() {
  const prizes = [
    "1 Month Maystro Premium Account",
    "2 Weeks Maystro Premium Account",
  ];
  const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
  document.getElementById("prize").textContent = randomPrize;
}

window.onload = getRandomPrize;
