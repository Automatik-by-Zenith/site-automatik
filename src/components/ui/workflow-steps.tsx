import { Card, CardContent } from "./card";
import { WorkflowStep } from "@/types/caseStudy";

interface WorkflowStepsProps {
  steps: WorkflowStep[];
}

export const WorkflowSteps = ({ steps }: WorkflowStepsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step, idx) => (
        <Card key={idx} variant="glass" className="relative overflow-hidden">
          <CardContent className="p-6 space-y-3">
            <div className="absolute top-4 right-4 text-7xl font-bold text-foreground/10 group-hover:text-foreground/15 transition-colors duration-500" aria-hidden="true">
              {String(step.step).padStart(2, '0')}
            </div>
            <div className="flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{step.emoji}</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
