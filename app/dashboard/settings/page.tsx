import Link from "next/link";
import LogoutBtn from "@/app/components/logoutBtn";
import { cookies } from "next/headers";

interface User {
  name: string;
  email: string;
}

const Settings = async () => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("login-user")?.value;
  const loginUser: User | null = cookieValue ? JSON.parse(cookieValue) : null;

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-base-content">Settings</h1>

        {/* User Info */}
        {loginUser && (
          <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6 mb-6">
            <h2 className="text-xl font-semibold text-base-content">User Info</h2>
            <div className="mt-4 space-y-2 text-sm sm:text-base">
              <p className="text-base-content">
                <span className="font-semibold">Name:</span> {loginUser.name}
              </p>
              <p className="text-base-content mt-1">
                <span className="font-semibold">Email:</span> {loginUser.email}
              </p>
            </div>
          </div>
        )}

        {/* Appearance Settings */}
        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-base-content">Appearance</h2>
          <div className="border-t border-base-300 pt-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-base-content">Select Theme</span>
              </label>
              <select className="select select-bordered">
                <option>Light</option>
                <option>Dark</option>
                <option>Cupcake</option>
                <option>Synthwave</option>
              </select>
            </div>
          </div>
        </div>

        {/* Account / Preferences */}
        <div className="bg-base-100 rounded-xl shadow-md p-4 sm:p-6">
          <h2 className="text-xl font-semibold mb-4 text-base-content">Account</h2>
          <div className="border-t border-base-300 space-y-2 pt-4 text-sm sm:text-base">
            {/* Logout button */}
            <div className="block w-full py-3 px-4 text-base-content hover:bg-base-200 rounded-lg transition-colors cursor-pointer">
              <LogoutBtn />
            </div>

            {/* Other links */}
            <Link href="/change-password" className="block w-full py-3 px-4 text-base-content hover:bg-base-200 rounded-lg transition-colors">Change Password</Link>
            <Link
              href="/notifications"
              className="block w-full py-3 px-4 text-base-content hover:bg-base-200 rounded-lg transition-colors"
            >
              Notification Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
