import React from "react";
import { searchApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {

    state = {
        result: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    handleSubmit = () => {
        const { searchTerm } = this.state
        if (searchTerm !== "") {
            this.searchByTerm()
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state
        this.setState({ loading: true })
        try {
            const {
                data: { item: result }
            } = await searchApi(searchTerm)
            this.setState({ result })
        } catch {
            this.setState({ error: `${searchTerm}에 대한 정보를 찾을 수 없습니다.` })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { result, loading, error } = this.state;
        return (
            <SearchPresenter
                result={result}
                loading={loading}
                error={error}
            />
        )
    }
}