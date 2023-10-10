import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { useSelector,useDispatch } from "react-redux";
import { toggleActions } from "../../store";

const Cart = (props) => {
  const itemsArray = useSelector((state) => state.store.items);
  const totalPrice = useSelector((state) => state.store.totalPrice);
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(toggleActions.toggleCart())
  }


  const cartItem = itemsArray.map((item) => (
    <ul key={item.id}>
      {
        <CartItem
          item={{
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            total: parseInt(item.quantity) * parseInt(item.price),
            price: item.price,
            description: item.description,
          }}
        />
      }
    </ul>
  ));

  return (
    <Modal onClose={closeCartHandler}>
      <Card className={classes.cart}>
        <div className={classes["cart-header"]}>
          <h2>Shopping Cart</h2>
          <button onClick={closeCartHandler} className={`${classes["exit-button"]}`}>Exit</button>
        </div>
        {totalPrice != 0 ? <p>Total Price: ${totalPrice.toFixed(2)}</p> : ""}
        
        <div>{itemsArray.length == 0 ? "The Cart Is Empty" : cartItem}</div>
      </Card>
    </Modal>
  );
};

export default Cart;
