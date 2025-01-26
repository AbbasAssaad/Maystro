// const prizeDurations = [
//   "1 day",
//   "2 days",
//   "3 days",
//   "4 days",
//   "5 days",
//   "6 days",
//   "7 days",
//   "8 days",
//   "9 days",
//   "10 days",
//   "11 days",
//   "12 days",
//   "13 days",
//   "14 days",
//   "15 days",
//   "16 days",
//   "17 days",
//   "18 days",
//   "19 days",
//   "20 days",
//   "21 days",
//   "22 days",
//   "23 days",
//   "24 days",
//   "25 days",
//   "26 days",
//   "27 days",
//   "28 days",
//   "29 days",
//   "30 days",
//   "31 days",
//   "1 month",
//   "2 months",
//   "3 months",
//   "4 months",
//   "5 months",
//   "6 months",
//   "7 months",
//   "8 months",
//   "9 months",
//   "10 months",
//   "11 months",
//   "12 months",
// ];
// const randomPrize =
//   prizeDurations[Math.floor(Math.random() * prizeDurations.length)];
// document.getElementById(
//   "prize-message"
// ).innerText = `You won a Mystro premium account for ${randomPrize}!`;





function getRandomPrize() {
    const prizes = [
        "1 day",
        "2 days",
        "3 days",
        "4 days",
        "5 days",
        "6 days",
        "7 days",
        "8 days",
        "9 days",
        "10 days",
        "11 days",
        "12 days",
        "13 days",
        "14 days",
        "15 days",
        "16 days",
        "17 days",
        "18 days",
        "19 days",
        "20 days",
        "21 days",
        "22 days",
        "23 days",
        "24 days",
        "25 days",
        "26 days",
        "27 days",
        "28 days",
        "29 days",
        "30 days",
        "31 days",
        "1 month",
        "2 months",
        "3 months",
        "4 months",
        "5 months",
        "6 months",
        "7 months",
        "8 months",
        "9 months",
        "10 months",
        "11 months",
        "12 months",
    
    ];
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    document.getElementById("prize").textContent = randomPrize;
  }
  
  window.onload = getRandomPrize;
