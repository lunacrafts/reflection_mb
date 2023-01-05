import t from "../../trpc";
import { z } from 'zod';
import { OpenAI } from 'openai-sdk'

const input = z.object({
  count: z.number().min(1).max(10).default(5),
});

const output = z.object({
  items: z.array(OpenAI.MarketingPersona)
});

export const generateMarketingPersonas = t.router({
  generateMarketingPersonas: t.procedure.input(input).output(output).query(async ({ ctx }) => {

    const authenticators = await ctx.fetchAuthenticators({
      authenticators: []
    });

    console.log(authenticators);

    return {
      items: [
        {
          name: "Jacqueline",
          description: "Jacqueline is a successful businesswoman in her early 40s. She has a busy schedule and values quality and convenience. She is looking for a tailor who can quickly and accurately alter her business suits to fit her perfectly, and is willing to pay a premium for excellent service.",
        },
        {
          name: "Ryan",
          description: "Ryan is a fashionable young professional in his late 20s. He loves to make a statement with his clothes and is always looking for the next trendy piece to add to his wardrobe. He is willing to pay for high quality tailoring to ensure that his clothes fit him perfectly and make the right impression.",
        },
        {
          name: "Sophia",
          description: "Sophia is a creative, artistic person in her mid-30s. She has a unique, bohemian style and loves to express herself through her clothing. She is looking for a tailor who can help her bring her vision to life and can handle more unconventional alterations.",
        },
        {
          name: "Max",
          description: "Max is a retired man in his mid-60s. He has a classic, traditional style and values durability and longevity in his clothing. He is looking for a tailor who can repair and alter his favorite garments to extend their lifespan.",
        },
        {
          name: "Emma",
          description: "Emma is a college student in her early 20s. She is on a budget but still wants to look stylish. She is looking for a tailor who can alter her thrift store finds to fit her perfectly and help her create a cohesive wardrobe.",
        },
      ]
    }
  })
});
