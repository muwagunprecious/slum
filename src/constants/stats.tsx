import { Trophy, HeartHandshake, School, Palette } from "lucide-react";
import { StatItem } from "@/types/stats";

export const stats: StatItem[] = [
  {
    id: 1,
    icon: Palette,
    number: "147",
    label: "CNN Reporter Portrait Collages",
  },
  {
    id: 2,
    number: "4",
    label: "Guinness World Records",
    icon: Trophy,
  },
  {
    id: 3,
    number: "1st",
    label: "PET Bottle School Built in Ijora Badia",
    icon: School,
  },
  {
    id: 4,
    number: "1,000+",
    label: "Slum Children Reached with Art & Relief",
    icon: HeartHandshake,
  },
];
