import React from "react";
import { Icons } from "./Icons";
const UnderConstruction = () => {
  const Instagram = Icons["instagram"];
  const Twitter = Icons["twitter"];
  const Facebook = Icons["facebook"];
  const Linkedin = Icons["linkedin"];
  const Youtube = Icons["youtube"];
  const BrickWall = Icons["brickWall"];
  return (
    <div className=" overflow-hidden absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50    w-fit rounded-lg bg-white/20  border   border-white/70 py-16  px-32    drop-shadow-lg text-center ">
      <img src={"./logoWhite.svg"} className="w-[150px] m-auto  pb-10 " />
      <h2 className="text-white font-bold lg:text-4xl  text-2xl  tracking-wider ">
        사이트 유지보수 중
      </h2>
      <h4 className="font-bold lg:text-2xl text-lg">Under Construction</h4>
      <p className="pt-6 text-white font-bold lg:text-2xl text-lg tracking-wider">
        곧 찾아뵙겠습니다.
      </p>
      <p className="font-bold">We’ll be back shortly.</p>

      <p className="pt-10 text-white font-bold lg:text-md  text-sm break-words    ">
        불편을 드려 죄송합니다, 곧 찾아뵙겠습니다. <br />
        SNS를 통해 문의하실 수 있습니다.
      </p>
      <div className="flex justify-center items-center   gap-6  pt-3 ">
        <a href="https://www.instagram.com/truecandr/">
          <Instagram className="text-cyan-300 hover:text-white hover:delay-300 hover:transition ease-in-out" />
        </a>
        <a href="https://twitter.com/truecandr">
          <Twitter className=" text-cyan-300 hover:text-white hover:delay-300 hover:transition ease-in-out" />
        </a>
        <a href="https://www.facebook.com/candrofficial/">
          <Facebook className="text-cyan-300 hover:text-white hover:delay-300 hover:transition ease-in-out" />
        </a>
        <a href="https://kr.linkedin.com/company/candr">
          <Linkedin className="text-cyan-300 hover:text-white hover:delay-300 hover:transition ease-in-out" />
        </a>
        <a href="">
          <Youtube className="text-cyan-300 hover:text-white hover:delay-300 hover:transition ease-in-out" />
        </a>
      </div>
      <img
        src="./road.png"
        alt=""
        className="absolute -bottom-20 -right-44   w-[650px] -z-20    tranlate rotate-12        "
      />
      {/* <div className="flex justify-center items-center pt-20 ">
        <img src={"./logoWhite.svg"} className="w-[150px]" /> 
      </div> */}
    </div>
  );
};

export default UnderConstruction;
