import { CartItemType } from "../App";
import CartItem from "./CartItem";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <aside className="w-[500px p-[20px]">
      <h2 className="text-xl text-center mb-2">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center py-8 text-red-600">No items in cart</p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </aside>
  );
};

export default Cart;
