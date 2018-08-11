class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('did mount');
    try {
      const stringCount = localStorage.getItem('count');
      const num = parseInt(stringCount, 10);
      if (!isNaN(num)) {
        this.setState(() => ({ count: num }));
      }
    } catch(e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      localStorage.setItem('count', this.state.count);
      console.log('did update');
    }
  }

  handleAddOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById('app'));