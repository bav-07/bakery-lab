import { useState } from "react";
import Cake from "../components/Cake";
import '../App.css'

const CakeContainer = () => { 

    // console.log(cakes);
    // const states = []
    // for (let i = 0 ; i < cakes.length ; i++) {
    //     states.add(useState(0));
    // }

    // Victora Sponge
    const cakes = [{
        cakeName: "Victoria Sponge",
        ingredients: [
            "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
        ],
        price: 5,
        rating: 5,
        image: "https://www.freeimageslive.co.uk/image/view/12347/_original",
        state: useState(0)
    },

    // Tea Loaf
    {
        cakeName: "Tea Loaf",
        ingredients: [
            "eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea",
        ],
        price: 2,
        rating: 3,
        image: "https://cdn.mos.cms.futurecdn.net/ZNDoeYFevq8rvxYhJJLAjR.jpg",
        state: useState(0)

    },

    // Carrot Cake
    {
        cakeName: "Carrot Cake",
        ingredients: [
            "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",
        ],
        price: 8,
        rating: 5,
        image: "https://cdn.stocksnap.io/img-thumbs/960w/carrot-cake_A48UPBB6XM.jpg",
        state: useState(0)
    },
    {
        cakeName: "Victoria Sponge",
        ingredients: [
            "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
        ],
        price: 5,
        rating: 5,
        image: "https://www.freeimageslive.co.uk/image/view/12347/_original",
        state: useState(0)
    },

    // Tea Loaf
    {
        cakeName: "Tea Loaf",
        ingredients: [
            "eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea",
        ],
        price: 2,
        rating: 3,
        image: "https://cdn.mos.cms.futurecdn.net/ZNDoeYFevq8rvxYhJJLAjR.jpg",
        state: useState(0)

    },

    // Carrot Cake
    {
        cakeName: "Carrot Cake",
        ingredients: [
            "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",
        ],
        price: 8,
        rating: 5,
        image: "https://cdn.stocksnap.io/img-thumbs/960w/carrot-cake_A48UPBB6XM.jpg",
        state: useState(0)

    },
    {
        cakeName: "Victoria Sponge",
        ingredients: [
            "eggs",
            "butter",
            "sugar",
            "self-raising flour",
            "baking powder",
            "milk"
        ],
        price: 5,
        rating: 5,
        image: "https://www.freeimageslive.co.uk/image/view/12347/_original",
        state: useState(0)
    },

    // Tea Loaf
    {
        cakeName: "Tea Loaf",
        ingredients: [
            "eggs",
            "oil",
            "dried fruit",
            "sugar",
            "self-raising flour",
            "strong tea",
        ],
        price: 2,
        rating: 3,
        image: "https://cdn.mos.cms.futurecdn.net/ZNDoeYFevq8rvxYhJJLAjR.jpg",
        state: useState(0)
    },

    // Carrot Cake
    {
        cakeName: "Carrot Cake",
        ingredients: [
            "carrots",
            "walnuts",
            "oil",
            "cream cheese",
            "flour",
            "sugar",
        ],
        price: 8,
        rating: 5,
        image: "https://cdn.stocksnap.io/img-thumbs/960w/carrot-cake_A48UPBB6XM.jpg",
        state: useState(0)
    }]  


    // DISPLAY LOGIC
    return(
        <>
            <h2>Cakes</h2>
            <div>
                <h3>Basket: £{cakes.reduce(function(total, cake) {
                    return cake.state[0] * cake.price + total; 
                }, 0)}.00</h3>
            </div>
            <div className="flexbox">
                {cakes.map(function(cake) {
                    return <div className="card"><Cake cakeName={cake.cakeName} ingredients={cake.ingredients} price={cake.price} rating={cake.rating} image={cake.image} count={cake.state[0]} onButtonClick={cake.state[1]}/></div>
                })}
            </div>
            {/* <Cake cakeName={cakes[0].cakeName} ingredients={cakes[0].ingredients} price={5} rating={5}/>
            <Cake cakeName={"Tea Loaf"} ingredients={["eggs","oil","dried fruit","sugar", "self-raising flour", "strong tea"]} price={2} rating={3}/>
            <Cake cakeName={"Victoria Sponge"} ingredients={["carrots","walnuts","oil","cream cheese", "flour", "sugar"]} price={8} rating={5}/> */}

        </>
    )
}

export default CakeContainer;