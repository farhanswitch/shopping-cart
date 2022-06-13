import "./styles/style.css";
import { useState } from "react";
import { useQuery } from "react-query";
import LinearProgress from "./Components/LinearProgress";
import Item from "./Components/Item";
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
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveToCart = () => null;
  console.log(data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ... </div>;
  return (
    <div className="App">
      <Nav handleClick={handleOpenDrawer} total={getTotal} />
      <Drawer isOpen={isOpen} />
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
