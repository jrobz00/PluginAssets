import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaDollarSign } from 'react-icons/fa6';
import { MdDescription, MdPerson } from 'react-icons/md';

const AddResources = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [preview, setPreview] = useState(null);
    const [bannerPreview, setBannerPreview] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
        // Handle data submission (e.g., API call)
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
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[600px] p-4 sm:p-6 ">
                <h2 className="text-2xl font-semibold text-center text-[#092334] mb-6">Add New Resource</h2>

                {/* Name Field */}
                <div className="relative mb-4">
                    <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Resource Name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full pl-10 py-3 rounded-lg border bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Price Field */}
                <div className="relative mb-4">
                    <FaDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Price (USD)"
                        {...register("price", { required: "Price is required" })}
                        className="w-full pl-10 py-3 rounded-lg border bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>

                {/* Description Field */}
                <div className="relative mb-4">
                    <MdDescription className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <textarea
                        placeholder="Description"
                        {...register("description", { required: "Description is required" })}
                        className="w-full pl-10 py-3 h-24 rounded-lg border bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </div>

                {/* Picture Upload */}
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2">Picture</label>
                    <label
                        htmlFor="picture"
                        className="flex items-center justify-center w-full h-[150px] border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50"
                    >
                        {preview ? (
                            <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <span className="text-gray-400">Click to upload picture</span>
                        )}
                        <input
                            type="file"
                            id="picture"
                            accept="image/*"
                            {...register("picture")}
                            onChange={(e) => handleImageUpload(e, setPreview)}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Source Code Upload */}
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2">Source Code</label>
                    <label
                        htmlFor="sourceCode"
                        className="flex items-center justify-center w-full h-[150px] border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50"
                    >
                        {bannerPreview ? (
                            <img src={bannerPreview} alt="Source Code Preview" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <span className="text-gray-400">Click to upload source code</span>
                        )}
                        <input
                            type="file"
                            id="sourceCode"
                            accept="image/*"
                            {...register("sourceCode")}
                            onChange={(e) => handleImageUpload(e, setBannerPreview)}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 transition duration-200 mt-4"
                >
                    Save Resource
                </button>
            </form>
        </div>
    );
};

export default AddResources;