var product = {
    name: "Samsung TV",
    price: 500,
    stock: true,
    rating: {
        rate: 4.5,
        count: 100
    },
    city: ["Rewa", "Hyd", "Delhi"]
};
console.log("Name = ".concat(product.name, " \n Price = ").concat(product.price, " \n Stoce = ").concat(product.stock, " \n Rating = ").concat(product.rating.rate, " and Reviews = ").concat(product.rating.count, " \n City = ").concat(product.city.map(function (cities) { return cities; })));
