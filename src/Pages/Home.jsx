import styled from "styled-components";
import { movies } from "../util/test_data";

export default function Home() {
  return (
    <Container>
      <MoviewPoster>
        {movies.results.map((movie) => {
          return (
            <ul key={movie.id}>
              <li>{movie.title}</li>
            </ul>
          );
        })}
      </MoviewPoster>
    </Container>
  );
}

const Container = styled.div``;

const MoviewPoster = styled.div`
  display: flex;
  align-item: center;
`;
