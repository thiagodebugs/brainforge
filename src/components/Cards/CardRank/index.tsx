interface CardRankProps {
  cardRank: {
    title: string;
    tag: string;
    process: {
      id: number;
      title: string;
      progress: string;
    }[];
  };
}

import style from "./style.module.css";

export default function CardRank({ cardRank }: CardRankProps) {
  return (
    <>
      <div className={style.cardRank}>
        <div className={style.cardRankTitle}>
          <h1>{cardRank.title}</h1>
          <h3>{cardRank.tag}</h3>
        </div>
        {cardRank.process.map((process) => (
          <div key={process.id} className={style.cardRankProcess}>
            <div className={style.cardRankProcessTitle}>
              <h2>{process.title}</h2>
              <p>{process.progress}</p>
            </div>
            <div className={style.progressBar}>
              <div
                style={
                  process.progress.includes("%")
                    ? { width: process.progress }
                    : {
                        width: `calc(20% * ${process.progress.replace(
                          "/5",
                          ""
                        )})`,
                      }
                }
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
