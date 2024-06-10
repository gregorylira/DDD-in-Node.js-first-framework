import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepository } from "../repositories/answers-repository";
import { Answer } from "../entities/answer";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return Promise.resolve();
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "Answer content",
  });

  expect(answer.content).toBe("Answer content");
});
