import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
    return (
        <>
            <Navbar />

            <main className="container py-4">
                <Outlet />
            </main>

            <footer className="text-center py-4 border-top mt-4">
                <p>React Router Store</p>
            </footer>
        </>
    );
}
