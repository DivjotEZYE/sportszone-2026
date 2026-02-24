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

const categories = ["All", "Tennis", "Hard Courts", "Bowling", "Residential", "Sports Fields"] as const;
type Category = (typeof categories)[number];

const projects = [
  { image: tennisImg, category: "Tennis" as Category, title: "Private court — North Shore" },
  { image: galleryHardcourt, category: "Hard Courts" as Category, title: "Multi-sport court — school campus" },
  { image: galleryBowling, category: "Bowling" as Category, title: "Synthetic green — club install" },
  { image: galleryResidential, category: "Residential" as Category, title: "Backyard turf — Inner West" },
  { image: gallerySportsfield, category: "Sports Fields" as Category, title: "Football pitch — community complex" },
  { image: galleryResurfacing, category: "Tennis" as Category, title: "Court resurfacing" },
  { image: galleryTennis, category: "Tennis" as Category, title: "Club court — synthetic surface" },
  { image: hardcourtImg, category: "Hard Courts" as Category, title: "Acrylic court — Rebound Ace" },
  { image: bowlingImg, category: "Bowling" as Category, title: "Bowling green upgrade" },
  { image: residentialImg, category: "Residential" as Category, title: "Pet-friendly turf" },
  { image: majorImg, category: "Sports Fields" as Category, title: "Multi-field complex" },
  { image: educationImg, category: "Sports Fields" as Category, title: "School playground surface" },
];

const GallerySection = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
            Recent Projects
          </h2>
          <p className="text-muted-foreground mt-2">
            A selection of our completed work.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((project, i) => (
            <button
              key={`${project.title}-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                <span className="text-primary-foreground text-xs font-medium">{project.title}</span>
              </div>
            </button>
          ))}
        </div>

        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full rounded-lg object-contain max-h-[80vh]"
              />
              <p className="mt-3 text-primary-foreground text-sm text-center">{filtered[lightbox].title}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-card text-foreground flex items-center justify-center text-lg hover:bg-muted transition-colors"
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
