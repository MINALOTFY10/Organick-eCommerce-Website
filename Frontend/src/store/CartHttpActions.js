import { toggleActions } from ".";
import { storeActions } from ".";
import { useSelector } from "react-redux";
let globalID = -1;

export const fetchCartData = (userEmail) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const result = userEmail.match(/^([^@]*)@/)[0];

      const response = await fetch(
        `https://organick-site-default-rtdb.firebaseio.com/users/${result}/cart.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        storeActions.replaceCart({
          items: cartData.items || [],
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart, userEmail) => {
  return async (dispatch) => {
    try {
      // Use await to get the key from findCurrentUserIDData
      const result = userEmail.match(/^([^@]*)@/)[0];
       
      const response = await fetch(
        `https://organick-site-default-rtdb.firebaseio.com/users/${result}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalPrice: cart.totalPrice,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendUserData = (user) => {
  return async () => {
    try {
      // Check if the user's email already exists in the database
      const response = await fetch(
        "https://organick-site-default-rtdb.firebaseio.com/users.json"
      );

      if (!response.ok) {
        throw new Error("Checking user data failed.");
      }

      const data = await response.json();

      let userExists = false;

      for (const key in data) {
        if (data[key].userEmail === user.email) {
          userExists = true;
          break;
        }
      }

      if (!userExists) {
        // User doesn't exist, send user data to the database with the specified userId
        const result = user.email.match(/^([^@]*)@/)[0];

        const addUserResponse = await fetch(
          `https://organick-site-default-rtdb.firebaseio.com/users/${result}.json`,
          {
            method: "PUT", // Use PUT to update or create if it doesn't exist
            body: JSON.stringify({
              userEmail: user.email,
              userPassword: user.password,
            }),
          }
        );

        if (!addUserResponse.ok) {
          throw new Error("Sending user data failed.");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const findCurrentUserIDData = async (email) => {
  try {
    const response = await fetch(
      "https://organick-site-default-rtdb.firebaseio.com/users.json"
    );

    if (!response.ok) {
      throw new Error("Checking user data failed.");
    }

    const data = await response.json();

    for (const key in data) {
      if (data[key].userEmail === email) {
        console.log(key);
        return key;
        break;
      }
    }

    if (!response.ok) {
      throw new Error("Sending cart data failed.");
    }
  } catch (error) {
    console.error(error);
  }
};
