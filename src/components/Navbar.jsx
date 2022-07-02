import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbarwrapper=styled.div`
  display:flex;
  alighn-items:center;
  justify-content:center;
  gap:20px;
  background:teal;
  color:white;
  padding:20px
`;

const StyledLink=styled(Link)`
  color:blue;
`;

export const Navbar=()=>{
    return (
        <Navbarwrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/bookings">Bookings</StyledLink>
        </Navbarwrapper>
    )
}