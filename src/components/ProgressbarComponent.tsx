import * as React from 'react';
import { ProgressIndicator } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { Async } from 'office-ui-fabric-react/lib/Utilities';

export interface IProgressBarState {
  percentComplete: number;
}

const INTERVAL_DELAY = 100;
const INTERVAL_INCREMENT = 0.01;
const RESTART_WAIT_TIME = 2000;

export class ProgressBar extends React.Component<{}, IProgressBarState> {
  private interval: number;
  private async: Async;

  constructor(props: {}) {
    super(props);
    this.interval = 5;
    this.async = new Async(this);

    this.state = {
      percentComplete: 0
    };
    this._startProgressDemo = this._startProgressDemo.bind(this);
  }

  public componentDidMount(): void {
    this._startProgressDemo();
  }

  public componentWillUnmount(): void {
    this.async.dispose();
  }

  public render(): JSX.Element {
    const { percentComplete } = this.state;

    return <ProgressIndicator label="Installing" description="Installation in progress..." percentComplete={percentComplete} />;
  }

  private _startProgressDemo(): void {
    // reset the demo
    this.setState({
      percentComplete: 0
    });

    // update progress
    this.interval = this.async.setInterval(() => {
      let percentComplete = this.state.percentComplete + INTERVAL_INCREMENT;

      // once complete, set the demo to start again
      if (percentComplete >= 1.0) {
        percentComplete = 1.0;
        this.async.clearInterval(this.interval);
        this.async.setTimeout(this._startProgressDemo, RESTART_WAIT_TIME);
      }
      this.setState({
        percentComplete: percentComplete
      });
    }, INTERVAL_DELAY);
  }
}