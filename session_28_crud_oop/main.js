let inputs = document.querySelectorAll('input');
let btn = document.querySelector('button');

// NodeList To Array
// let inputs = document.querySelectorAll('input');
// let temp = [];
// console.log(temp);
// console.log(inputs);
// inputs.__proto__ = Array;

const [proudctName, price, desc] = inputs;

btn.addEventListener('click', function () {
  let proudct = new Products(proudctName.value, price.value, desc.value);

  proudct.myProducts.push(proudct);

  proudct.displayProducts();
});

class Products {
  constructor(productName, proudctPrice, proudctDesc) {
    this.productName = productName;
    this.proudctPrice = proudctPrice;
    this.proudctDesc = proudctDesc;
  }

  displayProducts() {
    let tags = ``;

    for (let i = 0; i < this.myProducts.length; i++) {
      tags += `
            <tr>
                <td>${this.myProducts[i].productName}</td>
            </tr>
            `;
    }

    document.getElementById('rowData').innerHTML = tags;
  }
}

Products.prototype.myProducts = [];
