$(".drum").each(function () {
  $(this).click(function () {
    let key = this.innerHTML;
    play(key);
    press(key);
  });
});

$(document).keypress(function (event) {
    let key=event.key;
    play(key);
    press(key);
});

function press(kORp){
    $("."+kORp).addClass("pressed");

    setTimeout(function() {
        $("." + kORp).removeClass("pressed");
    }, 100);
}

function play(keyORpress) {

  let a = new Audio();

  switch (keyORpress) {
    case "w":
      a = new Audio("sounds/crash.mp3");
      a.play();
    case "a":
      a = new Audio("sounds/kcik.mp3");
      a.play();
    case "s":
      a = new Audio("sounds/snare.mp3");
      a.play();
    case "d":
      a = new Audio("sounds/tom-1.mp3");
      a.play();
    case "j":
      a = new Audio("sounds/tom-2.mp3");
      a.play();
    case "k":
      a = new Audio("sounds/tom-3.mp3");
      a.play();
    case "l":
      a = new Audio("sounds/tom-4.mp3");
      a.play();
    default:
      console.log("Error at switch");
  }
}
