import { Entitiy } from "../../core/entities/entities";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface StudentProps {
  name: string;
}

export class Student extends Entitiy<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(
      {
        ...props,
      },
      id
    );

    return student;
  }
}
