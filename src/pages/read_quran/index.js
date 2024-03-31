import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";

function ReadQuran() {
  return <div className="bg-slate-500 flex w-full h-screen">
    {/* Left side*/}
    <LeftSection/>

    {/* Right side*/}
    <RightSection/>
    
  </div>;
}

export default ReadQuran;
