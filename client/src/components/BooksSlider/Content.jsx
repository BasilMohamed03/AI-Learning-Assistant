import React, { Component } from "react";
 
import CrossIcon from "../Icons/CrossIcon";

import "../../css/style.css";

import DashboardCard06 from "../../partials/dashboard/DashboardCard06";
import DashboardCard10 from "../../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../../partials/dashboard/DashboardCard11";

/*function scrollToDetail() {
  const divElement = document.getElementById("detail");
  divElement.scrollIntoView({ behavior: "smooth" });
}*/

////////////////////////////////////////////////////////////////

/*function renderSection(sections) {
  return sections.map((section, index) => (
    // bg-netflix-gray bg-opacity-20
    <div className="flex flex-row border-y-[1px] rounded-md border-netflix-gray-2 sm:pl-8 sm:pr-16 py-8 items-center hover:cursor-pointer  ">
      <div className="mr-5 font-netflixsansregular text-2xl">{index + 1}</div>
      <img
        className="w-16 h-10 sm:w-32 sm:h-20  rounded-md"
        src={section?.image}
      ></img>
      {/* w-32 h-20 *|}
      <div className="pl-3 w-full">
        <div className="flex flex-row justify-between">
          <div className="font-netflixsansmedium">{section?.title}</div>
          <div className="font-netflixsansregular ml-3 sm:ml-0">
            {section?.duration}
          </div>
        </div>
        <div className="text-opacity-80 text-xs sm:text-sm text-white pt-2">
          {section?.description}
        </div>
      </div>
    </div>
  ));
}*/
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: false,
    };
  }

  render() {
    const { movie, onClose } = this.props;
    return (
      <div className="fixed flex justify-center top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] overflow-y-auto">
        <div className="absolute bg-netflix-black-2 z-[1000] w-[98%] lg:w-7/12 rounded-md top-5">
          <div className="h-full w-full relative">
          <button
              onClick={onClose}
              className="flex absolute top-4 right-4 justify-center items-center  bg-netflix-black-2  w-9 h-9 rounded-full z-20"
            >
              <CrossIcon width={18} height={18} color="white" />
            </button>
            <img className="rounded-t-md" src={movie?.detailimage}></img>

            <div className="w-full bottom-0 absolute flex p-28   bg-gradient-to-t from-netflix-black-2 to-transparent"></div>
          </div>

          <div className="w-full bg-transparent flex flex-row px-7 py-5">
            <div className="flex-1 flex flex-col gap-y-5 text-white  px-4">
              <span className="text-lg pr-20">{movie?.description}</span>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              {/* Card (students) */}
              <DashboardCard10 />
              {/* Card (reasons of wrong answers) */}
              <DashboardCard11 />
              {/* Doughnut chart (Students' levels of understandings) */}
              <DashboardCard06 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
