import '../App.css';

// Could have done const Cake = ({cake, onButtonClick}) instead
const Cake = ({cakeName, ingredients, price, rating, image, className, count, onButtonClick}) => {

    const handleAddToBasket = () => {
        if (count < 9) {
            onButtonClick(count + 1);
        }
    }

    const handleRemoveFromBasket = () => {
        if (count > 0) {
            onButtonClick(count - 1);
        }
    }

    let div;
    if (count === 0) {
        div = <div className='invisible counter'></div>
    } else {
        div = <div className='counter'>{count}</div>
    }

    const ingredientsList = ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
    })

    // DISPLAY LOGIC
    return(
        <>
            {div}
            <img className="card_image" src={image} alt={`${cakeName}`}></img>
            <div className="product_text">
                <h3>{cakeName}</h3>
                <p><span className="bold">Ingredients: </span>{ingredients.toString().replaceAll(',',", ")}</p>
                <p><span className="bold">Price: </span> £{price}.00</p>
                <p><span className="bold">Rating: </span>{rating} Stars</p>
            </div>
            <div className="product_buttons">
                <button className="add_button" onClick={handleAddToBasket}>Add to Basket</button>
                <button className="remove_button" onClick={handleRemoveFromBasket}>Remove from Basket</button>
            </div>

        </>
    );


}

export default Cake;