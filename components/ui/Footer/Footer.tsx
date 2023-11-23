import React from "react";
import Link from "next/link";
import s from '../Navbar/Navbar.module.css';


export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] p-4 m-0 absolute bottom-0 w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Made with ♥️ in London</h1>
        </div>
        {/* <div className="flex flex-col">
            <Link className={s.link} href="/campus">
                  📝Story
            </Link>
        </div> */}
      </div>
    </footer>
  );
}

