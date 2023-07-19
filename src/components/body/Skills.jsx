import React from "react";
import "../body/Skills.css";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import skillObj from "../../objects/skilList";  

const Skills = () => {
  return (
    <div
      class="skills-container"
      id="serviceValue"
    >
      <div>
        <h1>Skills</h1>
      </div>
      <div>
        <ul>
          {
            skillObj.map((item, index) => (
              <li
                key={index}
              >
                <Chip avatar={<Avatar alt="Remy Sharp" src={item.icon} /> } label={item.skill}
                 sx={{backgroundColor:"white"}} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Skills;
