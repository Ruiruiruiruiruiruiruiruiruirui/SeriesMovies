import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
`

const Item = styled.div`
  display: inline-block;
  width: 12%;
  margin: 0.5%;
  padding: 5px;
`

const Box = styled.div`
  min-height: 200px;
  background-color: #383838;
  
  & > div {
    align-self: center;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    line-height: 200px;
    color: #fff;
  }
`

const Caption = styled.div`
  color: #585858;
  font-size: 12px;
  margin: 5px 0;
`

const Home = ({links}) => <Container>
  {links.map((item, i) =>
    <Link to={item.linkTo} key={`type-${i}`}>
      <Item>
        <Box>
          <div>{item.label}</div>
        </Box>
        <Caption>
          {item.caption}
        </Caption>
      </Item>
    </Link>
  )}
</Container>

export default Home