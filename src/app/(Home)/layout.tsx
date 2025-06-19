export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-[#24292e] items-center min-h-screen">
      <div className="w-full bg-[#24292e] max-w-7xl p-4">
        {children}
      </div>
    </div>
  );
} 
