import Image from "next/image";

function Foot() {
  return (
    <div className="text-slate-200 mt-10 px-[5%]">
      <aside className="flex justify-between pb-5 border-b-2 border-slate-400">
        <div className="w-[14rem]">
          <article className="flex">
            <Image src="/Ellipse 2675.png" alt="logo" width={30} height={10} />
            <p className="text-[1.2rem] ml-2">Paystream</p>
          </article>
          <p className="mt-3">Get the best of your customer with us</p>
        </div>
        <div>
          <p className="text-slate-500">Company</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">About Us</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Our Vision</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Our Mission</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">FAQS</p>
        </div>
        <div>
          <p className="text-slate-500">Personal</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Accoun Opening</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Savings</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Bills Payment</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Expenses Tracker</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Loans</p>
        </div>
        <div>
          <p className="text-slate-500">Business</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Google Sheets</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Invoice Payment</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Integration</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">
            Invoice Generation
          </p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Book-Keeping</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Investment</p>
        </div>
        <div>
          <p className="text-slate-500">Resource</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Help Center</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Know More</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Partnership</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Atm Center</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">KYC Verification</p>
          <p className="text-slate-300 mt-2 text-[0.9rem]">Blogs</p>
        </div>
      </aside>
    </div>
  );
}

export default Foot;
