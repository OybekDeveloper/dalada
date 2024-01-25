import React, { useState } from "react";
import "./comments.scss";
const data = [
  {
    id: 1,
    name: "John Doe",
    work: "Software Engineer",
    description: "Passionate about creating innovative software solutions.",
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
    description: "Analyzing data to extract valuable insights.",
    logo: "path/to/logo3.png",
  },
  {
    id: 4,
    name: "Emily White",
    work: "Marketing Specialist",
    description:
      "Crafting effective marketing strategies to reach the target audience.",
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

const Comments = () => {
  const [active, setActice] = useState(false);
  return (
    <div className="comments flex flex-col items-center pt-[100px]">
      <div className="btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
        Mijozlar fikrlari
      </div>
      <h1 className="text-[32px] font-bold text-[#040303] pt-[18px]">
        Xursand <span className="text-[#25b679]">mijozlarimiz</span> fikrlarini
        tinglang
      </h1>

      <div
        className={`relative grid grid-cols-3 gap-10 pt-[64px] ${!active ? "overflow-hidden h-[828px] " : " "
          } mb-[20px]`}
      >
        {data?.map((item) => (
          <div
            key={item.id}
            className="w-[300px]  rounded-[10px] bg-[#F7F7F8] p-[24px]"
          >
            <div className="flex flex-row justify-start items-center gap-4 pb-[20px]">
              <div className="img"></div>
              <div className="flex flex-col justify-center ">
                <h1 className="text-[#040303] text-[20px] font-[400]">
                  {item.name}
                </h1>
                <p className="text-[#040303] text-[13px] font-[400] opacity-[0.6]">
                  {item.description}
                </p>
              </div>
            </div>
            <p className="text-[16px] font-[400] opacity-[0.6]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto hic beatae vel dolores assumenda harum maxime{" "}
            </p>
          </div>
        ))}
        <div
          className={`${!active && "read"
            } absolute bottom-0 h-[440px] flex items-center justify-center w-full`}
        >
          <button
            onClick={() => setActice(!active)}
            className={`${active && "active hidden"
              }  btn px-[24px] hover:bg-[#29cc88] py-[12px]  bg-[#25B679] text-[#fff] text-[18px] font-[500] rounded-[6px] `}
          >
            {!active ? "Hammasini o'qish" : "Yopish"}
          </button>
        </div>
      </div>
      <button
        onClick={() => setActice(!active)}
        className={`${!active && "hidden"
          } active   z-[100] btn px-[24px] hover:bg-[#29cc88] py-[12px]  bg-[#25B679] text-[#fff] text-[18px] font-[500] rounded-[6px] `}
      >
        {"Yopish"}
      </button>
    </div>
  );
};

export default Comments;
