import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CategorySelector, { Category } from "@/components/CategorySelector";
import InputSection from "@/components/InputSection";
import AdPlaceholder from "@/components/AdPlaceholder";
import ResultsSection from "@/components/ResultsSection";
import FavoritesSection from "@/components/FavoritesSection";
import { generateNames } from "@/utils/nameGenerator";

const Index = () => {
  const [keyword, setKeyword] = useState("");
  const [story, setStory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("youtube");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("nameFinder_favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("nameFinder_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleGenerate = () => {
    if (!keyword.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation delay for better UX
    setTimeout(() => {
      const names = generateNames(keyword, selectedCategory, story);
      setGeneratedNames(names);
      setIsGenerating(false);
    }, 1200);
  };

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <HeroSection />
        
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <InputSection
          keyword={keyword}
          story={story}
          onKeywordChange={setKeyword}
          onStoryChange={setStory}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />

        <AdPlaceholder />
        
        <ResultsSection
          names={generatedNames}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <FavoritesSection
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <AdPlaceholder />

        <footer className="text-center text-muted-foreground text-sm mt-16 pb-8">
          <p>© 2025 Name Finder. Generate unique names for free.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
