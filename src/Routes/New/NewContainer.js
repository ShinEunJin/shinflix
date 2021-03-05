import React from "react";
import { newApi } from "../../api";
import NewPresenter from "./NewPresenter";

export default class extends React.Component {

    state = {
        newBook: null,
        loading: true,
        error: null
    }

    async componentDidMount() {
        try {
            const {
                data: { item: newBook }
            } = await newApi()
            this.setState({ newBook })
        } catch {
            this.setState({ error: "신간 정보를 찾을 수 없습니다." })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { newBook, loading, error } = this.state
        return (
            <NewPresenter
                newBook={newBook}
                loading={loading}
                error={error}
            />
        )
    }
}