// Código basado en https://www.youtube.com/watch?v=2I7uX8m0Ta0&ab_channel=WebDevSimplified

class Product extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');
    const imageSrc = this.getAttribute('image');
    const price = this.getAttribute('price');
    const discount = this.getAttribute('discount');
    const discountPrice = price - price * discount;
    const rating = this.getAttribute('rating');
    this.shadowRoot.innerHTML = `
      <style>
        .product {
          border: 1px solid #ccc;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          padding: 20px;
          text-align: center;
          transition: transform 0.2s ease-in-out;
          width: 200px;
          margin: 10px;
        }

        h2 {
          font-size: 1.5em;
          margin: 10px 0;
        }

        img {
          max-width: 100%;
          height: auto;
          margin: 10px 0;
          border-color: #444;
          border-radius: 7px;
          border-style: solid;
        }

        p {
          font-size: 1em;
          margin: 5px 0;
        }

        #discount-price {
          color: #d9534f;
          font-weight: bold;
          font-size: 1.2em;
        }

        #price {
          color: rgb(119, 119, 119);
          font-weight: bold;
          font-size: 0.6em;
        }

        #discount {
          color: #fff;
          font-weight: bold;
          font-size: 1em;
          background-color: #df1f89;
          border-radius: 5px;
          padding: 2px;
        }

        #rating {
          color: #f0ad4e;
          font-weight: bold;
          font-size: 1em;
        }

        .price-div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        }

      </style>
      <div class="product">
        <img src="${imageSrc}" alt="${name}">
        <h2>${name}</h2>
        <div class="price-div">
          <p id="discount-price">$ ${discountPrice}</p>
          <p id="price">Normal: <strike>$${price}</strike></p>
          <p id="discount">-${discount * 100}%</p>
        </div>
        <p id="rating">⭐${rating}</p>
      </div>
    `;
  }
}

customElements.define('product-item', Product);
