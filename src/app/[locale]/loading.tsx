export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="flex min-h-[60vh] items-center justify-center bg-[#10151C]">
        <div className="flex w-full max-w-[1200px] flex-col gap-6 px-6">
          <div className="h-4 w-40 rounded bg-white/10" />
          <div className="h-12 w-2/3 rounded bg-white/10" />
          <div className="h-4 w-1/2 rounded bg-white/10" />
        </div>
      </div>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-20">
        <div className="h-4 w-32 rounded bg-black/10" />
        <div className="h-8 w-1/2 rounded bg-black/10" />
        <div className="h-4 w-full rounded bg-black/10" />
        <div className="h-4 w-5/6 rounded bg-black/10" />
      </div>
    </div>
  );
}
