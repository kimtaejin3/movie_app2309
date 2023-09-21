import styled from "styled-components";
import { movies } from "../util/test_data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PosterItem from "../Components/PosterItem";

export default function Home() {
  return (
    <Container>
      <MoviePoster>
        <Carousel
          showThumbs
          autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={300}
        >
          {movies.results.map((movie) => {
            return <PosterItem key={movie.id} movie={movie} />;
          })}
        </Carousel>
      </MoviePoster>
    </Container>
  );
}

const Container = styled.div``;
const MoviePoster = styled.div`
  display: flex;
  align-item: center;
`;
