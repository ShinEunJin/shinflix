import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader"

const Container = styled.div``

const HomePresenter = ({ bestSeller, error, loading }) =>
    loading ? <Loader /> : (
        <Container>
            {bestSeller && bestSeller.length > 0 && (
                <Section>
                    {bestSeller.map(book => (
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

HomePresenter.propTypes = {
    bestSeller: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter