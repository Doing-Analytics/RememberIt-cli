import React from "react";
import Link from "next/link";

function CurrentUserNav() {
  return (
    <ul className="flex">
      <li className="mr-2">
        <Link href="/dashboard">回首頁</Link>
      </li>
      <li className="mr-2">name</li>
      <li className="mr-2">
        <Link href="/dashboard">登出</Link>
      </li>
    </ul>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <section className="flex items-center justify-end h-12 text-white bg-gray-800">
        <CurrentUserNav />
      </section>
    </nav>
  );
}

export default Nav;
