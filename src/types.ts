export interface HighlightCard {
  id: string;
  matchName: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  duration: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

export interface FixtureCard {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  matchday: string;
}

export interface LiveScoreMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'LIVE' | 'FINISHED' | 'SCHEDULED';
  minute?: string; // e.g., "75'" or "HT" or "15:00"
  date?: string; // for scheduled
  time?: string; // for scheduled
  venue: string;
}

export interface StandingRow {
  pos: number;
  club: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface TacticalArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface TriviaCompetition {
  id: string;
  title: string;
  question: string;
  deadline: string;
  prize: string;
}

export interface ProfileCard {
  id: string;
  name: string;
  role: 'player' | 'coach';
  club: string;
  photoUrl: string;
  positionOrSpecialty: string;
  bio: string;
  playingStyle: string;
  careerHighlights: string[];
  interviewUrl: string;
}
