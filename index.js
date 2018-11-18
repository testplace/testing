let URL = "localhost/mancala";

function startGame() {
  $(".startGame").click(event => {
    event.preventDefault();
    $(".mancalaBoard").addClass("brown");
    $(".mancalaBoard").addClass("blackBoardBorder");
    $(".mancalaBoard").removeClass("whiteBoardBorder");
    $(".pocket").addClass("blackBorder");
    $(".pocket").addClass("darkBrown");
    $(".pocket").removeClass("whiteBorder");
    $(".mancala").addClass("blackBorder");
    $(".mancala").addClass("darkBrown");
    $(".mancala").removeClass("whiteBorder");
    $(".nicknameMenu").removeClass("hidden");
    $(".startGame").addClass("hidden");
  });
}

$(".nicknameMenu").submit(event => {
  event.preventDefault();
  let playerOneNickname = $(".nickname").val();
  $(".nicknameMenu").addClass("hidden");
  getDataFromMancalaApi(playerOneNickname, renderMancalaGame)
});

$(".pocket").click(function(){
  console.log('I got a click');
});

function getDataFromMancalaApi(nickname, callback) {
  const settings = {
    url: URL,
    data: {
      id: "5bf0d36be5b85418106da923",
    },
    json: "callback",
    dataType: 'json',
    type: 'get',
    success: function(data) {
      callback(data)
    },
  };

  return $.ajax(settings);
}

function renderMancalaGame(data) {
  console.log(data)
}

$(function () {
  startGame();
})
