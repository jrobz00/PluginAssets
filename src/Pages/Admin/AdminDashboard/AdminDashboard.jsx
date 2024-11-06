import { useState } from "react";
import AdminResources from "../AdminResources/AdminResources";
import AdminUsers from "../AdminUsers/AdminUsers";
import PayoutRequests from "../PayoutRequests/PayoutRequests";
import Transactions from "../Transactions/Transactions";


const AdminDashboard = () => {

    const [activeTab, setActiveTab] = useState('admin_resources');

    return (
        <div className="w-full flex justify-center">
            <div>
                <div>
                    <h1 className="text-3xl font-bold mt-24 mb-3 text-center text-black">Admin Dashboard</h1>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-around items-center gap-4 md:gap-8 text-base md:text-lg">
                    <button
                        className={`rounded-lg px-4 py-3 md:px-6 md:py-4 font-bold ${activeTab === 'admin_resources' ? 'bg-[#cae3ff]' : 'bg-transparent'} text-[#092334]`}
                        onClick={() => setActiveTab('admin_resources')}
                    >
                        Resources
                    </button>
                    <button
                        className={`rounded-lg px-4 py-3 md:px-6 md:py-4 font-bold ${activeTab === 'users' ? 'bg-[#cae3ff]' : 'bg-transparent'} text-[#092334]`}
                        onClick={() => setActiveTab('users')}
                    >
                        Users
                    </button>
                    <button
                        className={`rounded-lg px-4 py-3 md:px-6 md:py-4 font-bold ${activeTab === 'payout' ? 'bg-[#cae3ff]' : 'bg-transparent'} text-[#092334]`}
                        onClick={() => setActiveTab('payout')}
                    >
                        Payout Requests
                    </button>
                    <button
                        className={`rounded-lg px-4 py-3 md:px-6 md:py-4 font-bold ${activeTab === 'transactions' ? 'bg-[#cae3ff]' : 'bg-transparent'} text-[#092334]`}
                        onClick={() => setActiveTab('transactions')}
                    >
                        Transactions
                    </button>
                </div>

                {/* Separator */}
                <div className="my-7 mx-auto w-[80%] md:w-[50%] lg:w-[30%] border-t border-black/30"></div>

                <div className='h-screen'>
                    {/* Conditional Content Rendering */}
                    {activeTab === 'admin_resources' && <AdminResources />}
                    {activeTab === 'users' && <AdminUsers />}
                    {activeTab === 'payout' && <PayoutRequests />}
                    {activeTab === 'transactions' && <Transactions />}
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;