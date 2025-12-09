import { NavLink } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "Chi siamo", path: "/chi-siamo" },
    { name: "Prodotti", path: "/prodotti" },
];

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-blur">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    React Store
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {links.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    to={link.path}
                                    end={link.path === "/"}
                                    className={({ isActive }) =>
                                        "nav-link" + (isActive ? " active fw-bold" : "")
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
