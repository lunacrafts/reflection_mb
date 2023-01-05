import { narnia } from "narnia-react";

export const MarketingPersonasList = () => {
  const { data } = narnia.openai.social.generateMarketingPersonas.useQuery({
    count: 10,
  });

  return <div>{JSON.stringify(data)}</div>;
};
