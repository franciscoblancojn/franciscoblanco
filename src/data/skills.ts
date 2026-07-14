export interface LinearSkill {
  name: string;
  p: number;
}

export interface CircularSkill {
  name: string;
  p: number;
}

export const techCompetence: LinearSkill[] = [
  { name: "Nextjs", p: 85 },
  { name: "React", p: 85 },
  { name: "Git", p: 95 },
  { name: "JS", p: 95 },
  { name: "Sass", p: 90 },
  { name: "PHP", p: 85 },
  { name: "Laravel", p: 75 },
];

export const specialties: CircularSkill[] = [
  { name: "NodeJs", p: 90 },
  { name: "NextJs", p: 85 },
  { name: "React", p: 85 },
  { name: "Wordpress", p: 96 },
];
