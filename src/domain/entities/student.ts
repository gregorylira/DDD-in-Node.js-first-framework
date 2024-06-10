import { randomUUID } from "node:crypto";
import { Entitiy } from "../../core/entities/entities";

interface StudentProps {
  name: string;
}

export class Student extends Entitiy<StudentProps> {
  constructor(props: StudentProps, id?: string) {
    super(props, id);
  }
}
