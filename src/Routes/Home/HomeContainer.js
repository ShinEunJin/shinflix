import React from "react";
import { bestSellerApi } from "../../api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {

    state = {
        bestSeller: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const {
                data: { item: bestSeller }
            } = await bestSellerApi()
            this.setState({ bestSeller })
        } catch {
            this.setState({ error: "베스트셀러 정보를 찾을 수 없습니다." })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { bestSeller, error, loading } = this.state
        return (
            <HomePresenter
                bestSeller={bestSeller}
                error={error}
                loading={loading}
            />
        )
    }
}