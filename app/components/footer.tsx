import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-main text-white">
      <div className="flex px-[25px] py-[25px]">
        <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-4 gap-[25px]">
          <div>
            <span className="font-bold">خدمات زویرا</span>
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن
              ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهوم
            </p>
          </div>
          <div>
            <span className="font-bold">خدمات زویرا</span>
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن
              ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهوم
            </p>{" "}
          </div>
          <div>
            <span className="font-bold">خدمات زویرا</span>
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن
              ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهوم
            </p>{" "}
          </div>
          <div>
            <span className="font-bold">خدمات زویرا</span>
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن
              ساختگی با تولید سادگی نامفهوممتن ساختگی با تولید سادگی نامفهوم
            </p>{" "}
          </div>
        </div>
        <div>
          <Image
            src="/images/logo.aspx_.png"
            alt="enamad"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="py-[25px] grid grid-cols-1 md:flex justify-between items-center px-[50px] border-t-[3px] border-[rgba(255,255,255,0.1)]">
        <p>
          کلیه حقوق مادی و معنوی برای آژانس دیجیتال مارکتینگ زویرا محفوظ است.
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
