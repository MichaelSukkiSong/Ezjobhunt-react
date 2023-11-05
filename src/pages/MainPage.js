import MainPagePC from './MainPagePC';
import MainPageMobile from './MainPageMobile';

const MainPage = () => {
  return (
    <>
      <div className="block p-4 md:p-0 md:hidden">
        <MainPageMobile />
      </div>
      <div className="hidden md:block">
        <MainPagePC />
      </div>
    </>
  );
};

export default MainPage;
