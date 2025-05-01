import React from "react";

interface ArticleDetailProps {
  articleId: number;
  onBack?: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articleId, onBack }) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const [article, setArticle] = useState<Article | null>(null);
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const [loading, setLoading] = useState<boolean>(true);
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const [error, setError] = useState<string | null>(null);

  //   // TODO: Implement loading article details from the API
  //   useEffect(() => {
  //     // TODO: Fetch article details
  //     // Hint: Use articlesApi.getArticleById(articleId)
  //   }, [articleId]);

  // TODO: Implement article rendering with all details

  console.log({ articleId });
  return (
    <div className="container mx-auto py-8">
      {/* TODO: Add back button */}
      <button
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        onClick={onBack}
      >
        Back to Articles
      </button>

      {/* TODO: Display loading state */}

      {/* TODO: Display error message */}

      {/* TODO: Render article details */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Article image */}
        <div className="h-64 bg-gray-300">{/* TODO: Add article image */}</div>

        {/* Article content */}
        <div className="p-6">
          {/* TODO: Add article title, content, author, etc. */}
          <h1 className="text-3xl font-bold mb-4">Article Title</h1>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span>By Author Name</span>
            <span className="mx-2">•</span>
            <span>Published Date</span>
          </div>

          <div className="prose max-w-none">
            {/* TODO: Add article content */}
            <p>Article content goes here...</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {/* TODO: Add article categories and tags */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
