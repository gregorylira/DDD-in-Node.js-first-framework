import { randomUUID } from "crypto";

export class Entitiy<Props> {
  private _id: string;
  protected props: any;

  get id(): string {
    return this._id;
  }

  constructor(props: any, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }
}
