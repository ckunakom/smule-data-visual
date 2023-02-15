// Mixing vanilla w jquery
var navBarDom = `
          <div class="sidebar-sticky pt-3 text-left">
            <a class="navbar-brand" href="https://ckunakom.github.io/" target="_blank">
              <img src="https://ckunakom.github.io/img/logo.png" class="rounded mx-auto d-block" alt="ck-boba" width="55px" height="55px">
            </a>
            <ul class="nav flex-column text-left">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Backstory</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="overview.html">
                  Overview
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="buddies.html">
                Buddies
              </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="collab_playback.html">
                  Collaboration & Playback
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="favorite_buddies.html">
                  Favorite Buddies
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="top.html">
                  Top Songs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="bubble.html">
                  Singing Bubble
                </a>
              </li>
            </ul>
          </div> 
`;

document.getElementById("repeat-nav-bar").innerHTML = navBarDom;

// put active class on the current page
$(function () {
  var path = window.location.pathname.split("/").pop();
  console.log(path);

  $('#sidebarMenu li a[href="' + path + '"]')
    .parent()
    .addClass("nav_active");
});
