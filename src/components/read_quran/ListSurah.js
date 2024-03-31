function ListSurah() {
  return (
    <div className="h-full w-full p-4">
      <ItemSurah
        number={78}
        nameOfSurah={"An-Naba"}
        meaningOfSurah={"Besraita"}
        placeOfRevelation={"makah"}
        numberOfVerses={40}
      />
    </div>
  );
}

export default ListSurah;

function ItemSurah({
  number,
  nameOfSurah,
  meaningOfSurah,
  placeOfRevelation,
  numberOfVerses,
}) {
  return (
    <div className=" h-24 w-full border-b-2 border-teal-700 flex mb-4">
      <div className="basis-12">
        <h3 className="text-2xl font-bold text-teal-700"> {number} </h3>
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-teal-700"> {nameOfSurah}</h3>
        <h5 className="text-base font-bold text-gray-500">{meaningOfSurah}</h5>
        <span className="text-base font-light text-gray-500">
          {placeOfRevelation}, {numberOfVerses} ayat
        </span>
      </div>
    </div>
  );
}
