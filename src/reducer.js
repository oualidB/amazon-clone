export const initialState = {
  basket: [
    {
      id: "123441",
      title: "Casque Bluetooth",
      price: 39.96,
      rating: 3,
      image:
        "https://www.amazon.fr/images/I/71DBS8i2OuL._AC_SL1500__AA210_.jpg",
    },
    {
      id: "123441",
      title: "Casque Bluetooth",
      price: 39.96,
      rating: 3,
      image:
        "https://www.amazon.fr/images/I/71DBS8i2OuL._AC_SL1500__AA210_.jpg",
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`the product doesn't exist !!!`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
