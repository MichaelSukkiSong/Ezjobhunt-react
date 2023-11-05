import MainPanel from '../components/MainPanel';
import SidePanel from '../components/SidePanel';

const MainPagePC = () => {
  return (
    <div className="flex h-screen">
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default MainPagePC;
