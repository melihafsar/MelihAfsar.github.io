function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-right topnav") {
      x.className += " responsive";
    } else {
      x.className = "navbar-right topnav";
    }
  }