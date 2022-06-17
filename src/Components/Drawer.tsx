type Props = {
  isOpen: boolean;
  children: JSX.Element;
};
const Drawer: React.FC<Props> = ({ isOpen, children }) => {
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } w-screen md:w-1/2 h-[90vh] overflow-auto z-[99] right-0 bg-stone-300/90 backdrop-blur-lg `}
    >
      {children}
    </div>
  );
};

export default Drawer;
