import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Mobile-friendly grid:
 *  - On mobile: shows only the first 4 items (2 cols x 2 rows) and a "More" toggle to reveal the rest.
 *  - On sm and above: shows everything in a normal multi-column grid.
 */
export function CollapsibleGrid({
  children,
  cols = "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  mobileLimit = 4,
}: {
  children: ReactNode[];
  cols?: string;
  mobileLimit?: number;
}) {
  const [open, setOpen] = useState(false);
  const items = Array.isArray(children) ? children : [children];
  const hasMore = items.length > mobileLimit;
  const initial = items.slice(0, mobileLimit);
  const rest = items.slice(mobileLimit);

  return (
    <>
      <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${cols}`}>
        {initial}
        {/* Desktop: render the rest inline */}
        <div className="contents max-sm:hidden">{rest}</div>
      </div>

      {/* Mobile-only reveal */}
      {hasMore && (
        <div className="sm:hidden">
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3 pt-3">{rest}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setOpen((v) => !v)}
              className="border-primary/40 hover:bg-primary/10"
            >
              {open ? (<><ChevronUp className="mr-1 h-4 w-4" /> Show less</>) : (<><ChevronDown className="mr-1 h-4 w-4" /> Show {rest.length} more</>)}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
