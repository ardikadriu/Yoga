import Topbar from "./components/Topbar";
import Container from "./components/Container";
export default function Home() {
  return (
    <main className="flex flex-col items-center w-[1920px] relative">
      <Topbar />
      <Container />
    </main>
  );
}
