import { NavLink } from "react-router-dom";
import { routes } from "../../../utils/routes";
import "./navbar.css";
import { imagesLink } from "../../../assets/react-assets";

export const Navbar = () => {
  return (
    <div className="p-5">
      {" "}
      <div className="navbar p-5 rounded-3xl border border-[#26252225] text-[#262522]  z-1000">
        <div>
          <img src={imagesLink.logo} />
        </div>
        <div className="gap-10 hidden lg:flex items-center">
          {routes.map((route, index) => (
            <NavLink key={index} to={route.route}
            className={({ isActive }) =>
              isActive ? "text-sm" : "text-sm items-center flex gap-3" 
            }>
              {({ isActive }) => (
                <div>
                  <p>{route.routename}</p>
                  <div
                    className={`${isActive ? "w-full rounded-b-lg  h-1 bg-[#EE6352]" : ""}`}
                  />
                </div>
              )}
            </NavLink>
          ))}
        </div>


        {/* <div className="subnav hidden lg:flex">
          {routes.map((route, index) => (
            <NavLink key={index} to={route.route}
            className={({ isActive }) =>
              isActive ? "text-sm" : "text-sm items-center flex gap-3" 
            }>
              {({ isActive }) => (
                <div>
                  <p>{route.routename}</p>
                  <div
                    className={`${isActive ? "w-full rounded-b-lg  h-1 bg-[#EE6352]" : ""}`}
                  />
                </div>
              )}
            </NavLink>
          ))}
        </div> */}
      </div>
    </div>
  );
};
