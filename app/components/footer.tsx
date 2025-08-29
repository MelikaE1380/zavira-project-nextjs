import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main text-white">
      <div className="px-[70px] py-[25px] flex justify-between gap-[3%]">
        <div>
          <span className="font-bold">خدمات راتین</span>
        </div>
        <div>
          <span className="font-bold">خدمات راتین</span>
        </div>
        <div>
          <span className="font-bold">خدمات راتین</span>
        </div>
        <div>
          <span className="font-bold">خدمات راتین</span>
        </div>
        <div>
          <Image
            src="/images/logo.aspx_.png"
            alt="enamad"
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="py-[25px] flex justify-between items-center px-[50px] border-t-[3px] border-[rgba(255,255,255,0.1)]">
        <p>
          کلیه حقوق مادی و معنوی برای آژانس دیجیتال مارکتینگ راتین محفوظ است.
        </p>
        <div className="flex ">
          <div className="flex justify-center items-center">
            <Image
              src="/icons/twitter.svg"
              alt="twitter"
              width={20}
              height={20}
            />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <Image
              src="/icons/telegram.svg"
              alt="telegram"
              width={40}
              height={40}
            />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <Image
              src="/icons/Instagram.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
