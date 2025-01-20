import { StatusCodes } from "http-status-codes";

export default class HTTPResponse {
  content: any;
  statusCode: number;
  type: string;

  constructor(content: any, statusCode = StatusCodes.OK, type = 'application/json') {
    this.content = content;
    this.statusCode = statusCode;
    this.type = type;
  }
}