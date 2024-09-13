// Photo Filter
var activeFilter = "";

$(document).ready(function(event){
    $('#default').click()
})

$(".wed-filter-button").on("click", function(e) {
  // remove btn-primary from all buttons first
  $(".wed-filter-button").removeClass("btn-primary");
  $(".wed-filter-button").addClass("btn-outline-primary");

  // add btn-primary to active button
  var button = $(this);
  button.removeClass("btn-outline-primary");
  button.addClass("btn-primary");
  filterItems(button.data("filter"));
  e.preventDefault();
});

function filterItems(filter) {
  if (filter === activeFilter) {
    return;
  }

  activeFilter = filter;
  $(".wed-gallery .card").each(function() {
    var card = $(this);
    var groups = card.data("groups");
    var show = false;
    if (filter === "all") {
      show = true;
    } else {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i] === filter) {
          show = true;
        }
      }
    }
    // hide everything first
    card.fadeOut(400);
    setTimeout(function() {
      if (show && !card.is(":visible")) {
        card.fadeIn(400);
      }
    }, 500);

    
  });
  // shuffle images
  // if (activeFilter === "all") {
  //   // shuffleImages($(".wed-gallery .card"), "random");
  //   // shuffleImages($(".wed-gallery .card"), "reset");
  //   shuffleImages($(".wed-gallery .card"), );
  // }
}

function shuffleImages(card, mode) {
  var cardColumn = card.closest(".card-columns");
    var cards = cardColumn.find(".card");
    if (mode === "reset") {
      cardColumn.empty().append(cards);
      return;
    }
    if (mode === "random"){
      cards = cards.sort(function() {
        return 0.5 - Math.random();
      });
      cardColumn.empty().append(cards);
    }
    cards.sort(function() {
      // put an-hoi card first
      if (card.hasClass("an-hoi")) {
        return 1;
      } else {
        return -1;
      }
    });
    cardColumn.empty().append(cards);
}