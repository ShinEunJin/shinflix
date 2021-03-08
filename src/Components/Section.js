import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 550px));
  grid-auto-rows: minmax(max-content, 300px);
  grid-row-gap: 100px;
  justify-content: space-between;
`

const Section = ({ children }) => (
    <Container>
        <Grid>{children}</Grid>
    </Container>
)

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section