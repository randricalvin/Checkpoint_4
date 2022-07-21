import React from "react";
import Iframe from "react-iframe";

function Mapping() {
  return (
    <div className="Mapping flex items-center">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1090181.6317822626!2d2.243663221812337!3d47.65434148881718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x47e4e4d49df386e3%3A0x9eb97de479c38029!2zT3Jsw6lhbnM!3m2!1d47.902964!2d1.9092509999999998!5e0!3m2!1sfr!2sfr!4v1654982468129!5m2!1sfr!2sfr"
        allowfullscreen=""
        width="600"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
}

export default Mapping;
