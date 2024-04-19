import Navbar from "./navbar/page";
import Main from "./main/page";
import Body from "./body/page";
import Upload from "./generate/page";
import Review from "./review/page";
import Pricing from "./pricing/page";
import Customer from "./customers/page";
import Faq from "./faq/page";
import Getstarted from "./getstarted/page";
import Foot from "./foot/page";
function Home() {
  return (
    <main className="mr-0 bg-[rgb(17,17,27)] pb-10">
      <Navbar />
      <Main />
      <Body />
      <Upload />
      <Review />
      <Pricing />
      <Customer />
      <Faq />
      <Getstarted />
      <Foot />
    </main>
  );
}
export default Home;
