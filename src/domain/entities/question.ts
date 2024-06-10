import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entitiy } from "../../core/entities/entities";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: string;
}

export class Question extends Entitiy<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id);
  }
}
