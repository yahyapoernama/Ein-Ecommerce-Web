import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

interface AppLayoutProps {
  withSidebar?: boolean;
}

const LayoutContent: React.FC<AppLayoutProps> = ({ withSidebar = true }) => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      {withSidebar && (
        <>
          <div>
            <AppSidebar />
            <Backdrop />
          </div>
          <div
            className={`flex-1 transition-all duration-300 ease-in-out ${
              isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
            } ${isMobileOpen ? "ml-0" : ""}`}
          >
            <AppHeader withSidebar={withSidebar} />
            <div className="p-4 mx-auto max-w-screen-2xl md:p-6">
              <Outlet />
            </div>
          </div>
        </>
      )}
      {!withSidebar && (
        <div className="flex-1 mx-auto">
          <AppHeader withSidebar={withSidebar} />
          <Outlet />
        </div>
      )}
    </div>
  );
};

const AppLayout: React.FC<AppLayoutProps> = ({ withSidebar = true }) => {
  return (
    <SidebarProvider>
      <LayoutContent withSidebar={withSidebar} />
    </SidebarProvider>
  );
};

export default AppLayout;

