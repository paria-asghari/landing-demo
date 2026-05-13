import Image from "next/image";
import Banner from "./baner";
import GamesCard from "./games-card";
import TableWinner from "./table-winner";

export default function MainContent() {
  return (
    <div className="min-h-screen pt-20  bg-slate-900">
      <div className="max-w-6xl mx-auto ">
        <Banner />
        <GamesCard />
        <TableWinner />
      </div>
    </div>
  );
}