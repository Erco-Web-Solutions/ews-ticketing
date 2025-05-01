export const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Articles API",
    description: "API for managing articles",
    version: "1.0.0",
    contact: {
      email: "test@example.com",
    },
  },
  servers: [
    {
      url: "https://api.example.com",
      description: "Production server",
    },
  ],
  tags: [
    {
      name: "articles",
      description: "Articles endpoints",
    },
    {
      name: "auth",
      description: "Authentication endpoints",
    },
  ],
  paths: {
    "/articles": {
      get: {
        tags: ["articles"],
        summary: "Get all articles",
        description: "Returns a paginated list of articles",
        parameters: [
          {
            name: "page",
            in: "query",
            description: "Page number",
            required: false,
            schema: {
              type: "integer",
              default: 1,
            },
          },
          {
            name: "limit",
            in: "query",
            description: "Number of articles per page",
            required: false,
            schema: {
              type: "integer",
              default: 10,
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetArticlesResponse",
                },
              },
            },
          },
          "401": {
            description: "Unauthorized",
          },
        },
      },
      post: {
        tags: ["articles"],
        summary: "Create a new article",
        description: "Creates a new article",
        security: [
          {
            bearerAuth: [],
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateArticleRequest",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Article created successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetArticleResponse",
                },
              },
            },
          },
          "400": {
            description: "Invalid input",
          },
          "401": {
            description: "Unauthorized",
          },
        },
      },
    },
    "/articles/{id}": {
      get: {
        tags: ["articles"],
        summary: "Get article by ID",
        description: "Returns a single article",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of article to return",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetArticleResponse",
                },
              },
            },
          },
          "404": {
            description: "Article not found",
          },
        },
      },
      put: {
        tags: ["articles"],
        summary: "Update article",
        description: "Updates an existing article",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of article to update",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateArticleRequest",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Article updated successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetArticleResponse",
                },
              },
            },
          },
          "400": {
            description: "Invalid input",
          },
          "401": {
            description: "Unauthorized",
          },
          "404": {
            description: "Article not found",
          },
        },
      },
      delete: {
        tags: ["articles"],
        summary: "Delete article",
        description: "Deletes an article",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of article to delete",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          "200": {
            description: "Article deleted successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                  },
                },
              },
            },
          },
          "401": {
            description: "Unauthorized",
          },
          "404": {
            description: "Article not found",
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["auth"],
        summary: "Login user",
        description: "Authenticates a user and returns a token",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginRequest",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AuthResponse",
                },
              },
            },
          },
          "401": {
            description: "Invalid credentials",
          },
        },
      },
    },
    "/auth/register": {
      post: {
        tags: ["auth"],
        summary: "Register user",
        description: "Creates a new user account",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RegisterRequest",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "User registered successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AuthResponse",
                },
              },
            },
          },
          "400": {
            description: "Invalid input or username already taken",
          },
        },
      },
    },
    "/auth/logout": {
      post: {
        tags: ["auth"],
        summary: "Logout user",
        description: "Invalidates the user's token",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          "200": {
            description: "Logout successful",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                    },
                  },
                },
              },
            },
          },
          "401": {
            description: "Unauthorized",
          },
        },
      },
    },
    "/auth/me": {
      get: {
        tags: ["auth"],
        summary: "Get current user",
        description: "Returns the current authenticated user's profile",
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          "200": {
            description: "Successful operation",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          "401": {
            description: "Unauthorized",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Article: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            description: "Unique identifier for the article",
          },
          title: {
            type: "string",
            description: "Title of the article",
          },
          content: {
            type: "string",
            description: "Content of the article",
          },
          author: {
            type: "string",
            description: "Author of the article",
          },
          publishedDate: {
            type: "string",
            format: "date",
            description: "Date the article was published",
          },
          categories: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Categories the article belongs to",
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Tags associated with the article",
          },
          image: {
            type: "string",
            description: "URL to the article's image",
          },
        },
        required: [
          "id",
          "title",
          "content",
          "author",
          "publishedDate",
          "categories",
          "tags",
        ],
      },
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            description: "Unique identifier for the user",
          },
          username: {
            type: "string",
            description: "Username of the user",
          },
          email: {
            type: "string",
            format: "email",
            description: "Email of the user",
          },
          firstName: {
            type: "string",
            description: "First name of the user",
          },
          lastName: {
            type: "string",
            description: "Last name of the user",
          },
        },
        required: ["id", "username", "email"],
      },
      GetArticlesResponse: {
        type: "object",
        properties: {
          articles: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Article",
            },
          },
          total: {
            type: "integer",
            description: "Total number of articles",
          },
          page: {
            type: "integer",
            description: "Current page number",
          },
          limit: {
            type: "integer",
            description: "Number of articles per page",
          },
        },
      },
      GetArticleResponse: {
        type: "object",
        properties: {
          article: {
            $ref: "#/components/schemas/Article",
          },
        },
      },
      CreateArticleRequest: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Title of the article",
          },
          content: {
            type: "string",
            description: "Content of the article",
          },
          categories: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Categories the article belongs to",
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Tags associated with the article",
          },
          image: {
            type: "string",
            description: "URL to the article's image",
          },
        },
        required: ["title", "content", "categories", "tags"],
      },
      UpdateArticleRequest: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
            description: "ID of the article to update",
          },
          title: {
            type: "string",
            description: "Title of the article",
          },
          content: {
            type: "string",
            description: "Content of the article",
          },
          categories: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Categories the article belongs to",
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Tags associated with the article",
          },
          image: {
            type: "string",
            description: "URL to the article's image",
          },
        },
        required: ["id"],
      },
      LoginRequest: {
        type: "object",
        properties: {
          username: {
            type: "string",
            description: "Username of the user",
          },
          password: {
            type: "string",
            format: "password",
            description: "Password of the user",
          },
        },
        required: ["username", "password"],
      },
      RegisterRequest: {
        type: "object",
        properties: {
          username: {
            type: "string",
            description: "Username of the user",
          },
          password: {
            type: "string",
            format: "password",
            description: "Password of the user",
          },
          email: {
            type: "string",
            format: "email",
            description: "Email of the user",
          },
          firstName: {
            type: "string",
            description: "First name of the user",
          },
          lastName: {
            type: "string",
            description: "Last name of the user",
          },
        },
        required: ["username", "password", "email", "firstName", "lastName"],
      },
      AuthResponse: {
        type: "object",
        properties: {
          user: {
            $ref: "#/components/schemas/User",
          },
          token: {
            type: "string",
            description: "JWT token for authentication",
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
