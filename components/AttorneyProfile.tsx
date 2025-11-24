import Image from "next/image";

export default function AttorneyProfile() {
  return (
    <div className="grid gap-8 sm:grid-cols-[220px_1fr] items-start">
      <div className="h-[220px] w-[220px] relative overflow-hidden rounded-lg ring-1 ring-gray-200">
        <Image src="/attorney.png" alt="Portrait der Rechtsanwältin Meisner" fill sizes="220px" />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-semibold text-gray-900">Rechtsanwältin Meisner</h3>
        <p className="mt-2 text-gray-700">
          Spezialisierung auf Familienrecht und Erbrecht. Sachlich, lösungsorientiert und mit Blick
          für das Wesentliche.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-gray-900">Ausbildung</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Studium der Rechtswissenschaften (LMU München)</li>
              <li>Referendariat im OLG-Bezirk Bamberg</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Berufserfahrung</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Mehrjährige Tätigkeit in zivilrechtlich ausgerichteter Kanzlei</li>
              <li>Seit 20XX eigene Kanzlei in Haßfurt</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Fortbildungen</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Fachanwaltslehrgang Familienrecht</li>
              <li>Fachanwaltslehrgang Erbrecht</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Mitgliedschaften</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Anwaltsverein</li>
              <li>Arbeitsgemeinschaft Familien- und Erbrecht</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
