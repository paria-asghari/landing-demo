import Image from "next/image";
import Banner from "./baner";
import GamesCard from "./games-card";
import TableWinner from "./table-winner";

export default function MainContent() {
  return (
    <div className="min-h-screen pt-20 w-full pl-64 bg-slate-900">
      <Banner />
      <GamesCard />
      <TableWinner />
    </div>
  );
}