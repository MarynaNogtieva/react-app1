// const obj = {
//   name: 'bob',
//   getName() {
//     return this.name;
//   }
// }

// const getName = obj.getName;

// console.log(obj.name)

// console.log(getName()); // err cannot read prop of undefined, should be const getName = obj.getName.bind(obJ);


class IndecisionApp extends React.Component {
  render() {
    const subtitle = "Put your life in a hans of a computer";
    const title = "Indecision";
    const options = ['one', 'two', 'four']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  };
}


class Action extends React.Component {
  hadlePick() {
    alert('hadlepick');
  }
  render() {
    return (
      <div>
        <button onClick={this.hadlePick}>What should I do?</button>
      </div>
    );
  };
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
         {
           this.props.options.map((option, index)=>{
            return <Option key={index}optionText={option}></Option>;
          })
          }
          <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    );
  };
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  };
}


class Option extends React.Component {
  render() {
    return (
      <div>{this.props.optionText}</div>
    );
  };
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));