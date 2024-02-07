import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";

interface CardAlertProps {
  cardAlert: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

export default function CardAlert({ cardAlert }: CardAlertProps) {
  return (
    <>
      <Link href={cardAlert.link} className={style.cardAlert}>
        <Image
          src={cardAlert.image}
          alt={cardAlert.title}
          width={1080}
          height={1080}
        />
        <div className={style.cardAlertTitle}>
          <h1>{cardAlert.title}</h1>
          <p>{cardAlert.description}</p>
        </div>
      </Link>
    </>
  );
}
