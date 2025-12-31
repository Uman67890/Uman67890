import { ChatInterface } from "@/components/ChatInterface";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-zinc-900 dark:via-black dark:to-zinc-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-teal-200/20 blur-[100px] dark:bg-teal-900/10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-200/20 blur-[100px] dark:bg-indigo-900/10 pointer-events-none" />

      <div className="z-10 w-full flex justify-center">
        <ChatInterface />
      </div>
    </main>
  );
}
