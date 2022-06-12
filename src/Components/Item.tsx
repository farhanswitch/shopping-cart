import { CartItemType } from "../App";

//Type
type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div className="h-full font-['SF Pro Display'] relative py-14">
    <img
      className="max-h-[250px] object-cover rounded-tl-[20px] rounded-tr-[20px] block mx-auto"
      src={item.image}
      alt={item.title}
    />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>$ {item.price}</h3>
    </div>
    <button
      className="rounded-bl-[20px] rounded-br-[20px] bg-white hover:bg-stone-300 text-slate-700 w-full text-center absolute bottom-0 py-2"
      onClick={() => handleAddToCart(item)}
    >
      Add To Cart
    </button>
  </div>
);

export default Item;
