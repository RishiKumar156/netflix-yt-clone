import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";

export default function Home() {
  return (
    <div>
      <Main />
      <Row rowid="1" title="Top Rated" fetchUrl={requests.ratedMovies} />
      <Row rowid="2" title="Trending" fetchUrl={requests.trendingMovies} />
      <Row
        rowid="3"
        title="Upcoming Movies"
        fetchUrl={requests.upcomingMovies}
      />
    </div>
  );
}
