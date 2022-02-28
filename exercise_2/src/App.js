import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';


/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      
      items: [
        { id: 1, value: 'Milk', qty: 0, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 0, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 0, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 0, unit: 'x' }
      ]
    };

    this.updateState1 = this.updateState1.bind(this);
    this.updateState2 = this.updateState2.bind(this);
    this.updateState3 = this.updateState3.bind(this);
    this.updateState4 = this.updateState4.bind(this);
  }

  updateState1() {
    this.setState((prevState) => {
      return { qty: prevState.items[0].qty += Math.floor(Math.random() * 10) + 1}
    })
  }

  updateState2() {
    this.setState((prevState) => {
      return { qty: prevState.items[1].qty += Math.floor(Math.random() * 10) + 1}
    })
  }

  updateState3() {
    this.setState((prevState) => {
      return { qty: prevState.items[2].qty += Math.floor(Math.random() * 10) + 1}
    })
  }

  updateState4() {
    this.setState((prevState) => {
      return { qty: prevState.items[3].qty += Math.floor(Math.random() * 10) + 1}
    })
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />

      <button onClick={ this.updateState1 }>Lisää maitoa!!</button>
      <button onClick={ this.updateState2 }>Lisää banskui</button>
      <button onClick={ this.updateState3 }>Lisää leipää</button>
      <button onClick={ this.updateState4 }>Munaaaaa</button>
    </div>
  }
}

export default App;