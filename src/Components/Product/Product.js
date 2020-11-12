import React from "react";
import { ProductStyle } from "../../Styles/StyledComponents";
import { useStateValue } from "../../API/StateProvider";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const styleToastr = {
    'max-height': '50px',
    'width': '50%',
    'object-fit': 'contain',
    'display': 'flex',
    'justify-content':'center'
  }
  const styleRating ={
    'display': 'flex'
  }

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast(<div>
      <img src={image} alt="" style={styleToastr} />
    <p>{title}</p>
    <p>
      <small>$</small>
      <strong>{price}</strong>
    </p>
    <div style={styleRating}>
      {Array(rating)
        .fill()
        .map((_, i) => (
          <p>⭐</p>
        ))}
    </div>
  </div>,
  {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
  };

  return (
    <ProductStyle id={parseInt(id)}>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Bascket</button>
    </ProductStyle>
  );
}

export default Product;
