import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap gap-3 border-2 border-custom-purple-400 rounded-2xl items-center justify-between p-6 mt-5 bg-custom-purple-100">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex bg-custom-purple-400 w-14 h-14 items-center justify-center rounded-xl">
          <img src="/rocket.svg" alt="rocket" />
        </div>
        <div className="contentBox">
          <h3 className="text-custom-purple-400 font-bold text-[17px]">5 PCI Compliance Violations Detected !</h3>
          <p className="text-custom-purple-50 font-medium text-sm">Subheader Text</p>
        </div>
      </div>
      <button className="bg-custom-purple-400 rounded-xl p-3 text-white min-w-24 font-semibold text-[11px] transition ease-in-out hover:bg-black focus:bg-black">Register</button>
    </div>
  );
};

export default Header;
