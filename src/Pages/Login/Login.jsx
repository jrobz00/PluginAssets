import { useForm } from 'react-hook-form';
import { MdEmail, MdVpnKey } from 'react-icons/md';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate(); // Use navigate from react-router-dom

    const onSubmit = async (data) => {
        try {
            await logIn(data.email, data.password);
            // Show success alert
            Swal.fire({
                title: 'Login Successful!',
                text: 'You are now logged in.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/'); // Navigate to the home page after confirmation
            });
        } catch (error) {
            console.error("Login failed:", error);
            // Show error alert
            Swal.fire({
                title: 'Login Failed!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-3">
            <div className="bg-white p-8 rounded-[30px] shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <div className="relative flex items-center">
                            <MdEmail className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full pl-10 p-2 rounded-[10px] mt-1 bg-[#EBF4FF] text-gray-600"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <div className="relative">
                            <MdVpnKey className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full pl-10 py-2 px-4 rounded-[10px] mt-1 bg-[#EBF4FF] text-gray-600"
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-[#3B9DDD] text-white p-2 rounded-[10px]">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;