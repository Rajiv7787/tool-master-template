import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import { toolConfig } from "@/lib/tool-config";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />

      <ToolLayout
        toolName={toolConfig.name}
        description={toolConfig.description}
      >
        <div
          id="tool"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Get started
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Use the tool below to get your result.
              </p>
            </div>

            <span className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 sm:block">
              Free
            </span>
          </div>

          <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl text-blue-600">
              ✦
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Your tool starts here
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              The actual tool interface will be added here.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </ToolLayout>

      <section
        id="about"
        className="mx-auto max-w-4xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold text-slate-900">
          {toolConfig.about.title}
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          {toolConfig.about.description}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {toolConfig.features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">
                  ✓
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  {feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

     <section
  id="faq"
  className="mx-auto max-w-4xl px-6 pb-16"
>
  <h2 className="text-2xl font-bold text-slate-900">
    Frequently Asked Questions
  </h2>

  <FAQ items={toolConfig.faqs} />
</section>

      <Footer />
    </>
  );
}