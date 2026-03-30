import articleTennisMaintenance from "@/assets/article-tennis-maintenance.jpg";
import articleIndustryAwards from "@/assets/article-industry-awards.jpg";
import articleCostTennis from "@/assets/article-cost-tennis.jpg";
import articleDuralInstall from "@/assets/article-dural-install.jpg";
import articleSoccer5s from "@/assets/article-soccer5s.jpg";
import articleMoorePark from "@/assets/article-moore-park.jpg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  metaDescription: string;
  content: string[];
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "tennis-court-maintenance-issues",
    title: "Understanding and Overcoming Common Tennis Court Maintenance Issues",
    excerpt:
      "Picture the perfect game of tennis: swift movements, accurate serves, breathtaking volleys, all taking place on a flawlessly maintained court. The condition of the court plays a crucial role in enhancing the quality of the game…",
    image: articleTennisMaintenance,
    metaDescription:
      "Learn about common tennis court maintenance issues and how to overcome them. Expert advice from Sportszone Group on keeping your court in top condition.",
    content: [
      "Picture the perfect game of tennis: swift movements, accurate serves, breathtaking volleys, all taking place on a flawlessly maintained court. The condition of the court plays a crucial role in enhancing the quality of the game and ensuring the safety of the players.",
      "Regular maintenance of your tennis court is essential, regardless of the surface type. Synthetic grass courts require brushing to keep fibres upright and infill evenly distributed. Hard courts benefit from pressure washing to remove moss, algae, and general dirt build-up.",
      "Drainage issues are among the most common problems we encounter. Standing water can damage the sub-base and create dangerous playing conditions. Ensuring your court has proper drainage channels and that they remain clear of debris is fundamental to longevity.",
      "Surface cracking on acrylic courts can be caused by ground movement, tree root intrusion, or simply age. Early intervention with crack repair prevents small issues from becoming costly full resurfacing jobs.",
      "At Sportszone Group, we offer tailored maintenance programs to suit every court type and budget. Our team can assess your court's condition and recommend the most effective plan to keep it performing at its best.",
    ],
    featured: true,
  },
  {
    slug: "industry-award-winners",
    title: "Sportszone Group – Industry Award Winners",
    excerpt:
      "Each year Sports & Play Industry Association Limited (SAPIA) hold a National Conference and Industry Awards Night to support and promote members…",
    image: articleIndustryAwards,
    metaDescription:
      "Sportszone Group recognised as industry award winners by SAPIA. Learn about our commitment to excellence in sports surface installation.",
    content: [
      "Each year Sports & Play Industry Association Limited (SAPIA) hold a National Conference and Industry Awards Night to support and promote members and recognise outstanding achievements in the sports and play industry.",
      "Sportszone Group is proud to have been recognised at these prestigious awards on multiple occasions, reflecting our commitment to quality workmanship and innovation in sports surface construction.",
      "These awards validate the hard work and dedication of our entire team — from the initial consultation through to project completion. Every project we undertake is approached with the same level of professionalism and attention to detail.",
      "Being part of SAPIA ensures that we stay at the forefront of industry standards, best practices, and emerging technologies in sports surface construction.",
    ],
  },
  {
    slug: "cost-to-build-tennis-court",
    title: "How Much Does It Cost to Build a Tennis Court?",
    excerpt:
      "Sportszone Group install tennis courts in private homes and tennis facilities throughout NSW. Building a tennis court on your property can be an exceptional investment…",
    image: articleCostTennis,
    metaDescription:
      "Find out how much it costs to build a tennis court in Australia. Sportszone Group breaks down pricing for synthetic grass, hard court, and acrylic surfaces.",
    content: [
      "Sportszone Group install tennis courts in private homes and tennis facilities throughout NSW. Building a tennis court on your property can be an exceptional investment, adding significant value to your home while providing years of enjoyment.",
      "The cost of building a tennis court varies depending on several factors: the type of surface (synthetic grass, acrylic, or cushioned acrylic), site preparation requirements, drainage needs, fencing, lighting, and landscaping.",
      "A standard synthetic grass tennis court typically ranges from $75,000 to $120,000 for a private residence. Acrylic hard courts can range from $60,000 to $100,000. These figures include base construction, surface installation, fencing, and a net post system.",
      "Site preparation can significantly affect the total cost. Sloping blocks may require retaining walls and additional excavation. Rocky ground or areas with poor drainage will need extra engineering solutions.",
      "At Sportszone Group, we provide detailed quotes tailored to your specific site conditions and preferences. We guide you through every step of the process to ensure you get the best court for your budget.",
    ],
  },
  {
    slug: "tennis-court-installation-dural",
    title: "Tennis Court Installation Dural",
    excerpt:
      "Sportszone Group recently built a tennis court for a residence in Dural, New South Wales. The homeowner and family are what you would call 'tennis enthusiasts'…",
    image: articleDuralInstall,
    metaDescription:
      "See our tennis court installation project in Dural, NSW. Sportszone Group delivers premium synthetic grass tennis courts for residential properties.",
    content: [
      "Sportszone Group recently built a tennis court for a residence in Dural, New South Wales. The homeowner and family are what you would call 'tennis enthusiasts', and they wanted a court that would deliver a professional playing experience right in their backyard.",
      "The project involved full site preparation including excavation, compaction, and installation of a comprehensive drainage system to handle the area's rainfall patterns.",
      "We installed a premium synthetic grass surface with a sand and rubber infill system, providing excellent ball bounce consistency and a comfortable playing surface that reduces strain on joints.",
      "The finished court includes full fencing, LED lighting for evening play, and landscaping that integrates seamlessly with the property's existing gardens. The family now enjoys year-round tennis without leaving home.",
    ],
  },
  {
    slug: "soccer5s-resurfacing",
    title: "Soccer5s Synthetic Football Pitches Resurfacing",
    excerpt:
      "Sportszone Group is currently resurfacing eight 5-a-side courts and two 7-a-side courts at Soccer 5's at Tuggerah on the Central Coast…",
    image: articleSoccer5s,
    metaDescription:
      "Sportszone Group resurfaces synthetic football pitches at Soccer5s Tuggerah. Learn about our large-scale commercial sports surface projects.",
    content: [
      "Sportszone Group is currently resurfacing eight 5-a-side courts and two 7-a-side courts at Soccer 5's at Tuggerah on the Central Coast. This is a major commercial resurfacing project that demonstrates our capability to handle large-scale installations.",
      "The existing surfaces had reached the end of their useful life after years of heavy use. Our team carefully removed the old turf, assessed the sub-base condition, and made necessary repairs before installing the new surfaces.",
      "The new synthetic turf features the latest in fibre technology, providing improved durability, consistent ball roll, and enhanced player safety. The infill system was also upgraded to meet current industry standards.",
      "Projects of this scale require careful scheduling to minimise downtime for the business. We worked closely with the Soccer 5's management team to stage the works and keep as many courts operational as possible throughout the project.",
    ],
  },
  {
    slug: "moore-park-driving-range",
    title: "Moore Park Driving Range Turf Installation Project",
    excerpt:
      "Sportszone Group recently completed a major installation of artificial turf at Moore Park Driving Range. Working with Polytan, we installed the new surface…",
    image: articleMoorePark,
    metaDescription:
      "Sportszone Group completes artificial turf installation at Moore Park Driving Range, Sydney. Partnering with Polytan for premium sports surfaces.",
    content: [
      "Sportszone Group recently completed a major installation of artificial turf at Moore Park Driving Range. Working with Polytan, we installed the new surface to replace the ageing natural turf tee line area.",
      "Moore Park is one of Sydney's most popular driving ranges, and the switch to synthetic turf ensures a consistent hitting surface year-round, regardless of weather conditions or usage levels.",
      "The installation required precision work to ensure correct pile direction, seamless joins, and proper drainage integration. The result is a surface that looks and performs like natural turf but with dramatically reduced maintenance requirements.",
      "This project highlights our strong partnership with leading surface manufacturers like Polytan and our ability to deliver high-profile commercial installations to the highest standards.",
    ],
  },
];
