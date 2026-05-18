"use client";

import { useEffect, useRef, useState } from "react";

const TESTFLIGHT = "https://testflight.apple.com/join/yC9xaTwD";

type State = "idle" | "loading" | "success" | "error";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AccessModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [visible, setVisible] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* animate in when opened */
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
      setTimeout(() => nameRef.current?.focus(), 80);
      setState("idle");
      setName("");
      setEmail("");
    }
  }, [open]);

  /* animate out then close */
  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 200);
  }

  /* close on ESC */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  /* prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes("@")) return;
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!res.ok) throw new Error("server error");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      style={{
        background: `rgba(26,26,26,${visible ? 0.6 : 0})`,
        backdropFilter: visible ? "blur(4px)" : "blur(0px)",
        transition: "background 0.2s ease, backdrop-filter 0.2s ease",
      }}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      {/* panel */}
      <div
        className="relative w-full max-w-sm p-8 flex flex-col gap-6"
        style={{
          background: "var(--bg)",
          border: "1px dashed var(--border)",
          borderRadius: "3px",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.97) translateY(8px)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        {/* close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-5 text-sm transition-opacity hover:opacity-50"
          style={{
            fontFamily: "var(--font-space-mono)",
            color: "var(--text-muted)",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
          aria-label="close"
        >
          ×
        </button>

        {state === "success" ? (
          <SuccessState name={name} onClose={handleClose} />
        ) : (
          <FormState
            name={name}
            email={email}
            state={state}
            nameRef={nameRef}
            setName={setName}
            setEmail={setEmail}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

function FormState({
  name, email, state, nameRef, setName, setEmail, onSubmit,
}: {
  name: string;
  email: string;
  state: State;
  nameRef: React.RefObject<HTMLInputElement | null>;
  setName: (v: string) => void;
  setEmail: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const inputStyle = {
    fontFamily: "var(--font-inter)",
    color: "var(--text)",
    border: "1px dashed var(--border)",
    borderRadius: "3px",
    background: "transparent",
    letterSpacing: "-0.01em",
  };

  return (
    <>
      <div>
        <p
          className="text-xs uppercase tracking-widest mb-1"
          style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.18em" }}
        >
          EARLY ACCESS
        </p>
        <h2
          className="text-xl font-semibold leading-snug"
          style={{ color: "var(--text)", fontFamily: "var(--font-inter)", letterSpacing: "-0.02em" }}
        >
          join the waitlist.
        </h2>
        <p
          className="text-sm mt-1"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)", lineHeight: "1.6" }}
        >
          we&apos;ll send you a testflight link — just download the app. free, no payment.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="modal-name"
            className="text-xs"
            style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.1em" }}
          >
            NAME
          </label>
          <input
            id="modal-name"
            ref={nameRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
            required
            className="px-4 py-3 text-sm outline-none placeholder:opacity-30"
            style={inputStyle}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="modal-email"
            className="text-xs"
            style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.1em" }}
          >
            EMAIL
          </label>
          <input
            id="modal-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="px-4 py-3 text-sm outline-none placeholder:opacity-30"
            style={inputStyle}
          />
        </div>

        {state === "error" && (
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)" }}
          >
            something went wrong. try again?
          </p>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="mt-1 px-5 py-3 text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{
            fontFamily: "var(--font-inter)",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: "3px",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-0.01em",
          }}
        >
          {state === "loading" ? "one sec..." : "get early access →"}
        </button>
      </form>
    </>
  );
}

function SuccessState({ name, onClose }: { name: string; onClose: () => void }) {
  const first = name.split(" ")[0].toLowerCase();
  return (
    <>
      <div>
        <p
          className="text-xs uppercase tracking-widest mb-1"
          style={{ fontFamily: "var(--font-space-mono)", color: "var(--accent-secondary)", letterSpacing: "0.18em" }}
        >
          YOU&apos;RE IN
        </p>
        <h2
          className="text-xl font-semibold leading-snug"
          style={{ color: "var(--text)", fontFamily: "var(--font-inter)", letterSpacing: "-0.02em" }}
        >
          welcome, {first}.
        </h2>
        <p
          className="text-sm mt-2"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)", lineHeight: "1.7" }}
        >
          you&apos;re on the list. here&apos;s your testflight link. install
          the app and start building your taste.
        </p>
      </div>

      <a
        href={TESTFLIGHT}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-opacity hover:opacity-80"
        style={{
          fontFamily: "var(--font-inter)",
          background: "var(--accent)",
          color: "#fff",
          borderRadius: "3px",
          letterSpacing: "-0.01em",
          textDecoration: "none",
        }}
      >
        open testflight →
      </a>

      <p
        className="text-xs text-center"
        style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.04em" }}
      >
        iOS · free
      </p>
    </>
  );
}
