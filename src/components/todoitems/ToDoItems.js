
import React from 'react'


const TodoItems = (props) => {
    const {items, deleteItem} = props;
    let length = items.length;
    
    const ListItems = length ? (  
    items.map(item =>{
        
    return(
<div className = "description" key = {item.description }>
<span className = "date">{item.deadline}</span>
<span className = "action icon" onClick = {() => deleteItem(items.description) }>&times;</span>
</div>
    )
})
)
: (
    <p>There is no item to show!</p>
)
return ( 
<div>
    <div class = "ListItems">
        <span className = "description litle">DESCRIPTION</span>
        <span className = "description litle">DEADLINE</span>
        <span className = "description litle">ACTION</span>
    </div>
{ListItems}
</div>

 )
}

export default TodoItems;