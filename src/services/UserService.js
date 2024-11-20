import storage from "../storage/storage";

const getApiToken = () => {
  return storage.get('access_token');
}
class UserService {
  constructor(httpClient) {
    this.httpClient = httpClient
  }
  async list() {
    try {
      const response = await this.httpClient.get("/users", {
        headers: {
          Authorization: `Bearer ${getApiToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async get(id) {
    try {
      const response = await this.httpClient.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${getApiToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async create(data) {
    try {
      const response = await this.httpClient.post("/users", data, {
        headers: {
          Authorization: `Bearer ${getApiToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async delete(id) {
    try {
      const response = await this.httpClient.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${getApiToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await this.httpClient.put(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${getApiToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
