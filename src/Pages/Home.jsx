import styled from "styled-components";
import { movies } from "../util/test_data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <Container>
      <MoviewPoster>
        <Carousel
          showThumbs
          autoPlay
          infiniteLoop
          showStatus={false}
          transitionTime={300}
        >
          {movies.results.map((movie) => {
            return (
              <ul key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
                <li>{movie.title}</li>
              </ul>
            );
          })}
        </Carousel>
      </MoviewPoster>
    </Container>
  );
}

const Container = styled.div``;

const MoviewPoster = styled.ul`
  display: flex;
  align-item: center;
`;
