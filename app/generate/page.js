import Image from "next/image";
function Upload() {
  return (
    <div className="mt-16  text-slate-200">
      <header className="flex justify-between px-[10%] pb-10">
        <Image
          src="/Frame 1321319718.png"
          alt="frame"
          width={400}
          height={400}
        />
        <aside className="w-[59%] mt-16">
          <h1 className="text-[2.3rem] w-[70%] leading-10">
            Generate upload and sort your invoice in one place
          </h1>
          <div className="ml-0 pb-2 mt-5 border-b-2 border-gray-500">
            <h1>Generate invoice Easily</h1>
            <p className="text-slate-500 mt-2 text-[0.8rem]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout,the
              point of using lorem ipsum
            </p>
          </div>
          <div className="ml-0 pb-6 mt-4 border-b-2 border-gray-500">
            <p>Unlimited Internet Support</p>
          </div>
          <p className="mt-5">Approve Payment Fast and Easy</p>
        </aside>
      </header>
      <footer className="bg-black p-12">
        <div className="bg-[rgb(17,17,27)] px-12 py-4 pb-10 rounded-xl">
          <Image src="/Rectangle 5.png" alt="rec" width={1200} height={600} />
          <aside className="mt-10 flex justify-between mx-5 flex-wrap">
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
                <p className="mt-2 text-slate-400 text-[0.8rem]">
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
                <p className="mt-2 text-slate-400 text-[0.8rem]">
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
                <p className="mt-2 text-slate-400 text-[0.8rem]">
                  Automate repetitive task and focus on growing your business
                </p>
              </article>
            </div>
          </aside>
        </div>
      </footer>
    </div>
  );
}

export default Upload;
