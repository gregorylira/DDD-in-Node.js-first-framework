import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "Answer content",
  });

  expect(answer.content).toBe("Answer content");
});