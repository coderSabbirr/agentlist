import React from "react";
import ws from "./../../../Image/ws.png";
const Complain2 = () => {
  return (
    <div className="">
      <div className="header-quik mt-3 COMPLAIN1">
        <div className="header-title">AGENT ID: 3 - এডমিন</div>
        <div>
          <div className="header-body">
            <div className="header-code">
              <div
                className=""
                style={{ width: "750px", fontSize: "14px", textAlign: "left" }}
              >
                <div
                  className=""
                  style={{ width: "95%", backgroundColor: "#fbfedf" }}
                >
                  <table
                    className="agent-admin-content"
                    style={{ width: "95%" }}
                  >
                    <tbody className="admin-agent">
                      <tr>
                        <th>MOBILE APP LINK</th>
                      </tr>
                      <tr>
                        <td className="header">
                          <div
                            className=" p-3"
                            style={{
                              width: "98%",
                              marginLeft: "auto",
                              marginRight: "auto",
                              backgroundColor: "#fbfedf",
                            }}
                          >
                            <a href="https://wa.me/+60176572075" target="_">
                              <img
                                src={ws}
                                style={{ width: "100px" }}
                                alt=".."
                              />
                            </a>{" "}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="mb-4">PHONE NUMBER</th>
                      </tr>
                      <tr>
                        <td className="COMPLAIN1-NUMBER">
                          <div
                            className=""
                            style={{
                              width: "98%",
                              marginLeft: "auto",
                              marginRight: "auto",
                              backgroundColor: "#fbfedf",
                            }}
                          >
                            <a href="https://wa.me/+442070974844" target="_">
                              <h1 className="p-4">+60176572075</h1>
                            </a>{" "}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complain2;
