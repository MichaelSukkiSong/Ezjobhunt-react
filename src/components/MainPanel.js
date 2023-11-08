import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Switch } from '@chakra-ui/react';

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
          <div className="mt-4 mb-2">
            <div className="flex text-sm font-medium w-full space-x-2">
              <div className="flex flex-row items-center space-x-2 border rounded-xl outline-none">
                <button className="flex flex-auto items-center justify-between space-x-4 p-2">
                  <div className="flex items-center space-x-2 px-2">
                    <span>Location</span>
                    <ChevronDownIcon boxSize={4} />
                  </div>
                </button>
              </div>
              <div className="flex flex-row items-center space-x-2 border rounded-xl outline-none p-2">
                <span>Remote Only</span>
                <Switch />
              </div>
              <select></select>
              <select></select>
              <button></button>
              <div></div>
            </div>
          </div>
          <div className="flex items-center my-2 mb-4 ml-2 space-x-4">
            <div>
              <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
          <div className="infinite-scroll-component__outerdiv">
            <div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
