<<<<<<< HEAD
=======
//fetch data form asset file
// =============================================
const handleGetData = async () => {
  const cardContainer = document.getElementById("card_container");
  fetch("/assets/Products.json")
    .then((res) => res.json())
    .then((json) => {
      let data = json;

      //find each data a object formate
      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // create a card for HTML Document
        card.innerHTML = `
            <div class="card_image">
              <img
                src="${item?.ProductImage}"
                alt="${item?.ProductName}"
              />
            </div>
            <div class="card_content">
              <h4>${item?.ProductName}</h4>
              <p>${item?.Description}</p>
              <div class="card_label">
              <p class="price">$${item?.Price}</p>
              <p class="rating">Rating:${item?.Ratings}</p>
              </div>
              <button class="buy_btn">Buy Now</button>
            </div>
      `;
      // and push the card the html file
        cardContainer.appendChild(card);
        // console.log(item);
      });
    });
};

handleGetData();

>>>>>>> 3bffe0e (add to json data and dynamically render the data with card in html document)
// toggling nav related
const handleToggle = () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
};

//smooth scrolling nav bg color change
const nav = document.querySelector("nav");

const handleScroll = () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", handleScroll);

//action link action
const menuLinks = document.querySelectorAll(".menu ul li a");
menuLinks.forEach((menu) => {
  menu.addEventListener("click", function (e) {
    menuLinks.forEach((items) => items.classList.remove("text_red"));
    this.classList.add("text_red");
  });
});
