import React, { useState } from 'react';
import {
    Menu,
    X,
    LogOut,
    UserCircle,
    LayoutDashboard,
    BookOpen,
    MapPin,
    MessageSquare,
    ClipboardList,
    Layers,
    Users,
    Tag,
    Book,
    Bookmark,
    List,
    FileText,
    Star,
    ThumbsUp,
    Droplet,
    Smile,
    Award,
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label }) => (
    <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 cursor-pointer text-gray-700">
        <Icon size={18} />
        {label}
    </li>
);

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`fixed z-40 inset-y-0 left-0 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } bg-white shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}
            >
                {/* Sidebar Header with Toggle Button */}
                <div className="p-6 border-b relative">
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-4 right-4 text-gray-600 hover:text-black md:hidden"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.pravatar.cc/80"
                            alt="Profile"
                            className="w-20 h-20 rounded-full border-2 border-blue-500"
                        />
                        <p className="mt-3 text-gray-800 text-sm">Student ID: 12345678</p>
                        <p className="text-gray-900 font-semibold">John Doe</p>
                        <p className="text-gray-500 text-sm">Admission: 2022</p>
                        {/* Profile and Logout */}
                        <div className="p-4 border-t flex flex-col items-center">
                            <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                                <UserCircle size={18} className="mr-2" /> Profile
                            </button>
                            <button className="flex items-center text-sm text-red-600 mt-2 hover:text-red-800">
                                <LogOut size={18} className="mr-2" /> Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <nav className="p-4 overflow-y-auto h-[calc(100vh-200px)]">
                    <ul className="space-y-2">
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" />
                        <SidebarItem icon={ClipboardList} label="AICTE Feedback" />
                        <SidebarItem icon={BookOpen} label="Logs" />
                        <SidebarItem icon={Tag} label="Smartcookie Coupons" />
                        <SidebarItem icon={MessageSquare} label="Points Request" />
                        <SidebarItem icon={Layers} label="My Subjects" />
                        <SidebarItem icon={Book} label="Add Subjects" />
                        <SidebarItem icon={MapPin} label="Sponsor Map" />
                        <SidebarItem icon={Bookmark} label="Sponsor Coupon" />
                        <SidebarItem icon={List} label="Suggest Sponsor" />
                        <SidebarItem icon={Users} label="My Parent" />
                        <SidebarItem icon={BookOpen} label="Club" />
                        <SidebarItem icon={FileText} label="Blog" />
                    </ul>
                </nav>


            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Navbar */}
                <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
                    <div className="flex items-center">
                        <button
                            className="md:hidden text-gray-600"
                            onClick={toggleSidebar}
                        >
                            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <h2 className="ml-4 text-xl font-semibold text-gray-800 hidden md:block">
                            Dashboard
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700">Welcome, John</span>
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </header>

                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-green-600 text-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                            <Star size={36} className="mb-2" />
                            <h4 className="text-lg font-semibold">Reward Points</h4>
                            <p className="text-2xl font-bold">1,250</p>
                        </div>

                        <div className="bg-blue-600 text-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                            <ThumbsUp size={36} className="mb-2" />
                            <h4 className="text-lg font-semibold">ThanQ Points</h4>
                            <p className="text-2xl font-bold">980</p>
                        </div>

                        <div className="bg-cyan-600 text-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                            <Droplet size={36} className="mb-2" />
                            <h4 className="text-lg font-semibold">Water Points</h4>
                            <p className="text-2xl font-bold">420</p>
                        </div>

                        <div className="bg-yellow-500 text-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                            <Smile size={36} className="mb-2" />
                            <h4 className="text-lg font-semibold">Friendship Points</h4>
                            <p className="text-2xl font-bold">765</p>
                        </div>

                        <div className="bg-purple-600 text-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                            <Users size={36} className="mb-2" />
                            <h4 className="text-lg font-semibold">Family Points</h4>
                            <p className="text-2xl font-bold">310</p>
                        </div>

                        <div className="bg-amber-600 text-white p-6 rounded-xl shadow flex flex-col items-center text-center">
                            <Award size={36} className="mb-2" />
                            <h4 className="text-lg font-semibold">Brown Points</h4>
                            <p className="text-2xl font-bold">520</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;