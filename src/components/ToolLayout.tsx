import AdPlaceholder from "@/components/AdPlaceholder";

type ToolLayoutProps = {
  children: React.ReactNode;
  toolName: string;
  description: string;
};

export default function ToolLayout({
  children,
  toolName,
  description,
}: ToolLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50" />

        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-16 text-center sm:pt-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Free Online Tool
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {toolName}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
      </section>

      {/* Tool Card */}
      <section className="relative mx-auto -mt-2 max-w-4xl px-5 pb-8 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-8">
          {children}
        </div>
      </section>

      {/* Ad */}
      <div className="mx-auto max-w-4xl px-6">
        <AdPlaceholder />
      </div>
    </main>
  );
}