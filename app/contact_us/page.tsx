import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mt-[150px] grid grid-cols-1 items-center md:grid-cols-2 gap-[10%] px-[50px] md:px-[150px] mb-[70px]">
      <div className="flex flex-col gap-[30px]">
        <p className="text-3xl text-[#143B86]">تماس با ما</p>
        <p className="text-justify">
          خط ویژه کارشناسان فروش و پشتیبانی با توجه به اختلالات اینترنتی درصورتی
          که برای تماس با شرکت دچار مشکل هستید با شماره های ۰۹۱۲۱۸۲۶۷۴۸ برای
          واحد فروش و شماره ۰۹۳۸۳۳۶۱۹۳۹ برای واحد پشتیبانی تماس حاصل فرمایید.
        </p>
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[45px] items-center">
            <Image src="/icons/email.svg" width={30} height={30} alt="email" />
            <p>example@teamwebflow.com</p>
          </div>
          <div className="flex gap-[45px] items-center">
            <Image
              src="/icons/property-location.svg"
              width={30}
              height={30}
              alt="location"
            />
            <p>تهران، تهران ، تهران</p>
          </div>
          <div className="flex gap-[45px] items-center">
            <Image
              src="/icons/mobile-chat.svg"
              width={30}
              height={30}
              alt="location"
            />
            <p>موبایل</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="نام"
          className="w-[70%] md:w-[70%] lg:w-[100%] focus:outline-none border-[3px] border-[rgba(0,0,0,0.1)] rounded-md py-[5px] pr-2"
        />
        <input
          type="text"
          name="family"
          id="family"
          placeholder="نام خانوادگی"
          className="w-[70%] md:w-[70%] lg:w-[100%] focus:outline-none border-[3px] border-[rgba(0,0,0,0.1)] rounded-md py-[5px] pr-2"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ایمیل"
          className="w-[70%] md:w-[70%] lg:w-[100%] focus:outline-none border-[3px] border-[rgba(0,0,0,0.1)] rounded-md py-[5px] pr-2"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="نظر"
          className="w-[70%] md:w-[70%] lg:w-[100%] focus:outline-none border-[3px] border-[rgba(0,0,0,0.1)] rounded-md py-[5px] pr-2"
        />

        <div className="bg-linear-to-bl from-[#143B86] to-[#F2B600] py-[5px] rounded-md">
          <p className="text-center">ارسال</p>
        </div>
      </div>
    </div>
  );
};

export default page;
