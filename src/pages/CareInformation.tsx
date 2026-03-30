import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "tennis-court-maintenance-issues",
    title: "Understanding and Overcoming Common Tennis Court Maintenance Issues",
    excerpt:
      "Picture the perfect game of tennis: swift movements, accurate serves, breathtaking volleys, all taking place on a flawlessly maintained court. The condition of the court plays a crucial role in enhancing the quality of the game…",
    image: "https://dev.webbird.net.au/sportszone/wp-content/uploads/2023/06/Depositphotos_31624239_L-11.jpg",
    featured: true,
  },
  {
    slug: "industry-award-winners",
    title: "Sportszone Group – Industry Award Winners",
    excerpt:
      "Each year Sports & Play Industry Association Limited (SAPIA) hold a National Conference and Industry Awards Night to support and promote members…",
    image: "https://dev.webbird.net.au/sportszone/wp-content/uploads/2023/06/Depositphotos_31624239_L-11.jpg",
  },
  {
    slug: "cost-to-build-tennis-court",
    title: "How Much Does It Cost to Build a Tennis Court?",
    excerpt:
      "Sportszone Group install tennis courts in private homes and tennis facilities throughout NSW. Building a tennis court on your property can be an exceptional investment…",
    image: "https://dev.webbird.net.au/sportszone/wp-content/uploads/2023/06/Depositphotos_31624239_L-11.jpg",
  },
  {
    slug: "tennis-court-installation-dural",
    title: "Tennis Court Installation Dural",
    excerpt:
      "Sportszone Group recently built a tennis court for a residence in Dural, New South Wales. The homeowner and family are what you would call 'tennis enthusiasts'…",
    image: "https://dev.webbird.net.au/sportszone/wp-content/uploads/2023/06/Depositphotos_31624239_L-11.jpg",
  },
  {
    slug: "soccer5s-resurfacing",
    title: "Soccer5s Synthetic Football Pitches Resurfacing",
    excerpt:
      "Sportszone Group is currently resurfacing eight 5-a-side courts and two 7-a-side courts at Soccer 5's at Tuggerah on the Central Coast…",
    image: "https://dev.webbird.net.au/sportszone/wp-content/uploads/2023/06/Depositphotos_31624239_L-11.jpg",
  },
  {
    slug: "moore-park-driving-range",
    title: "Moore Park Driving Range Turf Installation Project",
    excerpt:
      "Sportszone Group recently completed a major installation of artificial turf at Moore Park Driving Range. Working with Polytan, we installed the new surface…",
    image: "https://dev.webbird.net.au/sportszone/wp-content/uploads/2023/06/Depositphotos_31624239_L-11.jpg",
  },
];

const CareInformation = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://dev.webbird.net.au/sportszone/wp-content/uploads/2025/11/bigstock-A-Beautiful-Artificial-Lawn-In-376941517-scaled.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="container mx-auto px-4 pb-12 relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            Care Information
          </h1>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 md:p-10">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Featured
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
              {featured.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
              Read More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
          More Articles
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <article
              key={article.slug}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactFooter />
    </div>
  );
};

export default CareInformation;
