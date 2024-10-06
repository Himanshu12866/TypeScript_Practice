var product:{name:string , price:number , stock:boolean , rating:{rate:number , count:number} , city:string[]} = {
    name:"Samsung TV",
    price:500,
    stock:true,
    rating:{
        rate:4.5,
        count:100
    },
    city:["Rewa" , "Hyd" , "Delhi"]
}
console.log(`Name = ${product.name} \n Price = ${product.price} \n Stoce = ${product.stock} \n Rating = ${product.rating.rate} and Reviews = ${product.rating.count} \n City = ${product.city.map(cities => cities)}`)