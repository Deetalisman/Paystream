import Image from "next/image";

function Customer() {
  return (
    <div className="text-slate-200 mt-10">
      <aside className="flex justify-between px-[10%]">
        <h1 className="text-[2.3rem] w-[28rem] leading-10">
          Seamlessly link and connect with your customers
        </h1>
        <div className="w-[28rem]">
          <p className="text-[0.8rem]">
            Customize your business journey effortlessly with invoices dashboard
            by a suite of powerful tools at your fingertips
          </p>
          <button className="bg-[rgb(218,250,126)] font-semibold cursor-pointer rounded-sm mt-3 text-[0.8rem] px-4 py-2 text-slate-900">
            Get Started
          </button>
        </div>
      </aside>
      <div className="mt-10 px-[10%] flex justify-between">
        <aside className="w-[30%]">
          <Image
            src="/Frame 1321319756.png"
            alt="user1"
            width={300}
            height={50}
          />
          <p className="mt-2 font-semibold">Easy Invoice Generate</p>
          <p className="text-[0.8rem] text-slate-400 mt-1">
            Automate repetitive task and focus on growing your business
          </p>
        </aside>
        <aside className="w-[30%]">
          <Image
            src="/Frame 1321319757.png"
            alt="user1"
            width={300}
            height={50}
          />
          <p className="mt-2 font-semibold">Unlimited Support</p>
          <p className="text-[0.8rem] text-slate-400 mt-1">
            Automate repetitive task and focus on growing your business
          </p>
        </aside>
        <aside className="w-[30%]">
          <Image
            src="/Frame 1321319756.png"
            alt="user1"
            width={300}
            height={50}
          />
          <p className="mt-2 font-semibold">Easy & Fast Payment</p>
          <p className="text-[0.8rem] text-slate-400 mt-1">
            Automate repetitive task and focus on growing your business
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Customer;
