import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 242, 247);
  margin: 0.5rem;
  width: 15rem;
  min-height: 2.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 22px 22px 0px;
  cursor: pointer;

  h2 {
    text-decoration: none;
    color: rgb(80, 32, 80);
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

function Categories(props) {
  return (
    <ListItem>
      <Wrapper onClick={props.onClick}>
        <h2>{props.category}</h2>
      </Wrapper>
    </ListItem>
  );
}

export default Categories;
