import { Divider } from '@chakra-ui/react';

const SidePanel = () => {
  return (
    <div>
      <div className="flex h-screen p-2 pt-8 border-r">
        <div className="flex flex-col ml-2 w-48 overflow-y-auto">
          <div className="flex flex-col p-2">
            <div>Ezjobhunt</div>
            <div>
              Discover exciting jobs and track applications in one place.
            </div>
          </div>
          <Divider />
          <div className="p-2">Employers / Post a Job</div>
          <Divider />
          <div className="flex flex-col p-2">
            <div>Talent Network</div>
            <div>Mochi</div>
            <div>Inbox</div>
          </div>
          <Divider />
          <div className="flex flex-col p-2">
            <div>Discover Jobs</div>
            <div>WFH</div>
            <div>Office</div>
            <div>Espresso</div>
            <div>Boba</div>
          </div>
          <Divider />
          <div className="flex flex-col p-2">
            <div>Application Tracker</div>
            <div>Saved</div>
            <div>Applied</div>
            <div>Interviewing</div>
            <div>Rejected</div>
            <div>Hidden</div>
          </div>
          <Divider />
          <div className="flex flex-col p-2">
            <div>About Ezjobhunt</div>
            <div>Feature Requests</div>
            <div>How it Works</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
