const products = [
  {
    id: 1,
    productName: 'Leaf Rake',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2018',
    description: 'Leaf rake with 48-inch wooden handle',
    price: 19.95,
    starRating: 3.2,
    imageUrl: 'assets/images/leaf_rake.png',
    tags: ['rake', 'leaf', 'yard', 'home']
  },
  {
    id: 2,
    productName: 'Garden Cart',
    productCode: 'GDN-0023',
    releaseDate: 'March 18, 2018',
    description: '15 gallon capacity rolling garden cart',
    price: 32.99,
    starRating: 4.2,
    imageUrl: 'assets/images/garden_cart.png'
  },
  {
    id: 5,
    productName: 'Hammer',
    productCode: 'TBX-0048',
    releaseDate: 'May 21, 2018',
    description: 'Curved claw steel hammer',
    price: 8.9,
    starRating: 4.8,
    imageUrl: 'assets/images/hammer.png',
    tags: ['tools', 'hammer', 'construction']
  },
  {
    id: 8,
    productName: 'Saw',
    productCode: 'TBX-0022',
    releaseDate: 'May 15, 2018',
    description: '15-inch steel blade hand saw',
    price: 11.55,
    starRating: 3.7,
    imageUrl: 'assets/images/saw.png'
  },
  {
    id: 10,
    productName: 'Video Game Controller',
    productCode: 'GMG-0042',
    releaseDate: 'October 15, 2018',
    description: 'Standard two-button video game controller',
    price: 35.95,
    starRating: 4.6,
    imageUrl: 'assets/images/xbox-controller.png'
  },
  {
    id: 13,
    productName: 'Chatty Cathy (no suppliers)',
    productCode: 'GMG-0001',
    description: 'Doll from the 1960s',
    price: 675.00,
    categoryId: 5,
    quantityInStock: 0
  }
];

const categories = [
  {
    id: 1,
    name: 'Garden'
  },
  {
    id: 3,
    name: 'Toolbox'
  },
  {
    id: 5,
    name: 'Gaming'
  }
];

const suppliers = [
  {
    id: 1,
    name: 'Acme Gardening Supply',
    cost: 16.95,
    minQuantity: 12
  },
  {
    id: 2,
    name: 'Standard Gardening',
    cost: 15.95,
    minQuantity: 24
  },
  {
    id: 3,
    name: 'Acme Gardening Supply',
    cost: 12,
    minQuantity: 6
  },
  {
    id: 4,
    name: 'Acme General Supply',
    cost: 25,
    minQuantity: 2
  },
  {
    id: 5,
    name: 'Acme General Supply',
    cost: 2,
    minQuantity: 24
  },
  {
    id: 6,
    name: 'Acme Tool Supply',
    cost: 4,
    minQuantity: 12
  },
  {
    id: 7,
    name: 'Tools Are Us',
    cost: 8,
    minQuantity: 8
  },
  {
    id: 8,
    name: 'Acme Tool Supply',
    cost: 4,
    minQuantity: 12
  },
  {
    id: 9,
    name: 'Acme Game Supply',
    cost: 20,
    minQuantity: 6
  },
  {
    id: 10,
    name: 'Acme General Supply',
    cost: 12,
    minQuantity: 12
  }
];


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  products,
  categories,
  suppliers,
};
