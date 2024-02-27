import React from "react";
import "../Table/Table.css";

const MyTbody = (props) => {
  return (
    <tr key={props.id} className="MyTbody">
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.u_name}</td>
      <td className="email-column" data-type={props.email}>
        {props.email}
      </td>
      <td>{props.street}</td>
      <td>{props.suite}</td>
      <td>{props.city}</td>
      <td>{props.zipcode}</td>
      <td>{props.geo}</td>
      <td>{props.geo}</td>
      <td>{props.phone}</td>
      <td>{props.website}</td>
      <td>{props.companyName}</td>
      <td>{props.companyCatchphrase}</td>
      <td>{props.companyBs}</td>
    </tr>
  );
};
export default MyTbody;
