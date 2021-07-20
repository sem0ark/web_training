// Option 2 Jquery smooth scroll

// $(".navbar a").on("click", function (e) {
//   if (this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       483
//     );
//   }
// });

const smooth = SmoothScroll(".navbar a[href*='#']", {
  speed: 483,
});
