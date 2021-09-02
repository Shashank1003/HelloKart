import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function MainItems(props) {
  return (
    <Wrapper>
      {props.data[props.id].items.map((item, index) => {
        return (
          <Item
            index={index}
            key={index}
            image={item.url}
            name={item.productName}
            price={item.price}
            productKey={item.productKey}
            addToCart={() => {
              props.addToCart(props.data[props.id].items[index]);
            }}
          />
        );
      })}
    </Wrapper>
  );
}

export default MainItems;
