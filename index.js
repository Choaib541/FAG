document.getElementById("search_input").addEventListener("input", () => {
  if (document.getElementById("search_input").value !== "") {
    document.getElementById("bx-x").style.display = "block";
  } else {
    document.getElementById("bx-x").style.display = "none";
  }
});
document.getElementById("bx-x").onclick = () => {
  document.getElementById("search_input").value = "";
  document.getElementById("bx-x").style.display = "none";
};
document.querySelector(".bx-search-alt").onclick = () => {
  if (document.querySelector(".quick_shop").classList.contains("active")) {
    document.querySelector(".quick_shop").classList.toggle("active");
    document.querySelector(".search").classList.toggle("active");
  } else if (document.querySelector(".user").classList.contains("active")) {
    document.querySelector(".user").classList.toggle("active");
    document.querySelector(".search").classList.toggle("active");
  } else {
    document.querySelector(".search").classList.toggle("active");
  }
};
document.querySelector(".bxs-user").onclick = () => {
  // -------------------------
  if (document.querySelector(".quick_shop").classList.contains("active")) {
    document.querySelector(".quick_shop").classList.toggle("active");
    document.querySelector(".user").classList.toggle("active");
  } else if (document.querySelector(".search").classList.contains("active")) {
    document.querySelector(".search").classList.toggle("active");
    document.querySelector(".user").classList.toggle("active");
  } else {
    document.querySelector(".user").classList.toggle("active");
  }
};

document.querySelector(".bxs-cart").onclick = () => {
  if (document.querySelector(".search").classList.contains("active")) {
    document.querySelector(".search").classList.toggle("active");
    document.querySelector(".quick_shop").classList.toggle("active");
  } else if (document.querySelector(".user").classList.contains("active")) {
    document.querySelector(".user").classList.toggle("active");
    document.querySelector(".quick_shop").classList.toggle("active");
  } else {
    document.querySelector(".quick_shop").classList.toggle("active");
  }
};
document.querySelector(".bx-menu").onclick = () => {
  document.querySelector(".middle_list").classList.toggle("active");
  document.querySelector(".baner").style.zIndex = "-1";
};
document.querySelector(".bx-x").onclick = () => {
  document.querySelector(".middle_list").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".baner").style.zIndex = "1";
  }, 500);
};
