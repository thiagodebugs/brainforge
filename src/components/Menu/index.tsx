"use client";
import Link from "next/link";
import Icon from "@mdi/react";
import style from "./style.module.css";
import {
  mdiHome,
  mdiRocketLaunch,
  mdiAccountSearch,
  mdiCogs,
  mdiFinance,
} from "@mdi/js";
import { useState } from "react";

export default function Menu() {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className={style.menu}>
        <ul>
          <Link
            href="#"
            className={`${style.btnMenu} ${active === 1 && style.active}`}
            onClick={() => setActive(1)}
          >
            <li>
              <Icon path={mdiHome} size={0.8} />
              <span>Início</span>
            </li>
          </Link>
          <Link
            href="#"
            className={`${style.btnMenu} ${active === 2 && style.active}`}
            onClick={() => setActive(2)}
          >
            <li>
              <Icon path={mdiRocketLaunch} size={0.8} />
              <span>Plano de Carreira</span>
            </li>
          </Link>
          <Link
            href="#"
            className={`${style.btnMenu} ${active === 3 && style.active}`}
            onClick={() => setActive(3)}
          >
            <li>
              <Icon path={mdiAccountSearch} size={0.8} />
              <span>Vagas</span>
            </li>
          </Link>
          <Link
            href="#"
            className={`${style.btnMenu} ${active === 4 && style.active}`}
            onClick={() => setActive(4)}
          >
            <li>
              <Icon path={mdiCogs} size={0.8} />
              <span>Processos</span>
            </li>
          </Link>
          <Link
            href="#"
            className={`${style.btnMenu} ${active === 5 && style.active}`}
            onClick={() => setActive(5)}
          >
            <li>
              <Icon path={mdiFinance} size={0.8} />
              <span>PowerBI</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
