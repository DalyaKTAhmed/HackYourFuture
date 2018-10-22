import React, { Component } from 'react';
import TodoItems from './components/todoitems/ToDoItems'
import AddItem from './components/AddItem/AddItem'
import './App.css';

class App extends Component {
  state = {
    items: [{ description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
    { description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
    { description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
    ]
  }
deleteItem = (description) => {
let items = this.state.items; // call the whole items array, in other word (this line to go through every iten in the array)
let i = items.findIndex(item => item.description === description) //when I press on a spiecific description,it will be compared, if it is same id then delete it  
//(item.description) this one in the array, and (description) the one that we press it
items.splice(i,1) //delete, (1) the item we press
this.setState({items})//update the array, "items will be the new array after we delete an item"
}
  
//that I wrote it in the form to the list.
//this func whenwe add an item to the form it will take the item from AddItem file 
//and add it to the state in this file 
addItemToTheList = (item) => {
  item.id = Math.random (); 
  let items = this.state.items; // bring all the items
  items.push(item); // add the new item to the list
  this.setState()
}

  render() {
    return (
      <div className="App container">
        <h1 className = "text-center"> ToDoList App </h1>
             <TodoItems items={this.state.items} deleteItem ={this.deleteItem}/>
             <AddItem addItemToTheList = {this.addItemToTheList}/>
      </div>
    );
  }
}


export default App;
