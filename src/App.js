import React from 'react';
import { ExternalLink, MapPin, Code, Briefcase, GraduationCap, Github, Linkedin } from 'lucide-react';

export default function Portfolio() { 
  const projects = [
    {
      title: "Kansas Water Quality Tracker",
      description: "React app using Leaflet and USGS Water Services API",
      url: "https://liammartin3.github.io/kansas-water-quality/"
    },
    {
      title: "STAC Catalog",
      description: "Created using pystac, rasterio, shapely, and S3",
      url: "https://radiantearth.github.io/stac-browser/#/external/stac-data.s3.us-east-2.amazonaws.com/stac-catalog/catalog.json?.language=en"
    },
    {
      title: "National Parks I Have Visited",
      description: "Interactive park tracker",
      url: "https://liammartin3.github.io/nps-leaflet/"
    },
    {
      title: "Resume Web Map",
      description: "The first map I built with Leaflet",
      url: "https://liammartin3.github.io/map-resume"
    }
  ];

  const notebooks = [
    {
      title: "Populate Esri Feature Class Null Values with Median",
      url: "https://nbviewer.org/github/liammartin3/liammartin3.github.io/blob/main/NullFunction.ipynb"
    },
    {
      title: "Inserting and querying data in Postgres via GeoPandas",
      url: "https://nbviewer.org/github/liammartin3/liammartin3.github.io/blob/main/Postgres_GeoPandas.ipynb"
    },
    {
      title: "Geopandas Exploration",
      url: "https://nbviewer.org/github/liammartin3/liammartin3.github.io/blob/main/Wind.ipynb"
    }
  ];

  const experience = [
    { year: "2023 - Present", role: "Geospatial Developer", company: "Xentity Corporation" },
    { year: "2020 - 2023", role: "Geospatial Analyst", company: "Red Castle Resources" },
    { year: "2019 - 2020", role: "GIS Technician", company: "Tasman Geosciences" }
  ];

  const education = [
    { year: "2016 - 2018", degree: "Master of Arts, Geography", school: "University of Minnesota" },
    { year: "2012 - 2016", degree: "Bachelor of Arts, Environmental Studies", school: "Regis University" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:px-8">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            Hi, my name is Liam Martin.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
            I am a Geospatial Developer that is interested in making spatial data more accessible via metadata.
          </p>
        </header>

        {/* Sample Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-300">
            <MapPin className="w-6 h-6" />
            Sample Products
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5 hover:border-blue-400 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
              >
                <h3 className="font-semibold text-blue-300 mb-2 group-hover:text-blue-200 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Python Notebooks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-300">
            <Code className="w-6 h-6" />
            Python
          </h2>
          <div className="space-y-3">
            {notebooks.map((notebook, idx) => (
              <a
                key={idx}
                href={notebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-blue-400 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-300"></div>
                <span className="text-gray-300 group-hover:text-blue-200">{notebook.title}</span>
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
              </a>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-300">
            <Briefcase className="w-6 h-6" />
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-200">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-blue-300 font-mono">{exp.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-300">
            <GraduationCap className="w-6 h-6" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-200">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.school}</p>
                  </div>
                  <span className="text-sm text-blue-300 font-mono">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-blue-300">Links</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/liammartin3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg px-6 py-3 hover:border-purple-400 hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:text-purple-300" />
              <span className="group-hover:text-purple-200">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/liamdecourseymartin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg px-6 py-3 hover:border-blue-400 hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-300" />
              <span className="group-hover:text-blue-200">LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}