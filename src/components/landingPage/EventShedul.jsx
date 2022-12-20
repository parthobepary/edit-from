import React from "react";
import "../../assets/css/event-schedule.css";
import Title from "../common/Title";
import EventTable from "./EventTable";

const EventShedul = () => {
  return (
    <div className="mt-32 px-20">
      <Title
        title="Event Schedule"
        pera="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolores."
      ></Title>
      <EventTable />
    </div>
  );
};

export default EventShedul;
