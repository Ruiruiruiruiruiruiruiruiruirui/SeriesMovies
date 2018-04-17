import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Subheader from 'components/Subheader'

import { WidthContainer } from "assets/css/sharedStyledComponents";


const Header = styled.div`
  width: calc(100% - 20px);
  top: 0;
  height: 40px;
  background: #54a6e5; /* Old browsers */
  background: -moz-linear-gradient(top, #54a6e5 0%, #2475e5 100%, #1e5799 100%, #2774c6 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #54a6e5 0%,#2475e5 100%,#1e5799 100%,#2774c6 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #54a6e5 0%,#2475e5 100%,#1e5799 100%,#2774c6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#54a6e5', endColorstr='#2774c6',GradientType=0 ); /* IE6-9 */
  padding: 10px;
  align-self: center;
  display: flex;
  -webkit-box-shadow: -1px 6px 31px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 6px 31px -8px rgba(0,0,0,0.75);
  box-shadow: -1px 6px 31px -8px rgba(0,0,0,0.75);
`

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`

const Title = styled(Link)`
  flex: 3;
  align-self: center;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
`

const ButtonGroup = styled.div`
  flex: 1;
  display: flex;
`

const Login = styled(Link)`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  align-self: center;
  text-decoration: none;
  color: #fff;
  
`

const Button = styled.div`
  flex: 3;
  font-size: 14px;
  padding: 10px;
  align-self: center;
  background-color: #383838;
  text-align: center;
`

const Content = styled.div`
  flex: 1;
  margin: 25px 0;
`

class AppLayout extends Component {
  componentDidMount() {
    this.props.updateShowsList()
  }
  render() {
    const { links, children } = this.props

    return <div>
      <Header>
        <WidthContainer>
          <Title to={'/'}>DEMO Streaming</Title>
          <ButtonGroup>
            <Login to={'/'}>Log In</Login>
            <Button>Start your free trial</Button>
          </ButtonGroup>
        </WidthContainer>
      </Header>
      <Subheader />
      <FlexContainer>
        <Content>
          <WidthContainer>
            {children}
          </WidthContainer>
        </Content>
      </FlexContainer>
    </div>
  }
}

export default AppLayout