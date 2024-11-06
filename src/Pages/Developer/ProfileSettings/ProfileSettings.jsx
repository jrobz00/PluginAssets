import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdAttachMoney, MdEmail, MdPerson } from 'react-icons/md';

const ProfileSettings = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [profilePreview, setProfilePreview] = useState(null);
    const [bannerPreview, setBannerPreview] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
        // Handle registration logic here, e.g., sending data to an API
    };

    const handleImageUpload = (e, setImagePreview) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex items-center justify-center px-4 pb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[600px] p-4 sm:p-6">
                <div className='flex flex-col md:flex-row gap-0 lg:gap-5'>
                    {/* Username */}
                    <div className="relative w-full sm:w-1/2">
                        <MdPerson className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="John Doe"
                            {...register("username", { required: "Username is required" })}
                            className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#FFF] text-gray-600 shadow"
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="relative w-full sm:w-1/2 mt-4 sm:mt-0">
                        <MdEmail className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="email@gmail.com"
                            {...register("email", { required: "Email is required" })}
                            className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#FFF] text-gray-600 shadow"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                </div>

                {/* PayPal Email */}
                <div className="relative w-full sm:w-1/2 mt-4 mx-auto">
                    <MdAttachMoney className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="paypal@gmail.com"
                        {...register("paypalEmail", { required: "PayPal Email is required" })}
                        className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#FFF] text-gray-600 shadow"
                    />
                    {errors.paypalEmail && <p className="text-red-500 text-sm">{errors.paypalEmail.message}</p>}
                </div>

                {/* Profile Picture Upload */}
                <div className="mb-4 mt-6">
                    <label className="block font-bold text-gray-700 mb-2">Profile Picture</label>
                    <label
                        htmlFor="profilePicture"
                        className="flex items-center justify-center w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] mx-auto border-2 border-dashed border-gray-400 rounded-full cursor-pointer bg-[#FFF]"
                    >
                        {profilePreview ? (
                            <img src={profilePreview} alt="Profile Preview" className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <span className="text-gray-400 text-center">Upload Here</span>
                        )}
                        <input
                            type="file"
                            id="profilePicture"
                            accept="image/*"
                            {...register("profilePicture")}
                            onChange={(e) => handleImageUpload(e, setProfilePreview)}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Banner Upload */}
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-2">Banner</label>
                    <label
                        htmlFor="banner"
                        className="flex items-center justify-center w-full h-[100px] sm:h-[150px] border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-[#FFF]"
                    >
                        {bannerPreview ? (
                            <img src={bannerPreview} alt="Banner Preview" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <span className="text-gray-400 text-center">Upload Here</span>
                        )}
                        <input
                            type="file"
                            id="banner"
                            accept="image/*"
                            {...register("banner")}
                            onChange={(e) => handleImageUpload(e, setBannerPreview)}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#3B9DDD] text-[#FFF] font-semibold text-lg hover:bg-[#bcd5f9] transition duration-200 mt-4"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default ProfileSettings;