import Image from "next/image";

function Review() {
  return (
    <div className="text-slate-200 mt-10 px-20">
      <article className="text-center w-[30rem] m-auto">
        <h1 className="text-[2rem] font-semibold">What Our User Say?</h1>
        <p className="mt-3 text-[0.8rem]">
          Hear from our customers and see what they say about using our service
          to get ahead of their customers payment
        </p>
      </article>
      <aside className="flex justify-between mt-9">
        <div className="w-[28%] bg-[rgb(19,20,31)] border-2 border-blue-600 rounded-md p-3 py-6">
          <aside className="flex border-b-2 border-slate-200 pb-5">
            <Image src="/Ellipse 48.png" alt="user" width={40} height={50} />
            <p className="ml-5 mt-2">Noheem Nysc</p>
          </aside>
          <p className="text-[0.8rem] mt-3 text-slate-400">
            Oaypay has revolutionized the way i manage my finance.With their
            intuitive platform,i can easily track my expenses,make payments and
            even plan for investment.Its klikehaving a financial advisor right
            at my fingertips.
          </p>
        </div>
        <div className="w-[28%] border-2 bg-[rgb(19,20,31)] border-blue-600 rounded-md p-3 py-6">
          <aside className="flex border-b-2 border-slate-200 pb-5">
            <Image src="/Ellipse 48.png" alt="user" width={40} height={50} />
            <p className="ml-5 mt-2">Noheem Nysc</p>
          </aside>
          <p className="text-[0.8rem] mt-3 text-slate-400">
            Oaypay has revolutionized the way i manage my finance.With their
            intuitive platform,i can easily track my expenses,make payments and
            even plan for investment.Its klikehaving a financial advisor right
            at my fingertips.
          </p>
        </div>
        <div className="w-[28%] border-2 bg-[rgb(19,20,31)] border-blue-600 rounded-md p-3 py-6">
          <aside className="flex border-b-2 border-slate-200 pb-5">
            <Image src="/Ellipse 48.png" alt="user" width={40} height={50} />
            <p className="ml-5 mt-2">Noheem Nysc</p>
          </aside>
          <p className="text-[0.8rem] mt-3 text-slate-400">
            Oaypay has revolutionized the way i manage my finance.With their
            intuitive platform,i can easily track my expenses,make payments and
            even plan for investment.Its klikehaving a financial advisor right
            at my fingertips.
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Review;
