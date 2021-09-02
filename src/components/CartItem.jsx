import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  background-color: rgb(247, 242, 247);
  width: 35rem;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  align-items: flex-start;
  width: 30rem;
  position: relative;
`;

const Name = styled.h3`
  color: rgb(80, 32, 80);
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Price = styled.p`
  color: #800000;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const QuantityWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
`;

const AddRemoveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
  font-weight: 500;
  font-size: 1.2rem;
`;

const AddRemove = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  height: 1.2rem;
  width: 1.2rem;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
`;

function CartItem(props) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  return (
    <Wrapper>
      <Image src={props.image} alt={props.name} />

      <DetailsWrapper>
        <Name>{props.name}</Name>
        <Price>{formatter.format(props.price)}</Price>

        <QuantityWrapper>
          <AddRemoveWrapper>
            <AddRemove onClick={props.subsClick}>
              <i className="fas fa-minus"></i>
            </AddRemove>

            <p>{props.quantity}</p>

            <AddRemove onClick={props.addClick}>
              <i className="fas fa-plus"></i>
            </AddRemove>
          </AddRemoveWrapper>

          <DeleteButton onClick={props.removeItem}>
            <i className="fas fa-trash-alt"></i>
          </DeleteButton>
        </QuantityWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
}

export default CartItem;
