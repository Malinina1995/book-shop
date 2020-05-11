import React, {Component} from "react";
import {ErrorIndicator} from "../error-indicator/error-indicator";

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State>{
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return this.props.children
    }
}
