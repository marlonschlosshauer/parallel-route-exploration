import { LabeledLink } from "@/components/link/Link";

export const generateStaticParams = () => {
  return [
    { slug: ["rabbit", "products"] },
    { slug: ["dog", "services"] },
    { slug: ["fox", "testimonials"] },
    { slug: ["mouse", "refund"] },
    { slug: ["lion", "career"] },
  ];
};

export default async function LogoPage({ params }: PageProps<"/[[...slug]]">) {
  const { slug } = await params;

  if (!slug) {
    return null;
  }

  const [company] = slug;

  let text = "🦔";

  switch (company) {
    case "dog":
      text = "🐶";
      break;
    case "rabbit":
      text = "🐰";
      break;
    case "fox":
      text = "🦊";
      break;
    case "mouse":
      text = "🐭";
      break;
    case "lion":
      text = "🐯";
      break;
  }

  return <LabeledLink label={text} href="/" />;
}
