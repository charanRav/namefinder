import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CategorySelector, { Category } from "@/components/CategorySelector";
import InputSection from "@/components/InputSection";
import GoogleAd from "@/components/GoogleAd";
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
      <div className="container mx-auto relative">
        {/* Left Sidebar Ad - Hidden on mobile/tablet */}
        <div className="hidden xl:block fixed left-4 top-24 w-[160px]">
          <GoogleAd adSlot="5678901234" adFormat="vertical" fullWidthResponsive={false} />
        </div>

        {/* Right Sidebar Ad - Hidden on mobile/tablet */}
        <div className="hidden xl:block fixed right-4 top-24 w-[160px]">
          <GoogleAd adSlot="6789012345" adFormat="vertical" fullWidthResponsive={false} />
        </div>

        <div className="max-w-6xl mx-auto">
          <HeroSection />
          
          {/* Ad after hero - horizontal banner */}
          <GoogleAd adSlot="1234567890" adFormat="horizontal" />
          
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

          {/* Ad before results */}
          <GoogleAd adSlot="2345678901" />
          
          <ResultsSection
            names={generatedNames}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />

          {/* Ad between results and favorites (only show if there are results) */}
          {generatedNames.length > 0 && (
            <GoogleAd adSlot="3456789012" adFormat="rectangle" />
          )}

          <FavoritesSection
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />

          {/* Ad after favorites (only show if there are favorites) */}
          {favorites.length > 0 && (
            <GoogleAd adSlot="4567890123" />
          )}

          <footer className="text-center text-muted-foreground text-sm mt-16 pb-8">
            <p>© 2025 Name Finder. Generate unique names for free.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
