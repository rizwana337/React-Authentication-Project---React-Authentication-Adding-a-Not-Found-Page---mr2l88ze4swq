import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = localStorage.getItem("username") && localStorage.getItem("password");

  return (
    <Route {...rest} render={() => {
      return isLoggedIn ? children : <Redirect to="/login" />;
    }} />
  );
}

export default PrivateRoute;

// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const isAuthenticated = () => {
//   return (
//     localStorage.getItem("username") &&
//     localStorage.getItem("password")
//   );
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

// export default PrivateRoute;
