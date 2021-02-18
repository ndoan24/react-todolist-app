// import React from 'react'

// function Header(props) {
//     return (
//         <div className="class-header">
//             <h1 className="class-header-title">You have {props.numTodo} Tasks to Do</h1>
            
//         </div>
//     )
// }

// export default Header




import React from 'react'
function Header(props) {
    const name= "Clean"; 
    const date= new Date();
    const hours= date.getHours();
    const minutes= date.getMinutes(); 
    return (
        <div className= "card-header">
            <h1 className="card-header-title header">You have {props.numTodos} Tasks to Do </h1>
            <h2> Hello {name} It is currently {hours % 12} : {minutes}</h2>
        </div>
    )
}
export default Header;