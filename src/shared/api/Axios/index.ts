import Axios, { AxiosInstance } from "axios";

export class AxiosService {
  public axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create({
      validateStatus: (status) => status >= 200 && status < 400,
      timeout: 30000,
      headers: {
        Accept: "application/json"
      }
    });
  }
}
