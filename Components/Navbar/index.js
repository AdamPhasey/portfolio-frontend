import Profile from "../Profile/index.js";
import Link from "next/link";

function Navbar() {
  return (
    <div classsName="flex flex-row">
      <Profile />
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export { Navbar };
