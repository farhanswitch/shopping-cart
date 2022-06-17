import "./styles/style.css";
import { useState } from "react";
import { useQuery } from "react-query";
import LinearProgress from "./Components/LinearProgress";
import Item from "./Components/Item";
import Cart from "./Components/Cart";
import Drawer from "./Components/Drawer";
import Nav from "./Components/Nav";
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();
const App: React.FC = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<[] | CartItemType[]>([]);
  const handleOpenDrawer = () => setIsOpen(!isOpen);
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);
  const getTotal = getTotalItems(cartItems);
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInTheCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInTheCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveToCart = (id: number) => {
    let newCartItems: CartItemType[] = [];
    cartItems.forEach((item) => {
      if (item.id === id) {
        if (item.amount !== 1) {
          newCartItems.push({ ...item, amount: item.amount - 1 });
        }
      } else {
        newCartItems.push({ ...item });
      }
    });
    setCartItems(newCartItems);
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ... </div>;
  return (
    <div className="App font-inter">
      <Nav handleClick={handleOpenDrawer} total={getTotal} />
      <Drawer isOpen={isOpen}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveToCart}
        />
      </Drawer>
      <div className="grid-container grid gap-4 grid-cols-1 sm:grid-cols-3 px-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="flex flex-column justify-between w-full h-full border border-stone-300 rounded-[20px]"
          >
            <Item item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
