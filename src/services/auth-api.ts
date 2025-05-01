import { User, dummyUser } from "../lib/dummy-data";

// Define types for request and response
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Auth service
export const authApi = {
  // Login user
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // In a real app, this would be:
      // const response = await axiosInstance.post('/auth/login', credentials);
      // return response.data;

      // Simple validation (in a real app, this would happen on the server)
      if (
        credentials.username !== "testuser" ||
        credentials.password !== "password"
      ) {
        throw new Error("Invalid credentials");
      }

      // Store token in localStorage (in a real app, this might be done elsewhere)
      localStorage.setItem("auth_token", dummyUser.token);

      return {
        user: dummyUser,
        token: dummyUser.token,
      };
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  // Register new user
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, this would be:
      // const response = await axiosInstance.post('/auth/register', userData);
      // return response.data;

      // Simple validation (in a real app, this would happen on the server)
      if (userData.username === "testuser") {
        throw new Error("Username already taken");
      }

      // Create new user with dummy data
      const newUser: User = {
        id: 2, // Next available ID
        username: userData.username,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiJHt1c2VyRGF0YS51c2VybmFtZX0iLCJpYXQiOjE2OTc0NTMyMDB9.example-token-for-new-user`,
      };

      // Store token in localStorage
      localStorage.setItem("auth_token", newUser.token);

      return {
        user: newUser,
        token: newUser.token,
      };
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  // Logout user
  async logout(): Promise<{ success: boolean }> {
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // In a real app, this might be:
      // const response = await axiosInstance.post('/auth/logout');
      // return response.data;

      // Clear token from localStorage
      localStorage.removeItem("auth_token");

      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem("auth_token");
  },

  // Get current user profile
  async getCurrentUser(): Promise<User | null> {
    try {
      // Check if token exists
      const token = localStorage.getItem("auth_token");

      if (!token) {
        return null;
      }

      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // In a real app, this would be:
      // const response = await axiosInstance.get('/auth/me');
      // return response.data.user;

      // Return dummy user
      return dummyUser;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  },
};
