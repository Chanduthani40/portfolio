import React from "react";
import service from "../../objects/service";
import "../body/Service.css";

const Service = () => {
 
  return (
    <div className="Service-main-container"  id="serviceValue">
      <div>
      <h1>Service I offer</h1>

      </div>
        <div className="grid-container">
          {service.map((item, index) => (
            <div
              className="service-container"
              style={{ backgroundColor: item.color }}
              key={index}
            >
              <div>
                <h3>{item.title}</h3>
              </div>
              <div>
                <p>{item.display}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Service;
