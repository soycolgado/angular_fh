const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["Bash", "Counter", "Healing"],
}

strider.homeTown = "Argentina";

console.table(strider);
export {};