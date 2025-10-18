export const generateStaticParams = () => {
  return [
    { slug: ["rabbit", "products"] },
    { slug: ["dog", "services"] },
    { slug: ["fox", "testimonials"] },
    { slug: ["mouse", "refund"] },
    { slug: ["lion", "career"] },
  ];
};

export default async function SlugPage({ params }: PageProps<"/[[...slug]]">) {
  const { slug } = await params;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <h1>
        Current page: <strong>{(slug ?? []).join(" ")}</strong>
      </h1>
    </div>
  );
}
