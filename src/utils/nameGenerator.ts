import { Category } from "@/components/CategorySelector";

const prefixes = {
  youtube: ["Vlog", "Watch", "View", "Stream", "Play", "Tube", "Cast", "Show"],
  startup: ["Tech", "Inno", "Smart", "Next", "Proto", "Venture", "Launch", "Rise"],
  gaming: ["Pixel", "Game", "Epic", "Pro", "Elite", "Cyber", "Nova", "Apex"],
  podcast: ["Pod", "Cast", "Audio", "Voice", "Talk", "Echo", "Sound", "Wave"],
  fashion: ["Style", "Trend", "Chic", "Vogue", "Elite", "Luxe", "Mode", "Haute"],
};

const suffixes = {
  youtube: ["Hub", "Zone", "Spot", "TV", "Stream", "Cast", "Box", "Live"],
  startup: ["Tech", "Lab", "Works", "Solutions", "Ventures", "Hub", "AI", "Labs"],
  gaming: ["Zone", "Arena", "World", "Quest", "Forge", "Realm", "Nexus", "Squad"],
  podcast: ["Cast", "Show", "Talk", "Wave", "Hour", "Series", "Studio", "Radio"],
  fashion: ["Wear", "Style", "Look", "Closet", "Boutique", "Atelier", "House", "Label"],
};

const connectors = ["", "X", "Pro", "Plus", "Max", "Go", "Now", "AI"];

const wordParts = [
  "zen", "flux", "spark", "verse", "nova", "pulse", "echo", "surge",
  "peak", "wave", "bloom", "drift", "glow", "rise", "sync", "vibe"
];

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateCreativeName(keyword: string, category: Category, story: string): string {
  const rand = Math.random();
  const keywordClean = keyword.toLowerCase().trim();
  
  // Strategy 1: Prefix + Keyword (30%)
  if (rand < 0.3) {
    const prefix = prefixes[category][Math.floor(Math.random() * prefixes[category].length)];
    return prefix + capitalize(keywordClean);
  }
  
  // Strategy 2: Keyword + Suffix (30%)
  if (rand < 0.6) {
    const suffix = suffixes[category][Math.floor(Math.random() * suffixes[category].length)];
    return capitalize(keywordClean) + suffix;
  }
  
  // Strategy 3: Prefix + Connector + Keyword (20%)
  if (rand < 0.8) {
    const prefix = prefixes[category][Math.floor(Math.random() * prefixes[category].length)];
    const connector = connectors[Math.floor(Math.random() * connectors.length)];
    return prefix + connector + capitalize(keywordClean);
  }
  
  // Strategy 4: Keyword + WordPart (20%)
  const wordPart = wordParts[Math.floor(Math.random() * wordParts.length)];
  return capitalize(keywordClean) + capitalize(wordPart);
}

export function generateNames(keyword: string, category: Category, story: string): string[] {
  const names = new Set<string>();
  
  // Generate until we have 10 unique names
  while (names.size < 10) {
    const name = generateCreativeName(keyword, category, story);
    if (name.length >= 4 && name.length <= 25) {
      names.add(name);
    }
  }
  
  return Array.from(names);
}
