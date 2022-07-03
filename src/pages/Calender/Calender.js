import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calender.css";

export default function Calender() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="calender">
      <Calendar onChange={setDate} value={date} 
      />
      <strong>
        This is: <code>{date.toISOString()}</code>
      </strong>
    </div>
  );
}
