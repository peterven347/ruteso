import React, {useEffect, useState} from 'react'
import image from "../../assets/moon.png"



export const food = {
    cereal: [
        {
            id: "c1",
            name: "mtyub",
            big_price: 50,
            big_quantity: 1,
            small_price: 15,
            small_quantity: 10,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },
        {
            id: "c2",
            name: "sbsfs",
            big_price: 30,
            big_quantity: 2,
            small_price: 2,
            small_quantity: 9,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },
        {
            id: "c3",
            name: "fsvsfs",
            big_price: 90,
            big_quantity: 0,
            small_price: 3,
            small_quantity: 5,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },
        {
            id: "c4",
            name: "beans",
            big_price: 90,
            big_quantity: 0,
            small_price: 4,
            small_quantity: 5,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },
        {
            id: "c8",
            name: "beans",
            big_price: 90,
            big_quantity: 0,
            small_price: 4,
            small_quantity: 5,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },
        {
            id: "c5",
            name: "fhjgvkh",
            big_price: 90,
            big_quantity: 0,
            small_price: 5,
            small_quantity: 5,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },
        {
            id: "c6",
            name: "tucgs",
            big_price: 90,
            big_quantity: 0,
            small_price: 6,
            small_quantity: 5,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        }
    ],
    drink: [
        {
            id: "d1",
            name: "wine",
            big_price: 200,
            big_quantity: 0,
            small_price: 20,
            small_quantity: 5,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },
        {
            id: "d2",
            name: "vodka",
            big_price: 80,
            big_quantity: 0,
            small_price: 20,
            small_quantity: 9,
            img: image,
            multiplier: 1,
            checkState: false,
            initialState: false,
            cost: function(){
                return((this.big_price*this.big_quantity + this.small_price*this.small_quantity) * this.multiplier)
            },
        },

    ]
}

// We don’t recommend using indexes for keys if the order of items may change
