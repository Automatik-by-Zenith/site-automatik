import { IconCard } from "./icon-card";
import { WorkflowStep } from "@/types/caseStudy";
import { iconMap } from "@/config/icons";
import { Mail } from "lucide-react";

interface WorkflowStepsProps {
  steps: WorkflowStep[];
}

export const WorkflowSteps = ({ steps }: WorkflowStepsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step, idx) => {
        // Get the icon from iconMap if available, otherwise use Mail as default
        const iconName = step.icon || '';
        const Icon = iconName && iconMap[iconName] ? iconMap[iconName] : Mail;

        return (
          <IconCard
            key={idx}
            icon={Icon}
            title={step.title}
            className="relative overflow-hidden"
            badge={
              <div className="absolute top-4 right-4 text-7xl font-bold text-foreground/10 group-hover:text-foreground/15 transition-colors duration-500" aria-hidden="true">
                {String(step.step).padStart(2, '0')}
              </div>
            }
          >
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </IconCard>
        );
      })}
    </div>
  );
};
