import React from "react";
import TitleDescription from "./TitleDescription";

const CoreValuesSection = () => {
  return (
    <div>
      <TitleDescription title="CORE VALUES">
        <code className="font-sans md:whitespace-pre-wrap">{`
Commitment to support our mission. Putting the heart and mind in the work to get 
the best result. Commitment to apply biblical principles at the workplace. 
Acknowledging that God is the true owner of the company.
        `}</code>
      </TitleDescription>
    </div>
  );
};

export default CoreValuesSection;
