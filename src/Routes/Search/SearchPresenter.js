import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";
import Section from "../../Components/Section";

const Hover = keyframes`
    from {
        border-bottom: 1px solid rgba(255, 255, 255, 0);
    }
    to {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
`

const Form = styled.form`
    width: 20%;
    margin-left: 25px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    &:hover{
        animation: ${Hover} 0.2s ease-in-out forwards;
    }
`

const Input = styled.input`
    all: unset;
    font-size: 25px;
    width: 100%;
    &::placeholder {
        color: white;
        opacity: 0.5;
    }
`

const SearchPresenter = ({ result, searchTerm, loading, error, handleSubmit, updateTerm }) =>
    <>
        <Helmet>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
            />
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <i style={{ color: 'white', marginRight: '10px' }} className="fas fa-search"></i>
            <Input
                placeholder="책 제목을 입력해 주십시오."
                value={searchTerm}
                onChange={updateTerm}
            />
        </Form>
        <>
            {loading ? <Loader /> : (
                <>
                    {result && result.length > 0 && (
                        <Section>
                            {result.map(book => (
                                <Poster
                                    key={book.itemId}
                                    id={book.itemId}
                                    title={book.title}
                                    pubDate={book.pubDate}
                                    price={book.priceStandard}
                                    saleStatus={book.saleStatus}
                                    image={book.coverLargeUrl}
                                    reviewPoint={book.customerReviewRank}
                                    author={book.author}
                                    publisher={book.publisher}
                                    description={book.description}
                                    link={book.link}
                                />
                            ))}
                        </Section>
                    )}
                    {result && result.length === 0 && (
                        <div style={{ color: 'white', marginLeft: '100px', fontSize: '22px', opacity: '0.7', fontWeight: '300' }}>해당하는 도서를 찾을 수 없습니다.</div>
                    )}
                </>
            )}
        </>
    </>


SearchPresenter.propTypes = {
    result: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;