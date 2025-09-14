import Image from "next/image";

export default function Home() {
  console.log("hey is this in the client or the server");
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>

    <div className="px-[20px] md:px-[50px]  lg:px-[80px] xl:px-[130px] 2xl:px-[160px] mt-[120px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-[180px]">
        <div className="md:w-[50%] flex justify-center flex-col gap-2">
          <p className="text-[#00A436] font-bold">
            آژانس دیجیتال مارکتینگ زویرا
          </p>
          <p className="text-main">کار را به کاردان بسپارید​</p>
          <p className="text-[#5B6570]">
            ما در آژانس زویرا با تجربه نزدیک به دو دهه فعالیت، تنها یک وظیفه
            برای خود متصور هستیم؛ اینکه خیال شما را از هر نوع خدمات در دایرهٔ
            دیجیتال مارکتینگ راحت کنیم. زویرا نقطهٔ اشتراک بین بازاریابی و
            تبلیغات با تکنولوژی و هنر است، جایی که افزایش فروش شما را هدف خواهد
            گرفت.
          </p>
          <div className="flex flex-col gap-4">
            <input
              placeholder="نام و نام خانوادگی خود را وارد نمایید"
              className="pr-[15px] border-main block border-[2px] px-[5px] py-[8px] focus:outline-0 rounded-3xl"
            />{" "}
            <input
              placeholder="شماره موبایل خود را وارد نمایید"
              className="pr-[15px] border-main border-[2px] px-[5px] py-[8px] focus:outline-0 rounded-3xl"
            />
            <div className="py-[10px] flex justify-center items-center bg-main rounded-3xl">
              <p className="text-white">شروع کنیم</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Image
            className="dark:invert"
            src="/images/header.png"
            width={550}
            height={406}
            alt="banner"
          />
        </div>
      </div>
      <div className="mt-[100px] flex flex-wrap justify-center gap-[30px] items-center">
        <div className="w-[90%] md:w-[65%] lg:w-[40%] xl:w-[28%] shadow-[0_0_6px_rgba(0,0,0,0.1)] p-[8px]">
          <div className="flex justify-center">
            <Image
              src="/icons/coding.svg"
              width={68}
              height={68}
              alt="coding"
            />
          </div>
          <p>چرا با خیال راحت به آژانس دیجیتال مارکتینگ زویرا اعتماد کنیم؟</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
        </div>
        <div className="w-[90%] md:w-[65%] lg:w-[40%] xl:w-[28%] shadow-[0_0_6px_rgba(0,0,0,0.1)] p-[8px]">
          <div className="flex justify-center">
            <Image
              src="/icons/coding.svg"
              width={68}
              height={68}
              alt="coding"
            />
          </div>
          <p>چرا با خیال راحت به آژانس دیجیتال مارکتینگ زویرا اعتماد کنیم؟</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
        </div>
        <div className="w-[90%] md:w-[65%] lg:w-[40%] xl:w-[28%] shadow-[0_0_6px_rgba(0,0,0,0.1)] p-[8px]">
          <div className="flex justify-center">
            <Image
              src="/icons/coding.svg"
              width={68}
              height={68}
              alt="coding"
            />
          </div>
          <p>چرا با خیال راحت به آژانس دیجیتال مارکتینگ زویرا اعتماد کنیم؟</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
        </div>{" "}
        <div className="w-[90%] md:w-[65%] lg:w-[40%] xl:w-[28%] shadow-[0_0_6px_rgba(0,0,0,0.1)] p-[8px]">
          <div className="flex justify-center">
            <Image
              src="/icons/coding.svg"
              width={68}
              height={68}
              alt="coding"
            />
          </div>
          <p>چرا با خیال راحت به آژانس دیجیتال مارکتینگ زویرا اعتماد کنیم؟</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
        </div>
        <div className="w-[90%] md:w-[65%] lg:w-[40%] xl:w-[28%] shadow-[0_0_6px_rgba(0,0,0,0.1)] p-[8px]">
          <div className="flex justify-center">
            <Image
              src="/icons/coding.svg"
              width={68}
              height={68}
              alt="coding"
            />
          </div>
          <p>چرا با خیال راحت به آژانس دیجیتال مارکتینگ زویرا اعتماد کنیم؟</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
        </div>
        <div className="w-[90%] md:w-[65%] lg:w-[40%] xl:w-[28%] shadow-[0_0_6px_rgba(0,0,0,0.1)] p-[8px]">
          <div className="flex justify-center">
            <Image
              src="/icons/coding.svg"
              width={68}
              height={68}
              alt="coding"
            />
          </div>
          <p>چرا با خیال راحت به آژانس دیجیتال مارکتینگ زویرا اعتماد کنیم؟</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
        </div>
        <div className="w-[90%] md:w-[65%] lg:w-[40%] xl:w-[28%] shadow-[0_0_6px_rgba(0,0,0,0.1)] p-[8px]">
          <div className="flex justify-center">
            <Image
              src="/icons/coding.svg"
              width={68}
              height={68}
              alt="coding"
            />
          </div>
          <p>چرا با خیال راحت به آژانس دیجیتال مارکتینگ زویرا اعتماد کنیم؟</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="flex justify-center items-center">
          <p className="text-main text-2xl font-bold">
            اینجا یک آژانس بازاریابی و تبلیغات دیجیتال است ولی با دو چهره
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-between mt-[25px]">
          <div className="bg-main px-[25px] py-[30px] rounded-3xl">
            <p className="text-white font-bold text-[30px]">چهره تکنولوژیک</p>
            <div>
              <ul className="list-disc text-white px-[50px] py-[25px]">
                <li>سرویس تبلیغاتی دیجیتال علاقه محور</li>
                <li>سرویس تبلیغاتی اپلیکیشن های موبایل</li>
                <li>نرم افزار CRM تحت وب</li>
                <li>پیاده سازی سرویس های تحت وب</li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/tt_1.png"
                width={400}
                height={263}
                alt="none"
              />
            </div>
          </div>
          <div className="bg-[#E8ECF3] px-[25px] py-[30px] rounded-3xl">
            <div className="flex justify-center items-center">
              {" "}
              <Image
                src="/images/tt_1.png"
                width={400}
                height={263}
                alt="none"
              />
            </div>
            <p className="text-main font-bold text-[30px]">
              چهره دیجیتال مارکتینگ
            </p>
            <div>
              <ul className="list-disc text-[#4464A1] px-[50px] py-[25px]">
                <li>سرویس تبلیغاتی دیجیتال علاقه محور</li>
                <li>سرویس تبلیغاتی اپلیکیشن های موبایل</li>
                <li>نرم افزار CRM تحت وب</li>
                <li>پیاده سازی سرویس های تحت وب</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] bg-main rounded-3xl text-white py-[30px] mb-20">
        <div className="flex justify-center items-center">
          <p className="text-4xl font-bold px-[50px] text-center">
            چالش هایی که حل آن تخصص ماست
          </p>
        </div>
        <div className="mt-[30px] mx-3 border-white border-2 rounded-2xl py-[30px]">
          <p className="text-center text-xl font-bold">
            رقبای ما در دنیای دیجیتال از ما پیشی گرفته اند.
          </p>
          <div className="py-[10px] mx-[20px] border-b-2 ">
            <p className=" rounded-b-3xl">
              رقابت عنصر اصلی بازاریابی در بازار امروز است. دیجیتال ترنسفورمیشن
              موضوع اصلی ورود آژانس‌های بازاریابی دیجیتال است. این مهمترین
              دغدغه‌ای است که با آن، به ما مراجعه می کنند. حل این مساله نیازمند
              اطلاعات کامل و بسیار از سمت کسب و کار شما و تخصص و مهارت ما در
              دیجیتال مارکتینگ است؛ طی یک جلسه، همراه هم به راهکاری برای ورود ما
              و سپس راهکارهای افزایش فروش شما و پیش گرفتن از رقبا رسیده و کار را
              با هم شروع کنیم.
            </p>
          </div>
          <p className="text-[#F3BC00] mx-[20px]">
            چند سوال ما را پاسخ دهید؛ تا شروع کنیم
          </p>
        </div>

        <div className="mt-[30px] mx-3 border-white border-2 rounded-2xl py-[30px]">
          <p className="text-center text-xl font-bold">
            رقبای ما در دنیای دیجیتال از ما پیشی گرفته اند.
          </p>
          <div className="py-[10px] mx-[20px] border-b-2 ">
            <p className=" rounded-b-3xl">
              رقابت عنصر اصلی بازاریابی در بازار امروز است. دیجیتال ترنسفورمیشن
              موضوع اصلی ورود آژانس‌های بازاریابی دیجیتال است. این مهمترین
              دغدغه‌ای است که با آن، به ما مراجعه می کنند. حل این مساله نیازمند
              اطلاعات کامل و بسیار از سمت کسب و کار شما و تخصص و مهارت ما در
              دیجیتال مارکتینگ است؛ طی یک جلسه، همراه هم به راهکاری برای ورود ما
              و سپس راهکارهای افزایش فروش شما و پیش گرفتن از رقبا رسیده و کار را
              با هم شروع کنیم.
            </p>
          </div>
          <p className="text-[#F3BC00] mx-[20px]">
            چند سوال ما را پاسخ دهید؛ تا شروع کنیم
          </p>
        </div>
      </div>
    </div>
  );
}
