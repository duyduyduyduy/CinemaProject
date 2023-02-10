export default interface eFilmInCinema {
  name: string;
  startdate: string;
  duration: string;
  age: string;
  imageLandscape: string;
  imagePortrait: string;
  dates: Array<{
    showDate: string;
    dayOfWeekLabel: string;
    bundles: Array<{
      version: string;
      sessions: Array<{
        showTime: string;
        screenName: string;
      }>;
    }>;
  }>;
}
