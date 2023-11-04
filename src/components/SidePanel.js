import { Link } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import { SearchIcon, ChatIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';
import {
  BsBookmark,
  BsBookmarkCheck,
  BsBookmarkX,
  BsEyeSlash,
} from 'react-icons/bs';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { SiFoodpanda } from 'react-icons/si';

const SidePanel = () => {
  return (
    <div className="flex h-screen p-2 pt-8 border-r">
      <div className="flex flex-col ml-2 w-48 overflow-y-auto">
        <div className="flex flex-col py-4 px-2">
          <div className="flex  font-bold text-xl mb-4 ">
            <div className="flex justify-center items-center mr-2">
              <Icon as={MdSettings} className="" />
            </div>
            <span className="flex justify-center items-center">Ezjobhunt</span>
          </div>
          <div className="text-xs">
            Discover exciting jobs and track applications in one place.
          </div>
        </div>
        <Divider />
        <div className="py-4 text-sm text-orange-600">
          Employers / Post a Job
        </div>
        <Divider />
        <div className="flex flex-col py-4 px-2">
          <div className="flex items-center">
            <span className="text-xs font-bold text-gray-500">Job Search</span>
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            <Link className="flex items-center space-x-2 font-medium text-sm bg-gray-200 py-1.5 px-2 rounded">
              <SearchIcon />
              <span>Discover</span>
            </Link>
            <Link>
              <Icon as={SiFoodpanda} />
              <span>Mochi</span>
            </Link>
            <Link>
              <ChatIcon />
              <span>Inbox</span>
            </Link>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col py-4 px-2">
          <span className="text-xs font-bold text-gray-500">
            Application Tracker
          </span>
          <div className="mt-4 flex flex-col space-y-4">
            <Link className="flex items-center space-x-2 font-medium text-sm">
              <Icon as={BsBookmark} />
              <span>Saved</span>
            </Link>
            <Link className="flex items-center space-x-2 font-medium text-sm">
              <Icon as={BsBookmarkCheck} />
              <span>Applied</span>
            </Link>
            <Link className="flex items-center space-x-2 font-medium text-sm">
              <Icon as={HiOutlinePaperAirplane} />
              <span>Interviewing</span>
            </Link>
            <Link className="flex items-center space-x-2 font-medium text-sm">
              <Icon as={BsBookmarkX} />
              <span>Rejected</span>
            </Link>
            <Link className="flex items-center space-x-2 font-medium text-sm">
              <Icon as={BsEyeSlash} />
              <span>Hidden</span>
            </Link>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col py-4 px-2">
          <div className="mt-4 flex flex-col space-y-4">
            <span>About Ezjobhunt</span>
            <span>Feature Requests</span>
            <span>How it Works</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
