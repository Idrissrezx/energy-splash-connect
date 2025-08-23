import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon: LucideIcon;
  description?: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  description,
  className = "",
}: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 ${className}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {title}
              </p>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-foreground">{value}</p>
                {change && (
                  <div className="flex items-center space-x-1">
                    <span
                      className={`text-xs font-medium ${
                        change.type === "increase"
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {change.type === "increase" ? "+" : "-"}{Math.abs(change.value)}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      vs last month
                    </span>
                  </div>
                )}
                {description && (
                  <p className="text-xs text-muted-foreground">{description}</p>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon size={24} className="text-primary" />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-12 h-12 rounded-xl bg-primary/20 blur-md -z-10" />
            </div>
          </div>
          
          {/* Gradient background accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl -z-10" />
        </CardContent>
      </Card>
    </motion.div>
  );
}