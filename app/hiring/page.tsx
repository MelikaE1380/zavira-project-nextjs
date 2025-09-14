import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="px-[30px] grid grid-cols-1 md:grid-cols-2 lg:px-[55px] gap-[5%] mt-[150px]">
        <div>
          <p className="font-medium text-[18px]">مزایای تیم ما</p>
          <p className="font-bold text-[36px]  text-main">
            چرا باید به تیم فوق‌العاده ما بپیوندید؟
          </p>
          <p className="text-[14px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
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
            <div>
              <p>کار تیمی</p>
              <p>
                لورم ایپسوم به سادگی متنی ساختگی در صنعت چاپ و حروفچینی است.
                لورم ایپسوم از دیرباز این صنعت بوده است.
              </p>
            </div>
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
          خانواده زویرا هستیم. موقعیت‌های شغلی خالی ما را در زیر بررسی کنید و
          فرم درخواست را پر کنید.
        </p>
      </div>
    </div>
  );
};

export default page;
