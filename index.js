

$('.save-btn').on('click', createCard);
$('.bottom-box').on('click', '.upvote', increaseQuality);
$('.bottom-box').on('click', '.downvote', decreaseQuality);


function Card(title, body) {
    this.title = title;
    this.body = body;
    this.quality = "none";
    this.id = Date.now(); 
}

function createCard(event, title, body, qualityVariable, id) {
    event.preventDefault();

    var card = new Card($('.title-input').val(), $('.body-input').val(), qualityVariable, id)
    prependCard(card);
}

function prependCard(card) {
    $(".bottom-box").prepend(`<section id=${card.id} class="card-container">
            <h2 class="title-of-card" contenteditable="true">${card.title}</h2>
            <button class="delete-button"></button>
            <p class="body-of-card" contenteditable="true">${card.body}</p>
            <button class="upvote"></button> 
            <button class="downvote"></button> 
            <p class="quality"> quality: 
            <h4 class="qualityVariable">${card.quality}</h4> 
            </p>
            <hr> 
        </section>`)
    sendToLocalStorage(card);
};

 function sendToLocalStorage(card) {
    var cardString = JSON.stringify(card);
    localStorage.setItem('card' , cardString);
}

function increaseQuality(event) {
    var currentQuality = $(this).closest('p')
    console.log(currentQuality);
    if (currentQuality.text() === "none") {
        currentQuality.text("low") 
    } else if  (currentQuality.text() === "low") {
        currentQuality.text("normal") 
    } else if (currentQuality.text() === "normal") {
        currentQuality.text("high" )
    } else if (currentQuality.text() === "high") {
        currentQuality.text("critical")
    }
}

function decreaseQuality(event) {
    var currentQuality = $(this).closest('p')
    console.log(currentQuality);
    if (currentQuality.text() === "critical") {
        currentQuality.text("high") 
    } else if  (currentQuality.text() === "high") {
        currentQuality.text("normal") 
    } else if (currentQuality.text() === "normal") {
        currentQuality.text("low" )
    } else if (currentQuality.text() === "low") {
        currentQuality.text("none")
    }
}

// ('.card-container').find('.qualityVariable')


// $.each(localStorage, function(key) {
//     var cardData = JSON.parse(this);
//     numCards++;
//     $( ".bottom-box" ).prepend(newCard(key, cardData.title, cardData.body, cardData.quality));
// });



// // $('.save-btn').on('click', function(event) {
// //     event.preventDefault();
// //     createCard(title, body, qualityVariable, id); 
//     // if ($('#title-input').val() === "" || $('#body-input').val() === "") {
//     //    return false;
//     });


//     // numCards++;
//     $( ".bottom-box" ).prepend(newCard = ('card' + numCards, $('#title-input').val(), $('#body-input').val(), qualityVariable)); 
//     localStoreCard();
//     $('form')[0].reset();
// });

// $(".bottom-box").on('click', function(event){
//     var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
//     var qualityVariable;

// // 

// })



//     var cardHTML = $(event.target).closest('.card-container');
//     var cardHTMLId = cardHTML[0].id;
//     var cardObjectInJSON = localStorage.getItem(cardHTMLId);
//     var cardObjectInJS = JSON.parse(cardObjectInJSON);

//     cardObjectInJS.quality = qualityVariable;

//     var newCardJSON = JSON.stringify(cardObjectInJS);
//     localStorage.setItem(cardHTMLId, newCardJSON);
//     }
   
//     else if (event.target.className === "delete-button") {
//         var cardHTML = $(event.target).closest('.card-container').remove();
//         var cardHTMLId = cardHTML[0].id;
//         localStorage.removeItem(cardHTMLId);
//     }
// });
      










