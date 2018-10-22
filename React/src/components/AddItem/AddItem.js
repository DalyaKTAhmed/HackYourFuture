import React ,{Component} from 'react'

class AddItem extends Component {
    state = {
        item : "",
        date : ""
        }

        handelChange  = (e) => {
            console.log (e.target.value)// target to chach my input
            // I want to go through the state and chose item and date therefor will will use the id for each one 
            this.setState ({[e.target.id ]: e.target.value
             } )
        }
// this func to update the state
        handelSubmit = (e) => {
e.preventDefaut();
this.props.addItemToTheList(this.state)
//to make the form empty efter we write the new item on it 
this.setState({
    item : "",
    date : ""
})

        }

//value = {this.state.item} we add it to empty the input after adding the item on it

    render(){
       return (
           <div>
               <form onSubmit = {this.hadelSubmit}>
               <input type = "number" placeholder = "Enter date..." id = "item" onChange = {this.handelChange} value = {this.state.item} />        
                     <input type = "number" placeholder = "Enter date..." id = "date" onChange = {this.handelChange} value = {this.state.date} />
                     <input type = "submit" value = "Add" />
                         </form>
           </div>
       ) 
    }
}

export default AddItem;