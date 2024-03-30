class Product {
  constructor(titulo, description, price, imagen, id, stock) {
      this.id;
      this.titulo = titulo;
      this.description = description;
      this.price = price;
      this.imagen = imagen;
      this.id = id;
      this.stock = stock;
  }
}

class ProductManager {
  constructor() {
      this.products = [];
  }

  getProducts() {
      return this.products;
  }

  addProduct(titulo, description, price, imagen, id, stock) {
      const existingProduct = this.products.find(product => product.id === id);
      if (existingProduct) {
          console.log("Producto Duplicado.");
      }
      const newProduct = new Product(titulo, description, price, imagen, id, stock);
      this.products.push(newProduct);
      return newProduct;
  }


  getProductById(productId) {
      const product = this.products.find(product => product.id === productId);
      return product || null;
  
  }
}



// Crear una instancia de ProductManager
const manager = new ProductManager();

// Llamar a getProducts debe devolver un arreglo vacío []
console.log("Productos antes de agregar:", manager.getProducts());



// Agregar productos

const product1 = manager.addProduct("Producto prueba 1", "Soy el producto numero 1", 200, "Sin imagen", "abc123", 25);

const product2 = manager.addProduct("Producto prueba 2", "Soy el producto numero 2", 200, "Sin imagen", "abc124", 25);

const product3 = manager.addProduct("Producto prueba 3", "Soy el producto numero 3", 200, "Sin imagen", "abc125", 25);

const product4 = manager.addProduct("Producto prueba 4", "Soy el producto numero 4", 200, "Sin imagen", "abc126", 25);



// Llamar a getProducts nuevamente, debe aparecer el producto recién agregado
console.log("Productos después de agregar el primer producto:");

manager.getProducts().forEach(product => {
  console.log("id:", product.id, "titulo:", product.titulo, "id:", product.id);
});



// Intentar agregar un producto con el mismo código
try {
  manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
} catch (error) {
  console.log("Error al agregar producto duplicado:", error.message);
}



// Probar getProductById
const productCode = "abc128";
const product = manager.getProductById(productCode);
  product ? console.log("Producto encontrado por código:", product.titulo) : console.log("Error al buscar producto por código:", productCode)

