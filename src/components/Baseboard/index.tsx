import style from "./style.module.css";

export default function Baseboard() {
  return (
    <footer className={style.baseboard}>
      <p>
        Desenvolvido por &nbsp;
        <a
          href="https://thiagodebugs.posy.com.br"
          target="_blank"
          className="text-blue-400 hover:text-blue-500"
        >
          Thiago Mendonça
        </a>
      </p>
    </footer>
  );
}
