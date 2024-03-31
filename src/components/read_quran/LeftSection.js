import ListSurah from "./ListSurah";

function LeftSection() {
  return (
    <div className="bg-slate-300 basis-1/4 flex flex-col">
      {/* TextField Search for Surah*/}
      <InputSearch />

      {/* List name surah */}

      <ListSurah />
    </div>
  );
}

export default LeftSection;

function InputSearch() {
  return (
    <div className="bg-gray-500 w-full h-24 flex justify-center items-center">
      <div className="bg-white w-full  mx-4 rounded-xl py-1 px-8 relative">
        <img
          src="search.png"
          alt="Search icon"
          width={20}
          height={20}
          className="absolute top-3 left-4"
        />
        <input className="h-full w-full py-2 ml-4" placeholder="Search Surah" />
      </div>
    </div>
  );
}
