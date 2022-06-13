const LinearProgress: React.FC = () => {
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <div className="w-[70vw]">
        <div className="mb-1 text-base font-medium dark:text-white">
          Loading...
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="w-full bg-sky-400 h-2.5 rounded-full dark:bg-gray-300 animate-linear-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LinearProgress;
