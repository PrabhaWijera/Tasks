import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {UserGetAsyc} from "../../sclices/UserSlice.jsx";
import MyTable from "../Table/MyTBody.jsx";
import "../User/Style.css";
import { useSelector } from "react-redux";
const UserRedux = () => {
  const jsonData = useSelector((state) => state.UserDo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserGetAsyc());
  }, [dispatch]);

  return (
    <div>
      <h1>User Page</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>GEO-Lat</th>
            <th>GEO-Lng</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Catch Phrase</th>
            <th>Compnay-BS</th>
          </tr>
        </thead>
<tbody>


        {jsonData.map((items) => {
          return (
            <MyTable
              key={items.id}
              id={items.id}
              name={items.name}
              username={items.username}
              email={items.email}
              street={items.address.street}
              suite={items.address.suite}
              city={items.address.city}
              zipcode={items.address.zipcode}
              lat={items.address.geo.lat}
              lng={items.address.geo.lng}
              phone={items.phone}
              website={items.website}
              companyName={items.company.name}
              catchPhrase={items.company.catchPhrase}
              companyBS={items.company.bs}
            />
          );
        })}
        </tbody>
      </table>
    </div>
  );
};
export default UserRedux;
