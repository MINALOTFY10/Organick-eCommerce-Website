import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { storeActions } from "../../store";

const CartItem = (props) => {
  const { id, title, quantity, total, price, description } = props.item;
  const dispatch = useDispatch();

  const onAddToCartHandler = () => {
    dispatch(
      storeActions.addItem({ id, title, price, description, quantity: 1 })
    );
  };

  const onRemoveFromCartHandler = () => {
    dispatch(
      storeActions.removeItem(id)
    );
    
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveFromCartHandler}>-</button>
          <button onClick={onAddToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
