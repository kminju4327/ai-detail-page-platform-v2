// Claude API 호출 서비스.
//
// API 키가 환경변수로 제공되면 실제 API를 호출한다.
// 키가 없으면 Mock 모드로 동작하여, 개발/체크 단계에서도 전체 파이프라인을 테스트할 수 있다.
//
// 개발 환경(npm run dev): vite 프록시(/api/anthropic)를 통해 요청
// StackBlitz/프로덕션: 환경변수로 키가 제공되면 브라우저 직접 호출

import { parseLLMJson } from "../utils/jsonParser.js";

const API_ENDPOINT = "/api/anthropic";
const MODEL = import.meta.env.VITE_ANTHROPIC_MODEL || "claude-sonnet-4-6";
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY || "";

// Mock 생성용 템플릿 데이터
function generateMockDraft(product) {
  const baseContext = `제품: ${product.name}, 타겟: ${product.target}`;
  return {
    hero_headline: `${product.name}로 시작하는 건강한 변화`,
    hero_subcopy: `${product.target}을 위해 연구개발한 제품입니다.`,
    analysis: {
      target_insight: `${product.target}의 주요 관심사는 ${product.benefits}입니다.`,
      emotional_appeal: "신뢰할 수 있는 품질과 투명한 정보",
      product_positioning: `${product.ingredientName || "핵심 성분"}을 중심으로 한 차별화`,
    },
    sections: [
      {
        type: "problem",
        headline: `${product.target}이 겪는 흔한 고민`,
        body: `${product.benefits}에 대해 관심을 갖고 계신가요? 많은 분들이 이 부분에서 정보 부족을 느끼고 있습니다.`,
        label_style: "pill",
      },
      {
        type: "solution",
        headline: "차별화된 접근",
        body: `${product.certs || "엄격한 기준"}으로 검증된 원료를 사용하며, ${product.ingredientName || "핵심 성분"}을 최적의 함량으로 배합했습니다.`,
        label_style: "pill",
      },
      {
        type: "benefit_list",
        headline: "주요 특징",
        body: `✓ ${product.ingredientName || "정제된 원료"}\n✓ ${product.certs || "엄격한 기준 충족"}\n✓ 투명한 성분 정보 공개`,
        label_style: "pill",
      },
      {
        type: "how_to_use",
        headline: "올바른 섭취 방법",
        body: `1일 1회, 충분한 물과 함께 섭취하세요. 개인의 건강 상태에 따라 섭취량을 조절할 수 있습니다.`,
        label_style: "pill",
      },
      {
        type: "trust_badges",
        headline: "신뢰의 근거",
        body: `${product.certs || "관련 인증 획득"} | 원료 추적 가능 | 정기적인 품질 검사`,
        label_style: "pill",
      },
    ],
  };
}

function generateMockCompliance() {
  return {
    overall_status: "pass",
    severity_count: { critical: 0, warning: 0, info: 0 },
    flags: [],
    summary: "컴플라이언스 체크가 완료되었습니다 (Mock 모드).",
  };
}

// 실제 API 호출 (키가 있을 때)
async function callClaudeApi(prompt, maxTokens = 2000) {
  let endpoint = API_ENDPOINT;
  let headers = { "Content-Type": "application/json" };
  let body = JSON.stringify({
    model: MODEL,
    max_tokens: maxTokens,
    messages: [{ role: "user", content: prompt }],
  });

  // StackBlitz 등 프로덕션 환경에서 API 키가 있으면 직접 호출
  if (API_KEY && typeof window !== "undefined" && window.location.origin.includes("stackblitz")) {
    endpoint = "https://api.anthropic.com/v1/messages";
    headers = {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    };
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers,
    body,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`API 오류 (${res.status}): ${data?.error?.message || JSON.stringify(data)}`);
  }

  const text = (data.content || []).map((b) => (b.type === "text" ? b.text : "")).join("\n");

  if (!text) {
    throw new Error("응답에 텍스트 내용이 없어요: " + JSON.stringify(data));
  }

  return parseLLMJson(text);
}

/**
 * Claude에 프롬프트를 보내고, JSON으로 파싱된 결과를 반환한다.
 * API 키가 없으면 Mock 모드로 동작한다.
 *
 * @param {string} prompt - 사용자 프롬프트
 * @param {number} maxTokens - 최대 출력 토큰
 * @param {object} context - Mock 모드용 컨텍스트 (product 등)
 * @param {string} stage - Mock 모드 스테이지 ("generation" | "compliance" | "remediation" | "regenerate")
 * @returns {Promise<object>} 파싱된 JSON 객체
 */
export async function callClaude(prompt, maxTokens = 2000, context = {}, stage = "generation") {
  // API 키 없으면 Mock 모드
  if (!API_KEY) {
    // 시뮬레이션 딜레이 (실제 API 호출처럼 보이도록)
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 400));

    // 스테이지별 Mock 응답
    if (stage === "compliance") {
      return generateMockCompliance();
    }
    if (stage === "remediation" || stage === "regenerate") {
      return generateMockDraft(context.product || {});
    }
    // generation, 기타 스테이지
    return generateMockDraft(context.product || {});
  }

  // API 키가 있으면 실제 호출
  return callClaudeApi(prompt, maxTokens);
}
