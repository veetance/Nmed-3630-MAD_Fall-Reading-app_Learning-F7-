var app = new Framework7({
  // App root element
  el: "#app",
  // ... other parameters

  routes: [
    {
      path: "/",
      url: "index.html",
    },
    {
      path: "/index/",
      url: "index.html",
    },

    {
      path: "/",
      url: "index.html",
    },
    {
      path: "/page2/",
      url: "pages/page2.html",
    },
  ],
});
var mainView = app.views.create(".view-main");

const button = document.querySelector(".heart-like-button");

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});