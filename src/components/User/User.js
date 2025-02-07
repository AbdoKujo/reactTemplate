import { BrowserRouter, Route, useParams } from "react-router-dom";


function User() {
  const { id } = useParams();

  return (
    <h1>
      <h1>WELCOME HOME  {id}</h1>
    </h1>
  );
}
export default User;