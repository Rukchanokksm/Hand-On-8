/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
import React from "react";
import logo from "./img/play-button.png";

const detail = [
  {
    Resour: "https://www.youtube.com/embed/gYO1uk7vIcc",
    header: "The DeFi Review by Arken Finance",
    description:
      "DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.",
    author: "Arken Finance",
    date: "Nov 26th, 2022",
    readingTime: "3 min",
    url: "https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50",
  },
  {
    Resour: "https://www.youtube.com/embed/4poqZjNTZjI",
    header: "Welcome to the World of Web 3.0",
    description:
      "Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?",
    author: "Aikdanai",
    date: "Apr 26th, 2022",
    readingTime: "9 min",
    url: "https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4",
  },
];

const Podcast = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-3/4 my-20 mx-auto">
      <div className="flex justify-between space-x-96">
        <div className="flex gap-2">
          <img src={logo} alt="logopod" width="18" />
          <p>Podcast & Video</p>
        </div>
        <a className="text-red-500" href="#">
          View All
        </a>
      </div>
      {detail.map((poddt) => {
        return (
          <>
            <div className="flex w-3/4 items-start justify-center gap-10">
              <iframe height="240" src={poddt.Resour} />
              <div className="flex flex-col  justify-start items-start text-left py-6 gap-4">
                <p className="text-red-600 font-bold text-sm">{poddt.author}</p>
                <p className="text-sm">{poddt.header}</p>
                <p>{poddt.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Podcast;
