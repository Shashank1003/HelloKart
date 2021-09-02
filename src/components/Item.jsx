import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  margin-top: 5rem;
  margin-left: 3rem;
  padding: 2rem;
  background-color: rgb(247, 242, 247);
  height: 28rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  height: 15rem;
  width: 15rem;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5rem;
`;

const ItemName = styled.h3`
  color: rgb(80, 32, 80);
  font-weight: 700;
  font-size: 1.2rem;
  width: 9rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  color: #800000;
  font-weight: 500;
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const AddToCart = styled.button`
  border: none;
  background-color: rgb(223, 104, 164);
  height: 2.5rem;
  width: 10rem;
  color: rgb(80, 32, 80);
  font-weight: 500;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
`;

function Item(props) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  return (
    <ItemWrapper>
      <Image src={props.image} alt={props.name} />

      <TopContainer>
        <ItemName>{props.name}</ItemName>
        <Price>{formatter.format(props.price)}</Price>
      </TopContainer>

      <ButtonWrapper>
        <AddToCart onClick={props.addToCart}>Add to Cart</AddToCart>
      </ButtonWrapper>
    </ItemWrapper>
  );
}

export default Item;
