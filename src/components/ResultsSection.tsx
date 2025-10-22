import NameCard from "./NameCard";

interface ResultsSectionProps {
  names: string[];
  favorites: string[];
  onToggleFavorite: (name: string) => void;
}

const ResultsSection = ({ names, favorites, onToggleFavorite }: ResultsSectionProps) => {
  if (names.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Generated Names</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {names.map((name) => (
          <NameCard
            key={name}
            name={name}
            isFavorite={favorites.includes(name)}
            onToggleFavorite={() => onToggleFavorite(name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;
