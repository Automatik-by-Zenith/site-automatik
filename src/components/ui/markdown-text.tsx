/**
 * Component that renders text with bold formatting
 * Converts **text** to <strong>text</strong>
 */

interface MarkdownTextProps {
  children: string;
  className?: string;
}

export const MarkdownText = ({ children, className }: MarkdownTextProps) => {
  // Split text by **...** pattern and render with bold for matched groups
  const parts = children.split(/(\*\*[^*]+\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Remove the ** markers and render as bold
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
