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
    this.shadowRoot.innerHTML = `
      <style>
        .product {
          border: 1px solid #ccc;
          margin-bottom: 10px;
          padding: 10px;
          width: 15%
        }
      </style>
      <div class="product">
        <h2>${this.getAttribute('name')}</h2>
        <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
        <p>${this.getAttribute('price')}</p>
        <p>${this.getAttribute('discount_price')}</p>
        <p>${this.getAttribute('discount')}</p>
        <p>${this.getAttribute('rating')}</p>
      </div>
    `;
  }
}

customElements.define('product-item', Product);