import "./globals.css";
import Nav from "./components/common/nav";
import Sidebar from "./components/common/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="min-h-screen">
          <Nav />
          <div className="flex ">
            <aside className="fixed h-full  pt-10 side-bar-h">
              <Sidebar />
            </aside>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
