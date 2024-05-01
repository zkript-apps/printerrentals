import React from "react";
import TitleDescription from "./TitleDescription";

const MissionSection = () => {
  return (
    <div>
      <TitleDescription title="MISSION">
        <code className="font-sans md:whitespace-pre-wrap">{`
To make a daily commitment to improve continuously internal and external work 
processes.
        `}</code>
       
      </TitleDescription>
    </div>
  );
};

export default MissionSection;
