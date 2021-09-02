import React from "react";
import styled from "styled-components";
import Categories from "./Categories";

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(80, 32, 80);
  padding: 0.5rem;
  width: 18rem;
  min-height: 100vh;
  align-items: center;
  padding-top: 3rem;
  border-radius: 0px 20px 20px 0px;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
`;

function SideBar(props) {
  return (
    <SideBarWrapper>
      <ul>
        {props.data.map((item, index) => {
          return (
            <Categories
              key={index}
              id={index}
              category={item.category}
              onClick={() => {
                props.onClick(index);
              }}
            />
          );
        })}
      </ul>
    </SideBarWrapper>
  );
}

export default SideBar;
