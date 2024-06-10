import { randomUUID } from "crypto";
import { Entitiy } from "../../core/entities/entities";

interface AnswerProps {
  content: string;
  authorId: string;
  questionId: string;
}

export class Answer extends Entitiy<AnswerProps> {
  get content(): string {
    return this.props.content;
  }

  constructor(props: AnswerProps, id?: string) {
    super(props, id);
  }
}
