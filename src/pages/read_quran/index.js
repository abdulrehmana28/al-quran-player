import { useEffect } from "react";
import LeftSection from "../../components/read_quran/LeftSection";
import RightSection from "../../components/read_quran/RightSection";
import { QuranApi } from "../../services/quran_api";

function ReadQuran() {
  useEffect(() => {
    getSurah();
  }, []);

  function getSurah() {
    const surah = QuranApi.getSurah().then((res) => res);
    console.log(surah);
  }

  return (
    <div className="bg-slate-500 flex w-full h-screen">
      {/* Left side*/}
      <LeftSection />

      {/* Right side*/}
      <RightSection />
    </div>
  );
}

export default ReadQuran;
