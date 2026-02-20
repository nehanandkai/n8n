import { z } from 'zod';

import { Z } from '../../zod-class';

const externalAgentSchema = z.object({
	name: z.string().min(1).max(100),
	description: z.string().max(500).optional(),
	url: z.string().url().max(2048),
	apiKey: z.string().min(1).max(512),
});

export class DispatchTaskDto extends Z.class({
	prompt: z.string().min(1).max(10_000),
	externalAgents: z.array(externalAgentSchema).max(10).optional(),
}) {}
