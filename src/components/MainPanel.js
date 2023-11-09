import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Switch } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const MainPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <div className="flex flex-row items-center space-x-2 border rounded-xl outline-none w-1/3">
                <button
                  onClick={onOpen}
                  className="flex flex-auto items-center justify-between space-x-4 p-2"
                >
                  <div className="flex items-center space-x-2 px-2 ">
                    <span>Location</span>
                    <ChevronDownIcon boxSize={4} />
                  </div>
                </button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody></ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>

              <div className="flex flex-row flex-none items-center space-x-2 border rounded-xl outline-none p-2">
                <span>Remote Only</span>
                <Switch />
              </div>
              <select className="border rounded-xl p-2 w-full">
                <option value>Any Role</option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Project Management">Project Management</option>
                <option value="Finance">Finance</option>
                <option value="Data Science">Data Science</option>
                <option value="Recruiting & HR">Recruiting & HR</option>
                <option value="Legal">Legal</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Business Operations">Business Operations</option>
              </select>
              <select className="border rounded-xl p-2">
                <option value="Any">Any Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Other">Other</option>
              </select>
              <Popover>
                <PopoverTrigger>
                  <button className="border rounded-xl p-2">
                    <span>Experience</span>
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Experience</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <div className="flex flex-row flex-none items-center space-x-2 border rounded-xl outline-none p-2">
                <span>Transparent Salaries Only</span>
                <Switch />
              </div>
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
