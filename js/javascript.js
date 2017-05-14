
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


var keyListener = function(){
  let gutterCharaCount =  140 - $(this).val().length;
  $("#char-count").html(gutterCharaCount)
    if (gutterCharaCount <= 10){
    $("#char-count").css('color', 'red')
  } if (gutterCharaCount > 10){
    $("#char-count").css('color', '#999')
  } if (gutterCharaCount < 0){
    $('#tweet-submit').prop("disabled", true);
  } if (gutterCharaCount >= 0) {
    $('#tweet-submit').prop("disabled", false);
  }
}

  $('#gutter-Tweet').keyup(keyListener)

  $('#gutter-Tweet').keydown(keyListener)
})

//the following blocks create a new tweet in the feed
// a tweet should only be created if there is something typed in the textbox

$('#tweet-submit').click(function(){
  let counted = $('#gutter-Tweet').val().length;
  if  (counted > 0) {
    //prepend the stream with a new tweet

    //this variable will contain all of our retweets and response action Elements
    let actions = $("<div/>")
                  .addClass("tweet-actions")
                  .html('<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul>')





    //this is the text from the textbox
    let message = $('#gutter-Tweet').val()


    let TweetContent = $("<div/>")
                    .addClass("content")
                    .html("<img class='avatar' src='img/alagoon.jpg'><strong class='fullname'>Your Name Here</strong><span class='username'>@mybff</span><p class='tweet-text' >"+message+"</p>")
                    .append(actions)

    let newTweet = $("<div/>")
                    .addClass("tweet")
                    .html(TweetContent)




    $('#stream').prepend(newTweet);


}
});
























// end of document.ready(function)
});
