import { Answer } from "../entities/answer";
import { AnswerRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

interface AnswerQuestionUseCaseResponse {
  success: boolean;
  message?: string;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswerRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      authorId: instructorId,
      questionId,
      content,
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}
