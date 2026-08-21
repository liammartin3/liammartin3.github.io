import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

const projects = [
  {
    title: "Kansas Water Quality Tracker",
    blurb: "React app built on live gauge readings",
    tags: ["React", "Leaflet", "USGS Water Services API"],
    url: "https://liammartin3.github.io/kansas-water-quality/"
  },
  {
    title: "STAC Catalog",
    tags: ["pystac", "rasterio", "shapely", "S3"],
    url: "https://radiantearth.github.io/stac-browser/#/external/stac-data.s3.us-east-2.amazonaws.com/stac-catalog/catalog.json?.language=en"
  },
  {
    title: "National Parks I Have Visited",
    blurb: "Interactive park tracker",
    url: "https://liammartin3.github.io/nps-leaflet/"
  },
  {
    title: "Resume Web Map",
    blurb: "The first map I built with Leaflet",
    tags: ["Leaflet"],
    url: "https://liammartin3.github.io/map-resume"
  }
];

const notebooks = [
  {
    title: "Geopandas Wind Data Exploration",
    url: "https://github.com/liammartin3/liammartin3.github.io/blob/main/portfolio-assets/Wind.ipynb"
  },
  {
    title: "Populate Esri Feature Class Null Values with Median",
    url: "https://github.com/liammartin3/liammartin3.github.io/blob/main/portfolio-assets/NullFunction.ipynb"
  },
  {
    title: "Inserting and querying data in Postgres via GeoPandas",
    url: "https://github.com/liammartin3/liammartin3.github.io/blob/main/portfolio-assets/Postgres_GeoPandas.ipynb"
  }
];

const experience = [
  { year: "2023 — Present", role: "Geospatial Engineer", company: "Xentity Corporation" },
  { year: "2020 — 2023", role: "Geospatial Analyst", company: "Red Castle Resources" },
  { year: "2019 — 2020", role: "GIS Technician", company: "Tasman Geosciences" }
];

const education = [
  { year: "2016 — 2018", degree: "Master of Arts, Geography", school: "University of Minnesota" },
  { year: "2012 — 2016", degree: "Bachelor of Arts, Environmental Studies", school: "Regis University" }
];

const links = [
  { label: "GitHub", url: "https://github.com/liammartin3", Icon: Github },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/liamdecourseymartin/", Icon: Linkedin }
];

/* Closed contour ring: a circle whose radius is bent by a few harmonics, then
   smoothed with quadratic segments through the midpoints of adjacent samples. */
function contourRing(cx, cy, radius, seed) {
  const samples = 44;
  const points = [];

  for (let i = 0; i < samples; i++) {
    const angle = (i / samples) * Math.PI * 2;
    const bend =
      1 +
      0.13 * Math.sin(3 * angle + seed) +
      0.07 * Math.sin(5 * angle - seed * 1.6) +
      0.04 * Math.sin(8 * angle + seed * 0.4);
    points.push([
      cx + Math.cos(angle) * radius * bend * 1.45,
      cy + Math.sin(angle) * radius * bend
    ]);
  }

  const midpoint = (a, b) => `${((a[0] + b[0]) / 2).toFixed(1)} ${((a[1] + b[1]) / 2).toFixed(1)}`;

  let d = `M ${midpoint(points[samples - 1], points[0])}`;
  for (let i = 0; i < samples; i++) {
    const [x, y] = points[i];
    d += ` Q ${x.toFixed(1)} ${y.toFixed(1)} ${midpoint(points[i], points[(i + 1) % samples])}`;
  }
  return `${d} Z`;
}

const contours = [
  { cx: 1010, cy: 150, seed: 1.2, rings: 13, step: 38 },
  { cx: 140, cy: 780, seed: 3.9, rings: 10, step: 44 }
].flatMap(({ cx, cy, seed, rings, step }) =>
  Array.from({ length: rings }, (_, i) =>
    contourRing(cx, cy, 34 + i * step, seed + i * 0.11)
  )
);

