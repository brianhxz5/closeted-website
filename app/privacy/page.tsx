import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "privacy policy · closeted",
  description: "how closeted collects, uses, and protects your information.",
};

const EMAIL = "privacy@closeted.app";

function Email() {
  return <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;
}

export default function PrivacyPage() {
  return (
    <LegalPage label="PRIVACY POLICY" title="Privacy policy" effectiveDate="October 2, 2026">
      <p>
        This policy explains what information Closeted collects, why, who we share it with, and the
        choices you have. We&apos;ve tried to write it the way we&apos;d explain it to a friend.
      </p>
      <p>The short version:</p>
      <ul>
        <li>
          What you share in the app is <strong>read by AI (Anthropic) to find your taste.</strong>
        </li>
        <li>
          Your data is <strong>never sold, never used to train models.</strong>
        </li>
        <li>
          You need to be <strong>14 or older</strong>{" "}to use Closeted.
        </li>
        <li>
          You can delete your account and data at any time, in the app or by emailing <Email />.
        </li>
      </ul>

      <h2>1. Who we are</h2>
      <p>
        Closeted (&quot;Closeted,&quot; &quot;we,&quot; &quot;us&quot;) makes the Closeted iOS app
        and runs this website, closeted.app. We&apos;re based in Ontario, Canada.
      </p>
      <p>
        We handle personal information under Canada&apos;s{" "}
        <em>Personal Information Protection and Electronic Documents Act</em>{" "}(PIPEDA). For people in
        Quebec, we also follow Quebec&apos;s <em>Act respecting the protection of personal
        information in the private sector</em>{" "}(as updated by Law 25).
      </p>
      <p>
        Our <strong>privacy officer</strong>{" "}is responsible for how we handle personal information
        and for our compliance with this policy. You can reach them at <Email />.
      </p>

      <h2>2. What we collect</h2>
      <h3>In the app</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Examples</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account</td>
              <td>Your email address and an internal user ID</td>
              <td>Signing you in</td>
            </tr>
            <tr>
              <td>Things you tell us</td>
              <td>
                Onboarding answers, free-text interests (films, music, places and so on), and
                anything you &quot;drop&quot; in: text, songs, films, brands, images
              </td>
              <td>Understanding your taste</td>
            </tr>
            <tr>
              <td>Photos</td>
              <td>An optional onboarding photo, and images you drop in</td>
              <td>Understanding your taste</td>
            </tr>
            <tr>
              <td>Activity in the app</td>
              <td>
                Pieces you save or dismiss, and how you react to the app&apos;s reads of your taste
              </td>
              <td>Personalization</td>
            </tr>
            <tr>
              <td>Things we generate</td>
              <td>
                Written reads of your taste, style tags, and &quot;embeddings&quot; (numeric
                representations of taste and images)
              </td>
              <td>Personalization</td>
            </tr>
            <tr>
              <td>Usage analytics</td>
              <td>
                Screens viewed, taps, your user ID, and approximate location derived from your IP
                address
              </td>
              <td>Improving the app</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We <strong>don&apos;t</strong>{" "}collect advertising identifiers, track you across other apps
        or websites, record your sessions, access your contacts, or collect your precise location.
      </p>

      <h3>On this website</h3>
      <ul>
        <li>
          <strong>Waitlist.</strong>{" "}If you join the waitlist, we collect your name and email
          address, and use them to send you early-access and launch updates.
        </li>
        <li>
          <strong>Site analytics.</strong>{" "}We use Vercel Web Analytics, which is cookieless. It sets
          no cookies and uses no local storage, and it records page views in aggregate.
        </li>
      </ul>
      <p>This website doesn&apos;t use cookies, which is why you won&apos;t see a cookie banner.</p>

      <h2>3. How we use it</h2>
      <p>We use your information to:</p>
      <ul>
        <li>create your account and sign you in;</li>
        <li>understand your taste and show you pieces that fit it;</li>
        <li>generate written reads of your taste and your style passport;</li>
        <li>understand how the app is used so we can fix problems and make it better;</li>
        <li>send waitlist and launch updates, if you signed up for them;</li>
        <li>respond to you when you contact us.</li>
      </ul>
      <p>
        We only use your information for the purposes described here, or for purposes you&apos;d
        reasonably expect. If we want to use it for something new, we&apos;ll ask for your consent
        first.
      </p>
      <p>
        <strong>We do not sell or share your personal information.</strong>{" "}We don&apos;t sell it,
        rent it, or share it for advertising, and we don&apos;t use it to build advertising profiles.
      </p>

      <h2>4. AI processing</h2>
      <p>Closeted uses AI to understand your taste. Here&apos;s exactly how:</p>
      <ul>
        <li>
          What you share (text, and images you upload) is sent to <strong>Anthropic</strong>, the
          company that makes Claude, to generate the app&apos;s reads of your taste.
        </li>
        <li>
          Images and text are also processed by a fashion image-matching model that we run on{" "}
          <strong>Modal</strong>, to match you with clothing. This is inference only: the model uses
          your data to produce a result, and doesn&apos;t learn from it.
        </li>
        <li>
          Your data is <strong>never used to train AI models</strong>, ours or anyone else&apos;s.
          Anthropic does not train on data sent through its API.
        </li>
        <li>
          Anthropic deletes inputs and outputs within 30 days. The exception is content flagged for
          violating Anthropic&apos;s usage policy, which may be kept for up to 2 years.
        </li>
      </ul>

      <h2>5. Service providers</h2>
      <p>
        We use a small number of companies to run Closeted. They process information on our behalf,
        only for the purposes below, and are bound by contract to protect it.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Role</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supabase</td>
              <td>Database, sign-in, and file storage</td>
              <td>US (Ohio)</td>
            </tr>
            <tr>
              <td>Anthropic</td>
              <td>AI reads of your text and images</td>
              <td>US</td>
            </tr>
            <tr>
              <td>Modal</td>
              <td>Image and text matching model (inference only)</td>
              <td>US</td>
            </tr>
            <tr>
              <td>PostHog</td>
              <td>App analytics</td>
              <td>US</td>
            </tr>
            <tr>
              <td>Resend</td>
              <td>Waitlist emails</td>
              <td>US</td>
            </tr>
            <tr>
              <td>Vercel</td>
              <td>Website hosting and cookieless site analytics</td>
              <td>US</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We may also disclose information if the law requires it, or to protect the rights, safety,
        or property of Closeted, our users, or others.
      </p>

      <h2>6. Where your data is stored</h2>
      <p>
        Your personal information is processed and stored <strong>outside Canada</strong>, including
        in the <strong>United States</strong>. While it&apos;s there, it&apos;s subject to the laws of
        that country and may be accessible to courts, law enforcement, and national security
        authorities under those laws.
      </p>

      <h2>7. How long we keep it</h2>
      <ul>
        <li>
          <strong>Your account, the things you tell us, your saves, and the data we
          generate:</strong>{" "}until you delete your account.
        </li>
        <li>
          <strong>Your onboarding photo:</strong>{" "}until you delete your account.
        </li>
        <li>
          <strong>Images you drop in:</strong>{" "}deleted automatically once they&apos;ve been
          processed, usually within minutes. We keep the written read and the embedding we made from
          the image, not the image itself.
        </li>
        <li>
          <strong>Usage analytics:</strong>{" "}kept for product analysis. Analytics are not deleted
          automatically when you delete your account, but we&apos;ll delete them if you ask at{" "}
          <Email />.
        </li>
        <li>
          <strong>Waitlist sign-ups:</strong>{" "}until launch communications end, you unsubscribe, or
          you ask us to delete them.
        </li>
      </ul>

      <h2>8. Deleting your account and data</h2>
      <p>
        You can delete your account at any time in the app: go to{" "}
        <strong>account → delete account</strong>. This permanently deletes your account, your data,
        and your stored files. Once deleted, they&apos;re no longer accessible to you or to us.
      </p>
      <p>
        Copies that exist in routine backups may take longer to clear out.
      </p>
      <p>
        You can also ask us to delete your account by emailing <Email />{" "}from the address you signed
        up with.
      </p>

      <h2>9. Your rights and choices</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>give you access to the personal information we hold about you;</li>
        <li>correct information that&apos;s wrong or incomplete;</li>
        <li>delete your information;</li>
        <li>withdraw your consent to how we use it.</li>
      </ul>
      <p>
        To make a request, email <Email />. We&apos;ll respond within 30 days. We may need to confirm
        your identity first. Withdrawing consent may mean we can&apos;t keep providing parts of the
        app that depend on it.
      </p>
      <p>
        If you&apos;re not happy with how we&apos;ve handled your information, please tell us first
        so we can try to fix it. You also have the right to complain to the{" "}
        <a
          href="https://www.priv.gc.ca/en/report-a-concern/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Office of the Privacy Commissioner of Canada
        </a>
        . If you live in Quebec, you can complain to the{" "}
        <a href="https://www.cai.gouv.qc.ca/" target="_blank" rel="noopener noreferrer">
          Commission d&apos;accès à l&apos;information
        </a>
        .
      </p>
      <p>
        <strong>For California residents and others in the US:</strong>{" "}we do not sell or share your
        personal information, as those terms are defined under California law. You have the right to
        know what we collect, to ask us to delete or correct it, and to not be treated differently
        for exercising these rights.
      </p>

      <h2>10. Security</h2>
      <p>
        We use reasonable safeguards to protect your information, including encryption in transit,
        access controls on our database and file storage, and limiting access to people and services
        that need it. No system is perfectly secure, though. If a breach creates a real risk of
        significant harm to you, we&apos;ll notify you and the appropriate regulators as the law
        requires.
      </p>

      <h2>11. Children</h2>
      <p>
        You must be <strong>14 or older</strong>{" "}to use Closeted. The app isn&apos;t directed at
        children under 14, and we don&apos;t knowingly collect their information. If we learn
        we&apos;ve collected data from someone under 14, we&apos;ll delete it. If you think that&apos;s
        happened, email <Email />.
      </p>

      <h2>12. Changes to this policy, and contact</h2>
      <p>
        If we change this policy, we&apos;ll update the effective date at the top. For significant
        changes, we&apos;ll also let you know in the app or by email.
      </p>
      <p>
        Questions, requests, or concerns about your privacy? Contact our privacy officer at <Email />.
      </p>
    </LegalPage>
  );
}
