const fakeReview = [
  {
    id: 1,
    title: "Cotton Regular Fit Half Sleeves Basic",
    url: "https://m.media-amazon.com/images/I/61PJdTggI7L._UL1500_.jpg",
    rating: 120,
    price: "$999",
  },
  {
    id: 2,
    title: "Iron village -Half Sleeve Round Neck T-Shirt-Eat Big Lift Big",
    url: "https://m.media-amazon.com/images/I/61lka0ldx0L._UL1500_.jpg",
    rating: 10,
    price: "$159",
  },
  {
    id: 3,
    title: "Life Printed Cotton Blend Regular Fit Mens T-Shirt",
    url: "https://m.media-amazon.com/images/I/51AFVXREbsS._UL1000_.jpg",
    price: "$59",
    rating: 222,
  },

  {
    id: 4,
    title: "Foxrobe Women's T-Shirt very beautifull dress...woohooo",
    url: "https://m.media-amazon.com/images/I/51+bV09jUTL._UL1000_.jpg",
    rating: 390,
    price: "$99",
  },
];

// item select
const title = document.querySelector(".title");
const price = document.querySelector(".price");
const rating = document.querySelector(".rating");
const image = document.querySelector(".product-image");

// btn select
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const closeModalBtn = document.querySelector("#closeModal");
const openModalBtn = document.querySelector("#openModal");

// for close modal
closeModalBtn.addEventListener("click", function () {
  document.querySelector(".hideModal").style.display = "none";
  document.querySelector(".bgChange").style.backgroundColor = "white";

});

openModalBtn.addEventListener("click", function () {
    document.querySelector(".hideModal").style.display = "block";
  });

  
// function
let currentProduct = 0;

function showReview() {
  title.textContent = fakeReview[currentProduct].title;
  price.textContent = fakeReview[currentProduct].price;
  rating.textContent = `${fakeReview[currentProduct].rating} reviews`;
  image.src = fakeReview[currentProduct].url;
}

window.addEventListener("DOMContentLoaded", (event) => {
  showReview();
  document.querySelector(".hideModal").style.display = "none";
});

nextBtn.addEventListener("click", function () {
  showReview();


  if (currentProduct === 3) {
    currentProduct = 0;
  } else {
    currentProduct++;
  }
});

prevBtn.addEventListener("click", function () {
  showReview();

  if (currentProduct === 0) {
    currentProduct = 3;
  } else {
    currentProduct--;
  }
});
