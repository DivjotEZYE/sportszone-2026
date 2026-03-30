import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";
import heroImage from "@/assets/article-hero-care.jpg";

const CareInformation = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  useEffect(() => {
    document.title = "Care Information & Maintenance Tips | Sportszone Group";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Expert care information, maintenance tips, and project case studies from Sportszone Group. Keep your sports surfaces in top condition."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Expert care information, maintenance tips, and project case studies from Sportszone Group. Keep your sports surfaces in top condition.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <img
          src={heroImage}
          alt="Synthetic sports turf and facilities across Australia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="container mx-auto px-4 pb-12 relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            Care Information
          </h1>
          <p className="text-primary-foreground/80 mt-2 max-w-xl text-lg">
            Maintenance tips, project case studies, and industry insights.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-16">
        <Link
          to={`/care-information/${featured.slug}`}
          className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg border border-border group"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm group-hover:bg-primary/90 transition-colors">
              Read More <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* Article Grid */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
          More Articles
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Link
              key={article.slug}
              to={`/care-information/${article.slug}`}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={960}
                  height={640}
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
            </Link>
          ))}
        </div>
      </section>

      <ContactFooter />
    </div>
  );
};

export default CareInformation;
