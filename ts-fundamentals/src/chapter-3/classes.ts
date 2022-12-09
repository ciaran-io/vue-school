// Making a class in TypeScript

enum Sizes {
  small,
  medium = "medium",
  large = "large",
}

// Implementing a interface on class
interface Emailable {
  emailBody(): string;
  sendSubject(): string;
}

// Extend classes
class InventoryItem {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  buy(): this {
    console.log(this.price);
    return this;
  }
}
// By default all the properties are public
// If we want to make a property private we can use private keyword
// If we want to make a property protected we can use protected keyword
// eg: protected size: Sizes | undefined; private color: string = "red";

// Private properties can only be accessed within the class
// Protected properties can be accessed within the class and its subclasses
class Product extends InventoryItem {
  color: string = "red";
  size: Sizes | undefined;
}

class Service extends InventoryItem implements Emailable {
  startDate: Date;
  endDate: Date;
  constructor(name: string, price: number, startDate: Date, endDate: Date) {
    super(name, price);
    this.startDate = startDate;
    this.endDate = endDate;
  }
  emailBody(): string {
    return `Thank you for purchasing ${this.name}.Your appointment starts at ${this.startDate} and ends at ${this.endDate}`;
  }
  sendSubject(): string {
    return `${this.name} | My Company`;
  }
}

const tShirt2 = new Product("T-shirt", 1000);
tShirt2.size = Sizes.medium;
tShirt2.color = "green";
tShirt2.buy();

const photoShoot2 = new Service(
  "PhotoShoot 1",
  1000,
  new Date("Jan 9, 2022"),
  new Date("Jan 9, 2022")
);

photoShoot2.buy();
function sendEmail(emailable: Emailable, to: string) {
  console.log(`Body: ${emailable.emailBody()}`);
  console.log(`Subject: ${emailable.emailBody()}`);
  console.log("To:", to);
}

sendEmail(photoShoot2, "james@ymail.com");
