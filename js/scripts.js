function getRandomNum () {
  return(Math.random());
}

let x = 0;

$(document).ready(function() {
  $("#formOne").submit(function() {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  $('#shout-form').on('submit', function () {
    let newShout = $('input#user-shout').val().toUpperCase();
    let cardID = "#card-" + Math.floor((Math.random() * 3)+1);
    console.log(cardID)
    $(cardID).text(newShout);

    /* Select each #card.card-body and change text to a random number
    $('#card.card-body').each(function () {
      $(this).text(getRandomNum());
    });
    */

    /* do the same as above but in a worse way
    $('.card-body').parent().each(function() {
      console.log(`${x}`)
      $(this).children('#card').text(getRandomNum());
      x = x+1;
    })*/

    /* i forget what x had been set to, but this was wrong
     * because we hadn't actually selected anything on subsequent runs
    for(i = 0; i < x.length; i++) {
      console.log("old: " + typeof(x[i]))
      x[i].innerText = 'fart' + getRandomNum();
      console.log("new: " + typeof(x[i]))
    }*/
    event.preventDefault();
  });
});