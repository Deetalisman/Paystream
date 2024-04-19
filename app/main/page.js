import Image from "next/image";

function Main() {
  return (
    <div className="text-slate-200 text-center mt-3">
      <h1 className="text-[3rem] font-semibold w-[30rem] m-auto leading-12">
        Streamline your invoicing challenges
      </h1>
      <p className="text-[0.7rem]">
        Automate your financial processes and get paid faster with using our
        automated invoices generated.
      </p>
      <aside className="flex justify-between text-[0.8rem] w-[15rem] m-auto mt-3">
        <p>Very Affordable</p>
        <p>Swift</p>
        <p>Trusted</p>
      </aside>
      <button className="bg-[rgb(218,250,126)] mt-5 cursor-pointer rounded-sm ml-6 text-[0.8rem] px-4 py-2 text-slate-900">
        Get Started
      </button>
      <Image
        src="/Rectangle 5.png"
        className="m-auto mt-5 text-center"
        alt="img"
        width={700}
        height={100}
      />
      <p className="text-[0.8rem]">Join 4,000+ companies already growing</p>
      <aside className="flex justify-between mx-[10rem] mt-10">
        <Image
          src="/Fictional company logo (1).png"
          alt="fic"
          width={100}
          height={100}
        />
        <Image
          src="/Fictional company logo (2).png"
          alt="fic"
          width={100}
          height={100}
        />
        <Image
          src="/Fictional company logo (3).png"
          alt="fic"
          width={100}
          height={100}
        />
        <Image
          src="/Fictional company logo (4).png"
          alt="fic"
          width={100}
          height={100}
        />
        <Image
          src="/Fictional company logo.png"
          alt="fic"
          width={100}
          height={100}
        />
        <Image
          src="/Fictional company logoo.png"
          alt="fic"
          width={100}
          height={100}
        />
      </aside>
    </div>
  );
}

export default Main;
