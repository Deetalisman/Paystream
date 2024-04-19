import Image from "next/image";
function Body() {
  return (
    <div className="text-slate-200 mx-[10rem] mt-16">
      <aside className="flex justify-between">
        <h1 className="text-[2.3rem] w-[18rem]">All in-one Invoice platform</h1>
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
      <aside className="mt-10 flex justify-between flex-wrap">
        <div className="flex w-[28%]">
          <nav>
            <Image
              src="/Frame 1321319777.png"
              alt="fra"
              width={70}
              height={50}
            />
          </nav>
          <article className="ml-5">
            <h1 className="font-semibold text-[1.1rem] tracking-wider">
              Online Invoice Payment
            </h1>
            <p className="mt-2 text-slate-400">
              Automate repetitive task and focus on growing your business
            </p>
          </article>
        </div>
        <div className="flex w-[28%]">
          <nav>
            <Image
              src="/Frame 1321319777.png"
              alt="fra"
              width={70}
              height={50}
            />
          </nav>
          <article className="ml-5">
            <h1 className="font-semibold text-[1.1rem] tracking-wider">
              Automated Invoice Payment
            </h1>
            <p className="mt-2 text-slate-400">
              Automate repetitive task and focus on growing your business
            </p>
          </article>
        </div>
        <div className="flex w-[28%]">
          <nav>
            <Image
              src="/Frame 1321319777.png"
              alt="fra"
              width={70}
              height={50}
            />
          </nav>
          <article className="ml-5">
            <h1 className="font-semibold text-[1.1rem] tracking-wider">
              Tracking your Invoice
            </h1>
            <p className="mt-2 text-slate-400">
              Automate repetitive task and focus on growing your business
            </p>
          </article>
        </div>
        <div className="flex w-[28%] mt-5">
          <nav>
            <Image
              src="/Frame 1321319777.png"
              alt="fra"
              width={70}
              height={50}
            />
          </nav>
          <article className="ml-5">
            <h1 className="font-semibold text-[1.1rem] tracking-wider">
              Tracking your Invoice Payment
            </h1>
            <p className="mt-2 text-slate-400">
              Automate repetitive task and focus on growing your business
            </p>
          </article>
        </div>
        <div className="flex w-[28%]  mt-5">
          <nav>
            <Image
              src="/Frame 1321319777.png"
              alt="fra"
              width={70}
              height={50}
            />
          </nav>
          <article className="ml-5">
            <h1 className="font-semibold text-[1.1rem] tracking-wider">
              Business Management
            </h1>
            <p className="mt-2 text-slate-400">
              Automate repetitive task and focus on growing your business
            </p>
          </article>
        </div>
        <div className="flex w-[28%] mt-5">
          <nav>
            <Image
              src="/Frame 1321319777.png"
              alt="fra"
              width={70}
              height={50}
            />
          </nav>
          <article className="ml-5">
            <h1 className="font-semibold text-[1.1rem] tracking-wider">
              Tracking your Invoice Payment
            </h1>
            <p className="mt-2 text-slate-400">
              Automate repetitive task and focus on growing your business
            </p>
          </article>
        </div>
      </aside>
    </div>
  );
}

export default Body;
