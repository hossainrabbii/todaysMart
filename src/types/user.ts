export interface IUser {
  userId: string;
  name: string;
  email: string;
  hasShop?: boolean;
  isActiv?: boolean;
  role: "user" | "admin";
  iat?: string;
  exp?: string;
}
