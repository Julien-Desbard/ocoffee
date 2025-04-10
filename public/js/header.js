// initBurgerMenu();

/*function initBurgerMenu() {
  const menuNavbar = document.getElementById("menu-navbar");
  const menuButton = document.getElementById("menu-button");
  
  menuButton.addEventListener("click", () => {
    menuNavbar.classList.toggle("expanded");
  });
}*/


const voirTousArticles = document.querySelectorAll('.category article');
const buttonSeeAll = document.getElementById('buttonSeeAll');


  buttonSeeAll.addEventListener("click", () => {
    voirTousArticles.forEach(article => {
      article.classList.toggle("show");
    });
  });
