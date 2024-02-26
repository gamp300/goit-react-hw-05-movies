import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  line-height: 1.5;
  margin: 0 auto;
`;

export const Links = styled.div`
  margin: 20px;
  a {
    text-decoration: none;
    margin: 5px;
    padding: 10px;
    color: black;
  }
`;

export const List = styled.li`
  list-style-type: none;
  a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      border-radius: 5px;
      background-color: #3c3c3c;
      color: white;
    }
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const MovieContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const PosterContainer = styled.div`
  flex: 1;
  img {
    width: 300px;
    height: auto;
  }
`;

export const DetailsContainer = styled.div`
  flex: 2;
  padding-left: 20px;
`;
