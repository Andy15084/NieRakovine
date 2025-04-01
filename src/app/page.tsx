'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-purple mb-6">
          Vitajte na Nie Rakovine
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Sme tu pre vás a vašich blízkych v boji proti rakovine. Poskytujeme podporu,
          informácie a pomoc pacientom a ich rodinám.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary-purple mb-4">Podpora pacientov</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Poskytujeme komplexnú podporu pacientom s rakovinou prostredníctvom našich
            poradní a informačných služieb.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary-purple mb-4">Vzdelávanie</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Organizujeme vzdelávacie programy a poskytujeme aktuálne informácie o
            prevencii a liečbe rakoviny.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary-purple mb-4">Výskum</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Podporujeme výskum v oblasti onkológie a prinášame najnovšie poznatky
            z oblasti liečby rakoviny.
          </p>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary-purple mb-6">
          Ako sa môžete zapojiť?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-primary-purple mb-4">Staňte sa dobrovoľníkom</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pripojte sa k našej komunite dobrovoľníkov a pomôžte nám v boji proti rakovine.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-primary-purple mb-4">Podporte nás</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Vaša podpora nám pomáha pokračovať v našej misii pomáhať pacientom s rakovinou.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
