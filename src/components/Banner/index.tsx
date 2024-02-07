import Image, { StaticImageData } from "next/image";
import style from "./style.module.css";

interface BannerProps {
  title: string;
  image: StaticImageData;
}

export default function Banner({ title, image }: BannerProps) {
  return (
    <div className={style.banner}>
      <Image src={image} alt={title} />
      <div>
        <h3>Bem-vindo ao pilar</h3>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
