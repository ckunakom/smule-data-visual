// Mixing vanilla w jquery
var navBarDom = `

`;

document.getElementById("repeat-nav-bar").innerHTML = navBarDom;

// put active class on the current page
$(function () {
  var path = window.location.pathname.split("/").pop();

  $('#navbarColor01 li a[href="' + path + '"]')
    .parent()
    .addClass("active");
});
