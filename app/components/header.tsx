import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-[10px] px-[10px] gap-[10px]">
      <div className="bg-[#153D8A] flex justify-center items-center p-[8px] rounded-sm">
        <Image
          src="/icons/phone.svg"
          alt="Company Logo"
          width={20}
          height={21}
        />
      </div>
      <div>
        <Image
          src="/icons/Ratin.svg"
          width={214}
          height={20}
          alt="Company Logo"
        />
      </div>
      <div className="bg-[#153D8A] flex justify-center items-center p-[8px] rounded-sm">
        <Image
          src="/icons/burger-menu-right-svgrepo-com.svg"
          width={30}
          height={30}
          alt="Company Logo"
        />
      </div>
    </header>
  );
};

export default Header;
