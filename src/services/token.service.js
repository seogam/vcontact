class TokenService {
  getAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken;
  }
}

export default new TokenService();