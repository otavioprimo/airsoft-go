export enum LoginType {
  email,
  google,
  facebook,
  apple,
}

export interface LoginParams {
  email: string;
  password?: string;
  isSocial?: boolean;
  type: LoginType;
}
