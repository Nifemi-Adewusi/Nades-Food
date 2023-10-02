"use strict";

var btn = document.querySelecor(".icon-mobile");
var navigation = document.querySelector(".header-nav");

function showNavigation() {
  navigation.classList.toggle("show");

  if (navigation.classList.contains("hidden")) {
    navigation.classList.remove("hidden");
  }

  e;
}