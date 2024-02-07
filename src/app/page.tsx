import { Banner, Card, CardAlert, CardRank } from "@/components";
import Team from "@/assets/team.jpg";
import data from "@/utils/dataMockup.json";

export default function Home() {
  return (
    <>
      <main className="md:pr-6 xl:pl-6 py-6 md:max-w-xl lg:max-w-full w-full mx-auto">
        <Banner title="Profissional" image={Team} />
        <section className="my-8">
          <h1 className="text-2xl font-bold mb-4">O que está procurando?</h1>
          <div className="flex space-x-4 overflow">
            {data.cardsMenu.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </section>
        <section className="my-8">
          <h1 className="text-2xl font-bold mb-4">Avisos importantes</h1>
          <div className="flex flex-col space-y-4">
            {data.cardsAlert.map((card) => (
              <CardAlert key={card.id} cardAlert={card} />
            ))}
          </div>
        </section>
      </main>
      <aside className="max-w-xs w-full py-6 space-y-4 hidden md:block">
        {data.cardsRanking.map((card) => (
          <CardRank key={card.id} cardRank={card} />
        ))}
      </aside>
    </>
  );
}
