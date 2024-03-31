let params = new URLSearchParams(window.location.search);
let buttonClicked = params.get('type');
console.log(buttonClicked);

fetch("status.json")
  .then(response => response.json())
  .then(cards => {
    var cardContainer=document.getElementById("card-container")
    console.log(cards)
    // Loop through the game data and create a card for each game

      // Create the card element
      console.log(0)
      var card = document.createElement("a");
      card.classList.add("card_wide");

      // Create the card content
      var cardContent = `
      <h1 class="tt">${cards.status[0].date}</h1>
      <br>
      <p class="desc">${cards.status[0].message}</p>
    `;

      // Set the card content
      card.innerHTML = cardContent;

      // Append the card to the container element
      cardContainer.appendChild(card);
  })
  .catch(error => console.error(error));