import MainPanel from '../components/MainPanel';
import SidePanel from '../components/SidePanel';

const MainPage = () => {
  return (
    <div className="flex h-screen">
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default MainPage;
