import { Heart } from "lucide-react";
import NameCard from "./NameCard";

interface FavoritesSectionProps {
  favorites: string[];
  onToggleFavorite: (name: string) => void;
}

const FavoritesSection = ({ favorites, onToggleFavorite }: FavoritesSectionProps) => {
  if (favorites.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-primary fill-primary" />
        <h2 className="text-3xl font-bold">Your Favorites</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {favorites.map((name) => (
          <NameCard
            key={name}
            name={name}
            isFavorite={true}
            onToggleFavorite={() => onToggleFavorite(name)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesSection;
