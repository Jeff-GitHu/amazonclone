import React from "react";
import { CheckoutProductStyle } from "../../Styles/StyledComponents";
import { useStateValue } from "../../API/StateProvider";

function CheckoutProduct({ title, image, rating, price, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <CheckoutProductStyle>
      <img className="checkouProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </CheckoutProductStyle>
  );
}

export default CheckoutProduct;
