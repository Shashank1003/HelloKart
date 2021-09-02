import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

const Wrapper = styled.div`
  height: 50rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  position: absolute;
  top: 5.2rem;
  right: 0rem;
  border-radius: 20px 0px 0px 20px;
  box-shadow: 5px 10px 100px #000;
  background-color: white;
  padding-bottom: 3.5rem;
`;

const TotalCost = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  font-weight: 700;
  font-size: 1.5rem;

  span {
    color: #800000;
  }
`;

const EmptyCart = styled.div`
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Cart(props) {
  return (
    <Wrapper>
      <Scrollbars
        style={{ width: "100%", height: "100%" }}
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
      >
        {props.data.length > 0 ? (
          props.data.map((items, index) => {
            return (
              <CartItem
                key={items.productKey}
                index={index}
                image={items.url}
                name={items.productName}
                price={items.price}
                quantity={items.qty}
                addClick={() => {
                  props.addClick(index);
                }}
                subsClick={() => {
                  props.subsClick(index);
                }}
                removeItem={() => {
                  props.removeItem(index);
                }}
              />
            );
          })
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </Scrollbars>

      <TotalCost>
        Your total: <span>{props.myTotal}</span>
      </TotalCost>
    </Wrapper>
  );
}

export default Cart;
