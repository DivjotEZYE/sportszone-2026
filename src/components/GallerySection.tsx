import { useState } from "react";
import tennisReal1 from "@/assets/gallery-tennis-real1.jpg";
import tennisReal2 from "@/assets/gallery-tennis-real2.jpg";
import tennisReal3 from "@/assets/gallery-tennis-real3.jpg";
import bowlingReal1 from "@/assets/gallery-bowling-real1.jpg";
import bowlingReal2 from "@/assets/gallery-bowling-real2.jpg";
import hardcourtReal1 from "@/assets/gallery-hardcourt-real1.jpg";
import hardcourtReal2 from "@/assets/gallery-hardcourt-real2.jpg";
import hardcourtReal3 from "@/assets/gallery-hardcourt-real3.jpg";
import residentialReal1 from "@/assets/gallery-residential-real1.jpg";
import residentialReal2 from "@/assets/gallery-residential-real2.jpg";
import sportsfieldReal1 from "@/assets/gallery-sportsfield-real1.jpg";
import sportsfieldReal2 from "@/assets/gallery-sportsfield-real2.jpg";
import resurfacingReal1 from "@/assets/gallery-resurfacing-real1.jpg";
import resurfacingReal2 from "@/assets/gallery-resurfacing-real2.jpg";

const categories = ["All", "Tennis", "Hard Courts", "Bowling", "Residential", "Sports Fields", "Resurfacing"] as const;
type Category = (typeof categories)[number];

const projects = [
  { image: tennisReal1, category: "Tennis" as Category, title: "Synthetic grass tennis court" },
  { image: tennisReal2, category: "Tennis" as Category, title: "Club court installation" },
  { image: tennisReal3, category: "Tennis" as Category, title: "Private court build" },
  { image: hardcourtReal1, category: "Hard Courts" as Category, title: "Half court — acrylic surface" },
  { image: hardcourtReal2, category: "Hard Courts" as Category, title: "Multi-sport court — Aussie blue" },
  { image: hardcourtReal3, category: "Hard Courts" as Category, title: "Basketball hardcourt" },
  { image: bowlingReal1, category: "Bowling" as Category, title: "Synthetic bowling green" },
  { image: bowlingReal2, category: "Bowling" as Category, title: "Club bowling green install" },
  { image: residentialReal1, category: "Residential" as Category, title: "Backyard turf installation" },
  { image: residentialReal2, category: "Residential" as Category, title: "Residential synthetic lawn" },
  { image: sportsfieldReal1, category: "Sports Fields" as Category, title: "Aerial — sports field complex" },
  { image: sportsfieldReal2, category: "Sports Fields" as Category, title: "Allianz Stadium project" },
  { image: resurfacingReal1, category: "Resurfacing" as Category, title: "Court resurfacing in progress" },
  { image: resurfacingReal2, category: "Resurfacing" as Category, title: "Surface restoration" },
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
            Real work from real sites — across Australia.
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
