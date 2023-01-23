import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="h-full bg-gray-700">
      <div className="px-4 py-4 text-white bg-gray-700">
        <div className="flex items-center justify-between">
          <Link href="/">Home</Link>
          <i className="mr-2 fa-solid fa-bars"></i>
        </div>
        <ul className="my-4">
          <li className="my-2">
            <i className="mr-2 fa-solid fa-house"></i>
            首頁
          </li>
          <li className="my-2">
            <i className="mr-2 fa-solid fa-circle-check"></i>
            我的任務
          </li>
          <li className="my-2">
            <i className="mr-2 fa-solid fa-envelope"></i>
            收件匣
          </li>
          <li className="my-2">
            <i className="mr-2 fa-solid fa-file-chart-column"></i>
            報告
          </li>
          <li className="my-2">
            <i className="mr-2 fa-solid fa-rectangle-history-circle-user"></i>
            專案集
          </li>
          <li className="my-2">
            <i className="mr-2 fa-sharp fa-solid fa-bullseye"></i>
            目標
          </li>
        </ul>
        <div className="pt-2 mt-2 mb-32 border-t border-gray-500">
          團隊
          <ul>
            <li className="my-2">團隊成員</li>
            <li className="my-2">團隊專案</li>
          </ul>
        </div>
        <div className="pt-2 my-2 border-t border-gray-500">邀請隊友</div>
        <div className="pt-2 border-t border-gray-500">說明與開始使用</div>
      </div>
    </div>
  );
}

export default Sidebar;
