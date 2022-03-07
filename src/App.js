import React from "react";

class App extends React.Component {
  constructor(props) {
    console.log("constructor Created>>");
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("component mounted>>");
  }

  RenderInput = (item) => {
    return <div>{item}</div>;
  };
  render() {
    console.log("render created>>");
    // console.log(this.state.count);

    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {xyz.map((item) => this.RenderInput(item))}
        </button>
      </div>
    );
  }
}
export default App;
