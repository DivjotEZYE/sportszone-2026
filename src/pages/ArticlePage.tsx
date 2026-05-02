import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import QuoteCTA from "@/components/QuoteCTA";
import { articles } from "@/data/articles";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Sportszone Group`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", article.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = article.metaDescription;
        document.head.appendChild(meta);
      }
    }
    return () => {
      document.title = "Sportszone Group";
    };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/care-information" className="text-primary font-semibold hover:underline">
            ← Back to Care Information
          </Link>
        </div>
        <ContactFooter />
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    author: { "@type": "Organization", name: "Sportszone Group" },
    publisher: { "@type": "Organization", name: "Sportszone Group" },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-end pb-10 relative z-10">
          <div className="max-w-3xl">
            <Link
              to="/care-information"
              className="inline-flex items-center gap-1.5 text-primary-foreground/80 text-sm mb-4 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Care Information
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed mb-6 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Prev / Next Navigation */}
        <nav className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border flex justify-between gap-4">
          {prevArticle ? (
            <Link
              to={`/care-information/${prevArticle.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="line-clamp-1">{prevArticle.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              to={`/care-information/${nextArticle.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <span className="line-clamp-1">{nextArticle.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>

      {/* Related Articles */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            More Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/care-information/${a.slug}`}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    width={960}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 leading-snug line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA title="Talk to us about your project" context={article.title} />
      <ContactFooter />
    </div>
  );
};

export default ArticlePage;
