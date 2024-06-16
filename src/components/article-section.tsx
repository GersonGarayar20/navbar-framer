import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  title: string;
  description: string;
  setArticle: (title: string) => void;
}

export default function ArticleSection({
  title,
  description,
  setArticle,
}: Props) {
  const ref = useRef<any>();
  const inView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (inView) {
      setArticle(title);
    }
  }, [inView]);

  return (
    <article ref={ref} className="h-screen" id={title}>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
