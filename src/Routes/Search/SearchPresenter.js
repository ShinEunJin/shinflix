import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
    result,
    searchTerm,
    loading,
    error
}) => null

SearchPresenter.propTypes = {
    result: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.string
}

export default SearchPresenter;