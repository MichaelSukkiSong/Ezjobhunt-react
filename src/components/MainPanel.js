import { SearchIcon } from '@chakra-ui/icons';

const MainPanel = () => {
  return (
    <div className="h-screen p-4 w-full">
      <div className="md:px-2">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="flex items-center bg-white pr-2 rounded-md border border-gray-300 focus-within:border-black ">
              <button className="bg-gray-100 text-gray-800 p-2 rounded-l ">
                <SearchIcon />
              </button>
              <input
                className="pl-3 grow outline-none placeholder:text-sm placeholder:md:text-base"
                placeholder="Job Title / Requirements / Tech..."
              />
            </div>
          </div>
          <div className="mt-4 mb-2"></div>
          <div className="flex items-center my-2 mb-4 ml-2 space-x-4"></div>
          <div className="infinite-scroll-component__outerdiv"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
