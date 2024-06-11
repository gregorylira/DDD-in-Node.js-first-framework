import { randomUUID } from "node:crypto";
import { Entitiy } from "../../core/entities/entities";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entitiy<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityID) {
    const instructor = new Instructor(
      {
        ...props,
      },
      id
    );

    return instructor;
  }
}
