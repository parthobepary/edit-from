import React from "react";
import Title from "../common/Title";
import EmpolyeeInfo from "./EmpolyeeInfo";

const ConferenceInfo = () => {
  return (
    <div className="mt-16 px-10 md:px-32">
      <Title
        title="Conference Info"
        pera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolores."
      ></Title>
      <EmpolyeeInfo></EmpolyeeInfo>
    </div>
  );
};

export default ConferenceInfo;
