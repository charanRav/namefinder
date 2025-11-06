import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Name Finder | AI-Powered Business Name Generator</title>
        <meta name="description" content="Learn about Name Finder's mission to help entrepreneurs and creators find the perfect business name. We combine AI technology with creative expertise to generate unique, brandable names." />
        <meta name="keywords" content="about name finder, business naming tool, startup name generator, AI name generator, brand naming service" />
        <link rel="canonical" href="https://namefinder-nu.vercel.app/about" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Name Finder
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're on a mission to help entrepreneurs, startups, and creators discover the perfect name for their next big idea.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-12 px-4 bg-accent/20">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Name Finder was born from a simple observation: finding the right name for a business, YouTube channel, or creative project is incredibly challenging. We've all been there—staring at a blank page, trying to come up with something unique, memorable, and available.
                </p>
                <p>
                  In 2024, we set out to solve this problem by combining artificial intelligence with creative naming strategies. Our tool doesn't just generate random words—it understands context, industry trends, and what makes a name truly brandable.
                </p>
                <p>
                  Today, thousands of entrepreneurs and creators use Name Finder to discover names that capture their vision and resonate with their audience. From tech startups to gaming channels, from podcasts to e-commerce brands, we've helped bring countless ideas to life.
                </p>
              </div>
            </div>
          </section>

          {/* Our Mission & Values */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower entrepreneurs and creators worldwide by providing innovative, AI-driven tools that simplify the naming process and accelerate brand building.
                  </p>
                </div>

                <div className="bg-card rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We leverage cutting-edge AI and linguistic algorithms to generate creative, unique names that stand out in crowded markets.
                  </p>
                </div>

                <div className="bg-card rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">User-Centric</h3>
                  <p className="text-muted-foreground">
                    Every feature we build starts with understanding our users' needs. Your success is our success, and we're committed to making naming effortless.
                  </p>
                </div>

                <div className="bg-card rounded-xl shadow-lg p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Speed & Quality</h3>
                  <p className="text-muted-foreground">
                    We believe you shouldn't have to choose between speed and quality. Our tool delivers instant results without compromising on creativity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-12 px-4 bg-accent/20">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">Why Choose Name Finder?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry-Specific Intelligence</h3>
                  <p className="text-muted-foreground">
                    Our AI understands the nuances of different industries. Whether you're launching a tech startup, a gaming channel, or a podcast, we generate names that fit your niche perfectly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Domain Availability Focus</h3>
                  <p className="text-muted-foreground">
                    We know that finding a great name is only half the battle—you need an available domain too. Our integration with domain registrars helps you secure your online presence quickly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Completely Free</h3>
                  <p className="text-muted-foreground">
                    We believe everyone should have access to great naming tools. That's why Name Finder is completely free to use, with no hidden costs or premium tiers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    We're constantly refining our algorithms and adding new features based on user feedback. Your input helps us build a better tool for everyone.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Name?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of entrepreneurs who've discovered their brand identity with Name Finder.
              </p>
              <a
                href="/"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Generating Names
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
