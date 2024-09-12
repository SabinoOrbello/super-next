import { notFound } from "next/navigation";
import NewsLayout from "../componets/NewsLayoutComponent";
import AboutUsLayout from "../componets/AboutUsLayout";

async function getPageData(path: string) {
  const res = await fetch(`http://localhost:3000/api/getPageData?path=${path}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const path = `/${params.slug.join("/")}`;

  try {
    // Ottiene i dati della pagina chiamando la funzione getPageData
    const pageData = await getPageData(path);

    // In base al tipo di pagina, rende il layout corrispondente
    switch (pageData.type) {
      case "news":
        return <NewsLayout data={pageData} />;
      case "about_us":
        return <AboutUsLayout data={pageData} />;
      default:
        return notFound();
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
    return notFound();
  }
}
