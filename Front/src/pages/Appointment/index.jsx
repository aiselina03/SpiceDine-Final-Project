import React from "react";
import BookingTable from "../../components/BookingTable";
import "./style.scss"
import Mode from "../../components/Mode";
import Scroll from "../../components/Scroll";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";

function Appointment() {
  return (
    <>
        <Helmet>
        <title>SpiceDine - Appointment</title>
        <link rel="icon" href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png" />
      </Helmet>
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
