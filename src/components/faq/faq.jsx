import "./faq.scss";
import FaqItem from "./faq-item";
const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];
const Faq = () => {
 
  return (
    <div id="faq" className="faq max-w-[1440px] xl:w-10/12 max-xl:w-11/12 mx-auto flex flex-col items-center pt-[100px] ">
      <div className="btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
        FAQ
      </div>
      <h1 className="text-[32px] font-bold text-[#040303] pt-[25px]">
        Ko’p beriladigan savollar
      </h1>
      <div className="w-3/4  max-sm:w-11/12">
        {data.map((item) => (
          <FaqItem key={crypto.randomUUID()}/>   
        ))}
      </div>
    </div>
  );
};

export default Faq;
