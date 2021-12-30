import { IProduct } from "./i-product";
import { IUserInfo } from "./i-user-info";

export interface IInvoice {
  ID : number;
  Products : IProduct[];
  OrderDate : Date;
  UserId : string;
  User : IUserInfo;
  PhoneNumber : string;
  StreetAddress : string;
  City : string;
  FullName : string;
  Email : string;
}
