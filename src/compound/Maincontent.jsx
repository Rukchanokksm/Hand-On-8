/* eslint-disable react/jsx-key */
import React from "react";
import Logoblog from "./img/online.png";

const blogs = [
  {
    header: "The DeFi Review by Arken Finance",
    description:
      "DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.",
    tags: ["defi-review", "web3", "arken.finance"],
    author: "Arken Finance",
    date: "Nov 26th, 2022",
    readingTime: "3 min",
    url: "https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50",
  },
  {
    header: "Welcome to the World of Web 3.0",
    description:
      "Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?",
    tags: ["introduction", "web3"],
    author: "Aikdanai",
    date: "Apr 26th, 2022",
    readingTime: "9 min",
    url: "https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4",
  },
  {
    header: "Solidity Made Easy with Hardhat",
    description: "A walkthrough guide on how to use Hardhat to develop a smart contract with ease!",
    tags: ["hardhat", "tutorial"],
    author: "Aikdanai",
    date: "Aug 5th, 2022",
    readingTime: "6 min",
    url: "https://blogs.cleverse.com/solidity-made-easy-with-hardhat-91a6972362bb",
  },
  {
    header: "Solving DApps Problem with Merkle drop",
    description:
      "When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?",
    tags: ["smart contract", "web3"],
    author: "Nutchanon",
    date: "Sep 27th, 2022",
    readingTime: "8 min",
    url: "https://blogs.cleverse.com/solving-dapps-problem-with-merkle-drop-ff656adca942",
  },
];

const Maincontent = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="flex justify-between items-center mx-24">
        <div className="flex gap-3">
          <img src={Logoblog} alt="logoblog" />
          <p className="font-bold text-xl">Blog</p>
        </div>
        <a className="text-red-500" href="#">
          View All
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {blogs.map((allblogs) => {
          return (
            <section className="flex flex-col w-2/5 gap-5 mx-5 my-2 px-5">
              <div className="flex items-center gap-4 text-xs text-neutral-300">
                <p className="text-lg text-red-500">{allblogs.author}</p>
                <p>{allblogs.date}</p>
                <p>{allblogs.readingTime}</p>
              </div>
              <div className="flex flex-col gap-3 text-start text-sm">
                <p className="text-lg font-bold">{allblogs.header}</p>
                <p>{allblogs.description}</p>
              </div>
              <div className="flex gap-2">
                {allblogs.tags.map((tag) => {
                  return (
                    <button className="flex justify-star border rounded-md border-gray-400 p-2 text-sm text-gray-400 font-semibold">
                      # {tag}
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Maincontent;
