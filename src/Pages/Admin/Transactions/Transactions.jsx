import { FaSearch } from 'react-icons/fa';

const Transactions = () => {
    return (
        <div className="mx-auto lg:w-[900px] p-6">
            {/* Search Bar */}
            <div className="flex justify-center items-center mb-4 bg-white w-fit px-3 rounded-full mx-auto">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search by user"
                        className="rounded-lg px-4 py-2 text-sm w-full bg-white"
                    />
                    <FaSearch className="text-[#666666]" />
                </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-5 items-center gap-4 text-lg font-bold text-[#092334] px-4 py-3 border-b border-gray-200">
                <div>User</div>
                <div>Amount</div>
                <div>Date</div>
                <div>Status</div>
                <div>Action</div>
            </div>

            {/* Data Rows */}
            {[...Array(4)].map((_, index) => (
                <div
                    key={index}
                    className="grid grid-cols-5 items-center gap-4 shadow rounded-lg bg-gray-50 py-4 px-2 md:px-8 mb-2"
                >
                    <div className="text-black/70">User{index + 1}</div>
                    <div className="text-black/70">$120.00</div>
                    <div className="text-black/70">2024-11-04</div>
                    <div className="text-black/70">
                        {index % 2 === 0 ? 'Completed' : 'Pending'}
                    </div>
                    <button className="rounded-lg bg-[#d6e9ff] px-4 py-1 text-[#666666] hover:bg-[#d6e9ff]/75 transition">
                        Details
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Transactions;