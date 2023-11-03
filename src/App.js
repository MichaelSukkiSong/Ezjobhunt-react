import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './pages/layouts/Layout';
import MainPage from './pages/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="jobTracker">
          <Route path="saved-jobs" />
          <Route path="applied-jobs" />
          <Route path="interviewing-jobs" />
          <Route path="rejected-jobs" />
          <Route path="hidden-jobs" />
        </Route>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
