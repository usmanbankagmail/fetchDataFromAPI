let mainDiv = document.querySelector('.main');
let data = [];

async function renderCards() {
    for (let i = 0; i < data.length; i++) {

        let discountedPrice = (data[i].price - (data[i].price * data[i].discountPercentage/100)).toFixed(2);
        let filledStarUniCode = '&#9733'
        let unFilledStarUniCode = '&#9734'
        let stars ='';

        for (let ratingUpto = 0; ratingUpto<Math.round(data[i].rating); ratingUpto++){
            
            // console.log("Rating Upto: " , Math.round(data[i].rating));

            stars = stars + '&#9733';
        }

        for (let unFilledStars = 0; unFilledStars < (5 - (Math.round(data[i].rating))); unFilledStars++ ){
            stars += '&#9734';
        }



        mainDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${data[i].images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].title}</h5>
    <p class="card-text">${data[i].description}</p>
    <span class="card-text">Price: <span class="strikethroughusmanbanka">Rs.${data[i].price}</span></span>
    <p class="card-text">After Discount: Rs.${discountedPrice}</p>

    <p class="card-text">Rating: ${stars}</p>

  </div>
</div>`;
    }
}

async function fetchData() {
    try {
        let response = await fetch('https://dummyjson.com/products');
        // console.log("response: ", response);
        response = await response.json();
        data = response.products;
        // document.write(data)
        // console.log(data);
    } catch (error) {
        console.error("The error we got in fetchData function is: ", error);
    }
}

fetchData().then(function () {
    renderCards();
});
