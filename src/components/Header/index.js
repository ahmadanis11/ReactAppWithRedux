import React from "react";


const Header = ({ThemeColor=false, pathname=""}) => {
  return (
    <div className={`flex justify-between pt-4 pb-4 fixed top-0 w-full z-20 bg-white drop-shadow`}>
      <div className="w-6/12 pl-14 flex items-center">
        <p className="text-black capitalize pl-3 text-sm font-bold text-lg">Home</p>
      </div>
      <div className="w-6/12 flex justify-end pr-10 items-center">
        <div className={`w-6/12 flex justify-end pl-5 items-center text-black`}>
          <div className="pl-5 pr-2">
            <div className="capitalize">
              {"Ahmad Anis"}
            </div>
            <div className="paragraphs_fonts font-thin text-xs capitalize">
              Status: Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
