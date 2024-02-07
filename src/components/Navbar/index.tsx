import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiMagnify, mdiBell } from "@mdi/js";
import Logo from "@/assets/logo.svg";
import { Menu } from "@/components";
import style from "./style.module.css";

import data from "@/utils/dataMockup.json";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const user = data.user;

  return (
    <>
      <header className="w-full bg-[#131313]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <Link href="/">
            <Image src={Logo} width={150} alt="Brainforge" />
          </Link>
          <div className="flex flex-row items-center space-x-3">
            {/* search icon*/}
            <button className={style.btn}>
              <Icon path={mdiMagnify} size={0.8} />
            </button>
            {/* alert icon*/}
            <button className={style.btn}>
              <Icon path={mdiBell} size={0.8} />
            </button>
            {/* profile icon*/}
            <button className={style.btn}>
              <Image
                src={user.avatar}
                width={40}
                height={40}
                alt="Profile"
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </header>

      <div className="xl:max-w-7xl mx-auto flex px-4">
        <nav className={style.navigator}>
          {/* Profile */}
          <div className={style.profile}>
            <Image src={user.avatar} width={100} height={100} alt="Profile" />
            <div className="space-y-2">
              <h1>{user.name}</h1>
              <h2>{user.role}</h2>
              <h3>{user.company}</h3>
            </div>
          </div>
          <Menu />
        </nav>
        {children}
      </div>
    </>
  );
}
