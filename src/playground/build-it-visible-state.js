class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);

    this.state = {
      visibility: false
    }
  };


  handleToggleVisibilty() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{app.title}</h1>
        <button onClick={this.handleToggleVisibilty}>{this.state.visibility ? "Hide details" : "Show Details"}</button>
        {this.state.visibility && (<div>hey there, here are details you wanted to see</div>)}
      </div>
    );
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));