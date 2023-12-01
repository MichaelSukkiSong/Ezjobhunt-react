import { useEffect } from 'react';
import JDcard from './JDcard';
import fetchjobs from '../../../apis/fetchjobs';

const JDgrid = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetchjobs('doordash', 'greenhouse');
      // TODO: Use cloud functions instead of using state in react.
      // fetch job->store in firebase->trigger save event->parse data->show in client
      console.log(response);
    }
    fetchData();
  }, []);

  const renderJDcard = () => {
    return <JDcard />;
  };

  return (
    <div className="infinite-scroll-component__outerdiv">
      <div className="infinite-scroll-component ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {renderJDcard()}
        </div>
      </div>
    </div>
  );
};

export default JDgrid;
