fetch("./header-bar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("header-bar").innerHTML = data;
  });
fetch("./footer-bar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("footer-bar").innerHTML = data;
  });

// untuk manggil halaman supaya pas edit header sama footer ga kebanyakan
