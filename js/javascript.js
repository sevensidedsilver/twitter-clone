
$(document).ready(function(){
  //make the tweet-controls div display once the textbox is clicked
  $('.tweet-compose').focus(function(){

    $('#tweet-controls').css('display', 'inline-block')
    //increase the height of the textarea
    $('#tweet-content textarea.tweet-compose').css('height', '5em')
  });


// build something that decrements the character count
// we need to find the actual length of the characters

$('#gutter-Tweet').focus(function(){
  // var textCount = $('textarea').val().length
  // console.log(textCount);

var keyListener = function(){
  let gutterCharaCount =  140 - $(this).val().length;
  console.log(gutterCharaCount);
  $("#char-count").html(gutterCharaCount)
    if (gutterCharaCount <= 10){
    $("#char-count").css('color', 'red')
  } if (gutterCharaCount > 10){
    $("#char-count").css('color', '#999')
  } if (gutterCharaCount < 0){
    $('#tweet-submit').prop("disabled", true);
  }
}

  $('#gutter-Tweet').keyup(keyListener)

  $('#gutter-Tweet').keydown(keyListener)
})


























// end of document.ready(function)
});
