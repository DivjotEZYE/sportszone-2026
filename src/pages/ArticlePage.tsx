import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import QuoteCTA from "@/components/QuoteCTA";
import { articles } from "@/data/articles";
import { ArrowLeft, ArrowRight, Clock, ChevronRight, Share2, Phone } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  const readingTime = useMemo(() => {
    if (!article) return 0;
    const words = article.content.join(" ").split(/\s+/).length;
    return Math.max(1, Math.round(words / 220));
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} | Sportszone Group`;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", article.metaDescription);
    setMeta("og:title", article.title, "property");
    setMeta("og:description", article.metaDescription, "property");
    setMeta("og:type", "article", "property");
    setMeta("og:image", article.image, "property");
    setMeta("twitter:card", "summary_large_image");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/care-information/${article.slug}`;

    const ldId = "article-jsonld";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        image: article.image,
        author: { "@type": "Organization", name: "Sportszone Group" },
        publisher: {
          "@type": "Organization",
          name: "Sportszone Group",
          logo: { "@type": "ImageObject", url: `${window.location.origin}/favicon.ico` },
        },
        mainEntityOfPage: window.location.href,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin + "/" },
          { "@type": "ListItem", position: 2, name: "Care Information", item: window.location.origin + "/care-information" },
          { "@type": "ListItem", position: 3, name: article.title, item: window.location.href },
        ],
      },
    ]);
    document.head.appendChild(ld);
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, url: window.location.href });
      } catch {
        /* cancelled */
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container mx-auto px-4 pb-12 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <ChevronRight className="w-3 h-3" />
              <li><Link to="/care-information" className="hover:text-primary-foreground transition-colors">Care Information</Link></li>
              <ChevronRight className="w-3 h-3" />
              <li className="text-primary-foreground/90 line-clamp-1 max-w-[200px]">{article.title}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-secondary uppercase tracking-[0.2em] mb-3">
              Sportszone Group Insights
            </p>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] tracking-tight">
              {article.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-primary-foreground/80 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readingTime} min read
              </span>
              <span className="w-px h-4 bg-primary-foreground/30" />
              <span>By Sportszone Group</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body — 2 column with sticky aside */}
      <article className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
          {/* Main column */}
          <div className="max-w-2xl">
            {/* Lead paragraph */}
            <p className="text-xl md:text-2xl font-heading font-medium text-foreground leading-snug mb-8">
              {article.content[0]}
            </p>

            <div className="space-y-6">
              {article.content.slice(1).map((paragraph, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Inline CTA card */}
            <div className="mt-12 rounded-xl border border-border bg-accent/40 p-6 md:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                Need expert advice?
              </p>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2 leading-tight">
                Talk to the Sportszone team about your project
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                25+ years building courts and synthetic surfaces across Australia.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#quote"
                  onClick={(e) => { e.preventDefault(); document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:1300302398"
                  className="inline-flex items-center gap-1.5 border border-border text-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-card transition-colors"
                >
                  <Phone className="w-4 h-4" /> 1300 302 398
                </a>
              </div>
            </div>

            {/* Prev / Next */}
            <nav className="mt-12 pt-8 border-t border-border grid sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  to={`/care-information/${prevArticle.slug}`}
                  className="group rounded-lg border border-border p-4 hover:border-primary/40 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </span>
                  <p className="mt-1 font-heading font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {prevArticle.title}
                  </p>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link
                  to={`/care-information/${nextArticle.slug}`}
                  className="group rounded-lg border border-border p-4 hover:border-primary/40 transition-colors text-right"
                >
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 justify-end">
                    Next <ArrowRight className="w-3 h-3" />
                  </span>
                  <p className="mt-1 font-heading font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {nextArticle.title}
                  </p>
                </Link>
              ) : <div />}
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Share
              </p>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Share2 className="w-4 h-4" /> Share this article
              </button>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Latest articles
              </p>
              <ul className="space-y-3">
                {relatedArticles.map((a) => (
                  <li key={a.slug}>
                    <Link to={`/care-information/${a.slug}`} className="group block">
                      <p className="font-heading font-semibold text-sm text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {a.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/care-information" className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:gap-2 transition-all">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-xl bg-primary p-6 text-primary-foreground">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary mb-2">
                Free quote
              </p>
              <h3 className="font-heading font-bold text-lg leading-tight mb-3">
                Planning a court or facility?
              </h3>
              <a
                href="#quote"
                onClick={(e) => { e.preventDefault(); document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" }); }}
                className="block w-full text-center bg-secondary text-secondary-foreground px-4 py-2.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Request quote
              </a>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-muted/40 border-t border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-2">Keep reading</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Related articles
              </h2>
            </div>
            <Link to="/care-information" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
              All articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/care-information/${a.slug}`}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
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
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="quote">
        <QuoteCTA title="Talk to us about your project" context={article.title} />
      </div>
      <ContactFooter />
    </div>
  );
};

export default ArticlePage;
