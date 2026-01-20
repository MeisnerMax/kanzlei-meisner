import Image from "next/image";

export default function AttorneyProfile() {
  return (
    <div className="grid gap-8 sm:grid-cols-[220px_1fr] items-start">
      <div className="relative h-[220px] w-[220px] overflow-hidden rounded-lg ring-1 ring-white/20">
        <Image src="/profilbild.jpg" alt="Portrait von Volljuristin Meisner" fill sizes="220px" />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-semibold text-white">Stephanie Meisner</h3>
        <p className="mt-2 text-white/80">
         Ich bringe Empathie und Klarheit in Situationen, die sich festgefahren anfühlen, und eröffne einen Raum, in dem Sie wirklich gehört werden. Mit einem verständnisvollen Blick, der im juristischen Alltag selten ist, begleite ich Sie dahin, wo Verständigung wieder möglich wird.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-5 shadow-soft space-y-4">
            <div className="flex items-start justify-between">
              <h4 className="font-semibold text-white">Berufserfahrung</h4>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">30+ Jahre</span>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg border border-[#1f3358] bg-[#10253f] p-3">
                <div className="text-sm text-white/60">seit 2025</div>
                <div className="font-semibold text-white">Juristische Beratung in Haßfurt</div>
                <div className="text-sm text-white/70">Familien-, Erb- und Zivilrecht</div>
              </div>
              <div className="rounded-lg border border-[#1f3358] bg-[#10253f] p-3">
                <div className="text-sm text-white/60">Leitung</div>
                <div className="font-semibold text-white">Vorsitzende Arbeitskreis Medizinrecht</div>
                <div className="text-sm text-white/70">Aktuelle Entwicklungen im Medizinrecht</div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-[#1f3358] bg-[#0c1d33] p-3">
                  <div className="text-sm text-white/60">2009 – heute</div>
                  <div className="font-semibold text-white">Medizinrecht</div>
                  <div className="text-sm text-white/70">Gutachten, Haftung, Vergleichsstrategien</div>
                </div>
                <div className="rounded-lg border border-[#1f3358] bg-[#0c1d33] p-3">
                  <div className="text-sm text-white/60">2006 – heute</div>
                  <div className="font-semibold text-white">Volljuristin & Mediatorin</div>
                  <div className="text-sm text-white/70">Verhandlungen strukturieren</div>
                </div>
                <div className="rounded-lg border border-[#1f3358] bg-[#0c1d33] p-3">
                  <div className="text-sm text-white/60">1994 – 2006</div>
                  <div className="font-semibold text-white">Selbstständige juristische Tätigkeit</div>
                  <div className="text-sm text-white/70">Familien- und Erbrecht</div>
                </div>
                <div className="rounded-lg border border-[#1f3358] bg-[#0c1d33] p-3">
                  <div className="text-sm text-white/60">1989 – 1994</div>
                  <div className="font-semibold text-white">EIPA Maastricht & Rechtsamt</div>
                  <div className="text-sm text-white/70">Verwaltung & EU-Praxis</div>
                </div>
              </div>
            </div>
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
                <li>Arbeitskreis Familien & Erbrecht</li>
                <li>Arbeitskreis Medizinrecht</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
