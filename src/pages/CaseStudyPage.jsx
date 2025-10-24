import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import caseStudiesData from "../data/caseStudiesData";

export default function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = caseStudiesData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} | Case Study`;
    }
  }, [caseStudy]);

  if (!caseStudy) {
    return <div className="p-8 text-center text-gray-500 text-xl">Case study not found.</div>;
  }

  return (
    <div className="container text-dark">
      {/* Title Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">{caseStudy.title}</h1>
        <p className="text-gray-600 text-lg md:text-xl">{caseStudy.description}</p>
      </div>

      {/* Main Image */}
      <div className="mb-12">
        <img
          src={caseStudy.mainImage}
          alt={caseStudy.title}
          className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details Text */}
      <div className="mb-12 text-gray-700 leading-relaxed text-lg md:text-xl space-y-6">
        <p>{caseStudy.detailsText}</p>
      </div>

      {/* Side-by-Side Images */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <img
          src={caseStudy.subImage1}
          alt="case study part 1"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src={caseStudy.subImage2}
          alt="case study part 2"
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Highlights / Bullet List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          {caseStudy.highlights.map((point, index) => (
            <li key={index} className="hover:text-red-500 transition-colors duration-200">
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Conclusion */}
      <div className="mb-12 text-gray-600 text-lg md:text-xl leading-relaxed">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Conclusion</h2>
        <p>{caseStudy.conclusion}</p>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <a
          href="/case-studies"
          className="btn btn-danger"
        >
          ← Back to All Case Studies
        </a>
      </div>
    </div>
  );
}
