// SEO long-form content for each service page.
// Written to target high-intent local + commercial keywords for
// tennis court construction, sports surfacing, synthetic turf, etc.

export interface ServiceSEOSection {
  heading: string;
  body: string; // plain text or simple HTML (no scripts)
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSEOContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  longIntro: string;
  sections: ServiceSEOSection[];
  faqs: ServiceFAQ[];
}

export const serviceSEO: Record<string, ServiceSEOContent> = {
  "tennis-courts": {
    metaTitle: "Tennis Court Construction & Resurfacing Sydney | Sportszone Group",
    metaDescription:
      "Tennis court construction, resurfacing & repairs across Sydney and Australia. Rebound Ace acrylic, synthetic grass & clay courts. Free quote — call 1300 302 398.",
    keywords: [
      "tennis court construction Sydney",
      "tennis court resurfacing",
      "Rebound Ace tennis court",
      "tennis court builders Australia",
      "synthetic grass tennis court",
      "tennis court repair Sydney",
      "tennis court cost",
    ],
    longIntro:
      "Sportszone Group has been building and resurfacing tennis courts across Sydney and Australia for more than 25 years. From single backyard courts to club and council facilities, our team delivers durable, all-weather playing surfaces using proven systems including Rebound Ace acrylic, cushioned acrylic, synthetic grass and clay. Every court is engineered for Australian conditions — UV-stable, fast-draining and built to last.",
    sections: [
      {
        heading: "Tennis court construction in Sydney",
        body: "A new tennis court is a long-term investment, and the base is everything. We start with a full site inspection covering drainage, slope, soil type, orientation and access. From there we manage earthworks, laying a stable engineered base, perimeter drainage and the final playing surface. Most residential courts take 4–6 weeks from site clear to first hit, depending on weather and approvals.",
      },
      {
        heading: "Tennis court resurfacing & repairs",
        body: "Acrylic tennis surfaces typically last 8–12 years before they need resurfacing. Tell-tale signs include faded colour, hairline cracks, ponding water, slippery patches and worn line markings. We offer pressure cleaning, crack repair, full acrylic re-coats and complete surface replacement. Where the base is sound, a re-coat can restore play quality at a fraction of the cost of a new build.",
      },
      {
        heading: "Surface options: which is right for you?",
        body: "Rebound Ace cushioned acrylic is the most popular choice for Australian clubs and homes — it's medium-paced, easy on the joints and ITF-rated. Hard acrylic suits high-traffic council and school courts. Synthetic grass with sand infill is a softer, lower-maintenance option for backyards and is forgiving on ageing knees. We'll walk you through the trade-offs at quoting stage.",
      },
      {
        heading: "How much does a tennis court cost?",
        body: "A full new build (base, fencing, surface, lighting, line marking) for a standard residential court typically ranges between $65,000 and $120,000 depending on site conditions, surface choice and inclusions. A standard acrylic resurface usually sits between $12,000 and $22,000. We provide itemised quotes so you can see exactly where the money goes.",
      },
      {
        heading: "Areas we service",
        body: "Sportszone Group is based in Sydney and services the entire NSW metro area including the Hills District, Northern Beaches, Eastern Suburbs, Inner West, Sutherland Shire and Western Sydney. We also travel for regional and interstate projects — past work spans Brisbane, Melbourne, Canberra and international venues including Japan, Macau and Mauritius.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a new tennis court?",
        answer:
          "Most residential tennis courts take 4–6 weeks from site clearing to ready-to-play, weather permitting. Larger club or council projects with multiple courts and lighting can take 8–14 weeks.",
      },
      {
        question: "How often should a tennis court be resurfaced?",
        answer:
          "An acrylic tennis court usually needs a full resurface every 8–12 years. A lighter re-coat or repaint can be done at the 4–6 year mark to keep the surface looking fresh and playing well.",
      },
      {
        question: "Do you build ITF-rated competition courts?",
        answer:
          "Yes. We install ITF-classified Rebound Ace systems for clubs and competition venues, with surface speed and bounce certified to international standards.",
      },
    ],
  },

  "hard-courts": {
    metaTitle: "Hard Court & Multi-Sport Court Builders | Acrylic Surfacing Australia",
    metaDescription:
      "Acrylic hard court construction for netball, basketball, futsal & multi-sport. Rebound Ace surfaces, custom colours & line marking. Schools, clubs, councils.",
    keywords: [
      "hard court construction",
      "multi-sport court builders",
      "acrylic basketball court",
      "netball court resurfacing",
      "futsal court construction",
      "multi-purpose court Australia",
    ],
    longIntro:
      "Hard courts are the workhorses of Australian sport — netball, basketball, futsal, volleyball and multi-sport activity all happen on acrylic. Sportszone Group designs, builds and resurfaces hard courts for schools, clubs, councils and developers. Our Rebound Ace acrylic systems are tough, weather-resistant and available in a wide range of colours.",
    sections: [
      {
        heading: "Multi-sport court design",
        body: "One court can serve four or five sports if the layout and line marking are planned properly. We design layouts that accommodate netball, basketball, futsal, volleyball and tennis on the same surface, using contrasting line colours for clarity. Popular for schools and councils maximising small footprints.",
      },
      {
        heading: "Acrylic surfacing for high-use environments",
        body: "Acrylic is ideal for high-traffic courts because it's UV-stable, slip-resistant when wet and fast to dry. We apply multiple coats including a textured finish layer that holds line markings sharply for years. Surfaces come in standard greens, blues and reds, or fully custom colours to match school or club branding.",
      },
      {
        heading: "Net ball, basketball & futsal court costs",
        body: "A new full-size netball court typically costs $55,000–$95,000 including base, surfacing, line marking and posts. A basketball half-court for a school or backyard usually runs $25,000–$45,000. Futsal-spec courts with appropriate fencing and goals start at around $80,000.",
      },
      {
        heading: "Resurfacing existing hard courts",
        body: "If your court has cracks, fading or ponding, a resurface can restore safe play and good aesthetics at a fraction of new-build cost. We pressure clean, repair structural cracks, re-coat with acrylic and re-line for whichever sports you play. Most resurface jobs are completed within a week.",
      },
    ],
    faqs: [
      {
        question: "Can one court be lined for multiple sports?",
        answer:
          "Yes. We routinely line courts for netball, basketball, futsal and tennis on the same surface using colour-coded markings, with the primary sport in white and secondary sports in contrasting colours.",
      },
      {
        question: "What colours can I choose?",
        answer:
          "Standard Rebound Ace colours include green, blue, red, terracotta and grey, but we can mix custom colours to match school or club branding. Two-tone in/out designs are popular.",
      },
    ],
  },

  "education": {
    metaTitle: "School Sports Surfaces & Playgrounds | Synthetic Turf Australia",
    metaDescription:
      "Safe, durable school playgrounds, multi-sport courts, synthetic turf fields & cricket nets. Compliant with Australian safety standards. Built during school holidays.",
    keywords: [
      "school playground surfaces",
      "school sports court construction",
      "synthetic turf school field",
      "cricket practice nets school",
      "rubber playground surface Australia",
      "education sports surfacing",
    ],
    longIntro:
      "Schools and universities have unique requirements: surfaces must be safe, low-maintenance and tough enough to handle hundreds of students every day. Sportszone Group has built playgrounds, multi-sport courts, synthetic turf fields and cricket nets for primary, secondary and tertiary education facilities across NSW.",
    sections: [
      {
        heading: "Playground surfaces that meet AS 4422",
        body: "Our wet-pour rubber and synthetic turf playground surfaces are tested to AS 4422 for impact attenuation and critical fall height. We design the surface depth around your play equipment heights so kids land safely. Available in a wide range of colours and creative patterns.",
      },
      {
        heading: "Synthetic turf sports fields",
        body: "Synthetic turf gives schools a usable sports field 365 days a year, with no watering, no mowing and no muddy patches. Modern systems look and play like real grass and can be lined for AFL, soccer, rugby, cricket or multi-sport use.",
      },
      {
        heading: "Multi-sport courts for schools",
        body: "Acrylic multi-sport courts are the most cost-effective way to give students access to netball, basketball, futsal and tennis on a single surface. We work around your timetable and complete most jobs during term breaks to avoid disruption.",
      },
      {
        heading: "Cricket practice nets & specialist surfaces",
        body: "We install in-ground and modular cricket practice nets with synthetic pitches, plus long-jump runways, athletics tracks and softfall surfaces. All work is carried out by experienced installers familiar with school site requirements.",
      },
    ],
    faqs: [
      {
        question: "Can the work be done during school holidays?",
        answer:
          "Yes — we plan most school projects around term dates so the surface is ready for use when students return. Larger projects may need staged delivery across multiple breaks.",
      },
      {
        question: "Do your playground surfaces meet Australian safety standards?",
        answer:
          "All our playground surfaces are designed and installed to comply with AS 4422 for impact attenuation, with documented critical fall heights matched to your equipment.",
      },
    ],
  },

  "bowling-greens": {
    metaTitle: "Synthetic Bowling Green Installation | Dry Max Pro & Masters Pro",
    metaDescription:
      "Synthetic bowling green construction & conversion across Australia. Dry Max Pro and Masters Pro systems approved by Bowls Australia. Free site assessment.",
    keywords: [
      "synthetic bowling green",
      "Dry Max Pro bowling green",
      "Masters Pro bowling green",
      "bowling green installation Australia",
      "convert grass to synthetic bowling green",
      "bowls club resurfacing",
    ],
    longIntro:
      "Synthetic bowling greens have transformed the sport in Australia. They play consistently in any weather, drain in minutes, and remove the high cost and water use of natural turf. Sportszone Group is an accredited installer of Dry Max Pro and Masters Pro — the two leading synthetic bowls systems in Australia.",
    sections: [
      {
        heading: "Why convert from natural to synthetic?",
        body: "A natural green needs daily mowing, weekly fertilising, frequent topdressing and constant watering. A synthetic green needs an occasional brush. Most clubs recover the conversion cost within 5–7 years through reduced maintenance, water and labour bills, while gaining year-round play.",
      },
      {
        heading: "The Dry Max Pro system",
        body: "Dry Max Pro is a needle-punched synthetic carpet engineered for fast, consistent bowls play. It's approved by Bowls Australia and used at Pennant level across the country. The surface drains immediately, eliminating washouts and rain delays.",
      },
      {
        heading: "Construction & installation process",
        body: "Conversion involves stripping the existing green, laser-grading the base to within ±3 mm, installing engineered drainage, laying a porous concrete or compacted aggregate sub-base, then bonding the carpet seamlessly across the playing area. New ditches, banks, edging and shade structures are completed at the same time.",
      },
      {
        heading: "Maintenance & lifespan",
        body: "A well-installed synthetic bowls carpet lasts 10–15 years. Maintenance is limited to occasional brushing, light pressure cleaning and an annual inspection. We offer maintenance contracts for clubs that prefer a hands-off approach.",
      },
    ],
    faqs: [
      {
        question: "How long does a green conversion take?",
        answer:
          "A standard 40m x 40m bowling green conversion takes 6–10 weeks depending on weather, drainage works and access. We can stage the work to keep one green open if the club has multiple rinks.",
      },
      {
        question: "Are synthetic greens accepted for Pennants?",
        answer:
          "Yes. Both Dry Max Pro and Masters Pro are approved by Bowls Australia and are used by Pennant clubs across all states.",
      },
    ],
  },

    metaTitle: "Major Sports Facility Construction | Council & Commercial Projects",
    metaDescription:
      "Large-scale sports facility construction across Australia. Multi-court complexes, athletics tracks, sports fields. Olympic-grade experience since 2000.",
    keywords: [
      "sports facility construction Australia",
      "council sports complex builders",
      "athletics track construction",
      "multi court complex installation",
      "commercial sports surfacing",
      "Olympic sports facility builders",
    ],
    longIntro:
      "Sportszone Group has delivered major sporting infrastructure for councils, developers, schools and elite venues — including work for the Sydney 2000 Olympic Games. We project-manage end-to-end: design coordination, approvals, civil works, surfacing, lighting and handover.",
    sections: [
      {
        heading: "Council & community sports facilities",
        body: "We build the multi-court complexes, sports fields and community precincts that local councils rely on. Our team works alongside council engineers, landscape architects and consultants to deliver projects that meet sport-specific compliance requirements and stay within community budgets.",
      },
      {
        heading: "Athletics tracks & specialist surfaces",
        body: "From training tracks to IAAF-spec competition surfaces, we install full polyurethane athletics tracks, throws and jumps facilities. We coordinate with sport-specific consultants to ensure surface gradients, run-up distances and drainage all meet competition standards.",
      },
      {
        heading: "Olympic & international experience",
        body: "Our team has worked on the Sydney 2000 Olympic triathlon track and hockey pitch, plus international sports projects in Japan, Macau and Mauritius. That depth of experience translates directly into smoother delivery on every commercial job we take on.",
      },
      {
        heading: "Project management & coordination",
        body: "Major projects involve dozens of trades and stakeholders. We provide a single point of accountability — programming, OH&S, subcontractor management, quality control and progressive client reporting — so your project stays on time and on budget.",
      },
    ],
    faqs: [
      {
        question: "Do you tender for council projects?",
        answer:
          "Yes — we regularly tender for council, government and education department projects across NSW and interstate. We're set up with the insurances, prequalifications and reporting that public-sector projects require.",
      },
      {
        question: "Can you handle design as well as construction?",
        answer:
          "Yes. We can take a project from concept design through to handover, or work alongside your appointed architect and engineer. Either way you get a single point of contact for delivery.",
      },
    ],
  },
};
