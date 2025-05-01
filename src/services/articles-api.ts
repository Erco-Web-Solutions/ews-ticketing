import { Article, dummyArticles } from "../lib/dummy-data";

// Define types for request and response
export interface GetArticlesResponse {
  articles: Article[];
  total: number;
  page: number;
  limit: number;
}

export interface GetArticleResponse {
  article: Article;
}

export interface CreateArticleRequest {
  title: string;
  content: string;
  categories: string[];
  tags: string[];
  image?: string;
}

export interface UpdateArticleRequest extends Partial<CreateArticleRequest> {
  id: number;
}

// API service for articles
export const articlesApi = {
  // Get all articles with optional pagination
  async getArticles(page = 1, limit = 10): Promise<GetArticlesResponse> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // In a real app, this would be:
      // const response = await axiosInstance.get(`/articles?page=${page}&limit=${limit}`);
      // return response.data;

      // Simulate pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedArticles = dummyArticles.slice(startIndex, endIndex);

      return {
        articles: paginatedArticles,
        total: dummyArticles.length,
        page,
        limit,
      };
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  },

  // Get article by ID
  async getArticleById(id: number): Promise<GetArticleResponse> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // In a real app, this would be:
      // const response = await axiosInstance.get(`/articles/${id}`);
      // return response.data;

      const article = dummyArticles.find((article) => article.id === id);

      if (!article) {
        throw new Error("Article not found");
      }

      return { article };
    } catch (error) {
      console.error(`Error fetching article with ID ${id}:`, error);
      throw error;
    }
  },

  // Create new article
  async createArticle(
    articleData: CreateArticleRequest
  ): Promise<GetArticleResponse> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // In a real app, this would be:
      // const response = await axiosInstance.post('/articles', articleData);
      // return response.data;

      // Create new article with dummy ID and author info
      const newArticle: Article = {
        id: dummyArticles.length + 1,
        title: articleData.title,
        content: articleData.content,
        author: "Current User",
        publishedDate: new Date().toISOString().split("T")[0],
        categories: articleData.categories,
        tags: articleData.tags,
        image:
          articleData.image ||
          "https://via.placeholder.com/800x400?text=New+Article",
      };

      // In a real app, the backend would save this to the database

      return { article: newArticle };
    } catch (error) {
      console.error("Error creating article:", error);
      throw error;
    }
  },

  // Update existing article
  async updateArticle(
    articleData: UpdateArticleRequest
  ): Promise<GetArticleResponse> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 600));

      // In a real app, this would be:
      // const response = await axiosInstance.put(`/articles/${articleData.id}`, articleData);
      // return response.data;

      // Find the article to update (in a real app, this would happen on the backend)
      const articleIndex = dummyArticles.findIndex(
        (article) => article.id === articleData.id
      );

      if (articleIndex === -1) {
        throw new Error("Article not found");
      }

      // Create updated article (in a real app, this would be updated in the database)
      const updatedArticle: Article = {
        ...dummyArticles[articleIndex],
        ...articleData,
      };

      return { article: updatedArticle };
    } catch (error) {
      console.error("Error updating article:", error);
      throw error;
    }
  },

  // Delete article
  async deleteArticle(id: number): Promise<{ success: boolean }> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 400));

      // In a real app, this would be:
      // const response = await axiosInstance.delete(`/articles/${id}`);
      // return response.data;

      // Check if article exists (in a real app, this would be handled on the backend)
      const articleIndex = dummyArticles.findIndex(
        (article) => article.id === id
      );

      if (articleIndex === -1) {
        throw new Error("Article not found");
      }

      // In a real app, this would delete from the database

      return { success: true };
    } catch (error) {
      console.error(`Error deleting article with ID ${id}:`, error);
      throw error;
    }
  },
};
