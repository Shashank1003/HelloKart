import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #39dff3; */
  background-color: rgb(80, 32, 80);
  padding: 1rem;
  color: rgb(247, 242, 247);
`;

const HeadingWrapper = styled.div`
  font-size: 1.2rem;
  margin-left: 2rem;
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 13rem;
  font-size: 1.2rem;
  margin-right: 2rem;
`;

const CartWrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

const TotalItems = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserWrapper = styled.div`
  cursor: pointer;
`;

function Header(props) {
  return (
    <Container>
      <HeadingWrapper>
        <h1>HelloKart</h1>
      </HeadingWrapper>

      <ButtonsWrapper>
        <CartWrapper onClick={props.showCart}>
          Cart <i className="fas fa-shopping-cart"></i>
          <TotalItems>
            <p>{props.totalItems}</p>
          </TotalItems>
        </CartWrapper>

        <UserWrapper>
          David <i className="fas fa-user"></i>
        </UserWrapper>
      </ButtonsWrapper>
    </Container>
  );
}

export default Header;
