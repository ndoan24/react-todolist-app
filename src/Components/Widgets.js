import React from 'react'
import "../Styles/styles.css";

function Widgets() {
    const time= new Date();
    const hours=time.getHours();
    const minutes=time.getMinutes();
    return (
        
        //iframe to website
        //shows the current time
        //links for internal pages
        //search box // html input
        //page. 530 html widgets 
        //think css size placement position best practices


        <div>
            
            <iframe src="http://localhost:3000" title="mylocalhost"></iframe>
<div className="time"> {hours} : {minutes} </div>
<div className="links">
    <a href="/">Click Me</a>
    <a href="/">Test Me</a>
    <a href=".">Run Me</a>
</div>

<input type="search"></input>





        </div>
    )
}

export default Widgets
