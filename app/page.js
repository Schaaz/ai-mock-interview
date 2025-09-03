import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* Header with centered logo */}
      <header className="w-full flex justify-center py-4 shadow-md">
        <Image 
          src="/logo1.png"   // replace with your logo path
          alt="Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </header>

      {/* Main content with big login button */}
      <main className="flex flex-1 justify-center items-center">
        <Link href="/dashboard">
          <Button className="text-2xl px-10 py-6 rounded-2xl shadow-lg">
            Login
          </Button>
        </Link>
      </main>
    </div>
  );
}
