import { useState } from "react";
import "./App.css";
import ArticleDetail from "./components/ArticleDetail";
import ArticleForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";
import Instructions from "./components/Instructions";
import Timer from "./components/Timer";
import { Article } from "./lib/dummy-data";
import ApiDocs from "./swagger/SwaggerUI";

function App() {
  // Define app states
  const [view, setView] = useState<
    "list" | "detail" | "create" | "edit" | "docs" | "instructions"
  >("list");

  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null
  );

  // Navigation handlers

  const handleViewArticle = (articleId: number) => {
    setSelectedArticleId(articleId);
    setView("detail");
  };

  const handleCreateArticle = () => {
    setView("create");
  };

  // const handleEditArticle = (articleId: number) => {
  //   setSelectedArticleId(articleId);
  //   setView("edit");
  // };

  const handleBackToList = () => {
    setView("list");
    setSelectedArticleId(null);
  };

  const handleViewDocs = () => {
    setView("docs");
  };

  const handleViewInstructions = () => {
    setView("instructions");
  };

  const handleArticleCreated = (article: Article) => {
    // After creating, show the new article
    setSelectedArticleId(article.id);
    setView("detail");
  };

  const handleArticleUpdated = () => {
    // After updating, show the article detail
    setView("detail");
  };

  // Render the appropriate view
  const renderView = () => {
    switch (view) {
      case "list":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Articles</h1>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  onClick={handleCreateArticle}
                >
                  Add Article
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
                  onClick={handleViewDocs}
                >
                  API Docs
                </button>
                <button
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                  onClick={handleViewInstructions}
                >
                  Instructions
                </button>
              </div>
            </div>
            <ArticleList onSelectArticle={handleViewArticle} />
          </div>
        );

      case "detail":
        return selectedArticleId ? (
          <ArticleDetail
            articleId={selectedArticleId}
            onBack={handleBackToList}
            // TODO: Add props for edit functionality
            // onEdit={() => handleEditArticle(selectedArticleId)}
          />
        ) : null;

      case "create":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6">Create New Article</h1>
            <ArticleForm
              onCancel={handleBackToList}
              onSubmitSuccess={handleArticleCreated}
            />
          </div>
        );

      case "edit":
        return selectedArticleId ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Edit Article</h1>
            <ArticleForm
              // TODO: Add props to pass the selected article
              // article={...}
              onCancel={handleBackToList}
              onSubmitSuccess={handleArticleUpdated}
            />
          </div>
        ) : null;

      case "docs":
        return (
          <div>
            <div className="mb-4">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                onClick={handleBackToList}
              >
                Back to Articles
              </button>
            </div>
            <ApiDocs />
          </div>
        );

      case "instructions":
        return (
          <div>
            <div className="mb-4">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                onClick={handleBackToList}
              >
                Back to Articles
              </button>
            </div>
            <Instructions />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="container mx-auto">
        <Timer />
        {renderView()}
      </div>
    </div>
  );
}

export default App;
