const inputFieldsCustomer = document.querySelectorAll(".cust");
const inputFieldsItem = document.querySelectorAll(".item");

const customerArray = [];
const orderArray = [];

const getOrder = () => {
  orderArray.push({
    orderId: inputFieldsItem[0].value,
    orderQty: inputFieldsItem[1].value,
    total: inputFieldsItem[2].value,
  });
  inputFieldsItem.forEach((val) => (val.value = ""));
  console.log(orderArray);
};

const getCustomer = () => {
  customerArray.push({
    customerId: inputFieldsCustomer[0].value,
    customerName: inputFieldsCustomer[1].value,
    customerAddress: inputFieldsCustomer[2].value,
    customerAge: inputFieldsCustomer[3].value,
  });
  console.log(customerArray);
  inputFieldsCustomer.forEach((val) => (val.value = ""));
};
