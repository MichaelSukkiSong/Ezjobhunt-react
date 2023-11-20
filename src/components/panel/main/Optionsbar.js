import { useState } from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Switch,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Optionsbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('1');

  return (
    <div className="mt-4 mb-2">
      <div className="flex justify-center">
        <div className="flex text-sm font-medium w-10/12 space-x-2">
          <div className="flex flex-row items-center space-x-2 border rounded-xl outline-none">
            <button
              onClick={onOpen}
              className="flex flex-auto items-center justify-between space-x-4 p-2 "
            >
              <div className="flex items-center space-x-2 px-2">
                <span>Location</span>
                <ChevronDownIcon boxSize={4} />
              </div>
            </button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Location Preferences</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <div className="mb-8">
                    <RadioGroup onChange={setValue} value={value}>
                      <Stack direction="column">
                        <Radio value="1">Country</Radio>
                        {value === '1' ? <div>react-select</div> : null}
                        <Radio value="2">City</Radio>
                        <div>2</div>
                      </Stack>
                    </RadioGroup>
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
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
            <option value="Software Engineering">Software Engineering</option>
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
    </div>
  );
};

export default Optionsbar;
