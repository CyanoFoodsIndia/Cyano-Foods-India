import productsData from './Product.json';

export class Product {
  static async filter(query) {
    const entries = Array.isArray(productsData) ? productsData : [];
    return entries.filter((item) => {
      return Object.entries(query).every(([key, value]) => item[key] === value);
    });
  }
}


