var menu = document.getElementsByClassName("menu");
// console.log(menu);
for (var i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    // animator(this.value);

    var title = document.getElementById("title");
    title.className = this.value;
  };
}

var darkButton = document.getElementById("dark-button");
darkButton.onclick = function () {
  var section = document.getElementById("section");
  var sidenav = document.getElementById("sidenav");
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var button = document.getElementsByTagName("button");
  var inputText = document.getElementById("input-text");
  //   var x = (mode.innerHtml = "Hi");

  if (section.style.background == "rgb(17, 17, 17)") {
    section.style.background = "#FCE5CD";
    sidenav.style.background = "#F7D7B5";
    sidenav.style.color = "black";
    title.style.color = "#351c75";
    desc.style.color = "#e69138";
    inputText.style.color = "#351c75";

    // mode.innerHTML = "Dark Mode";
    for (var i = 0; i < button.length; i++) {
      button[i].style.color = "black";
    }
  } else {
    section.style.background = "#111111";
    sidenav.style.background = "#15151D";
    title.style.color = "#4672FE";
    desc.style.color = "white";
    sidenav.style.color = "white";
    inputText.style.color = "white";

    // mode.innerHTML = "Light Mode";
    for (var i = 0; i < button.length; i++) {
      button[i].style.color = "white";
    }
  }
};

function animator(classValue) {
  var title = document.getElementById("title");
  if (title.className == classValue) {
    title.className = "";
  } else {
    title.className = classValue;
  }
}

var click = document.getElementById("enter-btn");
var input = document.getElementById("text");
click.onclick = () => {
  var title = document.getElementById("title");
  title.innerHTML = input.value;
  console.log(input.value);
};
