// Defining Interfaces in TypeScript : Interfaces are used to define the structure of an object. They are similar to type aliases but are more powerful.

interface Product {
  name: string;
  price: number;
  color: string;
  // color?: string; Make color optional by adding a question mark after property name.
}

const tShirt: Product = {
  name: "T-Shirt",
  price: 10,
  color: "blue",
};

// 2. Interfaces can be extended.
interface InventoryItem {
  name: string;
  price: number;
}
// Extending an interface (inventoryItem)
interface NewProduct extends InventoryItem {
  color?: string; // Make color optional by adding a question mark after property name.
}

interface Service extends InventoryItem {
  startTime: Date;
  endTime: Date;
}

const newShirt: NewProduct = {
  name: "T-Shirt 2",
  price: 20,
}

const photoShoot: Service = {
  name: "Photo Shoot 1",
  price: 100,
  startTime: new Date('January 1, 2020'),
  endTime: new Date('January 1, 2020'),
}

function purchaseItem(item: InventoryItem):InventoryItem {
  console.log(item.price);
  return item;
}

purchaseItem(photoShoot);