function Contours() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full text-paper-edge"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {contours.map((d, idx) => (
        <path
          key={idx}
          d={d}
          stroke="currentColor"
          strokeWidth={idx % 5 === 0 ? 1.4 : 0.8}
          vectorEffect="non-scaling-stroke"
          opacity={idx % 5 === 0 ? 0.9 : 0.6}
        />
      ))}
    </svg>
  );
}

function SectionHeading({ index, children }) {
  return (
    <div className="mb-7 flex items-center gap-4 bg-paper py-1">
      <span className="font-mono text-[11px] font-medium text-accent">{index}</span>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
        {children}
      </h2>
      <span className="h-px flex-1 bg-paper-edge" />
    </div>
  );
}

function Ledger({ items }) {
  return (
    <div className="border-t border-paper-edge">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="grid gap-1 border-b border-paper-edge bg-paper py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
        >
          <span className="pt-1 font-mono text-[11px] tracking-[0.08em] text-ink-faint">
            {item.year}
          </span>
          <div>
            <h3 className="font-display text-xl">{item.title}</h3>
            <p className="mt-0.5 text-sm text-ink-muted">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Contours />

      <main className="relative mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        {/* Header */}
        <header>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
            Portfolio
          </div>
          <div className="mt-3 h-px bg-ink/80" />

          <h1 className="mt-10 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            Liam Martin
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            I am a geospatial engineer specializing in spatial data, metadata, and data
            pipelines. I am currently expanding my expertise in cloud architecture and
            cloud-native geospatial data.
          </p>
        </header>

        {/* Sample Products */}
        <section className="mt-20">
          <SectionHeading index="01">Sample Products</SectionHeading>
          <div className="border-t border-paper-edge">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 border-b border-paper-edge bg-paper py-6 transition-colors hover:bg-paper-deep"
              >
                <span className="pt-2 font-mono text-[11px] tabular-nums text-ink-faint">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl leading-snug transition-colors group-hover:text-accent">
                    {project.title}
                    <ArrowUpRight className="ml-1.5 inline h-4 w-4 -translate-y-2 text-ink-faint transition-colors group-hover:text-accent" />
                  </h3>
                  {project.blurb && (
                    <p className="mt-1.5 text-ink-muted">{project.blurb}</p>
                  )}
                  {project.tags && (
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                      {project.tags.join('  ·  ')}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Python */}
        <section className="mt-20">
          <SectionHeading index="02">Python</SectionHeading>
          <div className="border-t border-paper-edge">
            {notebooks.map((notebook, idx) => (
              <a
                key={idx}
                href={notebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-paper-edge bg-paper py-4 transition-colors hover:bg-paper-deep"
              >
                <span className="font-mono text-[11px] text-ink-faint">.ipynb</span>
                <span className="flex-1 transition-colors group-hover:text-accent">
                  {notebook.title}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-accent" />
              </a>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-20">
          <SectionHeading index="03">Professional Experience</SectionHeading>
          <Ledger
            items={experience.map((item) => ({
              year: item.year,
              title: item.role,
              subtitle: item.company
            }))}
          />
        </section>

        {/* Education */}
        <section className="mt-20">
          <SectionHeading index="04">Education</SectionHeading>
          <Ledger
            items={education.map((item) => ({
              year: item.year,
              title: item.degree,
              subtitle: item.school
            }))}
          />
        </section>

        {/* Elsewhere */}
        <section className="mt-20">
          <SectionHeading index="05">Elsewhere</SectionHeading>
          <div className="flex flex-wrap gap-x-10 gap-y-4 bg-paper py-2">
            {links.map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                <span className="border-b border-paper-edge pb-0.5 transition-colors group-hover:border-accent">
                  {label}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-ink-faint transition-colors group-hover:text-accent" />
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-24 border-t border-paper-edge bg-paper pt-6 pb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          React · Tailwind · GitHub Pages
        </footer>
      </main>
    </div>
  );
}
