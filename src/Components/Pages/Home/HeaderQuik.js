import React from "react";
import ws from "./../../../../src/Image/ws.png";
import "./Home.css";
const HeaderQuik = () => {
  return (
    <div className="header-quik mt-3">
      <div className="header-title">QUICK MASTER AGENT NUMBER:</div>
      <div>
        <div className="header-body">
          <div className="header-code">
            <table className="data" style={{ width: "500px" }}>
              <tbody>
                <tr>
                  <td>
                    <b>AGENT ID:</b>
                  </td>
                  <td>
                    <b>80</b>
                  </td>
                  <td>
                    {" "}
                    <a href="https://wa.me/+601124254986">
                      <img src={ws} alt=".." style={{ width: "25px" }} />
                    </a>
                  </td>
                  <td>
                    <a href="https://wa.me/+601124254986">+601124254986 </a>
                  </td>{" "}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderQuik;
