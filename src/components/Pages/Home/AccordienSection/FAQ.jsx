import React from "react";
import Accordien from "./Accordien";

const AccordienSection = () => {
  const data = [
    {
      question: "What is SMM PANEL ?",
      answer:
        "Smm panel is a panel where you can buy social media ( Facebook, Twitter, Instagram, YouTube, Spotify, Tiktok, and other social media ) likes, followers, views, Comments, Subscribers, and as well as Website traffic. Customers choose the cheapest smm panel because of its cheap price, faster delivery, and all social media services available on 1 website.",
      id: 1,
    },
    {
      question: "Is Smm Panel Safe ?",
      answer:
        "The SMM panels on our platform are extremely safe, protected against DDoS assaults, and updated frequently. Additionally, each and every one of them possesses a certificate, which is crucial for protecting the privacy of your clients' and your own personal information.",
      id: 2,
    },
    {
      question: "What is SMM PANEL ?",
      answer:
        "Smm panel is a panel where you can buy social media ( Facebook, Twitter, Instagram, YouTube, Spotify, Tiktok, and other social media ) likes, followers, views, Comments, Subscribers, and as well as Website traffic. Customers choose the cheapest smm panel because of its cheap price, faster delivery, and all social media services available on 1 website.",
      id: 3,
    },
    {
      question: "How does Smm Panel Work ? ",
      answer:
        "Smm Panel assist you in connecting and interacting with a bigger base of current and potential customers. SMM panels assist you in spreading fresh updates about your company to a larger audience when you post about a product. We work with you as a Facebook or Instagram business to enhance your engagement and conversion.",
      id: 4,
    },
    {
      question: "Which is the best Smm Panel ? ",
      answer:
        "Smm Panel is the best SMM panel as they provide smm services in cheap and is the best SMM reseller panel in the market as well.",
      id: 5,
    },
    {
      question: "Which is the best Smm panel in India ? ",
      answer:
        "Smm Panel is the best cheap SMM panel in India for social media reach.",
      id: 6,
    },
    {
      question: "How to add fund with visa and mastercard ? ",
      answer:
        "Usually, there are various ways to add money to your prepaid card. You might be able to: Set up direct deposit of a paycheck or other recurring payment onto the card, Money should be transferred from a checking or another prepaid card, Purchase a 'reload pack' to top off your card with a specific amount, You can top off your card at specific retail outlets or the financial institution that issues it",
      id: 7,
    },
    {
      question: "How to earn  money with Smm Panel ? ",
      answer:
        "With outgrowing reach in Youtube and TikTok, you can easily earn money with Smm Panel.",
      id: 8,
    },
  ];
  return (
     
      <div className=" bg-fixed  text-white bg-[url('https://cdn.mypanel.link/770smr/ftx3z1904qe3yabc.webp')] bg-cover bg-center  w-full  min-h-screen">
        <div className="backdrop-brightness-50 w-full h-full min-h-screen">
        <div className=" flex items-center gap-4 lg:px-[5%] md:px-[5%] px-[2%] lg:flex-row flex-col justify-between  max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:w-[50%]  w-full lg:justify-start justify-center items-center">
            <p className=" text-5xl font-bold mt-3 leading-[60px] lg:text-start text-center">
              Frequently Asked Questions
            </p>
            <p className="text-lg leading-7 mt-4 mb-3 lg:text-start text-center">
              The SMM panel is basically a social media marketing panel where
              you can buy targeted actions like (followers, likes, subscribers,
              views, tweets, shares, etc.) but we also understand that our
              clients may have many questions, and we have prepared some of the
              most important and frequently asked questions in order to clear up
              any confusion regarding the Purpose and Process of the Smm Panel
              SMM Panel. After viewing the FAQ, it will be easy for you to place
              an order with us.
            </p>
            <button className="border-2 max-w-[200px] border-[#00FFA3] rounded-xl px-5 min-h-[60px] lg:mr-auto relative  hover:border-[#00FFA3] text-bold text-xl hover:bg-[#1bcf8d] bg-[#00FFA3] text-black mt-4  font-bold ">

            Contact Us
          </button>
          </div>
          <div className="grid divide-y  lg:w-[50%] w-full mt-8 relative">
            <img src="https://cdn.mypanel.link/770smr/jkjjyt3s80t2gs9l.webp" className="top-4 lg:absolute lg:right-6 right-auto left-0 lg:left-auto" alt="" />
            {data.map((value) => (
              <Accordien key={value.id} data={value}></Accordien>
            ))}
          </div>
        </div>
        </div>
       
      </div>

  );
};

export default AccordienSection;
