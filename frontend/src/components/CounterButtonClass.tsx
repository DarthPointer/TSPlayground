import { PureComponent } from "react";

export interface CounterButtonClassProps {
  title?: string;
  startCount?: number;
}

interface CounterButtonClassState {
  count: number;
  aboolos: boolean;
}

export default class CounterButtonClass extends PureComponent<
  CounterButtonClassProps,
  CounterButtonClassState
> {
  constructor(props: Readonly<CounterButtonClassProps>) {
    super(props);
    this.state = { count: props.startCount ?? 0, aboolos: false };
  }

  handleClick = () => {
    this.setState((oldState) => ({ aboolos: !oldState.aboolos, count: 10 }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.title ?? "count is"} {this.state.count}
      </button>
    );
  }
}
