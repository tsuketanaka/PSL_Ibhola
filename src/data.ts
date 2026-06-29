import { HighlightCard, FixtureCard, LiveScoreMatch, StandingRow, TacticalArticle, TriviaCompetition, ProfileCard } from './types';

export const HIGHLIGHTS_DATA: HighlightCard[] = [
  {
    id: 'h1',
    matchName: 'Harare Derby: CAPS United FC vs Dynamos FC',
    homeTeam: 'CAPS United FC',
    awayTeam: 'Dynamos FC',
    date: '2026-06-21',
    duration: '11:45',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    thumbnailUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'h2',
    matchName: 'Battle of Zimbabwe: Highlanders FC vs Dynamos FC',
    homeTeam: 'Highlanders FC',
    awayTeam: 'Dynamos FC',
    date: '2026-06-14',
    duration: '09:30',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'h3',
    matchName: 'Ngezi Platinum Stars FC vs FC Platinum',
    homeTeam: 'Ngezi Platinum Stars FC',
    awayTeam: 'FC Platinum',
    date: '2026-06-07',
    duration: '08:15',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'h4',
    matchName: 'Scottland FC vs Chicken Inn FC',
    homeTeam: 'Scottland FC',
    awayTeam: 'Chicken Inn FC',
    date: '2026-05-31',
    duration: '10:05',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop'
  }
];

export const FIXTURES_DATA: FixtureCard[] = [
  {
    id: 'f1',
    homeTeam: 'CAPS United FC',
    awayTeam: 'Hardrock FC',
    date: '2026-06-27',
    time: '15:00',
    venue: 'National Sports Stadium, Harare',
    matchday: 'Matchday 7'
  },
  {
    id: 'f2',
    homeTeam: 'Dynamos FC',
    awayTeam: 'Scottland FC',
    date: '2026-06-27',
    time: '15:00',
    venue: 'Rufaro Stadium, Harare',
    matchday: 'Matchday 7'
  },
  {
    id: 'f3',
    homeTeam: 'Ngezi Platinum Stars FC',
    awayTeam: 'Highlanders FC',
    date: '2026-06-28',
    time: '15:00',
    venue: 'Baobab Stadium, Mhondoro',
    matchday: 'Matchday 7'
  },
  {
    id: 'f4',
    homeTeam: 'FC Platinum',
    awayTeam: 'MWOS FC',
    date: '2026-06-28',
    time: '15:00',
    venue: 'Mandava Stadium, Zvishavane',
    matchday: 'Matchday 7'
  },
  {
    id: 'f5',
    homeTeam: 'Simba Bhora FC',
    awayTeam: 'Chicken Inn FC',
    date: '2026-06-29',
    time: '15:00',
    venue: 'Wadzanai Stadium, Shamva',
    matchday: 'Matchday 7'
  },
  {
    id: 'f6',
    homeTeam: 'Bulawayo Chiefs FC',
    awayTeam: 'FC Hunters',
    date: '2026-06-29',
    time: '13:00',
    venue: 'Luveve Stadium, Bulawayo',
    matchday: 'Matchday 7'
  }
];

export const LIVESCORE_DATA: LiveScoreMatch[] = [
  // 2 Live Matches
  {
    id: 'l1',
    homeTeam: 'CAPS United FC',
    awayTeam: 'Simba Bhora FC',
    homeScore: 2,
    awayScore: 1,
    status: 'LIVE',
    minute: "78'",
    venue: 'National Sports Stadium, Harare'
  },
  {
    id: 'l2',
    homeTeam: 'Highlanders FC',
    awayTeam: 'Chicken Inn FC',
    homeScore: 1,
    awayScore: 1,
    status: 'LIVE',
    minute: "43'",
    venue: 'Barbourfields Stadium, Bulawayo'
  },
  // 2 Finished Matches
  {
    id: 'l3',
    homeTeam: 'Dynamos FC',
    awayTeam: 'ZPC Kariba FC',
    homeScore: 3,
    awayScore: 1,
    status: 'FINISHED',
    minute: 'FT',
    venue: 'Rufaro Stadium, Harare'
  },
  {
    id: 'l4',
    homeTeam: 'Ngezi Platinum Stars FC',
    awayTeam: 'Agama FC',
    homeScore: 2,
    awayScore: 0,
    status: 'FINISHED',
    minute: 'FT',
    venue: 'Baobab Stadium, Mhondoro'
  },
  // 2 Scheduled Matches
  {
    id: 'l5',
    homeTeam: 'Scottland FC',
    awayTeam: 'Manica Diamonds FC',
    status: 'SCHEDULED',
    date: '2026-06-27',
    time: '15:00',
    venue: 'National Sports Stadium, Harare'
  },
  {
    id: 'l6',
    homeTeam: 'Hardrock FC',
    awayTeam: 'Telone FC',
    status: 'SCHEDULED',
    date: '2026-06-27',
    time: '15:00',
    venue: 'Rimuka Stadium, Kadoma'
  }
];

