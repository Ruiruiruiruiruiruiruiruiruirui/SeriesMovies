import React from 'react'
import styled from 'styled-components'

import { WidthContainer } from "assets/css/sharedStyledComponents";

const Container = styled.div`
  width: 100%;
  background-color: #383838;
  padding: 10px;
  height: 30px;
  -webkit-box-shadow: -1px 6px 31px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 6px 31px -8px rgba(0,0,0,0.75);
  box-shadow: -1px 6px 31px -8px rgba(0,0,0,0.75);
`

const Text = styled.div`
  font-size: 20px;
  color: #fff;
  flex: 1;
  align-self: center;
  text-transform: capitalize;
`

const extractSlash = (path) => {
  switch(path){
    case '/series':
      return 'series'
    case '/movies':
      return 'movies'
    default:
      return 'titles'
  }
}

const Subheader = ({selected}) =>
  <Container>
    <WidthContainer>
      <Text>Popular {extractSlash(selected.pathname)}</Text>
    </WidthContainer>
  </Container>

export default Subheader