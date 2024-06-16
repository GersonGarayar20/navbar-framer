import { useState } from "react";
import ArticleSection from "./components/article-section";

const articles = [
  {
    title: "Uno",
    description: "hola como estas",
  },
  {
    title: "Dos",
    description: "hola como estas",
  },
];

function App() {
  const [article, setArticle] = useState(articles[0].title || null);

  return (
    <>
      <section className="flex h-screen">
        <aside className="bg-neutral-200 w-60">
          <nav className="flex flex-col gap-6">
            {articles.map(({ title }) => (
              <a
                className={`${article === title && "text-blue-500"}`}
                href={"#" + title}
              >
                {title}
              </a>
            ))}
          </nav>
        </aside>
        <section className="flex-1 overflow-scroll">
          {articles.map(({ title, description }) => (
            <ArticleSection
              title={title}
              description={description}
              setArticle={setArticle}
            />
          ))}
        </section>
      </section>
    </>
  );
}

export default App;
