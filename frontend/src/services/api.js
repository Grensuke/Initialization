const API_BASE_URL = 'http://localhost:5000/api';

export const authAPI = {
  register: async (email, password, confirmPassword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirmPassword })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: cannot reach backend. Is the server running?');
      }
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: cannot reach backend. Is the server running?');
      }
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  verifyToken: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Token verification failed');
      }

      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: cannot reach backend. Is the server running?');
      }
      throw error;
    }
  },

  getToken: () => {
    return localStorage.getItem('authToken');
  },

  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};

export const recommendationAPI = {
  getProblemRecommendations: async (limit = 10) => {
    try {
      const response = await fetch(`${API_BASE_URL}/recommendations/problems?limit=${limit}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch problem recommendations');
      }

      return data.data || [];
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: cannot reach backend. Is the server running?');
      }
      throw error;
    }
  },

  getLearningPaths: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/recommendations/learning-paths`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch learning paths');
      }

      return data.data || [];
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: cannot reach backend. Is the server running?');
      }
      throw error;
    }
  },

  getLearningRecommendation: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/recommendations/learning-recommendation`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch learning recommendation');
      }

      return data.data || {};
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: cannot reach backend. Is the server running?');
      }
      throw error;
    }
  },

  getProblemsByTopic: async (topic, difficulty = null) => {
    try {
      const url = difficulty 
        ? `${API_BASE_URL}/recommendations/topic/${topic}?difficulty=${difficulty}`
        : `${API_BASE_URL}/recommendations/topic/${topic}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch problems for topic');
      }

      return data.data || [];
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Network error: cannot reach backend. Is the server running?');
      }
      throw error;
    }
  }
};
