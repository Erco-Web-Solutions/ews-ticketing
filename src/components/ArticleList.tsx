import React from "react";

interface ArticleListProps {
  onSelectArticle: (articleId: number) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onSelectArticle }) => {
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [articles, setArticles] = useState<Article[]>([]);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [loading, setLoading] = useState<boolean>(true);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [error, setError] = useState<string | null>(null);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [page, setPage] = useState<number>(1);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [totalPages, setTotalPages] = useState<number>(1);

  console.log({ onSelectArticle });
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>

      {/* TODO: Display loading state */}

      {/* TODO: Display error message */}

      {/* TODO: Render article list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

      {/* TODO: Implement pagination controls */}
      <div className="mt-8 flex justify-center">
        {/* Pagination buttons go here */}
      </div>
    </div>
  );
};

export default ArticleList;
