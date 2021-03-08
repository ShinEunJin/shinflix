import React from "react";
import { recommendApi } from "../../api";
import RecommendPersenter from "./RecommendPresenter";

export default class extends React.Component {

    state = {
        recommendBook: null,
        loading: true,
        error: null
    }

    async componentDidMount() {
        try {
            const {
                data: { item: recommendBook }
            } = await recommendApi()
            this.setState({ recommendBook })
        } catch {
            this.setState({ error: "추천 정보를 찾을 수 없습니다." })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { recommendBook, loading, error } = this.state;
        return (
            <RecommendPersenter
                recommendBook={recommendBook}
                loading={loading}
                error={error}
            />
        )
    }
}