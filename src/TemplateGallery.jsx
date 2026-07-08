import React from "react";

const DEFAULT_MAIN = "#C89A5A";
const DEFAULT_ACCENT = "#2F5A46";

export const DESIGN_TEMPLATES = [
  {
    id: "premium-white",
    label: "Premium White",
    category: "Premium",
    desc: "여백을 살린 깔끔하고 프리미엄한 화이트 스타일",
    tags: ["프리미엄", "신뢰", "화이트"],
  },
  {
    id: "soft-beige",
    label: "Soft Beige",
    category: "Natural",
    desc: "따뜻한 베이지 톤의 내추럴하고 부드러운 스타일",
    tags: ["베이지", "따뜻함", "원료"],
  },
  {
    id: "editorial",
    label: "Editorial",
    category: "Premium",
    desc: "잡지처럼 세련된 타이포와 여백이 돋보이는 스타일",
    tags: ["매거진", "세리프", "고급"],
  },
  {
    id: "dark-luxury",
    label: "Dark Luxury",
    category: "Premium",
    desc: "다크 톤과 골드 포인트로 고급감을 강조하는 스타일",
    tags: ["다크", "럭셔리", "골드"],
  },
  {
    id: "science-lab",
    label: "Science Lab",
    category: "Modern",
    desc: "블루 톤과 데이터 카드로 전문성을 보여주는 스타일",
    tags: ["수치", "인증", "전문성"],
  },
  {
    id: "natural-green",
    label: "Natural Green",
    category: "Natural",
    desc: "그린 톤과 식물 이미지를 활용한 자연친화적 스타일",
    tags: ["식물성", "자연", "그린"],
  },
  {
    id: "minimal",
    label: "Minimal",
    category: "Modern",
    desc: "미니멀 디자인과 강한 타이포그래피의 모던 스타일",
    tags: ["심플", "명확", "타이포"],
  },
  {
    id: "modern-clean",
    label: "Modern Clean",
    category: "Modern",
    desc: "깔끔한 구성과 세련된 배치의 현대적 스타일",
    tags: ["클린", "모던", "정리"],
  },
  {
    id: "bold-impact",
    label: "Bold Impact",
    category: "Bold",
    desc: "강렬한 컬러와 대담한 레이아웃의 임팩트 스타일",
    tags: ["강렬", "진하", "시선"],
  },
  {
    id: "warm-story",
    label: "Warm Story",
    category: "Natural",
    desc: "따뜻하고 감정적인 스토리텔링 중심의 스타일",
    tags: ["스토리", "감정", "따뜻함"],
  },
];

export default function TemplateGallery({ selectedTemplate, onSelectTemplate, onBack, onGenerate, themeColor = DEFAULT_MAIN, pointColors = [DEFAULT_ACCENT], }) {
  return (
    <div
      style={{
        background: "#F6F3EC",
        color: "#2B2925",
        padding: "40px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        borderRight: "1px solid #E8E1D7",
        overflowY: "auto",
        flex: 1,
      }}
    >
      {/* 헤더 */}
      <div style={{ paddingBottom: 16, borderBottom: "1px solid #E6DED2" }}>
        <div style={{ fontSize: 28, fontWeight: 1000, letterSpacing: "-0.06em", marginBottom: 8 }}>상세페이지 템플릿</div>
        <div style={{ fontSize: 13.5, color: "#8B8175", lineHeight: 1.6 }}>AI가 설계한 상세페이지 구조를 어떤 디자인 스타일로 표현할지 선택하세요.</div>
      </div>

      {/* 템플릿 그리드 (2열 PC / 1열 모바일) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
          width: "100%",
        }}
      >
        {DESIGN_TEMPLATES.map((template) => (
          <div
            key={template.id}
            onClick={() => onSelectTemplate(template.id)}
            style={{
              padding: "18px 16px",
              borderRadius: 12,
              background: selectedTemplate === template.id ? "#FFF8F0" : "#FFFFFF",
              border: selectedTemplate === template.id ? "2px solid #A87535" : "1px solid #E3E1DA",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: selectedTemplate === template.id 
                ? "0 8px 24px rgba(168,117,53,0.15)" 
                : "0 2px 8px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={(e) => {
              if (selectedTemplate !== template.id) {
                e.currentTarget.style.borderColor = "#D4A574";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(168,117,53,0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTemplate !== template.id) {
                e.currentTarget.style.borderColor = "#E3E1DA";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
              }
            }}
          >
            {/* 카테고리 + 체크마크 */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 900, color: "#8B7355", letterSpacing: "0.02em" }}>
                {template.category}
              </span>
              {selectedTemplate === template.id && (
                <span style={{ fontSize: 20, color: "#5A6E52" }}>✓</span>
              )}
            </div>

            {/* 템플릿명 */}
            <div style={{ fontSize: 16, fontWeight: 900, color: "#2B2925", marginBottom: 6, letterSpacing: "-0.02em" }}>
              {template.label}
            </div>

            {/* 설명 */}
            <div style={{ fontSize: 12, color: "#8B8175", lineHeight: 1.5, marginBottom: 10 }}>
              {template.desc}
            </div>

            {/* 태그 */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {template.tags?.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 10,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: selectedTemplate === template.id ? "#E8D5BC" : "#F1E9DE",
                    color: selectedTemplate === template.id ? "#8B5E2C" : "#8B7355",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 생성 버튼 (템플릿 선택 후에만 표시) */}
      {selectedTemplate && (
        <div style={{ display: "flex", gap: 12, paddingTop: 16, borderTop: "1px solid #E6DED2" }}>
          <button
            onClick={onBack}
            style={{
              flex: 1,
              padding: "14px 18px",
              borderRadius: 10,
              border: "1px solid #D4A574",
              background: "#fff",
              color: "#A87535",
              fontWeight: 700,
              fontSize: 13.5,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#FFF8F0";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#fff";
            }}
          >
            이전 단계로
          </button>
          <button
            onClick={onGenerate}
            style={{
              flex: 1,
              padding: "14px 18px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg, #5A6E52 0%, #4A5E42 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13.5,
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(90,110,82,0.25)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0 12px 28px rgba(90,110,82,0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "0 8px 20px rgba(90,110,82,0.25)";
            }}
          >
            이 템플릿으로 상세페이지 생성
          </button>
        </div>
      )}

      {/* 템플릿 미선택 시 안내 */}
      {!selectedTemplate && (
        <div style={{ padding: 20, borderRadius: 10, background: "#FFFCF0", border: "1px solid #E8D5BC", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#8B7355", lineHeight: 1.6 }}>
            위에서 템플릿을 선택하면, 상세페이지 생성 버튼이 나타납니다.
          </div>
        </div>
      )}
    </div>
  );
}
