import styled from "styled-components";

export default function SearchBox({ keyword, onChangeKeyword }) {
  return (
    <Container>
      <Wrapper>
        <ImgBox>🔍</ImgBox>
        <Input
          placeholder="영화 이름을 입력하세요."
          value={keyword}
          onChange={onChangeKeyword}
        ></Input>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 0;
  margin: 50px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  max-width: 60%;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(250, 250, 250, 0.24);
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 8px 20px;
  padding-left: 38px;
  border: 0;
  outline: 0;
`;

const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  display: flex;
  align-items: center;
  svg {
    fill: black;
  }
`;
