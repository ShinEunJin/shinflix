import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader";

const Container = styled.div``

const NewPresenter = ({ newBook, loading, error }) =>
    loading ? <Loader /> : (
        <Container>
            {newBook && newBook.length > 0 && (
                <Section>
                    {newBook.map(book => (
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
        </Container>
    )

NewPresenter.propTypes = {
    newBook: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default NewPresenter;