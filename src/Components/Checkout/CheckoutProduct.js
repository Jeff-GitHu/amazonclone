import React from "react";
import { CheckoutProductStyle } from "../../Styles/StyledComponents";
import { useStateValue } from "../../API/StateProvider";
import { Flipped, spring } from "react-flip-toolkit";

const onElementAppear = (el, index) =>
  spring({
    onUpdate: val => {
      el.style.opacity = val;
    },
    delay: index * 50
  });

const onExit = type => (el, index, removeElement) => {
  spring({
    config: { overshootClamping: true },
    onUpdate: val => {
      el.style.transform = `scale${type === "grid" ? "X" : "Y"}(${1 - val})`;
    },
    delay: index * 50,
    onComplete: removeElement
  });

  return () => {
    el.style.opacity = "";
    removeElement();
  };
};

const onGridExit = onExit("grid");
const onListExit = onExit("list");

function CheckoutProduct({ title, image, rating, price, id, type, stagger, addToFilteredIds }) {
  const [{ basket }, dispatch] = useStateValue();
  const shouldFlip = (prev, current) => {
    if (prev.type !== current.type) {
      return true;
    }
    return false;
  };
  const flipId = `item-${id}`;
  const removeFromBasket = () => {
    addToFilteredIds(id)
    setTimeout(function(){ 
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    }, 500);
  };
  return (
    <CheckoutProductStyle>
      <Flipped
      flipId={flipId}
      onAppear={onElementAppear}
      onExit={type === "grid" ? onGridExit : onListExit}
      key={flipId}
      stagger={stagger}
      shouldInvert={shouldFlip}
    >
      <li className="fm-item">
        <Flipped inverseFlipId={flipId}>
          <div>
            <Flipped
              flipId={`${flipId}-content`}
              translate
              shouldFlip={shouldFlip}
              delayUntil={flipId}
            >
              <div>
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
        <Flipped
              flipId={`${flipId}-button`}
              shouldFlip={shouldFlip}
              delayUntil={flipId}
            >
             <button onClick={removeFromBasket}>Remove from basket</button>
            </Flipped>
        
      </div>
              </div>
            </Flipped>

            
          </div>
        </Flipped>
      </li>
    </Flipped>
    </CheckoutProductStyle>
  );
}

export default CheckoutProduct;
