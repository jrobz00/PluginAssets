

const AdminUsers = () => {
    return (
        <div className="mx-auto lg:w-[900px] rounded-lg p-4">
            <div className="flex items-center justify-between text-lg font-bold text-[#092334] px-2 py-3">
                <div>Discord</div>
                <div>Credits</div>
                <div>Sold</div>
                <div>Total Profit</div>
                <div>Action</div>
            </div>

            {/* Data Rows */}
            {[...Array(4)].map((_, index) => (
                <div key={index} className="flex flex-row items-center justify-between shadow rounded-[10px] bg-gray-50 py-4 px-2 md:px-8 mb-2">
                    <div className="flex-1 text-black/70 md:text-left">{index === 0 ? 'Skythz#1231' : `Skythz#123${index + 1}`}</div>
                    <div className="flex-1 text-black/70 md:text-left">$18.99</div>
                    <div className="flex-1 text-black/70 md:text-left">127</div>
                    <div className="flex-1 text-black/70 md:text-left">$2411.73</div>
                    <button className="rounded-lg bg-[#d6e9ff] px-4 py-1 text-[#666666] mt-2 md:mt-0">
                        Manage
                    </button>
                </div>
            ))}

            {/* New Button */}
            <div className="mt-4 flex justify-center">
                <button className="rounded-lg border-2 w-full border-dashed border-[#092334]/25 px-6 py-2 font-medium text-[#092334]/75 hover:bg-[#d6e9ff]/50">
                    New
                </button>
            </div>
        </div>
    );
};

export default AdminUsers;