import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    max-width: 90%;
    margin: 0 auto;
`

const Image = styled.img`
    width: 20%;
    margin-right: 50px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
`

const Column = styled.div`
    width: 60%;
    text-shadow: 2px 2px 2px rgba(100, 100, 100, 0.5);
    position: relative;
`

const DetailPresenter = ({ result, error, loading }) =>
    loading ? null : (
        <Container>
            <Image src={result.image} />
            <Column>
                <div style={{ fontWeight: 600, fontSize: 40, marginBottom: 30 }}>{result.title}</div>
                <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 20 }}>{result.author}</div>
                <div style={{ fontSize: 15, marginBottom: 50 }}>{result.description}</div>
                <div style={{ marginBottom: 50 }}>
                    <span>출간일: {result.pubDate} ({result.saleStatus})</span>
                    <br></br>
                    <br></br>
                    <span>출판사: {result.publisher}</span>
                </div>
                <div style={{ fontSize: 30, marginBottom: 30 }}>{result.price}원</div>
                <div style={{ fontSize: 30 }}>⭐{result.reviewPoint}</div>
                <a
                    href={result.link} target={"_blank"}
                    style={{ position: 'absolute', bottom: '20px', fontSize: '15px', fontWeight: '500', backgroundColor: 'black', borderRadius: '10px', padding: '4px' }}
                >{`<구매하러 가기>`}</a>
            </Column>
        </Container>
    )

export default DetailPresenter

//, , , , , reviewPoint, , publisher, 