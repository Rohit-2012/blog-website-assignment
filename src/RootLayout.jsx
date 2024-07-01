import { Outlet } from "react-router-dom"
import Header from "./components/Header";

const RootLayout = () => {
    return (
        <main className="min-h-screen min-w-screen bg-gradient-to-b from-blue-400 to-blue-300">
            <Header />
            <div className="p-4 sm:px-10"><Outlet /></div>
        </main>
    );
}

export default RootLayout;