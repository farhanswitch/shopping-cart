import { RiShoppingCartLine } from "react-icons/ri";

type Props = {
  handleClick: () => void;
  total: number;
};
const Nav: React.FC<Props> = ({ handleClick, total }) => {
  return (
    <nav className="w-screen min-h-[10vh] bg-blue-800/80 backdrop-blur-md text-white sticky top-0 z-[10]">
      <div className="inner-nav flex items-center justify-around mx-auto h-[10vh] w-full max-w-6xl">
        <div className="brand text-2xl font-bold">Shoppy</div>
        <div className="icon text-2xl relative" onClick={handleClick}>
          <RiShoppingCartLine />
          <div className="w-4 h-4 text-xs  rounded-full flex items-center justify-center bg-white text-blue-500 absolute -top-2 -right-2">
            {total}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
