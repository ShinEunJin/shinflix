import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {

    state = {
        result: null,
        error: null,
        loading: true
    }

    componentDidMount() {
        const { location: { state: result } } = this.props
        this.setState({ result, loading: false })
    }

    render() {
        const { result, error, loading } = this.state
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}