export const STANDINGS_DATA: StandingRow[] = [
  { pos: 1, club: 'CAPS United FC', played: 6, won: 5, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 2, goalDifference: 6, points: 15 },
  { pos: 2, club: 'Dynamos FC', played: 6, won: 4, drawn: 2, lost: 0, goalsFor: 9, goalsAgainst: 4, goalDifference: 5, points: 14 },
  { pos: 3, club: 'Ngezi Platinum Stars FC', played: 6, won: 4, drawn: 2, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, points: 14 },
  { pos: 4, club: 'Hardrock FC', played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, points: 13 },
  { pos: 5, club: 'Scottland FC', played: 6, won: 3, drawn: 3, lost: 0, goalsFor: 10, goalsAgainst: 3, goalDifference: 7, points: 12 },
  { pos: 6, club: 'FC Platinum', played: 6, won: 2, drawn: 3, lost: 1, goalsFor: 6, goalsAgainst: 4, goalDifference: 2, points: 9 },
  { pos: 7, club: 'Chicken Inn FC', played: 6, won: 2, drawn: 3, lost: 1, goalsFor: 4, goalsAgainst: 2, goalDifference: 2, points: 9 },
  { pos: 8, club: 'MWOS FC', played: 6, won: 2, drawn: 3, lost: 1, goalsFor: 5, goalsAgainst: 4, goalDifference: 1, points: 9 },
  { pos: 9, club: 'Simba Bhora FC', played: 6, won: 2, drawn: 3, lost: 1, goalsFor: 2, goalsAgainst: 1, goalDifference: 1, points: 9 },
  { pos: 10, club: 'ZPC Kariba FC', played: 6, won: 2, drawn: 2, lost: 2, goalsFor: 5, goalsAgainst: 4, goalDifference: 1, points: 8 },
  { pos: 11, club: 'Herentals College FC', played: 6, won: 2, drawn: 1, lost: 3, goalsFor: 6, goalsAgainst: 7, goalDifference: -1, points: 7 },
  { pos: 12, club: 'Highlanders FC', played: 6, won: 0, drawn: 6, lost: 0, goalsFor: 3, goalsAgainst: 3, goalDifference: 0, points: 6 },
  { pos: 13, club: 'Bulawayo Chiefs FC', played: 6, won: 1, drawn: 2, lost: 3, goalsFor: 3, goalsAgainst: 6, goalDifference: -3, points: 5 },
  { pos: 14, club: 'FC Hunters', played: 6, won: 0, drawn: 4, lost: 2, goalsFor: 1, goalsAgainst: 5, goalDifference: -4, points: 4 },
  { pos: 15, club: 'Telone FC', played: 6, won: 0, drawn: 3, lost: 3, goalsFor: 6, goalsAgainst: 9, goalDifference: -3, points: 3 },
  { pos: 16, club: 'Triangle United FC', played: 6, won: 1, drawn: 0, lost: 5, goalsFor: 2, goalsAgainst: 6, goalDifference: -4, points: 3 },
  { pos: 17, club: 'Agama FC', played: 6, won: 0, drawn: 1, lost: 5, goalsFor: 3, goalsAgainst: 11, goalDifference: -8, points: 1 },
  { pos: 18, club: 'Manica Diamonds FC', played: 6, won: 0, drawn: 1, lost: 5, goalsFor: 0, goalsAgainst: 10, goalDifference: -10, points: 1 }
];

