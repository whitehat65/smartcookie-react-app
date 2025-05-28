import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const role = searchParams.get('role') || 'student';

    const [loginMethod, setLoginMethod] = useState('Email ID');
    const [email, setEmail] = useState('');
    const [prnEmployeeId, setPrnEmployeeId] = useState('');
    const [mobile, setMobile] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [memberId, setMemberId] = useState('');
    const [institutionId, setInstitutionId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            role,
            loginMethod,
            email,
            prnEmployeeId,
            mobile: countryCode + mobile,
            memberId,
            institutionId,
            password,
            rememberMe
        });
    };

    const renderLoginFields = () => {
        switch (loginMethod) {
            case 'Email ID':
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="institutionId">
                                Institution/Organization ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                id="institutionId"
                                type="text"
                                placeholder="Enter your institution ID"
                                value={institutionId}
                                onChange={(e) => setInstitutionId(e.target.value)}
                                required
                            />
                        </div>
                    </>
                );
            case 'PRN/Employee ID':
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prnEmployeeId">
                                PRN/Employee ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                id="prnEmployeeId"
                                type="text"
                                placeholder="Enter your PRN/Employee ID"
                                value={prnEmployeeId}
                                onChange={(e) => setPrnEmployeeId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="institutionId">
                                Institution ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                id="institutionId"
                                type="text"
                                placeholder="Enter your institution ID"
                                value={institutionId}
                                onChange={(e) => setInstitutionId(e.target.value)}
                                required
                            />
                        </div>
                    </>
                );
            case 'Mobile':
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                                Mobile Number
                            </label>
                            <div className="flex">
                                <select
                                    className="shadow border rounded-l w-1/4 py-2 px-3 text-gray-700 bg-white"
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                >
                                    <option value="+91">+91 (IN)</option>
                                    <option value="+1">+1 (US)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+61">+61 (AU)</option>
                                </select>
                                <input
                                    className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700"
                                    id="mobile"
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="institutionId">
                                Organization ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                id="institutionId"
                                type="text"
                                placeholder="Enter your organization ID"
                                value={institutionId}
                                onChange={(e) => setInstitutionId(e.target.value)}
                                required
                            />
                        </div>
                    </>
                );
            case 'Member ID':
                return (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="memberId">
                            Member ID
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            id="memberId"
                            type="text"
                            placeholder="Enter your member ID"
                            value={memberId}
                            onChange={(e) => setMemberId(e.target.value)}
                            required
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="mb-8 text-center">
                        <div className="flex justify-center items-center">
                            <img
                                src={`/assets/images/250_86.png`}
                                alt={`${role} Logo`}
                                className="h-12 w-auto mr-4"
                            />
                        </div>
                        <h1
                            className="text-2xl bg-red-500 text-white px-4 py-2 rounded"
                            style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                        >
                            {role.charAt(0).toUpperCase() + role.slice(1)} Login
                        </h1>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Login With
                            </label>
                            <select
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md border"
                                value={loginMethod}
                                onChange={(e) => setLoginMethod(e.target.value)}
                            >
                                <option>Email ID</option>
                                <option>PRN/Employee ID</option>
                                <option>Mobile</option>
                                <option>Member ID</option>
                            </select>
                        </div>

                        {renderLoginFields()}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => navigate('/forgot-password')}
                                >
                                    Forgot password?
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Back
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => navigate('/login-with-otp')}
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Login With OTP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;