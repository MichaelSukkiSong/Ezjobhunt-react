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
  Button,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const LocationBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('1');
  return (
    <div className="flex flex-row items-center space-x-2 border rounded-xl outline-none basis-1/2 ">
      <button
        onClick={onOpen}
        className="flex w-full items-center justify-center space-x-4 p-2 "
      >
        <div className="flex items-center space-x-2 px-2 justify-between   w-full">
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
  );
};

export default LocationBtn;
