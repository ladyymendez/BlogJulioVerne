import React,{Component} from 'react';

import profilePic from '../assets/img/lovecraft-profile.jpg'
class Sidebar extends Component {
    render(){
        return (
            <aside>
                <div className="personal-data-wrapper">
                    <img 
                        className="profile-pic"
                        src={profilePic} 
                        alt="profile-pic"
                    />
                 <h1 className="profile-name" >
                    HP. Lovecraft
                 </h1>
                 <h2 className="profile-ocupation">
                     Escritor
                 </h2>
                 <h3 className="birth-date">
                    20 de agosto de 1890
                 </h3>
                 <h3 className="birth-place">
                    Providence, Rhode Island
                 </h3>
                </div>
                
            </aside>
        )
    }
}

export default Sidebar;