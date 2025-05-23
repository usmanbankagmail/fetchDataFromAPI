let mainDiv = document.querySelector('.main');
let data = [];

async function renderCards() {
    for (let i = 0; i < data.length; i++) {
        mainDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${data[i].images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].title}</h5>
    <p class="card-text">${data[i].description}</p>
    <p class="card-text">Price: $${data[i].price}</p>
  </div>
</div>`;
    }
}

async function fetchData() {
    try {
        let response = await fetch('https://dummyjson.com/products');
        console.log("response: ", response);
        response = await response.json();
        data = response.products;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData().then(function () {
    renderCards();
});
