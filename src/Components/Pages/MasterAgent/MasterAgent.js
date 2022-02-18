import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ws from "./../../../Image/ws.png";
const MasterAgent = () => {
  const [customers, setCusomter] = useState([]);
  const [displayAgent, setDisplayAegnt] = useState([]);
  useEffect(() => {
    fetch("/Masteragent.json")
      .then((res) => res.json())
      .then((data) => {
        setCusomter(data);
        setDisplayAegnt(data);
      });
  }, []);

  const handleSearch = (e) => {
    const searchId = e.target.value;
    // const result = customers.find(
    //   ({ id }) => parseInt(id) === parseInt(searchId)
    // );
    const machedId = customers.filter((agent) => agent.id.includes(searchId));
    setDisplayAegnt(machedId);
  };

  return (
    <div className=" CustomerService container" style={{ width: "800px" }}>
      <div>
        <input
          type="number"
          id=""
          placeholder="Search Agent ID.."
          className="input-id"
          onChange={handleSearch}
        />
        <i className="fas fa-search" />
      </div>
      <div style={{ minHeight: "50px" }} className="mt-3">
        <table className="text-data">
          <tbody>
            <tr>
              <th className="header header-text" colSpan="16">
                9WICKETS SUPER AGENT LIST
              </th>
            </tr>
            <tr></tr>
            <tr className="custom-tr">
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">ID NO</th>
              <th align="center">7* RATING</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
              <th align="center">ADMIN</th>
            </tr>
            {displayAgent?.map((pd, index) => (
              <>
                <tr className="even" key={pd.id}>
                  <td>
                    <b>MASTER</b>
                  </td>
                  <td>
                    <b>AGENT ID:</b>
                  </td>
                  <td>
                    <b>{pd.id}</b>
                  </td>
                  <td>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </td>
                  <td>
                    <a href={`https://wa.me/${pd.phone}`}>
                      <img src={ws} alt="" />
                    </a>
                  </td>
                  <td>
                    <a href={`https://wa.me/${pd.phone}`}>{pd.phone}</a>
                  </td>
                  <td>
                    <Link to="/cp2">COMPLAIN</Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6" style={{ backgroundColor: "#cccccc" }}>
                    <font size="2">
                      এজেন্ট দের সাথে হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে
                      যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে
                      না
                    </font>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasterAgent;