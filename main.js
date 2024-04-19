let params = new URLSearchParams(window.location.search);
let buttonClicked = params.get('type');
console.log(buttonClicked);

let globalCards //i hate this

function spagetthicode(cards,cc) {
  for (var i = 0; i < cards.status.length; i++) { // modify this line
    // Create the card element
    console.log(i)
    var card = document.createElement("a");
    card.classList.add("card_wide");

    // Create the card content
    var cardContent = `
      <h1 class="tt">${cards.status[i].date}</h1>
      <br>
      <p class="desc">${cards.status[i].message}</p>
    `;

    // Set the card content
    card.innerHTML = cardContent;

    // Append the card to the container element
    cc.appendChild(card);
  }

  var link = document.createElement("p");
  var lc = `
  Congrulations, you have scrolled so far down that ou have found <a href="myProjects.html?type=sct">the self-canceling thoughts wall<a href=""></a>!
  `;
  link.innerHTML = lc;
  link.classList.add("articleParag");
  cc.appendChild(link);
}

function IamGoingToRegretTheseInfistrucutreChangesLater(cards,cc) {
  for (var i = 0; i < cards.sct.length; i++) { // modify this line
    // Create the card element
    console.log(i)
    var card = document.createElement("a");
    card.classList.add("card_wide");

    // Create the card content
    var cardContent = `
      <h1 class="tt">"${cards.sct[i].thought}"</h1>
    `;
    sign=1
    for (var i2 = 0; i2 < cards.sct[i].args.length; i2++) {
      if(sign>0)
      {
        cardContent=cardContent+`<b><i><p class="desc">${cards.sct[i].args[i2]}</p></i></b>`
      }else{
        cardContent=cardContent+`<p class="desc">${cards.sct[i].args[i2]}</p>`
      }
      
      sign*=-1
    }


    // Set the card content
    card.innerHTML = cardContent;

    // Append the card to the container element
    cc.appendChild(card);
  }
}

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

    if(buttonClicked=="status")
    {
      var titleCont=document.getElementById("titleCont");
      var title = document.createElement("h1");
      title.innerHTML="Kinda like my personal twitter page."
      title.classList.add("articleTitle");
      titleCont.appendChild(title);
      console.log(titleCont)

      spagetthicode(cards,cardContainer)
      return
    }

    if(buttonClicked=="sct")
    {
      var titleCont=document.getElementById("titleCont");
      var title = document.createElement("h1");
      title.innerHTML="My internal debates on topics that I cancel myself on. (Aka the debate club that only has one member!)"
      title.classList.add("articleTitle");
      titleCont.appendChild(title);

      var titleCont2=document.getElementById("titleCont");
      var title2 = document.createElement("p");
      title2.innerHTML="Basicly debating with myself about the decisions and the doubts I have within them."
      title2.classList.add("articleParag");
      titleCont2.appendChild(title2);

      IamGoingToRegretTheseInfistrucutreChangesLater(cards,cardContainer)
      return
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