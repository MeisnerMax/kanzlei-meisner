import Image from "next/image";

export default function AttorneyProfile() {
  return (
    <div className="grid gap-8 sm:grid-cols-[220px_1fr] items-start">
      <div className="relative h-[220px] w-[220px] overflow-hidden rounded-lg ring-1 ring-white/20">
        <Image src="/attorney.png" alt="Portrait von Volljuristin Meisner" fill sizes="220px" />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-semibold text-white">Volljuristin Meisner</h3>
        <p className="mt-2 text-white/80">
          Volljuristin und Mediatorin, fokussiert auf Familien-, Erb- und Zivilrecht – mit über 30 Jahren Erfahrung in anspruchsvollen Verfahren und strukturierten Verhandlungen.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-5 shadow-soft">
            <h4 className="font-semibold text-white">Berufserfahrung</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[#1f3358] bg-[#10253f] p-3">
                <div className="text-sm text-white/60">aktuell</div>
                <div className="font-semibold text-white">Kanzlei Tilman Fischer</div>
                <div className="text-sm text-white/70">11/2025 – Heute</div>
              </div>
              <div className="rounded-lg border border-[#1f3358] bg-[#10253f] p-3">
                <div className="text-sm text-white/60">Leitung</div>
                <div className="font-semibold text-white">Vorsitzende Arbeitskreis Medizinrecht</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Medizinrecht (Apr. 2009 – Heute · 16 Jahre 8 Monate)</li>
              <li>Volljuristin, Mediatorin (Mai 2006 – Heute · 19 Jahre 7 Monate)</li>
              <li>Inhaberin einer Rechtsanwaltskanzlei (Sept. 1994 – Apr. 2006 · 11 Jahre 8 Monate)</li>
              <li>Rechtsamtsleiterin (1993 – 1994 · 1 Jahr 8 Monate)</li>
              <li>Juristin am EIPA Maastricht (März 1989 – Aug. 1989 · 6 Monate)</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4 shadow-soft">
              <h4 className="font-semibold text-white">Ausbildung</h4>
              <p className="mt-2 text-white/80">Universitäten Bonn, Köln, Münster, Bayreuth</p>
            </div>
            <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4 shadow-soft">
              <h4 className="font-semibold text-white">Fortbildungen</h4>
              <p className="mt-2 text-white/80">Mediation, Medizinrecht</p>
            </div>
            <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4 shadow-soft">
              <h4 className="font-semibold text-white">Mitgliedschaften</h4>
              <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                <li>Anwaltsverein</li>
                <li>Arbeitsgemeinschaft Familien- und Erbrecht</li>
                <li>Arbeitskreis Medizinrecht</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
