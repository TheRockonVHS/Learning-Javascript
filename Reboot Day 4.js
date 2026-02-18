``` javascript ```

const product = {
  name: 'Coffee Beans',
  price: 13,
  quantity: 10
};

function getTotal(product) {
  return product.price * product.quantity;
}

// Reference vs. Value (The "Why")
// Primitives (Value): When you assign b = a with a number, b gets its own independent copy of that number. Changing a does not change b.
// Objects (Reference): When you assign obj2 = obj1, they both point to the same spot in memory.
// If you change a property on obj1, obj2 "sees" that change because they are looking at the same data.
