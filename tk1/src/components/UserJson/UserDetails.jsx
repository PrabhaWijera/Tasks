import React from "react";

import MyTbody from "../MyTbody/MyTBody";
import "./User.css";
import { useEffect, useState } from "react";
import axios from "axios";
const UserDetails = () => {
  const [UserDo, setUserDo] = useState([]);

  useEffect(() => {
    const GetData = axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.data)
      .then((data) => {
        setUserDo(data);
      });
  }, []);
  
  return (
    <>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Geo lat</th>
            <th>Geo lng</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Company Catchphrase</th>
            <th>Company BS</th>
          </tr>
        </thead>
        <tbody>
          {UserDo.map((items) => {
            return (
              <MyTbody
                key={items.id}
                id={items.id}
                name={items.name}
                u_name={items.username}
                email={items.email}
                street={items.address.street}
                suite={items.address.suite}
                city={items.address.city}
                zipcode={items.address.zipcode}
                geo={items.address.geo.lat + " # " + items.address.geo.lng}
                phone={items.phone}
                website={items.website}
                companyName={items.company.name}
                companyCatchphrase={items.company.catchPhrase}
                companyBs={items.company.bs}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default UserDetails;
