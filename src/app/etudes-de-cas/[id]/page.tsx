import caseStudiesData from "@/data/caseStudies.json";
import { EtudeDeCasDetail } from "./EtudeDeCasDetail";

// Generate static params for all case studies
export function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    id: study.id,
  }));
}

export default function EtudeDeCasDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <EtudeDeCasDetail params={params} />;
}
