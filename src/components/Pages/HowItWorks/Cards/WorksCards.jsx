import React from "react";
import WorksCard from "./WorksCard";

const WorksCards = () => {
  const data = [
    {
      id: 1,
      title: "Select Category",
      description: `First you need select the 
      category service you needed. for example
      you need service “ Instagram Likes” so
      select that service.First you need select
      the category service you needed. for example
      you need service “ Instagram Likes” so select
      that service.`,
    },{
        id: 2,
        title: "Select Service",
        description: `First you need select the 
        category service you needed. for example
        you need service “ Instagram Likes” so
        select that service.First you need select
        the category service you needed. for example
        you need service “ Instagram Likes” so select
        that service.`,
      },
      {
        id: 3,
        title: "Enter Link",
        description: `First you need select the 
        category service you needed. for example
        you need service “ Instagram Likes” so
        select that service.First you need select
        the category service you needed. for example
        you need service “ Instagram Likes” so select
        that service.`,
      },
      {
        id: 4,
        title: "Submit",
        description: `First you need select the 
        category service you needed. for example
        you need service “ Instagram Likes” so
        select that service.First you need select
        the category service you needed. for example
        you need service “ Instagram Likes” so select
        that service.`,
      },
      {
        id: 5,
        title: "Make Payment",
        description: `First you need select the 
        category service you needed. for example
        you need service “ Instagram Likes” so
        select that service.First you need select
        the category service you needed. for example
        you need service “ Instagram Likes” so select
        that service.`,
      },
      {
        id: 6,
        title: "Order Placed!",
        description: `First you need select the 
        category service you needed. for example
        you need service “ Instagram Likes” so
        select that service.First you need select
        the category service you needed. for example
        you need service “ Instagram Likes” so select
        that service.`,
      },
  ];

  return (
    <>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
         {data.map(value => <WorksCard key={value.id} data={value}></WorksCard>)}
      </div>
    
    </>
  );
};

export default WorksCards;