export const ARTICLES_DATA: TacticalArticle[] = [
  {
    id: 'a1',
    title: 'The Green Machine Reborn: CAPS United’s Tactical Versatility Under Lloyd Chitembwe',
    summary: 'An in-depth analysis of how CAPS United FC returned to the top of the standings by utilizing an asymmetrical 3-4-3 formation and high counter-pressing.',
    category: 'Tactical Analysis',
    author: 'Kudakwashe Mhlanga',
    date: '2026-06-24',
    imageUrl: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600&auto=format&fit=crop',
    content: `CAPS United FC (popularly known as "The Green Machine") has taken the current Zimbabwe Premier Soccer League season by storm, sitting proudly at the top with 15 points. Head coach Lloyd Chitembwe has implemented a sophisticated system that blends tactical discipline with rapid transition play.

### The Defensive Shift to a Back Three
In previous seasons, Chitembwe favored a rigid 4-4-2. This term, however, CAPS United has adapted to an asymmetrical 3-4-3 during build-up phases. The right wingback pushes high to join the front three, creating a 4-man attack that overloads opponents' defensive lines.

### Midfield Dominance & High Counter-Pressing
Once possession is lost, CAPS United transitions instantly into a aggressive counter-pressing structure. By compressing the pitch and maintaining short distances between player units, they force opponents into quick, low-percentage clearances, recovering the ball in premium attacking zones.

### Conclusion
This fluidity and tactical intelligence is the core driver of their high goalscoring record. If they can maintain this level of physical intensity, the Green Machine is well-positioned to claim the PSL crown this year.`
  },
  {
    id: 'a2',
    title: 'Rock Solid: How Dynamos FC Engineered Zimbabwe’s Most Disciplined Defense',
    summary: 'With only 4 goals conceded in 6 matches, Dynamos FC remains undefeated. Discover the mechanical layout of their low-block defensive system.',
    category: 'Defensive Strategy',
    author: 'Tafadzwa Gumbo',
    date: '2026-06-18',
    imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6edd1d141d?q=80&w=600&auto=format&fit=crop',
    content: `Dynamos FC ("The Glamour Boys") are undefeated after six matchdays, relying on a robust defensive blueprint that is currently the class of the Zimbabwe PSL.

### Structural Integrity in a Mid-to-Low Block
Rather than chasing high-press actions, Dynamos setups in a highly disciplined 4-1-4-1 medium block. The defensive midfielder sits tightly in front of the two center-backs, closing down space between the lines. This structure denies any central penetration, forcing opposing teams to play wide crosses where Dynamos’ tall center-backs command the penalty area.

### Key Tactical Statistics
* **Goals Conceded**: 4 in 6 matches
* **Expected Goals Against (xGA)**: 0.65 per 90 mins
* **Clean Sheets**: 3 out of 6 games

### The Counter-Attacking Spark
The defensive discipline lays a platform for rapid counter-attacks led by their athletic wingers. This ensures that while Dynamos matches may have low goal counts, they remain incredibly clinical in picking up maximum points.`
  },
  {
    id: 'a3',
    title: 'The Scottland FC Phenomenon: The Rapid Rise of the High-Flyers',
    summary: 'New boys Scottland FC are proving to be the dark horses of the season. We analyze their positional play and stellar offensive fluidity.',
    category: 'Team Analysis',
    author: 'Sipho Ndlovu',
    date: '2026-06-12',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop',
    content: `Scottland FC has emerged as the most entertaining team to watch this season. Sitting 5th with 12 points and boasting a goal difference of +7 (highest in the league), they have quickly transitioned from newly promoted underdogs to genuine title contenders.

### Positional Play (Juego de Posición)
Underpinning Scottland FC's success is a commitment to modern positional play. Their wingers hug the touchline to stretch opponents horizontally, while the central midfielders occupy the "half-spaces" to run behind defensive lines.

### Attacking Statistics
With 10 goals in 6 matches, Scottland FC has the most potent attack in the league. Their offensive versatility means goals are distributed across midfielders and forwards, preventing opponents from simply marking a single key striker.

### The Road Ahead
Can Scottland FC maintain this momentum against experienced defensive giants like Dynamos and CAPS United? Their tactical flexibility suggests they have the tools to puzzle even the most elite blocks.`
  }
];

