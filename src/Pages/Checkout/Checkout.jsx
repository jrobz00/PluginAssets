import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Checkout = () => {
    const moderatorItems =
    {
        title: "React Router",
        content: "A powerful library for seamless client-side navigation in React applications.",
    };

    const totalAmount = 100; // Replace this with the actual total amount logic

    return (
        <div className="flex justify-center items-center min-h-screen p-3">
            <div>
                <div className="flex justify-start items-start w-2xl">
                    <Link to="/" className="flex items-center gap-2 text-blue-600 hover:underline">
                        <FaLeftLong />
                        Back to Store
                    </Link>
                </div>
                <div className="bg-white p-8 rounded-[30px] shadow-md w-full lg:w-[700px] text-gray-600">
                    <h2 className="text-2xl font-semibold">{moderatorItems.title}</h2>
                    <p className="mb-4">{moderatorItems.content}</p>
                    <div className="mb-4">
                        <p className="text-lg font-medium">Total Amount: <span className="text-green-600">${totalAmount}</span></p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="input w-full mt-1 p-2 rounded-[10px] text-gray-700 placeholder-gray-400 focus:outline-none bg-[#EBF4FF] shadow"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-200">
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;