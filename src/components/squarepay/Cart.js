import {food} from "./Food"
const cart = food.cereal.filter(i => {
    i.checkState === true
    })

console.log(cart)
