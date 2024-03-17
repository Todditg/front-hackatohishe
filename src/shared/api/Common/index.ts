import {
  TUserCreate,
  TUserOrder,
  TFilesLoading
} from "./types";
import { ApiBase } from "../Base";
import { TResponse } from "../Base/types.ts";

export class CommonApiClass extends ApiBase {
  public getToken = <T = null>(userData: TUserCreate): TResponse<T> =>
    this.post<T, TUserCreate>(
      "http://158.160.17.242:8011/api/v1/token/info",
      userData
    );

  public login = <T = null>(): TResponse<T> =>
      this.get<T>("http://158.160.17.242:8011/api/v1/token/login");

  public createUser = <T = null>(data: TUserCreate): TResponse<T> =>
    this.post<T, TUserCreate>(
      "http://158.160.17.242:8011/stenagrafist/api/v1/user/create",
      data
    );

  public getOrderByUser = <T = TUserOrder>(): TResponse<T> =>
    this.get<T>("http://158.160.17.242:8011/api/v1/token/info");

  public loadFiles = <T = File[]>(): TResponse<T> =>
    this.post<T, TFilesLoading>("http://158.160.17.242:8011", {
      username: "RandomName(22)",
      order_name: "hueta"
    });
}

export const commonApi = new CommonApiClass();
