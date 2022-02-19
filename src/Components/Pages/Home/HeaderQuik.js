import React, { useEffect, useState } from "react";
import ws from "./../../../../src/Image/ws.png";
import "./Home.css";
const HeaderQuik = () => {
  const [customers, setCusomter] = useState([]);

  useEffect(() => {
    fetch("/Masteragent.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffle = ([...arr]) => {
          let m = arr.length;
          while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
          }
          return arr;
        };
        setCusomter(shuffle(data));
      });
  }, []);

  return (
    <div className="header-quik mt-3">
      <div className="header-title">QUICK MASTER AGENT NUMBER:</div>
      <div>
        <div className="header-body">
          <div className="header-code">
            <table className="data" style={{ width: "500px" }}>
              <tbody>
                {customers.slice(0, 1).map((pd, index) => (
                  <tr key={pd.id}>
                    <td>
                      <b>AGENT ID:</b>
                    </td>
                    <td>
                      <b>{pd.id}</b>
                    </td>
                    <td>
                      {" "}
                      <a href={`https://wa.me/${pd.phone}`}>
                        <img src={ws} alt=".." style={{ width: "25px" }} />
                      </a>
                    </td>
                    <td>
                      <a href={`https://wa.me/${pd.phone}`}>{pd.phone}</a>
                    </td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderQuik;
