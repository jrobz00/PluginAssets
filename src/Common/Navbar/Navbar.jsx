import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); // Access user and logout function from context
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

    const handleLogout = async () => {
        try {
            await logOut();
            setDropdownOpen(false); // Close dropdown on logout
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="bg-[#092334] flex justify-between items-center py-2">
            <div>
                <Link to="/">
                    <h1 className="text-5xl text-white font-semibold ml-2 md:ml-8 lg:ml-16 shadow-white drop-shadow">PA</h1>
                </Link>
            </div>
            <div>
                <div className="flex gap-2 mr-2 md:mr-8 lg:mr-16">
                    {user ? (
                        <>
                            <div className="relative">
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-black">No Image</div>
                                    )}
                                    <span className="text-white ml-2">Hey, {user.displayName || 'User'}</span>
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-6 mt-2 bg-gray-100 rounded shadow-lg p-2 z-10">
                                        <Link to="/developer" onClick={() => setDropdownOpen(false)}>
                                            <p className="block px-4 py-2 text-black hover:bg-gray-200">Profile</p>
                                        </Link>
                                        <Link to="/admin_login" onClick={() => setDropdownOpen(false)}>
                                            <p className="block px-4 py-2 text-black hover:bg-gray-200">Admin</p>
                                        </Link>
                                        <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-black hover:bg-gray-200">Logout</button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to={'/login'}>
                                <button className="py-2 bg-[#3B9DDD] text-black px-4 rounded text-md md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2B8CCB]">
                                    Login
                                </button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="py-2 bg-[#3B9DDD] text-black px-4 rounded text-md md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2B8CCB]">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;