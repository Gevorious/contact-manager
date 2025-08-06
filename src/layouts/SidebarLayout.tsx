import { Outlet } from '@tanstack/react-router';
import Sidebar from '../components/SideBar';
import { AlertProvider, useAlert } from '../contexts/AlertContext';
import AlertBanner from '../components/AlertBanner';

const OutletWrapper = () => {
  const { message, type, hideAlert } = useAlert();
  return (
      <div className="relative flex flex-col min-h-screen">
        {message && (
          <div className="absolute top-0 left-0 w-full z-50">
            <AlertBanner
              message={message}
              type={type}
              onClose={hideAlert}
            />
          </div>
        )}
        <main className="flex-1 p-6 mt-8">
          <Outlet />
        </main>
      </div>
    );
};

const SidebarLayout = () => {
  return (
    <div className="flex ">
      {/* <div className="text-white p-4 space-y-6"> */}
        <Sidebar />
      {/* </div> */}
      <div className="flex-1 bg-gray-100">
          <AlertProvider>
            <OutletWrapper />
          </AlertProvider>
      </div>
    </div>
  );
};

export default SidebarLayout;