class AuthService {

    constructor(httpClient) {
        this.httpClient = httpClient
    }
    async login(data) {
        try {
            const response = await this.httpClient.post('/login', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthService;