import Icon from "@mdi/react";
import Link from "next/link";
import style from "./style.module.css";
import * as mdi from "@mdi/js";

interface CardProps {
  card: {
    title?: string;
    icon: string | keyof typeof mdi;
    description?: string;
    link: string;
  };
}

export default function Card({ card }: CardProps) {
  const iconPath =
    typeof card.icon === "string"
      ? mdi[card.icon as keyof typeof mdi]
      : card.icon;

  return (
    <>
      <Link href={card.link} className={style.card}>
        <Icon path={iconPath} size={1.5} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </Link>
    </>
  );
}
