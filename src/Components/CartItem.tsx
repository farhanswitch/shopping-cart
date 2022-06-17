import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="flex flex-col justify-between  border-b border-blue-700 pb-[20px]">
      <h3 className="text-md text-slate-800 text-center my-2">{item.title}</h3>
      <div className="pict bg-white w-full flex mt-4 py-4 rounded-xl">
        <img
          src={item.image}
          alt={item.title}
          className="max-w-[80px] object-cover m-auto"
        />
      </div>
      <div className="information flex-1 flex justify-between px-4 my-3 text-sm text-slate-800">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons flex-1 flex items-center justify-around">
        <button
          className="bg-white/60 hover:bg-gray-200 rounded  px-4 py-1 shadow shadow-slate-600/30 text-2xl text-blue-700"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </button>
        <p className="text-slate-900 text-lg">{item.amount}</p>
        <button
          className="bg-white/60 hover:bg-gray-200 rounded  px-4 py-1 shadow shadow-slate-600/30 text-2xl text-blue-700"
          onClick={() => addToCart(item)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
