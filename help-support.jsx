import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export function HelpSupport() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-[calc(var(--radius)-4px)] bg-muted/50 p-6 text-center">
      <div className="mb-4 rounded-full border-8 border-background bg-primary/20 p-3">
        <HelpCircle className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-headline text-xl font-semibold">Need some help?</h3>
      <p className="mt-2 mb-4 max-w-xs text-sm text-muted-foreground">
        Find answers to common questions or get in touch with our support team.
      </p>
      <Button asChild className="font-bold">
        <Link href="/support">Visit Support Center</Link>
      </Button>
    </div>
  );
}
