import styled from "styled-components";

export const HeaderStyle = styled.header`
  /*Se usa directamente en el componente header ya que la clase header no puede aplicar estas propiedades dentro de un header, estas son para mantener el header aun haciendo scroll */
  position: sticky;
  top: 0;
  z-index: 100;

  .header {
    background-color: #131921;
    display: flex;
    align-items: center;
  }

  .header_logo {
    width: 100px;
    object-fit: contain;
    margin-left: 20px;
    margin-right: 20px;
    /* margin: 0px 20px; */
    margin-top: 18px;
  }

  .header_nav {
    display: flex;
    justify-content: space-evenly;
  }
  .header_link {
    color: white;
    text-decoration: none;
  }

  .header_option {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }

  .header_optionLineOne {
    font-size: 10px;
  }
  .header_optionLineTwo {
    font-size: 13px;
    font-weight: 800;
  }

  .header_optionBascket {
    display: flex;
    align-items: center;
  }

  .header_bascketCount {
    margin-left: 10px;
    margin-right: 10px;
  }

  .header_search {
    display: flex;
    flex: 1 !important;
  }

  .header_searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }

  .header_searchIcon {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
  }
`;

export const HomeStyle = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media(max-width: 500px){
    max-width: 375px;
    font-size: xx-small;
  }

  .home_image {
    display: flex;
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
    margin-bottom: -150px;
  }
  .home_row {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
    >:hover{
      transform: scale(1.02);
      box-shadow: 4px 4px 10px #26190C;
    }
    @media(max-width:500px){
      display: flex;
      z-index: 1;
      margin-left:1px;
      margin-right: 1px;
    }
  }
`;

export const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  max-height: 400px;
  min-width: 100px;
  margin: 10px;
  padding: 20px;
  width: 100%;
  background-color: white;
  z-index: 1;

  .product_info {
    max-height: 100px;
    margin-bottom: 60px;
  }

  .product_price {
    margin-top: 5px;
    @media(max-width:500px){
      text-size-adjust:initial
    }
  }

  .product_rating {
    display: flex;
  }

  > img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
    @media(max-width:500px){
      max-height: 50px;
    }
  }

  > button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    @media(max-width:500px){
      font-size: 10px;
    }
  }
`;

export const CheckoutStyle = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;

  .checkout_ad {
    width: 100%;
    margin-bottom: 18px;
  }

  .checkout_title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
`;

export const CheckoutProductStyle = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  .checkouProduct_image {
    object-fit: contain;
    width: 108px;
    height: 180px;
  }
  .checkoutProduct_info {
    padding-left: 20px;
  }

  .checkoutProduct_info > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 18px;
    border-color: #a88734 #9c7e31 #b46a29;
    color: #111;
  }
  .checkoutProduct_rating {
    display: flex;
  }

  .checkouProduct_title {
    font-size: 17px;
    font-weight: 800;
  }
`;

export const SubtotalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  .subtotal_gift {
    display: flex;
    align-items: center;
  }

  .subtotal_gift > input {
    margin-right: 5px;
  }
  > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;

export const LoginStyle = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login_container {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid lightgray;
  }

  .login_container > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  .login_container > form > h5 {
    margin-bottom: 5px;
  }

  .login_container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

  .login_container > p {
    margin-top: 15px;
    font-size: 12px;
  }

  .login_logo {
    width: 100px;
    object-fit: contain;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .login_signInButton {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }

  .login_registerButton {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
  }
`;
