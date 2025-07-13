import * as React from 'react';
import { cn } from '@/lib/utils';

const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-card-foreground/10 bg-card/30 p-6 shadow-2xl backdrop-blur-lg backdrop-saturate-150',
        'dark:border-card-foreground/10 dark:bg-card/20',
        className
      )}
      {...props}
    />
  )
);
GlassCard.displayName = 'GlassCard';

export { GlassCard };
