import React from "react";

export default function Page() {
  const programs = [
    { title: "Voix en Français", desc: "Actualités et culture en français." },
    { title: "Echo en Anglais", desc: "Programmes internationaux et débats." },
    { title: "Ondes en Portugais", desc: "Musique et traditions lusophones." },
    { title: "Paroles en Arabe", desc: "Discussions et histoires du monde arabe." },
    { title: "Langues Locales", desc: "Valorisation des dialectes africains." },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Une Radio, Cinq Voix, Un Continent
      </h1>

      <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
        Découvrez la richesse linguistique et culturelle de l&apos;Afrique à
        travers nos programmes multilingues. Chaque langue raconte une histoire
        unique du continent.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Nos Programmes</h2>

      <ul className="grid md:grid-cols-2 gap-6 max-w-3xl w-full">
        {programs.map((prog, index) => (
          <li
            key={index}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{prog.title}</h3>
            <p className="text-gray-600">{prog.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
