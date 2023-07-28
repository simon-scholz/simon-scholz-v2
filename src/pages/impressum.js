import { useState } from "react";
import {Inter} from "./_app"
export default function About() {
  const [showGermanOnly, setShowGermanOnly] = useState(false);

  return (
    <main
      className={`relative bg-white dark:bg-neutral-900 flex min-h-screen flex-col items-center justify-between p-10 md:p-24 md:pb-0 ${Inter.className}`}
    >
      <div className="flex flex-col items-start gap-4 max-w-3xl w-full pb-8">
        <h2 className="text-gray-900 dark:text-neutral-50 text-base font-medium">
          The following information (Impressum) is required under German law.
        </h2>

        <button
          className="flex flex-row w-full sm:w-auto items-center justify-center gap-2 p-2 sm:px-4 outline-none border-none text-slate-400 dark:text-slate-100 rounded-lg bg-slate-100 dark:bg-neutral-700 transition-all hover:transition-all hover:cursor-pointer hover:text-slate-500 hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-neutral-600"
          onClick={() => setShowGermanOnly(!showGermanOnly)}
        >
          {showGermanOnly ? "Show both languages" : "Show german texts only"}
        </button>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Liability and information according to &sect; 5 TMG
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </h2>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Simon Scholz
          <br />
          Kirchweg 2<br />
          81379 M&uuml;nchen
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Contact
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Kontakt
        </h2>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          {showGermanOnly ? "Telefon" : "Telefon / Phone"}: +49 163 773 0574
          <br />
          E-Mail: simonscholz@outlook.com
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          VAT ID
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Umsatzsteuer-ID
        </h2>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
          <br />
          DE315229458
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Responsible for the content according to &sect; 55 Abs. 2 RStV
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
        </h2>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Simon Scholz
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Online Dispute Resolution website of the EU Commission
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          EU-Streitschlichtung
        </h2>
        <p
          className={`text-gray-500 dark:text-neutral-200 text-sm ${
            showGermanOnly ? "hidden" : "block"
          }`}
        >
          In order for consumers and traders to resolve a dispute out-of-court,
          the European Commission developed the Online Dispute Resolution
          Website:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Arbitration board
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Legal disclaimer
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Haftung f&uuml;r Inhalte
        </h2>
        <p
          className={`text-gray-500 dark:text-neutral-200 text-sm ${
            showGermanOnly ? "hidden" : "block"
          }`}
        >
          The contents of these pages were prepared with utmost care.
          Nonetheless, we cannot assume liability for the timeless accuracy and
          completeness of the information.
        </p>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
          f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
          gespeicherte fremde Informationen zu &uuml;berwachen oder nach
          Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
          hinweisen.
        </p>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
          werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Liability concerning links
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Haftung f&uuml;r Links
        </h2>
        <p
          className={`text-gray-500 dark:text-neutral-200 text-sm ${
            showGermanOnly ? "hidden" : "block"
          }`}
        >
          Our website contains links to external websites. As the contents of
          these third-party websites are beyond our control, we cannot accept
          liability for them. Responsibility for the contents of the linked
          pages is always held by the provider or operator of the pages.
        </p>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
          f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
          F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
          Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Copyright
        </h2>
        <h2
          className={`text-gray-900 dark:text-neutral-50 text-base font-medium ${
            showGermanOnly && "mt-8"
          }`}
        >
          Urheberrecht
        </h2>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
          bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-gray-900 dark:text-neutral-50 text-sm">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h2
          className={`text-gray-500 dark:text-neutral-200 text-base font-medium ${
            showGermanOnly ? "hidden" : "block mt-8"
          }`}
        >
          Data protection
        </h2>
        <p
          className={`text-gray-500 dark:text-neutral-200 text-sm ${
            showGermanOnly ? "hidden" : "block"
          }`}
        >
          In general, when visiting this website, no personal data are saved.
          However, these data can be given on a voluntary basis. No data will be
          passed on to third parties without your consent. We point out that in
          regard to unsecured data transmission in the internet (e.g. via
          email), security cannot be guaranteed. Such data could possibIy be
          accessed by third parties.
        </p>
      </div>
    </main>
  );
}
