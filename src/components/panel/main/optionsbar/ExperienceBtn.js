import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react';

const ExperienceBtn = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="border rounded-xl p-2">
          <span>Experience</span>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>Experience</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ExperienceBtn;
