// src/ai/flows/enhance-content.ts
'use server';

/**
 * @fileOverview An AI agent that enhances content for a portfolio section, making it more impactful and engaging.
 *
 * - enhanceContent - A function that enhances the content of a portfolio section.
 * - EnhanceContentInput - The input type for the enhanceContent function.
 * - EnhanceContentOutput - The return type for the enhanceContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceContentInputSchema = z.object({
  sectionTitle: z.string().describe('The title of the section to enhance.'),
  originalContent: z.string().describe('The original content of the section.'),
  includeTechnicalDetails: z
    .boolean()
    .optional()
    .describe(
      'Whether to include technical details in the enhanced content. If omitted, the AI will decide.'
    ),
});
export type EnhanceContentInput = z.infer<typeof EnhanceContentInputSchema>;

const EnhanceContentOutputSchema = z.object({
  enhancedContent: z.string().describe('The enhanced content for the section.'),
  reasoning: z.string().describe('The AI’s reasoning for the changes made.'),
});
export type EnhanceContentOutput = z.infer<typeof EnhanceContentOutputSchema>;

export async function enhanceContent(input: EnhanceContentInput): Promise<EnhanceContentOutput> {
  return enhanceContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceContentPrompt',
  input: {schema: EnhanceContentInputSchema},
  output: {schema: EnhanceContentOutputSchema},
  prompt: `You are an expert copywriter specializing in crafting compelling portfolio content.

You will receive a section of content from a portfolio and your goal is to rewrite it to be more impactful and engaging.

The section's title is: {{{sectionTitle}}}

The original content is:
{{{originalContent}}}

{{#if includeTechnicalDetails}}
The user has specified that technical details should be included.
{{else}}
The user has not specified whether to include technical details, so you should decide based on the context.
If the section describes a technical project, include relevant technical details to showcase expertise.
{{/if}}

Focus on highlighting the value and impact of the work.

Respond with the enhanced content and a brief explanation of your reasoning.

Enhanced Content:

Reasoning:`,
});

const enhanceContentFlow = ai.defineFlow(
  {
    name: 'enhanceContentFlow',
    inputSchema: EnhanceContentInputSchema,
    outputSchema: EnhanceContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
