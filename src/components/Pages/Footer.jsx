import React from "react";
import { MdForwardToInbox, MdCall } from "react-icons/md";
import { BsTelegram , BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r pt-32 from-[#173f32]   to-[#161429] lg:px-[5%] md:px-[5%] px-[2%]">
      <div className="flex justify-center xl:flex-row lg:flex-col md:flex-col gap-4">
        <img
          className="max-w-[400px] w-full mx-auto"
          src="https://cdn.mypanel.link/770smr/814o56n7iuodtnrg.png"
          alt=""
        />
        <img
          className="md:block hidden"
          src="https://cdn.mypanel.link/770smr/3r5taeanaspoljeh.webp"
          alt=""
        />
      </div>
      <div className="flex md:flex-row gap-6 flex-col mt-10 justify-between items-center">
        <div className="flex md:flex-row flex-col gap-8 md:justify-start justify-center ">
          <div>
            <h2 className="text-white gap-2 flex text-lg">
              <MdForwardToInbox className="text-green-600 text-3xl"></MdForwardToInbox>
              support@Smm Panel.com
            </h2>
          </div>
          <div>
            <h2 className="text-white gap-2 flex text-lg">
              <MdCall className="text-green-600 text-3xl"></MdCall>Call Us: +44
              7380 800689
            </h2>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-2 ">
          <h2 className="text-white text-lg">Follow Us</h2>
          <h2 className="gap-2 flex"><BsTelegram className="text-green-600 text-3xl"></BsTelegram> <BsYoutube className="text-green-600 text-3xl"></BsYoutube></h2>
        </div>
      </div>
      <hr className="bg-white my-10" />
      <p className="pb-10 text-center text-lg">© copyright 2023 Smm Panel | All Rights Reserved | Terms & Conditions</p>
    </div>
  );
}
