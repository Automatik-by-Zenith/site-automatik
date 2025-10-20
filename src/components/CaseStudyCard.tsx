import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";
import openaiLogo from "@/assets/logos/openai.svg";
import n8nLogo from "@/assets/logos/n8n.png";
import googleLogo from "@/assets/logos/google.png";
import gmailLogo from "@/assets/logos/gmail.ico";
import messengerLogo from "@/assets/logos/messenger.png";
import notionLogo from "@/assets/logos/notion.png";

interface Metric {
  label: string;
  value: string;
  icon: string;
}

interface CaseStudyCardProps {
  id: string;
  title: string;
  summary: string;
  client: string;
  tools: string[];
  metrics: Metric[];
}

const iconMap = {
  Clock,
  TrendingUp,
  CheckCircle,
};

const toolLogos: Record<string, any> = {
  openai: openaiLogo,
  n8n: n8nLogo,
  google: googleLogo,
  gmail: gmailLogo,
  messenger: messengerLogo,
  notion: notionLogo,
};

const toolNames: Record<string, string> = {
  openai: "OpenAI",
  n8n: "n8n",
  google: "Google",
  gmail: "Gmail",
  messenger: "Messenger",
  notion: "Notion",
};

const getToolPosition = (index: number, total: number) => {
  const positions = [
    { top: "-5%", left: "-5%", rotate: "-15deg" },
    { top: "-5%", right: "-5%", rotate: "20deg" },
    { bottom: "-5%", left: "-5%", rotate: "10deg" },
    { bottom: "-5%", right: "-5%", rotate: "-20deg" },
    { top: "50%", left: "-10%", rotate: "25deg" },
    { top: "50%", right: "-10%", rotate: "-25deg" },
  ];
  return positions[index % positions.length];
};

const shuffleTools = (tools: string[], cardId: string) => {
  // Create a consistent hash from cardId
  const hash = cardId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Create a copy and shuffle based on hash
  const shuffled = [...tools];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (hash * (i + 1)) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const CaseStudyCard = ({ id, title, summary, client, tools, metrics }: CaseStudyCardProps) => {
  return (
    <Card
      variant="glass"
      className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden"
    >
      {/* Tools logos background */}
      <div className="absolute inset-0 pointer-events-none">
        {shuffleTools(tools, id).map((tool, index) => {
          const position = getToolPosition(index, tools.length);
          return (
            <div
              key={tool}
              className={`absolute ${tool === "n8n" ? "w-36 h-36" : "w-24 h-24"} opacity-[0.08] dark:opacity-[0.12] transition-opacity group-hover:opacity-[0.15] dark:group-hover:opacity-[0.2]`}
              style={{
                ...position,
                transform: `rotate(${position.rotate})`,
              }}
              title={toolNames[tool]}
            >
              <img src={toolLogos[tool].src || toolLogos[tool]} alt={toolNames[tool]} className="w-full h-full object-contain" />
            </div>
          );
        })}
      </div>

      <CardHeader className="relative z-10">
        <Badge className="w-fit mb-3">{client}</Badge>
        <CardTitle className="text-xl mb-3">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{summary}</p>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col justify-between relative z-10">
        <div className="grid grid-cols-1 gap-3">
          {metrics.map((metric, idx) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{metric.label}:</span>
                <span className="font-semibold ml-auto">{metric.value}</span>
              </div>
            );
          })}
        </div>
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500"
          asChild
        >
          <Link href={`/etudes-de-cas/${id}`}>
            Lire l'étude
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
