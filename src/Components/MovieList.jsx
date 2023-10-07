import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../constant";
import Card from "./Card";
import styled from "styled-components";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.type ? params.type : "popular"
      }?language=ko-KR&api_key=` + config.API_KEY
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [params.type]);

  return (
    <Container>
      <h3 style={{ marginTop: "20px" }}>검색🔍</h3>
      <Title></Title>
      <Group>
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie}></Card>;
        })}
      </Group>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 3rem 3rem 3rem;
`;

const Title = styled.h2`
  font-zise: 1.75rem;
  margin-bottom: 10px;
`;

// flex-flow: row wrap;

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
