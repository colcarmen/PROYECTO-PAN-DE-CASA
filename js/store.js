// js/store.js - Centralized state management using localStorage

const STORE_KEYS = {
  PRODUCTS: 'pandecasa_products',
  CART: 'pandecasa_cart',
  ORDERS: 'pandecasa_orders'
};

const DEFAULT_PRODUCTS = [
  {
    id: 'p1',
    name: 'Hogaza de Masa Madre',
    description: 'Fermentación lenta de 48 horas, corteza crujiente y miga aireada.',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fa08?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    name: 'Baguette Rústica',
    description: 'Clásica receta francesa, ideal para acompañar tus comidas.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    name: 'Concha de Vainilla',
    description: 'Dulce tradicional mexicano con una crujiente costra de azúcar.',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1551101966-282672b1ac8a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    name: 'Focaccia de Romero',
    description: 'Con aceite de oliva extra virgen, romero fresco y sal de mar.',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70912?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p5',
    name: 'Croissant de Mantequilla',
    description: 'Capas hojaldradas y un sabor intenso a mantequilla.',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p6',
    name: 'Pan de Centeno',
    description: 'Denso y nutritivo, perfecto para sándwiches robustos.',
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  }
];

class Store {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORE_KEYS.PRODUCTS)) {
      localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
    }
    if (!localStorage.getItem(STORE_KEYS.CART)) {
      localStorage.setItem(STORE_KEYS.CART, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORE_KEYS.ORDERS)) {
      localStorage.setItem(STORE_KEYS.ORDERS, JSON.stringify([]));
    }
  }

  // --- Products ---
  getProducts() {
    return JSON.parse(localStorage.getItem(STORE_KEYS.PRODUCTS));
  }

  getProductById(id) {
    return this.getProducts().find(p => p.id === id);
  }

  addProduct(product) {
    const products = this.getProducts();
    const newProduct = {
      ...product,
      id: 'p' + Date.now()
    };
    products.push(newProduct);
    localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(products));
    return newProduct;
  }

  updateProduct(updatedProduct) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = updatedProduct;
      localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(products));
    }
  }

  deleteProduct(id) {
    const products = this.getProducts().filter(p => p.id !== id);
    localStorage.setItem(STORE_KEYS.PRODUCTS, JSON.stringify(products));
  }

  // --- Cart ---
  getCart() {
    return JSON.parse(localStorage.getItem(STORE_KEYS.CART));
  }

  addToCart(productId, quantity = 1) {
    const cart = this.getCart();
    const product = this.getProductById(productId);
    
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }

    localStorage.setItem(STORE_KEYS.CART, JSON.stringify(cart));
    this.notifyCartUpdated();
  }

  updateCartItemQuantity(productId, quantity) {
    let cart = this.getCart();
    if (quantity <= 0) {
      cart = cart.filter(item => item.product.id !== productId);
    } else {
      const item = cart.find(i => i.product.id === productId);
      if (item) item.quantity = quantity;
    }
    localStorage.setItem(STORE_KEYS.CART, JSON.stringify(cart));
    this.notifyCartUpdated();
  }

  clearCart() {
    localStorage.setItem(STORE_KEYS.CART, JSON.stringify([]));
    this.notifyCartUpdated();
  }

  getCartTotal() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getCartCount() {
    const cart = this.getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }

  notifyCartUpdated() {
    const event = new CustomEvent('cartUpdated', { detail: { count: this.getCartCount(), total: this.getCartTotal() } });
    window.dispatchEvent(event);
  }

  // --- Orders ---
  getOrders() {
    return JSON.parse(localStorage.getItem(STORE_KEYS.ORDERS)).sort((a, b) => b.createdAt - a.createdAt);
  }

  getOrderById(id) {
    return this.getOrders().find(o => o.id === id);
  }

  placeOrder(customerData) {
    const cart = this.getCart();
    if (cart.length === 0) return null;

    const orders = this.getOrders();
    const newOrder = {
      id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
      items: [...cart],
      total: this.getCartTotal(),
      customer: customerData,
      status: 'pending', // pending, prep, ready, delivered
      createdAt: Date.now()
    };

    orders.push(newOrder);
    localStorage.setItem(STORE_KEYS.ORDERS, JSON.stringify(orders));
    this.clearCart();
    
    return newOrder;
  }

  updateOrderStatus(orderId, status) {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      localStorage.setItem(STORE_KEYS.ORDERS, JSON.stringify(orders));
    }
  }

  getOrdersByStatus(status) {
    return this.getOrders().filter(o => o.status === status);
  }
}

// Global instance
const store = new Store();

// Format currency helper
const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(value);
};

// Date formatter
const formatDate = (dateString) => {
  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(dateString));
};

// Export to window
window.AppStore = store;
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;
