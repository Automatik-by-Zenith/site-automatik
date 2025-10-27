import { TimeSavingTask } from "@/types/components";
import {
  MessageSquare,
  Star,
  FileText,
} from "lucide-react";

export const TIME_SAVING_TASKS: TimeSavingTask[] = [
  {
    id: "messages",
    icon: MessageSquare,
    title: "Répondre aux messages",
    description: "Messages clients, demandes de réservation, questions générales",
    estimatedTime: 5, // 5 minutes par message
    frequency: 20, // 20 messages par jour
  },
  {
    id: "reviews",
    icon: Star,
    title: "Répondre aux avis",
    description:
      "Avis Google, TripAdvisor, Booking.com - Gestion de la réputation en ligne",
    estimatedTime: 8, // 8 minutes par avis
    frequency: 4, // 4 avis par jour
  },
  {
    id: "quotes",
    icon: FileText,
    title: "Éditer des devis",
    description: "Création et modification de devis pour événements, séminaires",
    estimatedTime: 30, // 30 minutes par devis
    frequency: 2, // 2 devis par jour
  },
];

export const DEFAULT_HOURLY_COST = 30; // Coût horaire par défaut en euros
