import uuid from "uuid-random";
import { Format } from "./types";
import IBook from "./interface";

export default class Book implements IBook {
  public id = uuid();
  public title = "";
  public author = "";
  public genres = [""];
  public pages = 0;
  public format = Format.PAPERBACK;
  public price = "0";
  public isUsed = false;
  public description = "";
}
