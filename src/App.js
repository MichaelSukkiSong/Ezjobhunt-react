import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="mochi" />
        <Route path="inbox" />
        <Route path="jobTracker">
          <Route path="saved-jobs" />
          <Route path="applied-jobs" />
          <Route path="interviewing-jobs" />
          <Route path="rejected-jobs" />
          <Route path="hidden-jobs" />
        </Route>
        <Route path="backlog" />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
