import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color:white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
    margin-left: 10px;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 2px solid ${props => (props.current ? "aqua" : "transparent")};
    transition: border-bottom 0.2s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter((props) => (
    <Header>
        <List>
            <Item current={props.location.pathname === "/"}>
                <SLink to="/">베스트셀러</SLink>
            </Item>
            <Item current={props.location.pathname === "/recommend"}>
                <SLink to="/recommend">추천</SLink>
            </Item>
            <Item current={props.location.pathname === "/new"}>
                <SLink to="/new">신간</SLink>
            </Item>
            <Item current={props.location.pathname === "/search"}>
                <SLink to="/search">검색</SLink>
            </Item>
        </List>
    </Header>
));