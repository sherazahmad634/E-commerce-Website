import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosalCard from "../../components/HomeSectionCarosalCard/HomeSectionCarosalCard";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
      <HomeSectionCarosalCard/>
      <HomeSectionCarosalCard/>
      <HomeSectionCarosalCard/>
      <HomeSectionCarosalCard/>
      </div>
    </div>
  );
};

export default HomePage;
