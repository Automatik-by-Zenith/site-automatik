import { caseStudies } from "@/data/caseStudies/index";
import { EtudeDeCasDetail } from "./EtudeDeCasDetail";

// Generate static params for all case studies
export function generateStaticParams() {
  return caseStudies.map((study) => ({
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
