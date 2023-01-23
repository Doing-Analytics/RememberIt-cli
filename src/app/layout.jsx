import "./globals.css";
import Nav from "./nav";
import Sidebar from "./sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        <div className="flex">
          <aside className="absolute top-0 bottom-0 h-full">
            <Sidebar />
          </aside>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
