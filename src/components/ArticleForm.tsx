import React, { useState } from "react";
import { Article } from "../lib/dummy-data";

interface ArticleFormProps {
  article?: Article; // If provided, we're editing an existing article
  onSubmitSuccess?: (article: Article) => void;
  onCancel?: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
  article,
  onSubmitSuccess,
  onCancel,
}) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [error, setError] = useState<string | null>(null);

  // // TODO: Initialize form state
  // // Hint: Use article prop if editing, or empty values if creating

  // // TODO: Implement form submission logic
  // // Hint: Use articlesApi.createArticle or articlesApi.updateArticle

  // // TODO: Implement form field change handlers

  // Supprimer cette ligne
  console.log({ onSubmitSuccess, setIsSubmitting });

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        {article ? "Edit Article" : "Create New Article"}
      </h2>

      {/* TODO: Display error message */}

      <form>
        {/* Title field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Article title"
            // TODO: Add value and onChange
          />
        </div>

        {/* Content field */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={6}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Article content"
            // TODO: Add value and onChange
          ></textarea>
        </div>

        {/* Categories field */}
        <div className="mb-4">
          <label
            htmlFor="categories"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Categories (comma separated)
          </label>
          <input
            type="text"
            id="categories"
            name="categories"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Web Development, React, TypeScript"
            // TODO: Add value and onChange
          />
        </div>

        {/* Tags field */}
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="react, typescript, vite"
            // TODO: Add value and onChange
          />
        </div>

        {/* Image URL field */}
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/image.jpg"
            // TODO: Add value and onChange
          />
        </div>

        {/* Form actions */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : article ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
