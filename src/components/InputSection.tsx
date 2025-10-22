import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Sparkles } from "lucide-react";

interface InputSectionProps {
  keyword: string;
  story: string;
  onKeywordChange: (value: string) => void;
  onStoryChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const InputSection = ({
  keyword,
  story,
  onKeywordChange,
  onStoryChange,
  onGenerate,
  isGenerating,
}: InputSectionProps) => {
  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="bg-card/60 backdrop-blur-md rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border/50">
        <div className="space-y-6">
          <div>
            <label htmlFor="keyword" className="block text-sm font-medium mb-2">
              Enter a Keyword
            </label>
            <Input
              id="keyword"
              placeholder="e.g., tech, fitness, style..."
              value={keyword}
              onChange={(e) => onKeywordChange(e.target.value)}
              className="h-12"
            />
          </div>
          
          <div>
            <label htmlFor="story" className="block text-sm font-medium mb-2">
              Tell us your story or theme (optional)
            </label>
            <Textarea
              id="story"
              placeholder="Share your vision, backstory, or what makes your brand unique..."
              value={story}
              onChange={(e) => onStoryChange(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>

          <Button
            onClick={onGenerate}
            disabled={!keyword.trim() || isGenerating}
            className="w-full h-12 text-lg gap-2 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            size="lg"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Names
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