export const COMPETITIONS_DATA: TriviaCompetition[] = [
  {
    id: 'c1',
    title: 'Harare Derby Prediction Clash',
    question: 'Predict the exact scoreline of the upcoming CAPS United FC vs Dynamos FC match, and name the first goalscorer!',
    deadline: '2026-06-27, 14:30 CAT',
    prize: 'Official Team Jersey + 2 VIP tickets to the next home fixture'
  },
  {
    id: 'c2',
    title: 'PSL Trivia Champion Round 7',
    question: 'Which of these Zimbabwe PSL clubs is affectionately nicknamed the "Green Machine"?',
    deadline: '2026-06-28, 12:00 CAT',
    prize: 'Cash voucher of $150 USD + signed PSL Match Ball'
  },
  {
    id: 'c3',
    title: 'Zim Football History Trivia',
    question: 'In what year did Highlanders FC win their first ever National Premier Soccer League title?',
    deadline: '2026-06-29, 15:00 CAT',
    prize: 'Zim Gold Soccer Scarf + $100 Airtime Voucher'
  }
];

export const PROFILES_DATA: ProfileCard[] = [
  {
    id: 'p1',
    name: 'Phineas Bamusi',
    role: 'player',
    club: 'CAPS United FC',
    photoUrl: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=300&auto=format&fit=crop',
    positionOrSpecialty: 'Winger / Attacker',
    bio: 'Phineas Bamusi is a veteran winger in the Zimbabwe Premier Soccer League, renowned for his lightning pace and consistent service. He has been a pivotal figure in CAPS United’s offensive lines over the years.',
    playingStyle: 'High-speed touchline winger who excels at 1v1 dribbling, driving down the flanks, and delivering precise crosses into the box. He also possesses an impressive work rate, tracking back to support his fullback.',
    careerHighlights: [
      'Zimbabwe Premier Soccer League Champion with CAPS United FC',
      'Voted in the PSL Soccer Star of the Year calendar twice',
      'Over 200 appearances in the top flight league'
    ],
    interviewUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'p2',
    name: 'Lloyd Chitembwe',
    role: 'coach',
    club: 'CAPS United FC',
    photoUrl: 'https://images.unsplash.com/photo-1526232761682-d76e53c130e9?q=80&w=300&auto=format&fit=crop',
    positionOrSpecialty: 'Head Coach / Tactical Manager',
    bio: 'Lloyd Chitembwe is one of Zimbabwe’s most decorated and respected local football coaches. A legendary former player for CAPS United and the national team, he has translated his deep footballing IQ into a stellar coaching career.',
    playingStyle: 'Chitembwe is famous for his high-tactical discipline, rigorous physical conditioning programs, and adaptive tactical setups. He is highly praised for reviving struggling clubs and integrating youth prospects.',
    careerHighlights: [
      'Won the PSL championship both as a star player and as head coach for CAPS United FC',
      'Coached multiple clubs to safety and cup championships across Zimbabwe',
      'Longest serving manager in CAPS United modern history'
    ],
    interviewUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'p3',
    name: 'Obriel Chirinda',
    role: 'player',
    club: 'Ngezi Platinum Stars FC',
    photoUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=300&auto=format&fit=crop',
    positionOrSpecialty: 'Striker / Goal Poacher',
    bio: 'Obriel Chirinda is a fearsome and highly prolific forward, currently spearheading Ngezi Platinum Stars FC. Known for his explosive power and instinct inside the penalty box.',
    playingStyle: 'Chirinda is a dynamic modern forward who plays on the shoulder of the last defender. He has superb explosive acceleration and a devastating left-foot shot. He is equally capable of holding up play to combine with arriving wingers.',
    careerHighlights: [
      'Zimbabwe PSL Soccer Star of the Year finalist',
      'Golden Boot contender with a double-digit goal tally',
      'Represented the Zimbabwe national team (The Warriors) in regional tournaments'
    ],
    interviewUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'p4',
    name: 'Donald Mudadi',
    role: 'player',
    club: 'Dynamos FC',
    photoUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=300&auto=format&fit=crop',
    positionOrSpecialty: 'Central Midfielder / Playmaker',
    bio: 'Donald Mudadi is the midfield engine room for Dynamos FC. His vision, passing range, and tireless work-rate have anchored the team through their undefeated run this season.',
    playingStyle: 'A complete box-to-box midfielder with exceptional positioning. Mudadi excels at breaking up opposition buildups and immediately initiating attack lines with accurate, long-range switches of play.',
    careerHighlights: [
      'Key member of the Dynamos FC squad maintaining a seller undefeated streak',
      'Scored multiple critical long-range match-winners in major cup tournaments',
      'Voted Club Midfielder of the Season'
    ],
    interviewUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];
