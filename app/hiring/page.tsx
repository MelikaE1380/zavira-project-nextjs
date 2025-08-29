import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="px-[150px] flex gap-[5%] mt-[150px]">
        <div>
          <p className="font-medium text-[18px]">مزایای تیم ما</p>
          <p className="font-bold text-[36px]  text-main">
            چرا باید به تیم فوق‌العاده ما بپیوندید؟
          </p>
          <p className="text-[14px]">
            ما می‌خواهیم وقتی در JMC (شرکت محدود بازاریابی و مشاوره ژاپن) کار
            می‌کنید، احساس کنید که در خانه خودتان هستید و به همین دلیل مجموعه‌ای
            عالی از مزایا را برای شما در نظر گرفته‌ایم. همه چیز با ناهار رایگان
            شروع می‌شود!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <div className="inline-block  items-center p-[34px] bg-[#F1F7E8]">
              <Image
                width={38}
                height={38}
                alt="team work"
                src="/icons/teamWork.svg"
              />
            </div>
            <p>کار تیمی</p>
            <p>
              لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است. لورم
              ایپسوم از دیرباز این صنعت بوده است.
            </p>
          </div>
          <div>
            <div className="inline-block  items-center p-[34px] bg-[#E7F2FF]">
              {" "}
              <Image
                width={38}
                height={38}
                alt="secure future"
                src="/icons/secureFuture.svg"
              />
            </div>
            <p>کار تیمی</p>
            <p>
              لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است. لورم
              ایپسوم از دیرباز این صنعت بوده است.
            </p>
          </div>
          <div>
            <div className="inline-block  items-center p-[34px] bg-[#FFEEED]">
              {" "}
              <Image
                width={38}
                height={38}
                alt="secure future"
                src="/icons/secureFuture.svg"
              />
            </div>
            <p>کار تیمی</p>
            <p>
              لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است. لورم
              ایپسوم از دیرباز این صنعت بوده است.
            </p>
          </div>
          <div>
            <div className="inline-block  items-center p-[34px] bg-[#FFEEED]">
              {" "}
              <Image
                width={38}
                height={38}
                alt="secure future"
                src="/icons/secureFuture.svg"
              />
            </div>
            <p>کار تیمی</p>
            <p>
              لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است. لورم
              ایپسوم از دیرباز این صنعت بوده است.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9F9] mt-[70px] py-[96px] flex flex-col items-center">
        <p>به ما بپیوندید</p>
        <p>فرصت های شغلی</p>
        <p>
          ما همیشه به دنبال افراد خلاق، بااستعداد و خودجوش برای پیوستن به
          خانواده JMC هستیم. موقعیت‌های شغلی خالی ما را در زیر بررسی کنید و فرم
          درخواست را پر کنید.
        </p>
      </div>
    </div>
  );
};

export default page;
