import React  from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
    background-color: #222;

  }

.navbar-brand {
    color: #bbb;
    font-size: 12px;
    text-align:center;
    float:none;
    border: 1px solid #000000;

    &:hover {
      color: white;
    }
  }
`;


export const Footer = () => (
    <Styles>
        <Navbar fixed="bottom"> 
            <Navbar.Brand>Robert Fronczak &copy; 2020</Navbar.Brand>
        </Navbar>
    </Styles>
  )