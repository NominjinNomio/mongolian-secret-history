import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-display text-5xl text-foreground">404</h1>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[#E8B62D] px-8 py-3.5 text-sm font-semibold text-[#2C2117] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5C845]"
      >
        Go home
      </Link>
    </div>
  );
}
