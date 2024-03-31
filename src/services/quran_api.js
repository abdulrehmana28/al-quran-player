export const QuranApi = {
  getSurah: async function () {
    try {
      const surah = await fetch("https://equran.id/api/surat")
        .then((res) => res.json)
        .then((data) => data);
      return surah;
    } catch (error) {
      console.log(error);
    }
  },
};
