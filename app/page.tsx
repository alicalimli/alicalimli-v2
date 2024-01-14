import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex max-w-4xl mx-auto min-h-screen flex-col items-center justify-between p-24">
      <header>
        <Avatar className="w-24 h-24">
          <AvatarImage src="/alicalimli.jpg" alt="Ali Calimli's Profile" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>

        <h2 className="text-3xl font-semibold tracking-tight">Ali Calimli</h2>
        <p className="text-xl text-white/80">
          Front-end Developer & Content Creator
        </p>

        <p className="text-xl text-muted-foreground">
          Focused on building awesome and high-quality websites that are also
          visually appealing and easy to use.
        </p>
      </header>
    </main>
  );
}
