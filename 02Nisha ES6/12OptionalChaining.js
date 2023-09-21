const user = {
  name: "Alps",
  address: {
    city: "Delhi",
  },
  account: {
    accountToken: "ABC123",
    holder: {},
    contact: {},
  },
};

//  console.log(user.address);
//  console.log(user.address.city);
//  console.log(user.name);

console.log(user.address ? user.address.city : undefined);

console.log(user.address && user.address.city);

//Optional Chaining

console.log(user.address?.city);
