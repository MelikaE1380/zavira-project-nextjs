"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function burgerMenu() {
    setIsBurgerOpen(true);
  }

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-[10px] px-[10px] gap-[10px] mb-[35px]">
      <div
        onClick={burgerMenu}
        className="bg-[#143B86] flex justify-center items-center p-[8px] rounded-sm lg:hidden"
      >
        <Image
          src="/icons/burger-menu-right-svgrepo-com.svg"
          width={30}
          height={30}
          alt="burger-menu Logo"
        />
      </div>

      {/* {isBurgerOpen && <div className="z-10">hdjhjd</div>} */}

      <div className="flex flex-col items-center">
        <Image
          className="w-[50%]"
          src="/icons/Ratin.svg"
          width={214}
          height={20}
          alt="Company Logo"
        />
        <p className="text-center lg:hidden">آژانس دیجیتال مارکتینگ زویرا</p>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-16">
        <span>
          <Link href="/">خانه</Link>
        </span>
        <span>
          <Link href="/about">درباره ما</Link>
        </span>
        <span>
          <Link href="/contact_us">تماس با ما</Link>
        </span>
        <span>
          <Link href="/blog">وبلاگ</Link>
        </span>
      </div>
      <div className="bg-[#153D8A] flex justify-center items-center p-[8px] rounded-sm">
        <Image src="/icons/phone.svg" alt="phone Logo" width={20} height={21} />
      </div>
    </header>
  );
};

export default Header;
