import React from "react";
import ws from "./../../../Image/ws.png";

const SubAdmin = () => {
  return (
    <div className="CustomerService">
      <div style={{ minHeight: "50px" }}>
        <table className="text-data">
          <tbody>
            <tr>
              <th className="header header-text" colSpan="16">
                SUB ADMIN LIST
              </th>
            </tr>
            <tr></tr>
            <tr className="custom-tr">
              <th align="center">TYPE</th>
              <th align="center">NAME</th>
              <th align="center">PHONE APP LINK</th>
              <th align="center">PHONE NUMBER</th>
            </tr>

            <tr className="even">
              <td>
                <b>SUB ADMIN</b>
              </td>
              <td>
                <b> MALIK</b>
              </td>
              <td>
                <a href={`https://wa.me/+442070974944`}>
                  <img src={ws} alt="" />
                </a>
              </td>
              <td>
                <a href={`https://wa.me/$+442070974944`}>+442070974944</a>
              </td>
            </tr>
            <tr>
              <td colSpan="6" style={{ backgroundColor: "#cccccc" }}>
                <font size="2">
                  মালিক হোয়াটসাপ ছাড়া আর কোন এপ ব্যবহার করে না - তাই হোয়াটসাপ
                  ছাড়া আর অন্য কোন এপ এর মাধ্যমে যোগাযোগ করবেন না।
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubAdmin;
