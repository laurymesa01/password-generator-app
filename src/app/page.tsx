import Details from "./components/Details";
import Password from "./components/Password";

export default function Home() {
  return (
    <main className="flex min-h-screen px-8 sm:px-[10%] md:px-[20%] lg:px-[25%] xl:px-[35%] flex-col items-center justify-center">
      <Password/>
      <Details/>
    </main>
  );
}
