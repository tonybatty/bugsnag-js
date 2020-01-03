import Event from "./event";
import { App, Device, User } from "./common";

declare class Session {
  public startedAt: string;
  public id: string;

  public device?: Device;
  public app?: App;

  public getUser(): User;
  public setUser(id?: string, email?: string, name?: string): void;
}

export default Session;
