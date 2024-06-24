import React from "react";
import { TestimonyItem } from "./TestimonyItem";

type UserData = {
  username: string;
  date: string;
};

type DataItem = {
  id: number;
  feedback: string;
  user: UserData[];
};

export const Testimony: React.FC = () => {
  const data: DataItem[] = [
    {
      id: 1,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 2,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 3,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 4,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
    {
      id: 5,
      feedback:
        " “Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
      user: [
        {
          username: "vimal",
          date: "bought month ago",
        },
      ],
    },
  ];
  return (
    <section
      style={{
        backgroundImage: "url(../src/assets/testimonyBG.jpg)",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex flex-col justify-around"
    >
      <div className="text-center p-[40px]">
        <p className="text-[35px] text-brown font-bold leading-none">
          Testimony
        </p>
        <p className="text-[45px] leading-none">what our customer says</p>
        <p className="p-[20px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-start md:items-end md:[&>div:nth-child(odd)]:min-h-[300px] [&>div:nth-child(even)]:bg-even md:[&>div:nth-child(even)]:min-h-[350px] ">
        {data.map((item) => (
          <TestimonyItem key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
