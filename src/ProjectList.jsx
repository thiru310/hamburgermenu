import React from "react";
import "./css/dropdown.css";
class ProjectList extends React.Component{
    

    constructor(props){
        super(props);
        this.state = {
         open : false,
         //setOpen : false,
        }
      }

      setOpen = () => {
        this.setState.setOpen(!this.state.open);
      };

      handleOpen = () => {
        this.setState({
            open:!this.state.open,
        })
      };

      render(){
        return(
            <div className="dropdown">
      <button onClick={this.handleOpen}>Dropdown</button>
      {this.state.open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>
      ) : null}
      {this.state.open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
        );
      }

}
export default ProjectList;