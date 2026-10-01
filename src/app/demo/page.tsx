"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InputField from "@/components/InputField";
import PrimaryButton from "@/components/PrimaryButton";
import ResultCard from "@/components/ResultCard";
import ResetButton from "@/components/ResetButton";
import ErrorMessage from "@/components/ErrorMessage";
import CopyButton from "@/components/CopyButton";

export default function DemoPage() {
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    const p = Number(percentage);
    const n = Number(number);

    if (!percentage || !number) {
      setError("Please enter both values.");
      return;
    }

    if (Number.isNaN(p) || Number.isNaN(n)) {
      setError("Please enter valid numbers.");
      return;
    }

    if (p < 0) {
      setError("Percentage cannot be negative.");
      return;
    }

    const calculatedResult = (p / 100) * n;

    setResult(calculatedResult);
  };

  const reset = () => {
    setPercentage("");
    setNumber("");
    setResult(null);
    setError("");
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-4xl px-6 pb-16 pt-12">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              Free Calculator
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Percentage Calculator
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Calculate percentages quickly and easily with this free online
              percentage calculator.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <InputField
                label="Percentage"
                name="percentage"
                type="number"
                placeholder="e.g. 20"
                value={percentage}
                onChange={setPercentage}
                min={0}
              />

              <InputField
                label="Number"
                name="number"
                type="number"
                placeholder="e.g. 500"
                value={number}
                onChange={setNumber}
              />
            </div>

            <div className="mt-6">
              <PrimaryButton onClick={calculate}>
                Calculate Percentage
              </PrimaryButton>
            </div>

            {error && <ErrorMessage message={error} />}

            {result !== null && (
              <ResultCard
  title="Result"
  action={
    <CopyButton
      text={result.toLocaleString(undefined, {
        maximumFractionDigits: 10,
      })}
    />
  }
>
  {result.toLocaleString(undefined, {
    maximumFractionDigits: 10,
  })}
</ResultCard>
            )}

            <div className="mt-3">
              <ResetButton onClick={reset} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}