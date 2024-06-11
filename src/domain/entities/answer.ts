import { randomUUID } from "crypto";
import { Entitiy } from "../../core/entities/entities";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface AnswerProps {
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entitiy<AnswerProps> {
  get content(): string {
    return this.props.content;
  }

  constructor(props: AnswerProps, id?: string) {
    super(props, id);
  }
}
