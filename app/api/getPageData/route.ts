import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Estrae i parametri di ricerca (query string) dall'URL della richiesta.
  const { searchParams } = new URL(request.url);
  // Ottiene il valore del parametro "path" dai parametri di ricerca.
  const path = searchParams.get("path");

  // Simula  un'API esterna
  const pageData: {
    [key: string]: { type: string; title: string; content: string };
  } = {
    "/": {
      type: "home",
      title: "Homepage",
      content: "Benvenuto nel nostro sito!",
    },
    "/news": { type: "news", title: "Notizie", content: "Ultime notizie..." },
    "/about_us": {
      type: "about_us",
      title: "Chi siamo",
      content: "La nostra storia...",
    },
    "/pippo": {
      type: "about_us",
      title: "Pippo",
      content: "Ultime notizie...",
    },
  };

  if (path && path in pageData) {
    return NextResponse.json(pageData[path]);
  } else {
    return NextResponse.json({ error: "Pagina non trovata" }, { status: 404 });
  }
}
