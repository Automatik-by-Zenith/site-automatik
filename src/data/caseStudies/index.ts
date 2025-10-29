import { CaseStudy } from "@/types/caseStudy";
import { hotelAvisGoogleIA } from "./hotel-avis-google-ia";
import { hotelAgentReceptionniste } from "./hotel-agent-receptionniste-messenger";
import { devisInstantenesIA } from "./devis-instantanes-ia";
import { triageEmailsIA } from "./triage-emails-ia";
import { fermageNotionAutomatisation } from "./fermage-notion-automatisation";

export const caseStudies: CaseStudy[] = [
  hotelAvisGoogleIA,
  hotelAgentReceptionniste,
  devisInstantenesIA,
  triageEmailsIA,
  fermageNotionAutomatisation,
];

export {
  hotelAvisGoogleIA,
  hotelAgentReceptionniste,
  devisInstantenesIA,
  triageEmailsIA,
  fermageNotionAutomatisation,
};
