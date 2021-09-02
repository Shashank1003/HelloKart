import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import products from "../products";
import MainItems from "./MainItems";
import Cart from "./Cart";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
`;

function App() {
  const [indexValue, setIndexValue] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cartTrigger, setCartTrigger] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [myTotal, setMyTotal] = useState(0);

  // to format number to INR
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });

  // To display items of a particular category
  const categoryClickHandler = (index) => {
    setIndexValue(index);
  };

  // When item is added to cart
  const addToCartHandler = (item) => {
    const exists = cartItems.find((x) => x.productKey === item.productKey);

    // if item is already in cart, no need to re-add it. Just increase the quantity
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x.productKey === item.productKey
            ? { ...exists, qty: exists.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
    setTotalItems((preVal) => {
      return preVal + 1;
    });

    setMyTotal((preVal) => {
      return (preVal = preVal + item.price);
    });
  };

  // add one more item
  const addHandler = (index) => {
    setCartItems((preVal) => {
      preVal[index].qty = preVal[index].qty + 1;
      return preVal;
    });

    setMyTotal((preVal) => {
      return (preVal = preVal + cartItems[index].price);
    });

    return setTotalItems((preVal) => {
      return preVal + 1;
    });
  };

  // remove one item
  const subsHandler = (index) => {
    setCartItems((preVal) => {
      if (preVal[index].qty > 1) {
        preVal[index].qty = preVal[index].qty - 1;
        return preVal;
      } else {
        preVal.splice(index, 1);
        return preVal;
      }
    });

    setMyTotal((preVal) => {
      return (preVal = preVal - cartItems[index].price);
    });

    return setTotalItems((preVal) => {
      return preVal - 1;
    });
  };

  // To delete item from cart
  const removeItemHandler = (index) => {
    const existingItems = cartItems[index].qty;
    const existingPrice = cartItems[index].price;

    setTotalItems((preVal) => {
      return (preVal = preVal - existingItems);
    });

    setMyTotal((preVal) => {
      return (preVal = preVal - existingItems * existingPrice);
    });

    return setCartItems((preVal) => {
      preVal.splice(index, 1);
      return preVal;
    });
  };

  // Open or close cart
  const cartToggle = () => {
    setCartTrigger((preVal) => {
      return !preVal;
    });
  };

  return (
    <>
      <Header showCart={cartToggle} totalItems={totalItems} />

      <ContentWrapper>
        <SideBar data={products} onClick={categoryClickHandler} />
        <MainItems
          data={products}
          id={indexValue}
          addToCart={addToCartHandler}
        />
      </ContentWrapper>

      {cartTrigger && (
        <Cart
          data={cartItems}
          addClick={addHandler}
          subsClick={subsHandler}
          removeItem={removeItemHandler}
          myTotal={formatter.format(myTotal)}
        />
      )}
    </>
  );
}

export default App;
