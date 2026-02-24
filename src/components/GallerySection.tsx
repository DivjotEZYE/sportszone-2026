import { useState } from "react";
import galleryBowling from "@/assets/gallery-bowling.jpg";
import galleryHardcourt from "@/assets/gallery-hardcourt.jpg";
import galleryResidential from "@/assets/gallery-residential.jpg";
import galleryTennis from "@/assets/gallery-tennis2.jpg";
import gallerySportsfield from "@/assets/gallery-sportsfield.jpg";
import galleryResurfacing from "@/assets/gallery-resurfacing.jpg";
import tennisImg from "@/assets/service-tennis.jpg";
import bowlingImg from "@/assets/service-bowling.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import majorImg from "@/assets/service-major.jpg";
import hardcourtImg from "@/assets/service-hardcourt.jpg";
import educationImg from "@/assets/service-education.jpg";

const categories = [
  "All",
  "Tennis Courts",
  "Hard Courts",
  "Bowling Greens",
  "Residential Turf",
  "Sports Fields",
  "Resurfacing",
] as const;

type Category = (typeof categories)[number];

const projects = [
  { image: tennisImg, category: "Tennis Courts" as Category, title: "Private Tennis Court — Sydney North Shore" },
  { image: galleryHardcourt, category: "Hard Courts" as Category, title: "Multi-Sport Hard Court — School Campus" },
  { image: galleryBowling, category: "Bowling Greens" as Category, title: "Synthetic Bowling Green — Club Installation" },
  { image: galleryResidential, category: "Residential Turf" as Category, title: "Backyard Turf — Modern Home, Inner West" },
  { image: gallerySportsfield, category: "Sports Fields" as Category, title: "Football Pitch — Community Sports Complex" },
  { image: galleryResurfacing, category: "Resurfacing" as Category, title: "Court Resurfacing — Before & After" },
  { image: galleryTennis, category: "Tennis Courts" as Category, title: "Club Tennis Court — Synthetic Surface" },
  { image: hardcourtImg, category: "Hard Courts" as Category, title: "Acrylic Hard Court — Rebound Ace System" },
  { image: bowlingImg, category: "Bowling Greens" as Category, title: "Bowling Green Upgrade — Regional Club" },
  { image: residentialImg, category: "Residential Turf" as Category, title: "Residential Lawn — Pet-Friendly Turf" },
  { image: majorImg, category: "Sports Fields" as Category, title: "Major Project — Multi-Field Complex" },
  { image: educationImg, category: "Sports Fields" as Category, title: "School Playground — Safe Synthetic Surface" },
];

const GallerySection = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="gallery" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Work</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Project Gallery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Browse our completed projects across tennis courts, bowling greens, sports fields and more.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <button
              key={`${project.title}-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div className="text-left">
                  <span className="text-xs font-medium text-secondary">{project.category}</span>
                  <h3 className="text-primary-foreground font-heading font-semibold text-sm mt-1">{project.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full rounded-xl object-contain max-h-[80vh]"
              />
              <div className="mt-4 text-center">
                <span className="text-xs text-secondary font-medium">{filtered[lightbox].category}</span>
                <h3 className="text-primary-foreground font-heading font-semibold mt-1">{filtered[lightbox].title}</h3>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-card text-foreground flex items-center justify-center font-bold text-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
