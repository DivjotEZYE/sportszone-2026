import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/sportszone-logo-white.png";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Care Info", href: "/care-information" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHome && href.startsWith("/#")) {
      const el = document.getElementById(href.replace("/#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const overHero = !scrolled && isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto relative flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <img src={logo} alt="Sportszone Group" className="h-10 w-auto" />
          <div>
            <span className={`font-heading font-bold text-base leading-tight block ${overHero ? "text-primary-foreground" : "text-foreground"}`}>
              Sportszone
            </span>
            <span className={`text-[11px] leading-tight block ${overHero ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              Group Pty Ltd
            </span>
          </div>
        </Link>

        {/* Centered nav pill */}
        <div
          className={`hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
            overHero
              ? "bg-background/10 backdrop-blur-md border border-primary-foreground/25 rounded-full px-2 py-1.5 shadow-lg"
              : "bg-muted/60 border border-border rounded-full px-2 py-1.5"
          }`}
        >
          {navItems.map((item) =>
            item.href.startsWith("/#") && isHome ? (
              <a
                key={item.label}
                href={item.href.replace("/", "")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-full ${
                  overHero
                    ? "text-primary-foreground hover:bg-primary-foreground/10"
                    : "text-foreground hover:bg-background"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-full ${
                  overHero
                    ? "text-primary-foreground hover:bg-primary-foreground/10"
                    : "text-foreground hover:bg-background"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right side: phone + CTA */}
        <div className="hidden md:flex items-center gap-3 relative z-10">
          <a
            href="tel:1300302398"
            className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-colors ${
              overHero
                ? "text-primary-foreground/90 hover:text-primary-foreground"
                : "text-foreground hover:text-primary"
            }`}
          >
            <Phone className="w-4 h-4" />
            1300 302 398
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => document.querySelector<HTMLInputElement>('#contact input[name="name"]')?.focus(), 600);
              } else {
                window.location.href = "/#contact";
              }
            }}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-heading font-semibold text-sm border border-secondary/60 hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-full border transition-colors ${
            overHero
              ? "text-primary-foreground border-primary-foreground/30 bg-background/10 backdrop-blur-md"
              : "text-foreground border-border"
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) =>
              isHome ? (
                <a
                  key={item.label}
                  href={item.href.replace("/", "")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                if (isHome) {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => document.querySelector<HTMLInputElement>('#contact input[name="name"]')?.focus(), 600);
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="flex items-center justify-center bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-heading font-semibold"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:1300302398"
              className="flex items-center gap-2 text-foreground px-4 py-3 rounded-lg font-medium justify-center border border-border"
            >
              <Phone className="w-4 h-4" />
              1300 302 398
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
