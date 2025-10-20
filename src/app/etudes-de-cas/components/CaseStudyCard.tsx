import React, { useMemo } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { iconMap } from "@/config/icons";
import { toolLogos, toolNames } from "@/config/tools";

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

const getToolPosition = (index: number) => {
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

export const CaseStudyCard = React.memo(({ id, title, summary, client, tools, metrics }: CaseStudyCardProps) => {
  // Memoize shuffled tools to avoid recalculating on every render
  const shuffledTools = useMemo(() => shuffleTools(tools, id), [tools, id]);

  return (
    <Card
      variant="glass"
      className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col relative overflow-hidden"
    >
      {/* Tools logos background */}
      <div className="absolute inset-0 pointer-events-none">
        {shuffledTools.map((tool, index) => {
          const position = getToolPosition(index);
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
              <Image
                src={toolLogos[tool]}
                alt={toolNames[tool]}
                width={tool === "n8n" ? 144 : 96}
                height={tool === "n8n" ? 144 : 96}
                className="w-full h-full object-contain"
                loading="lazy"
              />
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
                <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
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
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
});

CaseStudyCard.displayName = "CaseStudyCard";
