import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 1px 1px 4px rgba(100, 100, 100, 0.7);
    border-radius: 20px;
    position: relative;
    &:hover{
        border: 1px solid rgba(200, 200, 200, 0.5);
        box-shadow: 2px 2px 7px rgba(200, 200, 200, 0.7);
    }
`

const SubDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 17px;
    width: 50%;
    padding: 0px 5px;
`

const Image = styled.img`
    margin-right: 20px;
    position: absolute;
    left: -20px;
    top: -40px;
`

const Title = styled.div``

const Status = styled.div`
    display:flex;
`

const Poster = ({ id, title, pubDate, price, saleStatus, image, reviewPoint, author, publisher, description }) => (
    <Container>
        <Link to={{ pathname: `/book/${id}`, state: { title, pubDate, price, saleStatus, image, reviewPoint, author, publisher, description } }}>
            <Image src={image} />
        </Link>
        <SubDescription>
            <Title>
                {title}
            </Title>
            <br></br>
            {author}
            <br></br>
            <br></br>
            {reviewPoint}⭐
            <br></br>
            <br></br>
            <Status>
                {saleStatus}
            </Status>
        </SubDescription>
    </Container>
)

export default Poster


