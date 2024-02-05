import React from "react";
import BookingTable from "../../components/BookingTable";
import "./style.scss"
import Mode from "../../components/Mode";
import Scroll from "../../components/Scroll";
import Cursor from "../../components/Cursor";

function Appointment() {
  return (
    <>
      <div className="appointment">
        <BookingTable />
      </div>
      <Mode />
      <Scroll />
      <Cursor/>
    </>
  );
}

export default Appointment;
