
import React from "react";

class CounterWithClassComponent extends React.Component<{}, { count: number }> {
    constructor(props: {}) {
        super(props); // pass props to super
        this.state = { count: 0 };
    }

    render(): React.ReactNode {
        const { count } = this.state;
        return (
            <button onClick={() => this.setState(prev => ({ count: prev.count + 1 }))}>
                {count}
            </button>
        );
    }
}

export default CounterWithClassComponent;
