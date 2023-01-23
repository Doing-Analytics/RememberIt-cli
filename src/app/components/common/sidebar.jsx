import React from "react";
import Link from "next/link";
import {
  IconBxHomeAlt2,
  IconCheckCircle,
  IconBxBell,
  IconBxsBarChartSquare,
  IconCalendarRangeFill,
  IconAnalyticsSharp,
  IconPortfolio,
  IconFocusTarget,
} from "../common/svg/sidebar_svg";

function SidebarButtonCollection({ collection, title }) {
  return (
    <>
      <span className="text-s">{title}</span>
      <div>
        <ul className="my-4">
          {collection.map((value) => {
            return (
              <SidebarItem
                key={value["text"]}
                text={value["text"]}
                link={value["link"]}
                icon={value["icon"]}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

function SidebarItem({ text, link, icon }) {
  return (
    <Link href={link}>
      <div className="flex text-center rounded-lg hover:bg-gray-500 px-2 py-1">
        <div className="flex justify-center items-center">{icon}</div>
        <span className="ml-2 text-xs">{text}</span>
      </div>
    </Link>
  );
}

function Sidebar() {
  const sidebarCommon = [
    { text: "首頁", link: "/", icon: <IconBxHomeAlt2 /> },
    { text: "我的任務", link: "/", icon: <IconCheckCircle /> },
    { text: "收件匣", link: "/", icon: <IconBxBell /> },
  ];
  const sidebarTeam = [
    { text: "ASANA TEST", link: "/", icon: <IconCalendarRangeFill /> },
  ];
  const sidebarAnalytics = [
    { text: "報告", link: "/", icon: <IconAnalyticsSharp /> },
    { text: "專案集", link: "/", icon: <IconPortfolio /> },
    { text: "目標", link: "/", icon: <IconPortfolio /> },
  ];
  const collection = [
    { collection: sidebarCommon, title: "" },
    { collection: sidebarTeam, title: "專案" },
    { collection: sidebarAnalytics, title: "深入解析" },
  ];
  return (
    <div className="h-full bg-gray-700 w-48  ">
      <div className="pl-3 py-4 text-white bg-gray-700 h-full flex-col content-between justify-between">
        <div className="">
          <button className="mt-3 border-solid border border-slate-500 rounded-2xl flex justify-center items-center pl-1 pr-3 py-1 hover:bg-gray-500">
            <svg
              viewBox="0 0 840 1000"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M420 80c116 0 215 41 297 123s123 181 123 297-41 215-123 297-181 123-297 123-215-41-297-123S0 616 0 500s41-215 123-297S304 80 420 80m52 470h200V448H472V246H370v202H168v102h202v202h102V550" />
            </svg>
            <span className="pl-2">建立</span>
          </button>
          {collection.map((collection) => {
            return (
              <SidebarButtonCollection
                key={Object.keys(collection["collection"])[0]}
                collection={collection["collection"]}
                title={collection["title"]}
              />
            );
          })}
        </div>
        <div>
          <div className="pt-2 my-2 border-t border-gray-500">邀請隊友</div>
          <div className="pt-2 border-t border-gray-500">說明與開始使用</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
