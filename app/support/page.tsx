import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "support · closeted",
  description: "get help with closeted, or delete your account.",
};

const EMAIL = "privacy@closeted.app";

export default function SupportPage() {
  return (
    <LegalPage label="SUPPORT" title="Support">
      <p>
        Questions, bugs, or feedback? Email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>{" "}and
        we&apos;ll get back to you.
      </p>

      <h2>Deleting your account</h2>
      <p>You can delete your account at any time, right in the app:</p>
      <ul>
        <li>Open Closeted and go to <strong>account</strong>.</li>
        <li>Tap <strong>delete account</strong>{" "}and confirm.</li>
      </ul>
      <p>
        This permanently deletes your account, your data, and your stored files. Once deleted,
        they&apos;re no longer accessible.
      </p>
      <p>
        Can&apos;t get into the app? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>{" "}from the address
        you signed up with and we&apos;ll delete it for you.
      </p>

      <h2>Privacy</h2>
      <p>
        To learn what we collect and how it&apos;s used, read our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
