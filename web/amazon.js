const data = [{
  img: "SMStillLife5.jpg",
  price: "$19.99",
  description: "Designer Jeans",
  button: "Add to Cart"
}, {
  img: "SMStillLife5.jpg",
  price: "$24.99",
  description: "Skinny Jeans",
  button: "Add to Cart"
}, {
  img: "SMStillLife5.jpg",
  price: "$29.99",
  description: "Regular Jeans",
  button: "Add to Cart"
},

{
  img: "SMStillLife5.jpg",
  price: "$99.99",
  description: "New Jeans",
  button: "Add to Cart"
},
{
  img: "SMStillLife5.jpg",
  price: "$99.99",
  description: "New Jeans",
  button: "Add to Cart"
}

];


const container = document.getElementById('grid-cards');
data.forEach((result) => {
  // Create card element
  const card = document.createElement('div');

  // Construct card content
  const content = `
    <div class="card">

      <img src=${result.img} alt="Denim Jeans" style="width:100%">
      <h1>Tailored Jeans</h1>
      <div class="card-body">

        <h5>${result.price}</h5>
        <p>${result.description}</p>
        <p><button>${result.button}</button></p>
      </div>
    </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;

})