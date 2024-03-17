import { DOMAIN } from "src/constants";

export type TUser = {
  user_id: string;
  nickname: string;
  password: string;
};

export type TUserCreate = {
  username: string;
  hashed_password: string;
};

export type TUserOrder = {
  data: string;
};

export type TFilesLoading = {
  username: string;
  order_name: string;
};

export type Order = {
  order_name: string;
  status: string;
  id: string;
  user_id: string;
};

export type TGetUserResponse = TUser;
// export type TUpdateUserDataRequestData = TUserDataForUpdate;
// export type TGetUserApplicationsParamsResponse = TUserApplicationsParams;
export type TGetOrganisationsRequestParams = { domain?: DOMAIN };
