import caseStudiesData from "@/data/caseStudies.json";
import { EtudeDeCasDetailClient } from "./EtudeDeCasDetailClient";

// Generate static params for static export
export function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    id: study.id,
  }));
}

export default function EtudeDeCasDetailPage() {
  return <EtudeDeCasDetailClient />;
}
