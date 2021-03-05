import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div``

const RecommendPresenter = ({ recommendBook, loading, error }) =>
    loading ? null : (
        <Container>
            {recommendBook && recommendBook.length > 0 && (
                <Section>
                    {recommendBook.map(book => (
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
                        />
                    ))}
                </Section>
            )}
        </Container>
    )

RecommendPresenter.propTypes = {
    recommendBook: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default RecommendPresenter