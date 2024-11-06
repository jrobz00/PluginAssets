import { useState } from 'react';
import MyResources from "../MyResources/MyResources";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import RequestPayout from "../RequestPayout/RequestPayout";

const DeveloperDashboard = () => {
    const [activeTab, setActiveTab] = useState('resources'); // Default to "My Resources"

    return (
        <div className="w-full flex justify-center">
            <div>
                <div>
                    <h1 className="text-3xl font-bold mt-24 mb-3 text-center text-black">Developer Dashboard</h1>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-around items-center gap-4 md:gap-8 text-base md:text-lg">
                    <button
                        className={`rounded-lg px-4 py-3 md:px-6 md:py-4 font-bold ${activeTab === 'resources' ? 'bg-[#cae3ff]' : 'bg-transparent'} text-[#092334]`}
                        onClick={() => setActiveTab('resources')}
                    >
                        My Resources
                    </button>
                    <button
                        className={`rounded-lg px-4 py-3 md:px-6 md:py-4 font-bold ${activeTab === 'profile' ? 'bg-[#cae3ff]' : 'bg-transparent'} text-[#092334]`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile Settings
                    </button>
                    <button
                        className={`rounded-lg px-4 py-3 md:px-6 md:py-4 font-bold ${activeTab === 'payout' ? 'bg-[#cae3ff]' : 'bg-transparent'} text-[#092334]`}
                        onClick={() => setActiveTab('payout')}
                    >
                        Request Payout ($981.82)
                    </button>
                </div>

                {/* Separator */}
                <div className="my-7 mx-auto w-[80%] md:w-[50%] lg:w-[30%] border-t border-black/30"></div>

                <div className='h-screen'>
                    {/* Conditional Content Rendering */}
                    {activeTab === 'resources' && <MyResources />}
                    {activeTab === 'profile' && <ProfileSettings />}
                    {activeTab === 'payout' && <RequestPayout />}
                </div>
            </div>
        </div>
    );
};

export default DeveloperDashboard;