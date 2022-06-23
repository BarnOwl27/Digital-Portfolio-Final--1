const gamesImg = document.getElementById("gamesImg");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function demo() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`Waiting ${i} seconds...`);
//         await sleep(i * 1000);
//     }
//     console.log('Done');
// }

async function cycleImgs() {
  gamesImg.src = "./imgs/game1.png";
  await sleep(2000);
  gamesImg.src = "./imgs/game2.png";
  await sleep(2000);
  gamesImg.src = "./imgs/game3.png";
  await sleep(2000);
  cycleImgs();
}

cycleImgs();

// demo();