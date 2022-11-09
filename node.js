async function getInfo() {
  let responce = await fetch(
    "https://raw.githubusercontent.com/KLL00-1/marketPlace/master/info.json"
  );
  let responceInfo = await responce.json();
  let i;
  // for (i = 0; i < responceInfo.length; i++)
  for (i in responceInfo) {
    const nftCards = document.querySelector(".NFT_cards");
    nftCards.innerHTML += `
        <div class="NFT_card ${responceInfo[i].petAndRarity}">
            <div>
              <img class="card_img1" src="${responceInfo[i].faceImage}" alt="" />
            </div>
            <div class="like">
              <button class="btn1" type="submit">
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

/*
  dog_common
  dog_uncommon
  dog_epic
  cat_common
  cat_uncommon
  cat_epic
  */
