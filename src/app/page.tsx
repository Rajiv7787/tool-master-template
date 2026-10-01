import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import { toolConfig } from "@/lib/tool-config";

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

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-4xl px-6 py-16"
      >
        <h2 className="text-2xl font-bold text-slate-900">
          About this tool
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          This free online tool is designed to be simple, fast and easy to
          use. No complicated setup is required.
        </p>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-4xl px-6 pb-16"
      >
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900">
              Is this tool free?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Yes, this tool is free to use.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900">
              Do I need to install anything?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              No. You can use the tool directly in your web browser.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}