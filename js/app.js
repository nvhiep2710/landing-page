// aos
AOS.init();
// slider
$(".review-right").slick({
  // dots: true,
  prevArrow:
    '<div class="btn-review-pre"><ion-icon name="chevron-back-outline"></ion-icon></div>',
  nextArrow:
    '<div class="btn-review-next"><ion-icon name="chevron-forward-outline"></ion-icon></div>',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

// accordion
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    item.parentNode.classList.toggle("accordion-item--active");
  });
});
