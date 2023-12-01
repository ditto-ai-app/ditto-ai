export type Level = 'beginning' | 'intermediate' | 'advanced'

export interface Course {
  title: string
  language: string
  currentLevel: Level
  beginning: Sentence[]
  intermediate: Sentence[]
  advanced: Sentence[]
}

export interface Sentence {
  sentence: string
  english: string
  level: Level
  voice: Voice
  score?: Score
}

export interface Score {
  pronunciation: number
}

export interface Voice {
  voice: string
  audio: string
}

export interface Syllable {
  duration: number
  offset: number
  syllable: string
  grapheme: null
  accuracyScore: number
}

export interface Phoneme {
  duration: number
  offset: number
  phoneme: string
  accuracyScore: number
  nBestPhonemes: null
}

export interface Word {
  word: string
  accuracyScore: number
  errorType: string
  syllables: Syllable[]
  phonemes: Phoneme[]
}

export interface Assessment {
  accuracyScore: number
  pronunciationScore: number
  completenessScore: number
  fluencyScore: number
  prosodyScore: number
  words: Word[]
}