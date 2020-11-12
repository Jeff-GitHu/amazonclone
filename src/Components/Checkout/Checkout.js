import React, {useState} from "react";
import { useStateValue } from "../../API/StateProvider";
import { CheckoutStyle } from "../../Styles/StyledComponents";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { Flipper } from "react-flip-toolkit";


function Checkout() {
  const [{ basket, user }] = useStateValue();
  const [state, setState] = useState({
    type: 'list',
    sort: 'desc',
    filteredIds: [],
    stagger: 'forward',
    spring: 'noWobble'
  })

  const addToFilteredIds = id => {
    setState(prevState => {
      return {
        filteredIds: prevState.filteredIds.concat(id)
      };
    });
  };
  return (
    <CheckoutStyle>
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or "Add to basket"
              nest to the item
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout_title">Your shopping bascket</h2>
            {/*List out all of the Checkout Products */}
            <Flipper
        flipKey={`${state.type}-${state.sort}-${JSON.stringify(
          state.filteredIds
        )}-${JSON.stringify(state.stagger)}`}
        spring={state.spring}
        staggerConfig={{
          default: {
            reverse: state.stagger !== "forward",
            speed: 0.5
          }
        }}
        decisionData={state}
      >
        {[...basket]
                  .filter(d => !state.filteredIds.includes(d.id))
                  .sort((a, b) => {
                    if (state.sort === "desc") {
                      return b.id - a.id;
                    } else {
                      return a.id - b.id;
                    }
                  })
                  .map(({ title, id,image,price,rating }) => (
                    <CheckoutProduct
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
              stagger={["forward", "reverse"].includes(
                state.stagger
              )}
              type={state.type}
              key={id}
              addToFilteredIds={addToFilteredIds}
            />
                  ))}
      </Flipper>
            {}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </CheckoutStyle>
  );
}

export default Checkout;
