import React from 'react'

const ProjectDetails = (props) => {
    //console.log(props);
   const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
           <span className="card-title">Project title - {id}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by me-QQ</div>
            <div>29 Mars 2019, kl 14:15</div>
        </div>
     </div>
    </div>
  )
}

export default ProjectDetails


// Mera info. om console.log(props) / localhost:3000/projet/3
// sedan inpektera. Följande är en del av inspektera. 
//{history: {…}, location: {…}, match: {…}, staticContext: undefined}
// history: {length: 14, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
// location: {pathname: "/project/3", search: "", hash: "", state: undefined}
//match: {path: "/project/:id", url: "/project/3", isExact: true, params: {…}}
//isExact: true
// params: {id: "3"}
// url: "/project/3"
//---finns mera info i inspektera
// Anledningen till info. ovan är för att förstår varifrån "const id"
// Och vad användning är det.
// T ex om nu ändras localhost:3000/project/4, då visas i browser project title - 4
// om ändras till QQsAndraApp då visas QQsAndraApp...