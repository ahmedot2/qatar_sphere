// use server'
'use server';

/**
 * @fileOverview Summarizes a section of the presentation.
 *
 * - summarizeSection - A function that takes a section of the presentation and returns a concise summary.
 * - SummarizeSectionInput - The input type for the summarizeSection function.
 * - SummarizeSectionOutput - The return type for the summarizeSection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSectionInputSchema = z.object({
  sectionContent: z
    .string()
    .describe('The content of the presentation section to summarize.'),
});
export type SummarizeSectionInput = z.infer<typeof SummarizeSectionInputSchema>;

const SummarizeSectionOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the section content.'),
});
export type SummarizeSectionOutput = z.infer<typeof SummarizeSectionOutputSchema>;

export async function summarizeSection(input: SummarizeSectionInput): Promise<SummarizeSectionOutput> {
  return summarizeSectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSectionPrompt',
  input: {schema: SummarizeSectionInputSchema},
  output: {schema: SummarizeSectionOutputSchema},
  prompt: `Summarize the following presentation section in a concise manner:\n\n{{{sectionContent}}}`,
});

const summarizeSectionFlow = ai.defineFlow(
  {
    name: 'summarizeSectionFlow',
    inputSchema: SummarizeSectionInputSchema,
    outputSchema: SummarizeSectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      summary: output!.summary,
      progress: 'Generated a concise summary of the presentation section.',
    };
  }
);
