import { LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from './card';
import { Separator } from './separator';

export interface ContentSectionProps {
  title: string;
  items?: string[];
  content?: string;
  icon?: LucideIcon;
  iconElement?: string;
  variant?: 'default' | 'bg-card';
  footer?: {
    title: string;
    content: string;
  };
}

export const ContentSection = ({
  title,
  items,
  content,
  icon: Icon,
  iconElement,
  variant = 'default',
  footer
}: ContentSectionProps) => (
  <section className={cn(
    "py-12",
    variant === 'bg-card' && "bg-card/30"
  )}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <Card variant="glass">
          <CardContent className="p-8">
            {content && (
              <p className="text-lg text-muted-foreground leading-relaxed">{content}</p>
            )}
            {items && (
              <ul className="space-y-3">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {Icon && <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />}
                    {iconElement && <span className="text-primary mt-1">{iconElement}</span>}
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {footer && (
              <>
                <Separator className="my-6" />
                <div>
                  <h3 className="font-semibold mb-3">{footer.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{footer.content}</p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
