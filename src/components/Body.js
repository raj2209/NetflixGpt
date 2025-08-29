import { Outlet } from 'react-router-dom';
import Header from './Header';
import AuthStateObserver from './AuthStateObserver';

const Body = () => {
  return (
    <>
      <AuthStateObserver />
      <Header />
      {/* Wrapper div around Outlet to create space below the header */}
      {/* <div className="outlet-container pt-16"> */}
        <Outlet />
      {/* </div> */}
    </>
  );
};

export default Body;
