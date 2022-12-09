//  Advanced narrowing: typeof, instanceof, and custom type guards

const reverse = (value: string | string[]) => {
  if (typeof value === "string") {
    return value.split("").reverse().join("");
  } else {
    return [...value].reverse();
  }
};

reverse("123"); // '321'
reverse(["1", "2", "3"]); // ['3', '2', '1']

interface Person {
  firstName: string;
  lastName: string;
}

interface Company {
  name: string;
}

function greet(entity: Person | Company) {
  if ("firstName" in entity) {
    return `Hello ${entity.firstName} ${entity.lastName}`;
  } else {
    return `Hello ${entity.name}`;
  }
}

greet({ name: "Acme" });
console.log(greet({ firstName: "Gim", lastName: "Lee" }));
