import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  display: flex;
  width: 12%;
  margin: 0.5%;
  padding: 5px;
  flex-direction: column;
`

const Box = styled.div`
  & > img {
    width: 100%;
  }
`

const Caption = styled.div`
  color: #585858;
  font-size: 12px;
  margin: 5px 0;
  flex: 1 0 auto;
  flex-wrap: wrap;
`

const Movies = ({movies}) => <Container>
  {movies.map((item, i) =>
    <Item key={`movie-${i}`}>
      <Box>
        <img src={item.images['Poster Art'].url} alt={item.title} />
      </Box>
      <Caption>
        {item.title}
      </Caption>
    </Item>
  )}
</Container>

export default Movies