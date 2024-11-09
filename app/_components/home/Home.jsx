import Image from "next/image";
import CustomLink from "../ui/CustomLink";
import Testimonial from "./Testimonial";
import Title from "./Title";

function Home() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-24 overflow-hidden px-2 pb-24 md:px-24 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-6 lg:pt-24">
        {/* content */}
        <div className="max-w-[450px] px-2 py-16">
          <Title />
          <div className="mt-6">
            <p>
              Break free from the ordinary with Ashton Gray’s exclusive U.S.
              real estate investments. Explore a world of secure, high-yield
              investments.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <CustomLink
              to="/"
              type="transparent"
              text="How it works"
            ></CustomLink>
            <CustomLink
              to="/"
              type="secondary"
              text="Investment calculator"
            ></CustomLink>
          </div>
          <div className="mt-8">
            <Testimonial />
          </div>
        </div>

        {/* hero image */}
        <div className="relative justify-start shadow-2xl">
          <div className="z-10">
            <Image
              src="/homeSection/home.png"
              alt="logo"
              width={400}
              height={375}
              className="w-[250px] rounded-lg lg:w-[450px]"
            ></Image>
          </div>
          {/* Shield */}
          <div className="absolute left-0 top-0 z-10 flex -translate-x-[55%] -translate-y-12 flex-col items-center gap-3 rounded-xl bg-white bg-opacity-40 p-3 backdrop-blur-md sm:p-6 md:-translate-x-[75%]">
            <p className="text-[10px] font-bold md:text-xs"> RBI ODI PROCESS</p>
            <Image
              src="/homeSection/surface1.png"
              alt="logo"
              width={60}
              height={75}
              className="h-[50px] w-[40px] md:h-[75px] md:w-[60px]"
            ></Image>
          </div>
          {/* graph */}
          <div className="absolute right-0 top-0 z-10 flex -translate-y-12 translate-x-[20%] items-center gap-3 rounded-xl bg-white bg-opacity-40 p-3 backdrop-blur-md sm:p-3 md:-translate-x-[25%]">
            <div className="flex flex-col text-xs">
              <span>10L Minimum</span>
              <span>Investment</span>
            </div>
            <Image
              src="/homeSection/curve.png"
              alt="logo"
              width={200}
              height={50}
              className="w-[100px] md:w-[200px]"
            ></Image>
          </div>
          {/* circle */}
          <div className="justif absolute bottom-0 right-0 z-10 flex h-32 w-32 translate-x-[25%] translate-y-12 flex-col items-center gap-3 rounded-full bg-white bg-opacity-40 p-3 text-center backdrop-blur-md sm:p-6 md:h-36 md:w-36 md:-translate-x-[75%]">
            <span className="text-xl font-semibold md:text-3xl">18%</span>
            <span className="text-sm">Return on Investment</span>
          </div>
          {/* project renure */}
          <div className="absolute bottom-0 left-0 z-10 flex -translate-x-[20%] translate-y-6 items-center gap-3 rounded-xl bg-white bg-opacity-40 p-3 backdrop-blur-md sm:p-3 md:-translate-x-[25%]">
            <div className="flex text-xs">
              <span>10L Minimum</span>
              <span>Investment</span>
            </div>
          </div>
          {/* glowing background */}
          {/* <div className="absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform bg-[radial-gradient(circle,_rgba(59,130,246,0.9)_0%,_transparent_100%)] opacity-80 blur-3xl"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
