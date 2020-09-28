import React from "react";
import { SubtotalStyle } from "../../Styles/StyledComponents";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../API/StateProvider";
import { getBasketTotal } from "../../API/reducer";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const checkout = () => {
    if (user) {
      alert("this page hasnt a system of payment, thank you for visit");
    } else {
      alert("You need logged in!");
    }
  };
  return (
    <SubtotalStyle>
      {/*Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={checkout}>Procceed to Checkout</button>
    </SubtotalStyle>
  );
}

export default Subtotal;
