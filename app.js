const btn = document.querySelector(".icon-mobile-nav");
const navigation = document.querySelector(".header-nav");

function showNavigation() {
  navigation.classList.toggle("hidden");
  console.log("Hey");
}
btn.addEventListener("click", showNavigation);
