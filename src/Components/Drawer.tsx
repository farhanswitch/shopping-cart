type Props = {
  isOpen: boolean;
};
const Drawer: React.FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } w-1/2 h-[90vh] z-[99] right-0 bg-stone-800/50 backdrop-blur-md `}
    >
      <h3>Drawer</h3>
      <p>Cek</p>
    </div>
  );
};

export default Drawer;
