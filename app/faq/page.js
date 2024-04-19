"use client";
import Image from "next/image";
import { useState } from "react";

function Faq() {
  const [Openone, setOpenone] = useState(false);
  const [Opentwo, setOpentwo] = useState(false);
  const [Openthree, setOpenthree] = useState(false);
  const [Openfour, setOpenfour] = useState(false);
  function handleone() {
    setOpenone((Openone) => !Openone);
  }
  function handletwo() {
    setOpentwo((Opentwo) => !Opentwo);
  }
  function handlethree() {
    setOpenthree((Openthree) => !Openthree);
  }
  function handlefour() {
    setOpenfour((Openfour) => !Openfour);
  }
  return (
    <div className="text-slate-200 mt-10 ">
      <p className="text-center text-[2rem] font-semibold">
        Frequently Asked Questions
      </p>
      <div className="mt-7">
        <aside className=" bg-black p-5 rounded-md  w-[70%] m-auto">
          <header className="flex justify-between">
            <p>Is my financial data secure?</p>
            <div
              className="bg-white cursor-pointer rounded-3xl pt-1 px-1"
              onClick={handleone}
            >
              <Image src="/Vector.png" alt="vector" width={15} height={10} />
            </div>
          </header>
          {Openone && (
            <article>
              <p className="text-[0.8rem] mt-4">
                Yes,We use industry-standard encryption and security protocols
                to protect your data.
              </p>
            </article>
          )}
        </aside>
        <aside className=" bg-black p-5 rounded-md mt-2  w-[70%] m-auto">
          <header className="flex justify-between">
            <p>Is my financial data secure?</p>
            <div
              className="bg-white cursor-pointer rounded-3xl pt-1 px-1"
              onClick={handletwo}
            >
              <Image src="/Vector.png" alt="vector" width={15} height={10} />
            </div>
          </header>
          {Opentwo && (
            <article>
              <p className="text-[0.8rem] mt-4">
                Yes,We use industry-standard encryption and security protocols
                to protect your data.
              </p>
            </article>
          )}
        </aside>
        <aside className=" bg-black p-5 rounded-md mt-2 w-[70%] m-auto">
          <header className="flex justify-between">
            <p>Is my financial data secure?</p>
            <div
              className="bg-white cursor-pointer rounded-3xl pt-1 px-1"
              onClick={handlethree}
            >
              <Image src="/Vector.png" alt="vector" width={15} height={10} />
            </div>
          </header>
          {Openthree && (
            <article>
              <p className="text-[0.8rem] mt-4">
                Yes,We use industry-standard encryption and security protocols
                to protect your data.
              </p>
            </article>
          )}
        </aside>
        <aside className=" bg-black p-5 rounded-md mt-2  w-[70%] m-auto">
          <header className="flex justify-between">
            <p>Is my financial data secure?</p>
            <div
              className="bg-white cursor-pointer rounded-3xl pt-1 px-1"
              onClick={handlefour}
            >
              <Image src="/Vector.png" alt="vector" width={15} height={10} />
            </div>
          </header>
          {Openfour && (
            <article>
              <p className="text-[0.8rem] mt-4">
                Yes,We use industry-standard encryption and security protocols
                to protect your data.
              </p>
            </article>
          )}
        </aside>
      </div>
    </div>
  );
}

export default Faq;
