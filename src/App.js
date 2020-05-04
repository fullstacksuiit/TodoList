import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }


  updateInput(key, value) {
    
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    
    const list = [...this.state.list];

    // add 
    list.push(newItem);

    // update 
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }
  
  render() {
    return (
      <div>

      <h1 className="app-title">MY LIST</h1>
        
        <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Add an Item...
          <br />
          <input
            type="text"
            placeholder="Type item here"
            style={{ "width": "400px", "height": "50px" }}
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />&nbsp;&nbsp;
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i className="material-icons"> <b>+</b> </i>
          </button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i className="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
