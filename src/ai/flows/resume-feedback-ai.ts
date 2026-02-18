'use server';
/**
 * @fileOverview An AI agent that provides feedback on a resume.
 *
 * - analyzeResume - A function that handles the resume analysis process.
 * - AnalyzeResumeInput - The input type for the analyzeResume function.
 * - AnalyzeResumeOutput - The return type for the analyzeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeResumeInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      "The resume content as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzeResumeInput = z.infer<typeof AnalyzeResumeInputSchema>;

const AnalyzeResumeOutputSchema = z.object({
  overallSummary: z.string().describe('A general textual summary of the resume.'),
  strengths: z.array(z.string()).describe('An array of strong points identified in the resume.'),
  weaknesses: z.array(z.string()).describe('An array of areas for improvement in the resume.'),
  suggestions: z
    .array(z.string())
    .describe('An array of actionable suggestions to improve the resume.'),
});
export type AnalyzeResumeOutput = z.infer<typeof AnalyzeResumeOutputSchema>;

export async function analyzeResume(input: AnalyzeResumeInput): Promise<AnalyzeResumeOutput> {
  return resumeFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeFeedbackPrompt',
  input: {schema: AnalyzeResumeInputSchema},
  output: {schema: AnalyzeResumeOutputSchema},
  prompt: `You are an expert career counselor specializing in overseas job applications. Your task is to provide constructive, detailed feedback on a job seeker's resume.

Analyze the provided resume for its strengths, weaknesses, and offer concrete suggestions for improvement, specifically keeping in mind the requirements and expectations for international job markets.

The feedback should help the job seeker optimize their document to increase their chances of securing an overseas job. Focus on clarity, conciseness, relevance to international standards, and impact.

Resume content: {{media url=resumeDataUri}}`,
});

const resumeFeedbackFlow = ai.defineFlow(
  {
    name: 'resumeFeedbackFlow',
    inputSchema: AnalyzeResumeInputSchema,
    outputSchema: AnalyzeResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
