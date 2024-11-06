import { useLocation } from "react-router-dom";
import { FaComment } from "react-icons/fa";

const ChatBox = () => {
    const location = useLocation(); // Get the current location

    // Check if the current route is '/chat'
    const isChatRoute = location.pathname === '/chat';

    return (
        <div style={{ height: isChatRoute ? '92.33vh' : 'auto' }} className={`flex flex-col w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-[#e8f2fd] text-gray-600`}>
            {/* Header */}
            <div className="bg-[#1f618d] text-white flex justify-start items-center gap-3 text-2xl font-bold p-4 shadow">
                <FaComment />
                <h1 className="text-xl">PluginAssets</h1>
            </div>

            <div className="flex flex-grow">
                {/* Sidebar */}
                <div className="w-64 bg-white border-r border-gray-200 p-4">
                    <h3 className="font-bold mb-4 text-lg">Contacts</h3>
                    <ul className="space-y-3">
                        {["User 1", "User 2", "User 3", "User 4", "User 5"].map((user, index) => (
                            <li key={index}>
                                <a href="#" className="text-[#3B9DDD] hover:underline transition duration-200">
                                    {user}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Area */}
                <div className="flex-grow bg-white p-4 flex flex-col rounded-r-lg">
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">Chat with User 1</h2>
                    <ul className="flex-grow overflow-y-auto space-y-2">
                        <li className="p-3 rounded-lg bg-gray-100 shadow-sm">
                            <span className="font-bold">User 1</span> - <span className="text-gray-500 text-sm">2 hours ago</span>
                            <p className="mt-1">How are you doing today?</p>
                        </li>
                        <li className="p-3 rounded-lg bg-blue-100 shadow-sm">
                            <span className="font-bold">You</span> - <span className="text-gray-500 text-sm">1 hour ago</span>
                            <p className="mt-1">I’m doing great, thanks for asking!</p>
                        </li>
                        <li className="p-3 rounded-lg bg-gray-100 shadow-sm">
                            <span className="font-bold">User 1</span> - <span className="text-gray-500 text-sm">30 minutes ago</span>
                            <p className="mt-1">What have you been up to?</p>
                        </li>
                    </ul>

                    {/* Input Area */}
                    <div className="flex mt-4">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-grow p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#3B9DDD]"
                        />
                        <button className="ml-2 bg-[#3B9DDD] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;