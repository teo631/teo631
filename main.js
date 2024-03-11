let params = new URLSearchParams(window.location.search);
let buttonClicked = params.get('type');
console.log(buttonClicked);

fetch(buttonClicked+".json")
  .then(response => response.json())
  .then(cards => {
    var cardContainer=document.getElementById("card-container")
    console.log(cards)
    // Loop through the game data and create a card for each game

    if (buttonClicked=="blogs")
    {
      var titleCont=document.getElementById("titleCont");
      var title = document.createElement("h1");
      title.innerHTML="This is the place ill post more regulary about anything realy,"
      title.classList.add("articleTitle");
      titleCont.appendChild(title);
      console.log(titleCont)
      console.log("hi")
    }


    for (var i = 0; i < cards.cards.length; i++) { // modify this line
      // Create the card element
      console.log(i)
      var card = document.createElement("a");
      card.href="article.html?project="+cards.cards[i].article;
      card.classList.add("card");

      // Create the card content
      var cardContent = `
        <img class="cardpic" src="${cards.cards[i].image}">
        <h1 class="tt">${cards.cards[i].title}</h1>
        <br>
        <p class="desc">${cards.cards[i].desc}</p>
      `;

      // Set the card content
      card.innerHTML = cardContent;

      // Append the card to the container element
      cardContainer.appendChild(card);
    }
  })
  .catch(error => console.error(error));