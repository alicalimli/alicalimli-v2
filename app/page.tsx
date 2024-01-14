import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Newsletter } from "./newsletter";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen p-4 py-24">
      <header className="">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/alicalimli.jpg" alt="Ali Calimli's Profile" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>

        <h2 className="text-3xl font-semibold mt-2 tracking-tight">
          Ali Calimli
        </h2>
        <p className="text-xl text-white/80">
          Front-end Developer & Content Creator
        </p>

        <p className="text-xl text-muted-foreground mt-3">
          Focused on building awesome and high-quality websites that are also
          visually appealing and easy to use.
        </p>
      </header>

      <section className="mt-8">
        <Newsletter />
      </section>
    </main>
  );
}
