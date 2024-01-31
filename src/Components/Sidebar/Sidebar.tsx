import React from "react";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <h3 className="text-[36px] font-bold">Sidebar</h3>
      </div>
    </aside>
  );
};

export default Sidebar;
