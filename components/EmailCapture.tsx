"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("that doesn't look right");
      return;
    }
    /* TODO: wire to a real backend/form service (Resend, Loops, etc.) */
    setSubmitted(true);
    setError("");
  }

  return (
    <section
      className="py-20 px-6 md:px-16 lg:px-24"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-md">
        <p
          className="text-xs uppercase tracking-widest mb-6"
          style={{
            fontFamily: "var(--font-space-mono)",
            color: "var(--text-muted)",
            letterSpacing: "0.18em",
          }}
        >
          STAY CLOSE
        </p>

        {submitted ? (
          <p
            className="text-base"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-inter)",
              letterSpacing: "-0.01em",
            }}
          >
            you&apos;re on the list. we&apos;ll be in touch.
          </p>
        ) : (
          <>
            <p
              className="text-base mb-6"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-inter)",
                letterSpacing: "-0.01em",
              }}
            >
              not on iOS yet? leave your email and we&apos;ll let you know when
              that changes.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-sm bg-transparent outline-none placeholder:opacity-40"
                style={{
                  fontFamily: "var(--font-inter)",
                  color: "var(--text)",
                  border: "1px dashed var(--border)",
                  borderRadius: "3px",
                  letterSpacing: "-0.01em",
                }}
              />
              <button
                type="submit"
                className="px-5 py-3 text-xs transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--accent)",
                  border: "1px dashed var(--accent)",
                  borderRadius: "3px",
                  background: "transparent",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                notify me →
              </button>
            </form>
            {error && (
              <p
                className="mt-2 text-xs"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "#888",
                }}
              >
                {error}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
