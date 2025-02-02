import type { Game } from "./types";

export const mockGames: Game[] = [
  {
    id: "1",
    date: "2025-04-01",
    awayTeam: "New York Yankees",
    homeTeam: "Boston Red Sox",
    awayScore: 5,
    homeScore: 3,
    awayHits: 10,
    homeHits: 8,
    awayErrors: 1,
    homeErrors: 2,
    topPerformer: "Aaron Judge",
    winningPitcher: "Gerrit Cole",
    summary: {
      en: "The Yankees defeated the Red Sox 5-3 in a thrilling game at Fenway Park. Aaron Judge hit two home runs, leading the Yankees to victory. Gerrit Cole pitched a strong game, striking out 10 batters over 7 innings.",
      es: "Los Yankees derrotaron a los Red Sox 5-3 en un emocionante juego en Fenway Park. Aaron Judge conectó dos jonrones, llevando a los Yankees a la victoria. Gerrit Cole lanzó un juego fuerte, ponchando a 10 bateadores en 7 entradas.",
      ja: "ヤンキースはフェンウェイ・パークでのスリリングな試合でレッドソックスを5-3で破りました。アーロン・ジャッジが2本のホームランを放ち、ヤンキースを勝利に導きました。ゲリット・コールは7イニングで10奪三振の好投を見せました。",
    },
    events: [
      {
        inning: "1st",
        title: "Yankees Take Early Lead",
        description:
          "DJ LeMahieu hits a leadoff double and scores on a single by Giancarlo Stanton.",
      },
      {
        inning: "3rd",
        title: "Judge's First Homer",
        description:
          "Aaron Judge hits a solo home run to left field, extending the Yankees' lead to 2-0.",
      },
      {
        inning: "5th",
        title: "Red Sox Fight Back",
        description:
          "Rafael Devers ties the game with a two-run homer, scoring Kiké Hernández.",
      },
      {
        inning: "7th",
        title: "Judge Strikes Again",
        description:
          "Aaron Judge hits his second home run of the night, a two-run shot to center field.",
      },
      {
        inning: "9th",
        title: "Yankees Seal the Win",
        description:
          "Aroldis Chapman strikes out the side to secure the 5-3 victory for the Yankees.",
      },
    ],
  },
  {
    id: "2",
    date: "2025-04-02",
    awayTeam: "Los Angeles Dodgers",
    homeTeam: "San Francisco Giants",
    awayScore: 2,
    homeScore: 4,
    awayHits: 7,
    homeHits: 12,
    awayErrors: 0,
    homeErrors: 1,
    topPerformer: "Brandon Crawford",
    winningPitcher: "Logan Webb",
    summary: {
      en: "The Giants upset the Dodgers 4-2 at Oracle Park. A late-inning rally, sparked by a Brandon Crawford double, secured the win for San Francisco. Logan Webb pitched a gem, allowing only 2 runs over 7 innings.",
      es: "Los Giants sorprendieron a los Dodgers 4-2 en Oracle Park. Un rally en las últimas entradas, iniciado por un doble de Brandon Crawford, aseguró la victoria para San Francisco. Logan Webb lanzó una joya, permitiendo solo 2 carreras en 7 entradas.",
      ja: "ジャイアンツはオラクル・パークでドジャースを4-2で下しました。ブランドン・クロフォードのダブルヒットをきっかけに終盤に得点を重ね、サンフランシスコが勝利を収めました。ローガン・ウェブは7イニングを2失点に抑える好投を見せました。",
    },
    events: [
      {
        inning: "2nd",
        title: "Dodgers Take the Lead",
        description:
          "Mookie Betts hits a two-run homer to give the Dodgers an early lead.",
      },
      {
        inning: "6th",
        title: "Giants Rally",
        description:
          "Brandon Crawford's double sparks a three-run rally, putting the Giants ahead.",
      },
      {
        inning: "7th",
        title: "Giants Extend Lead",
        description: "A bases-loaded walk extends the Giants' lead to 4-2.",
      },
      {
        inning: "9th",
        title: "Giants Secure Victory",
        description:
          "Giants closer Camilo Doval strikes out the side to secure the win.",
      },
    ],
  },
  {
    id: "3",
    date: "2025-03-31",
    awayTeam: "Chicago Cubs",
    homeTeam: "St. Louis Cardinals",
    awayScore: 1,
    homeScore: 0,
    awayHits: 4,
    homeHits: 3,
    awayErrors: 0,
    homeErrors: 0,
    topPerformer: "Seiya Suzuki",
    winningPitcher: "Justin Steele",
    summary: {
      en: "The Cubs edged out the Cardinals 1-0 in a pitching duel at Busch Stadium. A solo home run by Seiya Suzuki in the 9th inning was the difference-maker. Justin Steele pitched a masterful shutout.",
      es: "Los Cubs superaron a los Cardinals 1-0 en un duelo de lanzadores en el Busch Stadium. Un jonrón solitario de Seiya Suzuki en la 9ª entrada marcó la diferencia. Justin Steele lanzó una magistral blanqueada.",
      ja: "カブスはブッシュ・スタジアムでの投手戦でカージナルスを1-0で下しました。9回に鈴木誠也が放った決勝ソロホームランが勝負の分かれ目となりました。ジャスティン・スティールは見事な完封勝利を収めました。",
    },
    events: [
      {
        inning: "9th",
        title: "Suzuki's Solo Homer",
        description:
          "Seiya Suzuki hits a solo home run to give the Cubs a 1-0 lead.",
      },
    ],
  },
  {
    id: "4",
    date: "2025-04-03",
    awayTeam: "Houston Astros",
    homeTeam: "Texas Rangers",
    awayScore: 6,
    homeScore: 5,
    awayHits: 11,
    homeHits: 9,
    awayErrors: 2,
    homeErrors: 1,
    topPerformer: "Jose Altuve",
    winningPitcher: "Framber Valdez",
    summary: {
      en: "In a high-scoring Texas showdown, the Astros narrowly defeated the Rangers 6-5. Jose Altuve's clutch hit in the 8th inning drove in the winning run. Framber Valdez earned the win despite allowing 5 runs.",
      es: "En un enfrentamiento de Texas con muchas carreras, los Astros derrotaron por poco a los Rangers 6-5. El hit oportuno de José Altuve en la 8ª entrada impulsó la carrera de la victoria. Framber Valdez obtuvo la victoria a pesar de permitir 5 carreras.",
      ja: "テキサス州対決の乱打戦で、アストロズはレンジャーズを6-5で辛勝しました。8回にホセ・アルトゥーベのクラッチヒットが勝ち越し点を呼び込みました。フランバー・バルデスは5失点しながらも勝利投手となりました。",
    },
    events: [
      {
        inning: "1st",
        title: "Rangers Take Early Lead",
        description: "The Rangers score three runs in the first inning.",
      },
      {
        inning: "3rd",
        title: "Astros Respond",
        description: "The Astros score four runs to take the lead.",
      },
      {
        inning: "5th",
        title: "Rangers Tie the Game",
        description: "The Rangers score two runs to tie the game.",
      },
      {
        inning: "8th",
        title: "Altuve's Clutch Hit",
        description: "Jose Altuve's RBI single gives the Astros the lead.",
      },
      {
        inning: "9th",
        title: "Astros Hold On",
        description: "Ryan Pressly closes out the game for the Astros.",
      },
    ],
  },
];
