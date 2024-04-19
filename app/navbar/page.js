function Navbar() {
  return (
    <div className="text-slate-200 justify-between flex py-5 px-16">
      <main className="flex">
        <h2 className="ml-0 font-semibold text-[1.3rem]">PAYSTREAM</h2>
        <ul className="text-[0.8rem] mt-1 w-[19rem] flex justify-between ml-16">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Picking</li>
          <li className="cursor-pointer">FAQS</li>
        </ul>
      </main>
      <aside>
        <a className="cursor-pointer">Login</a>
        <button className="bg-[rgb(218,250,126)] cursor-pointer rounded-sm ml-6 text-[0.8rem] px-4 py-2 text-slate-900">
          Get Started
        </button>
      </aside>
    </div>
  );
}

export default Navbar;
