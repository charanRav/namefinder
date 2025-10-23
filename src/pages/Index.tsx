import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen py-12 px-4 relative">
      {/* Left Sidebar Ad - Desktop only */}
      <div className="fixed left-4 top-24 hidden xl:block w-[160px]">
        <GoogleAd adSlot="1234567890" adFormat="vertical" fullWidthResponsive={false} />
      </div>

      {/* Right Sidebar Ad - Desktop only */}
      <div className="fixed right-4 top-24 hidden xl:block w-[160px]">
        <GoogleAd adSlot="2345678901" adFormat="vertical" fullWidthResponsive={false} />
      </div>

      <div className="container mx-auto max-w-6xl">
        <HeroSection />
        
        {/* Ad after hero - horizontal banner */}
        <GoogleAd adSlot="3456789012" adFormat="horizontal" />
        
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
        {generatedNames.length > 0 && (
          <GoogleAd adSlot="4567890123" />
        )}
        
        <ResultsSection
          names={generatedNames}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        {/* Ad between results and favorites (only show if there are results) */}
        {generatedNames.length > 0 && favorites.length > 0 && (
          <GoogleAd adSlot="5678901234" adFormat="rectangle" />
        )}

        <FavoritesSection
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        {/* Ad after favorites (only show if there are favorites) */}
        {favorites.length > 0 && (
          <GoogleAd adSlot="6789012345" />
        )}

        <footer className="text-center text-muted-foreground text-sm mt-16 pb-8">
          <p>© 2025 Name Finder. Generate unique names for free.</p>
          <Link to="/blog" className="inline-block mt-4 text-primary hover:text-primary/80 font-medium">
            Read Our Blog →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Index;
