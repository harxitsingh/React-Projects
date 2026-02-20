import { NavLink } from "react-router-dom";

function Navbar () {
    return (

        <Link>
            <Link to="/">Home</Link> |{" "}
            <NavLink to="/notes">Notes</NavLink>

            {/* <Link to="/notes">Notes</Link> |{" "} */}
            <Link to="/Add">Add</Link> |{" "}
             <Link to="/notes">Home</Link> |{" "}
              <Link to="/about">About</Link> |
        </NavLink>
    );
}
export default Navbar;