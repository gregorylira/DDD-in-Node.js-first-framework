import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entitiy } from "../../core/entities/entities";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface QuestionProps {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entitiy<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id);
  }
}
