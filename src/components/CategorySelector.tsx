import { Youtube, Rocket, Gamepad2, Mic, Shirt } from "lucide-react";
import { Button } from "./ui/button";

export type Category = "youtube" | "startup" | "gaming" | "podcast" | "fashion";

interface CategorySelectorProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories = [
  { id: "youtube" as Category, label: "YouTube", icon: Youtube },
  { id: "startup" as Category, label: "Startup", icon: Rocket },
  { id: "gaming" as Category, label: "Gaming", icon: Gamepad2 },
  { id: "podcast" as Category, label: "Podcast", icon: Mic },
  { id: "fashion" as Category, label: "Fashion", icon: Shirt },
];

const CategorySelector = ({ selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          onClick={() => onCategoryChange(id)}
          variant={selectedCategory === id ? "default" : "outline"}
          className="gap-2 transition-all duration-300 hover:scale-105"
        >
          <Icon className="w-4 h-4" />
          {label}
        </Button>
      ))}
    </div>
  );
};

export default CategorySelector;
