const customer = {
  name: "seniru",
  age: 19,
  address: "gampaha",
  items: [
    {
      itemcode: "C102",
      qty: 5,
    },
    {
      itemcode: "C103",
      qty: 3,
    },
  ],
};

let myArr = customer.items.map((val) => val.itemcode);

let arr = [2, 4, 2, 5, 6];

let i = arr.findIndex((el) => el == 9);
console.log(i);
