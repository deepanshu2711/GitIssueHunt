export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-full max-w-7xl p-4">
        {children}
      </div>
    </div>
  );
} 
