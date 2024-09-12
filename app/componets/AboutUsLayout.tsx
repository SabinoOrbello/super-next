import React from "react";
import Head from "next/head";
import Link from "next/link";

interface AboutData {
  title: string;
  content: string;

  articles?: Array<{ id: number; title: string; summary: string }>;
}

interface NewsLayoutProps {
  data: AboutData;
}

const NewsLayout: React.FC<NewsLayoutProps> = ({ data }) => {
  return (
    <div className="news-layout">
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="Pagina delle notizie" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <nav>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          {/* Aggiungi altri link di navigazione se necessario */}
        </nav>
      </header>

      <main className="container mx-auto p-4 h-screen">
        <p className="mb-4">{data.content}</p>
      </main>

      <footer className="bg-gray-200 p-4 mt-8">
        <p>&copy; 2024 Ecco chi siamo noiii</p>
      </footer>
    </div>
  );
};

export default NewsLayout;
