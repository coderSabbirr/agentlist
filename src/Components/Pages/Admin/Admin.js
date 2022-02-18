import React from "react";
import ws from "./../../../Image/ws.png";

const Admin = () => {
  return (
    <div className="CustomerService" style={{ width: "800x" }}>
      <div style={{ minHeight: "50px" }}>
        <table className="text-data">
          <tbody>
            <tr>
              <th className="header header-text" colSpan="16">
                9WICKETS ADMIN LIST
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
                <b>SITE ADMIN</b>
              </td>
              <td>
                <b>AKASH MALIK</b>
              </td>
              <td>
                <a href={`https://wa.me/+442070974844`}>
                  <img src={ws} alt="" />
                </a>
              </td>
              <td>
                <a href={`https://wa.me/$+442070974844`}>+442070974844</a>
              </td>
            </tr>
            <tr>
              <td colSpan="6" style={{ backgroundColor: "#cccccc" }}>
                <font size="2">
                  আকাশ মালিক হোয়াটসাপ ছাড়া আর কোন এপ ব্যবহার করে না - তাই
                  হোয়াটসাপ ছাড়া আর অন্য কোন এপ এর মাধ্যমে যোগাযোগ করবেন না।
                </font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
