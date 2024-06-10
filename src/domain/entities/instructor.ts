import { randomUUID } from "node:crypto";
import { Entitiy } from "../../core/entities/entities";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entitiy<InstructorProps> {
  constructor(props: InstructorProps, id?: string) {
    super(props, id);
  }
}
