import AboutImage from "../Assets/Images/AboutImage.svg";
const ImageSlice = () => {
  return (
    <div>
      <div className="relative mx-auto mb-12 max-w-4xl px-4">
        <div className="grid grid-cols-7 gap-5 justify-center">
          {/* <!-- Left far edge (glasses arm) --> */}
          <div className="col-span-1 self-center">
            <div
              className="w-full h-32 bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${AboutImage})background-position: 0% 50%
                                            background-size: 700% `,
              }}
            ></div>
          </div>

          {/* <!-- Left lens section - Top and Bottom Charts --> */}
          <div className="col-span-1 flex flex-col  gap-12">
            {/* <!-- Top left chart - Blue chart with grid --> */}
            {/* <div
              className="w-full pt-[100%] relative bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg"
              style="background-image: url('images/about.svg'); 
                                            background-position: 18% 26%;
                                            background-size: 500%;"
            ></div> */}
            {/* <!-- Bottom left chart - Orange/Red chart --> */}
            {/* <div
              className="w-full pt-[100%] relative bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg"
              style="background-image: url('images/about.svg'); 
                                            background-position: 14% 72%;
                                            background-size: 500%;"
            ></div> */}
          </div>

          {/* <!-- Center bridge --> */}
          <div className="col-span-3 p-5">
            {/* <div
              className="w-full h-full bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg"
              style="background-image: url('images/about.svg'); 
                                            background-position: center center;
                                            background-size: 220%;"
            ></div> */}
          </div>

          {/* <!-- Right lens section - Top and Bottom Charts --> */}
          <div className="col-span-1 flex flex-col gap-12">
            {/* <!-- Top right chart - Dark chart with data --> */}
            {/* <div
              className="w-full pt-[100%] relative bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg"
              style="background-image: url('images/about.svg'); 
                                            background-position: 86% 16%;
                                            background-size: 500%;"
            ></div> */}
            {/* <!-- Bottom right chart - Chart with yellow line --> */}
            {/* <div
              className="w-full pt-[100%] relative bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg"
              style="background-image: url('images/about.svg'); 
                                            background-position: 86% 77%;
                                            background-size: 500%;"
            ></div> */}
          </div>

          {/* <!-- Right far edge (glasses arm) --> */}
          {/* <div className="col-span-1 self-center">
            <div
              className="w-full h-32 bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg"
              style="background-image: url('images/about.svg'); 
                                            background-position: 100% 50%;
                                            background-size: 700%;"
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlice;
