import React, { useState } from "react";
import "./comments.scss";
import CommentItem from "./comment-item";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    name: "John Doe",
    work: "Software Engineer",
    description:
      "Passionate about creating innovative software solutions.Passionate about creating innovative software solutions.",
    logo: "path/to/logo1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    work: "Graphic Designer",
    description: "Bringing ideas to life through creative visual designs.",
    logo: "path/to/logo2.png",
  },
  {
    id: 3,
    name: "Alex Johnson",
    work: "Data Scientist",
    description:
      "Analyzing data to extract valuable insights.Analyzing data to extract valuable insights",
    logo: "path/to/logo3.png",
  },
  {
    id: 4,
    name: "Emily White",
    work: "Marketing Specialist",
    description:
      "Crafting effective marketing strategies to reach the target audience.Crafting effective marketing strategies to reach the target audience.",
    logo: "path/to/logo4.png",
  },
  {
    id: 5,
    name: "Michael Brown",
    work: "UX/UI Designer",
    description: "Creating user-centric and visually appealing interfaces.",
    logo: "path/to/logo5.png",
  },
  {
    id: 6,
    name: "Sophia Taylor",
    work: "Project Manager",
    description: "Leading teams to deliver successful projects on time.",
    logo: "path/to/logo6.png",
  },
  {
    id: 7,
    name: "William Anderson",
    work: "Front-end Developer",
    description: "Building responsive and user-friendly web applications.",
    logo: "path/to/logo7.png",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    work: "Financial Analyst",
    description: "Analyzing financial data to support business decisions.",
    logo: "path/to/logo8.png",
  },
  {
    id: 9,
    name: "Daniel Davis",
    work: "Cybersecurity Expert",
    description: "Securing digital systems and networks from cyber threats.",
    logo: "path/to/logo9.png",
  },
  {
    id: 10,
    name: "Ava Wilson",
    work: "Content Writer",
    description:
      "Creating engaging and informative content for various audiences.",
    logo: "path/to/logo10.png",
  },
  {
    id: 10,
    name: "Ava Wilson",
    work: "Content Writer",
    description:
      "Creating engaging and informative content for various audiences.",
    logo: "path/to/logo10.png",
  },
  {
    id: 10,
    name: "Ava Wilson",
    work: "Content Writer",
    description:
      "Creating engaging and informative content for various audiences.",
    logo: "path/to/logo10.png",
  },
  {
    id: 10,
    name: "Ava Wilson",
    work: "Content Writer",
    description:
      "Creating engaging and informative content for various audiences.",
    logo: "path/to/logo10.png",
  },
  {
    id: 10,
    name: "Ava Wilson",
    work: "Content Writer",
    description:
      "Creating engaging and informative content for various audiences.",
    logo: "path/to/logo10.png",
  },
];
const scrollToSection = (sectionId) => {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const Comments = () => {
  const [active, setActice] = useState(false);
  const handleActiveBtn = () => {
    setTimeout(() => {
      setActice(!active);

    }, 300);
  };
  return (
    <div
      id="comments"
      className="comments max-w-[1440px] xl:w-10/12 md:w-11/12 mx-auto flex flex-col items-center pt-[100px] max-sm:w-full"
    >
      <div className="flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
        Mijozlar fikrlari
      </div>
      <h1 className="text-[32px] max-md:text-[29px] max-sm:text-[25px] font-bold text-[#040303] pt-[29px] max-sm:text-center">
        Xursand <span className="text-[#25b679]">mijozlarimiz</span> fikrlarini
        tinglang
      </h1>
      <div
        className={`relative px-2 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1  pt-[64px] ${!active ? "overflow-hidden h-[828px] " : " "
          } mb-[30px]`}
      >
        {data?.map((item) => (
          <CommentItem item={item} key={crypto.randomUUID()} />
        ))}
        <div
          className={`${!active && "read"
            } absolute bottom-0 max-sm:pb-[20px] h-[440px] flex items-center max-sm:items-end justify-center w-full`}
        >
          <button
            onClick={handleActiveBtn}
            className={`${active ? " hidden " : " max-sm:flex "
              } btn px-[24px] max-sm:gap-[7px] max-sm:w-3/4 max-sm:justify-center max-sm:items-center hover:bg-[#29cc88] w-[200px] py-[12px]  bg-[#25B679] text-[#fff] text-[18px] font-[500] rounded-[6px]`}
          >
            <p>Hammasini o'qish</p>
            <div>
              <IoChevronDownOutline className="w-full sm:hidden" />
            </div>
          </button>
        </div>
      </div>
      <button
        onClick={() => { handleActiveBtn(); scrollToSection('comments') }}
        className={`${!active ? " hidden " : " max-sm:flex "
          }  btn px-[24px] max-sm:gap-[7px] max-sm:w-3/4  max-sm:justify-center max-sm:items-center hover:bg-[#29cc88] w-[200px] h-[50px] py-[12px]  bg-[#25B679] text-[#fff] text-[18px] font-[500] rounded-[6px]`}
      >
        <p>Yopish</p>
        <IoChevronUpOutline className="sm:hidden" />
      </button>
    </div>
  );
};

export default Comments;
