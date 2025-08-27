"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { enhanceContent, EnhanceContentOutput } from "@/ai/flows/enhance-content";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ContentEnhancerDialogProps {
  sectionTitle: string;
  originalContent: string;
  onUpdate: (newContent: string) => void;
}

export function ContentEnhancerDialog({
  sectionTitle,
  originalContent,
  onUpdate,
}: ContentEnhancerDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<EnhanceContentOutput | null>(null);
  const [currentContent, setCurrentContent] = useState(originalContent);

  const handleEnhance = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await enhanceContent({
        sectionTitle,
        originalContent: currentContent,
      });
      setResult(response);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccept = () => {
    if (result) {
      onUpdate(result.enhancedContent);
      setCurrentContent(result.enhancedContent)
    }
    setIsOpen(false);
    setResult(null);
  };
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setResult(null);
      setError(null);
    }
    setIsOpen(open);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" aria-label="Enhance content">
          <Sparkles className="h-4 w-4 text-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Enhance: {sectionTitle}</DialogTitle>
          <DialogDescription>
            Use AI to improve and polish your content.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
            rows={5}
            placeholder="Original content"
          />
          
          <Button onClick={handleEnhance} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Enhance with AI
          </Button>

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="space-y-4">
              <h3 className="font-semibold">Suggested Improvement:</h3>
              <Textarea
                value={result.enhancedContent}
                onChange={(e) => setResult({...result, enhancedContent: e.target.value})}
                rows={5}
                className="bg-primary/5"
              />
               <Alert>
                <Sparkles className="h-4 w-4" />
                <AlertTitle>AI Reasoning</AlertTitle>
                <AlertDescription>
                  {result.reasoning}
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAccept} disabled={!result}>
            Accept & Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
