import React from "react";
import { HeaderStyle } from "../../Styles/StyledComponents";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../API/StateProvider";
import { auth } from "../../API/firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(basket);
  return (
    <HeaderStyle>
      <div className="header">
        {/*Logo on the left */}
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        {/*Search box */}
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>
        {/*3 Links */}
        <div className="header_nav">
          {/*1st link*/}
          <Link to={!user && "/login"} className="header_link">
            <div onClick={login} className="header_option">
              <span className="header_optionLineOne">Hello {user? user?.email: 'Guest'}</span>
              <span className="header_optionLineTwo">
                {user ? "Sign out" : "Sing in"}
              </span>
            </div>
          </Link>
          {/*2nd link*/}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Return</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/*3rd link*/}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
          </Link>
        </div>
        {/*Bascket Icon with number */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBascket">
            {/* Shopping bascket icon */}
            <ShoppingBasketIcon />
            {/* Number of items in the bascket */}
            <span className="header_optionLineTwo header_bascketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </HeaderStyle>
  );
}

export default Header;
