

const RequestPayout = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-[#092334] text-center">Reset your credits and get <strong>$981.82</strong> to <strong>paypal@email.com</strong>?</h1>
            {/* Confirm  Button */}
            <button
                type="submit"
                className="w-72 flex justify-center items-center py-3 rounded-lg bg-[#3B9DDD] text-[#FFF] font-semibold text-lg hover:bg-[#bcd5f9] transition duration-200 mt-6"
            >
                Confirm
            </button>
        </div>
    );
};

export default RequestPayout;