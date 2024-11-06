import { useForm } from 'react-hook-form';
import { MdEmail, MdVpnKey, MdPerson, MdAttachMoney } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const [profilePreview, setProfilePreview] = useState(null);
    const [bannerPreview, setBannerPreview] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [profilePictureFile, setProfilePictureFile] = useState(null);
    const [bannerFile, setBannerFile] = useState(null);
    const navigate = useNavigate();

    const uploadImageToImgBB = async (imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data && data.data && data.data.url) {
                return data.data.url;
            } else {
                throw new Error("Failed to retrieve image URL.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            throw new Error("Image upload failed. Please try again.");
        }
    };

    const onSubmit = async (data) => {
        try {
            if (!profilePictureFile) {
                throw new Error("Profile picture is required.");
            }
            if (!bannerFile) {
                throw new Error("Banner is required.");
            }

            // Upload images to ImgBB
            const profileImageUrl = await uploadImageToImgBB(profilePictureFile);
            const bannerImageUrl = await uploadImageToImgBB(bannerFile);

            // Log the banner image URL
            console.log("Banner Image URL:", bannerImageUrl);

            // Register user with email, password, profile picture URL, and banner URL
            const user = await createUser(data.email, data.password, data.username, profileImageUrl, bannerImageUrl);

            Swal.fire({
                icon: 'success',
                title: 'Registration Successful',
                text: `Welcome, ${user.displayName || data.username}!`,
            });

            // Navigate to home page after successful registration
            navigate('/');

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message,
            });
        }
    };

    const handleImageUpload = (e, setPreview, setFile) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid file type',
                    text: 'Please upload an image file.',
                });
                return;
            }
            if (file.size > 2 * 1024 * 1024) { // Limit to 2MB
                Swal.fire({
                    icon: 'error',
                    title: 'File too large',
                    text: 'Please upload an image less than 2MB.',
                });
                return;
            }
            setFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-3">
            <div className="bg-white p-8 rounded-[30px] shadow-md w-full max-w-[790px]">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Username and Email Fields */}
                    <div className="mb-4 md:flex md:gap-4">
                        <div className="relative w-full md:w-1/2">
                            <MdPerson className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Username"
                                {...register("username", { required: "Username is required" })}
                                className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#EBF4FF] text-gray-600"
                            />
                            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                        </div>
                        <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
                            <MdEmail className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#EBF4FF] text-gray-600"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* Password and PayPal Email Fields */}
                    <div className="mb-4 md:flex md:gap-4">
                        <div className="relative w-full md:w-1/2">
                            <MdVpnKey className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                                        message: "Password must be at least 6 characters, include an uppercase letter, lowercase letter, and a number."
                                    }
                                })}
                                className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#EBF4FF] text-gray-600"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-6 transform -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
                            <MdAttachMoney className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="PayPal Email"
                                {...register("paypalEmail", { required: "PayPal Email is required" })}
                                className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#EBF4FF] text-gray-600"
                            />
                            {errors.paypalEmail && <p className="text-red-500 text-sm">{errors.paypalEmail.message}</p>}
                        </div>
                    </div>

                    {/* Profile Picture Upload */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Profile Picture</label>
                        <label htmlFor="profilePicture" className="flex items-center justify-center w-[150px] h-[150px] mx-auto border-2 border-dashed border-gray-400 rounded-full cursor-pointer bg-[#EBF4FF]">
                            {profilePreview ? (
                                <img src={profilePreview} alt="Profile Preview" className="w-full h-full object-cover rounded-full" />
                            ) : (
                                <span className="text-gray-400">Upload Here</span>
                            )}
                            <input
                                type="file"
                                id="profilePicture"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, setProfilePreview, setProfilePictureFile)}
                                className="hidden"
                            />
                        </label>
                    </div>

                    {/* Banner Upload */}
                    <div className="mb-4">
                        <label className="block font-bold text-gray-700 mb-2">Banner</label>
                        <label
                            htmlFor="banner"
                            className="flex items-center justify-center w-full h-[100px] sm:h-[150px] mx-auto border-2 border-dashed border-gray-400 rounded bg-[#EBF4FF] cursor-pointer"
                        >
                            {bannerPreview ? (
                                <img src={bannerPreview} alt="Banner Preview" className="w-full h-full object-cover rounded" />
                            ) : (
                                <span className="text-gray-400">Upload Banner Here</span>
                            )}
                            <input
                                type="file"
                                id="banner"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, setBannerPreview, setBannerFile)}
                                className="hidden"
                            />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-[10px] hover:bg-blue-600 transition duration-200">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;