// 상세페이지 생성 프롬프트 빌더.
// 타깃 페인포인트 분석과 상세페이지 작성을 한 번의 호출로 통합한다.
// (초기엔 분석/생성/자체검토 3단계였으나 속도 개선을 위해 통합됨)

import { buildGenerationConstraint } from "../compliance/categoryRules.js";
import { buildProductBlock, buildNumericGuidance } from "./numericGuidance.js";

// 생성 결과 JSON 스키마 (프롬프트 말미에 그대로 삽입)
export const DETAIL_PAGE_SCHEMA = `{"hero_headline": "string", "hero_subcopy": "string", "sections": [{"type": "problem", "title": "string", "body": "string"}, {"type": "solution", "title": "string", "body": "string"}, {"type": "objection_handling", "title": "string", "body": "string"}, {"type": "benefit_list", "items": ["string"]}, {"type": "how_to_use", "body": "string"}, {"type": "trust_badges", "items": ["string"]}]}`;

export function buildGenerationPrompt(product) {
  const categoryConstraint = buildGenerationConstraint(product.category);
  const productBlock = buildProductBlock(product);
  const hasNumeric = product.purity || product.actualAmount || product.epa || product.dha;
  const numericGuidance = hasNumeric ? buildNumericGuidance(product) : "";

  return (
    `당신은 이커머스 소비자 심리 분석가이자 상세페이지 카피라이터입니다. ` +
    `먼저 아래 제품의 타깃 고객이 구매 전 느끼는 pain_points와 의심(objections)을 머릿속으로 분석한 뒤, ` +
    `그 분석을 근거로 진부하지 않고 타깃을 정확히 겨냥한 상세페이지 구성안을 작성하세요.\n\n` +
    `[제품 정보]\n${productBlock}\n\n` +
    `[제품 카테고리 제약 - ${product.category}]\n${categoryConstraint}\n\n` +
    `${numericGuidance}\n\n` +
    `진부한 상투적 표현("이제는 ~해보세요", "여러분의 건강을 책임집니다" 등)을 쓰지 말고, ` +
    `제공된 정보에 없는 성분·효능·인증은 지어내지 마세요.\n\n` +
    `반드시 아래 JSON 형식으로만 답하세요. 설명 문구 없이 JSON만.\n${DETAIL_PAGE_SCHEMA}`
  );
}
