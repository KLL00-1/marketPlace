async function getInfo() {
  let responce = await fetch("https://sheetdb.io/api/v1/3rj1uo0drlg53");
  let responceInfo = await responce.json();
  let i;
  for (i = 0; i < responceInfo.length; i++) {
    const nftCards = document.querySelector(".NFT_cards");
    nftCards.innerHTML += `
      <div class="NFT_card ${responceInfo[i].petAndRarity}">
          <div>
            <img class="card_img1" src="${responceInfo[i].faceImage}" alt="" />
          </div>
          <div class="like">
            <button class="btn1">
              <img src="cards img/heart.png" alt="" />
            </button>
            <h2 class="counter">${responceInfo[i].innerLike}</h2>
          </div>
          <div class="pet_name">
            <h2>${responceInfo[i].nameAndNumber}</h2>
            <span class="epic ${responceInfo[i].rarity}">${responceInfo[i].rarity}</span>
          </div>
          <div class="lvl_mint"><span>Lvl: 0</span><span>Mint: 0/3</span></div>
          <div class="price_and_buy">
            <img src="cards img/Vector.svg" alt="" />
            <h2>${responceInfo[i].price}</h2>
            <a href="">BUY IT NOW</a>
          </div>
        </div>
      `;
  }
}

getInfo();
// function getNft() {
//   let responce = fetch("https://sheetdb.io/api/v1/3rj1uo0drlg53").then(
//     (responce) => responce.json()
//   );

//   console.log(responce[0]);
// }
// getNft();
/*
dog_common
dog_uncommon
dog_epic
cat_common
cat_uncommon
cat_epic
*/
