import About from "./components/About";
import Timer from "./components/Timer";
import mait from "../src/images/MAIT_LOGO_FULL.png";
import mates from "../src/images/MATES25Yrs.png";
import Footer from "./components/Footer";
import PrevSponsors from "./components/PrevSponsors";
import Artist from "./components/Artist";
import HomeEvents from "./components/HomeEvents";

function App() {
  const gradientText = {
    background: "-webkit-linear-gradient(white, #38495a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Rundeck",
  };

  return (
    <div className="snap-y snap-mandatory overflow-auto h-screen">
      <div className="snap-start w-full min-h-screen flex items-center justify-around text-white bg-transparent">
        <div className="flex flex-col items-center text-center">
          <img
            src={mait}
            alt="mait-logo"
            className="absolute w-[70px] top-5 left-[5rem]"
          />
          <img
            src={mates}
            alt="mates-logo"
            className="absolute w-[70px] rounded-md top-5 right-[5rem]"
          />
          <div>
            <p
              className="text-3xl font-light"
              style={{
                fontFamily: "Ultra",
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Maharaja Agrasen Institute of Technology
            </p>
            <p
              className="font-thin"
              style={{
                fontFamily: "Ultra",
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              presents
            </p>
          </div>

          <div className="text-[7rem] text-center" style={gradientText}>
            Techsurge & Mridang'24
          </div>
          <div
            className="text-[3.5rem]"
            style={
              (gradientText,
              {
                fontFamily: "Ultra, serif",
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })
            }
          >
            20-21-22 March'24
          </div>
          <div
            className="text-[1.5rem]"
            style={
              (gradientText,
              {
                fontFamily: "Ultra, serif",
                background: "-webkit-linear-gradient(white, #38495a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })
            }
          >
            #ExpectTheUnexpected
          </div>
          <Timer />
        </div>
      </div>
      <div
        className="snap-start w-full min-h-screen flex items-center justify-around"
        id="about"
      >
        <About />
      </div>
      <div className="snap-start w-full min-h-screen flex items-center justify-around">
        <Artist />
      </div>
      <div className="snap-start w-full min-h-screen flex items-center justify-around">
        <HomeEvents />
      </div>
      <div className="snap-start w-full min-h-screen flex items-center justify-around">
        <PrevSponsors />
      </div>
      <div className="snap-start w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
