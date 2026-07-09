import React from "react";

const DEFAULT_MAIN = "#C89A5A";
const DEFAULT_ACCENT = "#2F5A46";

export const DESIGN_TEMPLATES = [
  { id: "premium-white", label: "Premium White", category: "Premium", desc: "여백을 살린 깔끔하고 프리미엄한 화이트 스타일", tags: ["프리미엄", "신뢰", "화이트"] },
  { id: "soft-beige", label: "Soft Beige", category: "Natural", desc: "따뜻한 베이지 톤의 내추럴하고 부드러운 스타일", tags: ["베이지", "따뜻함", "원료"] },
  { id: "editorial", label: "Editorial", category: "Premium", desc: "잡지처럼 세련된 타이포와 여백이 돋보이는 스타일", tags: ["매거진", "세리프", "고급"] },
  { id: "dark-luxury", label: "Dark Luxury", category: "Premium", desc: "다크 톤과 골드 포인트로 고급감을 강조하는 스타일", tags: ["다크", "럭셔리", "골드"] },
  { id: "science-lab", label: "Science Lab", category: "Modern", desc: "블루 톤과 데이터 카드로 전문성을 보여주는 스타일", tags: ["수치", "인증", "전문성"] },
  { id: "natural-green", label: "Natural Green", category: "Natural", desc: "그린 톤과 식물 이미지를 활용한 자연친화적 스타일", tags: ["식물성", "자연", "그린"] },
  { id: "minimal", label: "Minimal", category: "Modern", desc: "미니멀 디자인과 강한 타이포그래피의 모던 스타일", tags: ["심플", "명확", "타이포"] },
  { id: "modern-clean", label: "Modern Clean", category: "Modern", desc: "깔끔한 구성과 세련된 배치의 현대적 스타일", tags: ["클린", "모던", "정리"] },
  { id: "bold-impact", label: "Bold Impact", category: "Bold", desc: "강렬한 컬러와 대담한 레이아웃의 임팩트 스타일", tags: ["강렬", "진함", "시선"] },
  { id: "warm-story", label: "Warm Story", category: "Natural", desc: "따뜻하고 감정적인 스토리텔링 중심의 스타일", tags: ["스토리", "감정", "따뜻함"] },
];

function MiniPreview({ template, main, accent }) {
  const isDark = template.id === "dark-luxury";
  const isScience = template.id === "science-lab";
  const isNatural = template.id === "natural-green";
  const isBold = template.id === "bold-impact";
  const isBeige = template.id === "soft-beige" || template.id === "warm-story";

  const bg = isDark ? "#2B2118" : isScience ? "#EFF6F8" : isNatural ? "#EEF5EA" : isBeige ? "#F6EBDD" : "#FBFAF7";
  const line = isDark ? "#D6A95E" : isScience ? "#5F92A5" : isNatural ? "#7A9C6D" : accent;
  const text = isDark ? "#F8E7C4" : "#3A332B";

  return (
    <div style={{ width: 62, height: 48, borderRadius: 10, background: bg, border: "1px solid rgba(47,38,28,0.08)", position: "relative", overflow: "hidden", flexShrink: 0 }}>
      {isBold && <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${main} 0%, #fff 72%)`, opacity: 0.35 }} />}
      <div style={{ position: "absolute", left: 8, top: 9, width: 22, height: 4, borderRadius: 99, background: line }} />
      <div style={{ position: "absolute", left: 8, top: 18, width: 38, height: 5, borderRadius: 99, background: text, opacity: 0.9 }} />
      <div style={{ position: "absolute", left: 8, top: 28, width: 45, height: 3, borderRadius: 99, background: isDark ? "#6A5435" : "#D9D0C5" }} />
      <div style={{ position: "absolute", left: 8, top: 35, width: 28, height: 3, borderRadius: 99, background: isDark ? "#6A5435" : "#E3DAD0" }} />
      {isScience && <div style={{ position: "absolute", right: 7, top: 7, width: 14, height: 14, borderRadius: 5, background: "#D2E5EC" }} />}
    </div>
  );
}

export default function TemplateGallery({
  selectedTemplate,
  onSelectTemplate,
  themeColor = DEFAULT_MAIN,
  pointColors = [DEFAULT_ACCENT],
}) {
  const accent = pointColors?.[0] || DEFAULT_ACCENT;
  const grouped = DESIGN_TEMPLATES.reduce((acc, template) => {
    acc[template.category] = acc[template.category] || [];
    acc[template.category].push(template);
    return acc;
  }, {});

  const orderedCategories = ["Premium", "Natural", "Modern", "Bold"];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#FFFEFB" }}>
      <div style={{ padding: "28px 24px 18px", borderBottom: "1px solid #EEE7DD", flexShrink: 0 }}>
        <div style={{ fontSize: 13, color: "#9A672E", fontWeight: 900, letterSpacing: "0.04em", marginBottom: 8 }}>템플릿 목록</div>
        <div style={{ fontSize: 22, color: "#241F19", fontWeight: 950, letterSpacing: "-0.05em", marginBottom: 6 }}>디자인 선택</div>
        <div style={{ fontSize: 12.5, color: "#8B8175", lineHeight: 1.55 }}>
          AI가 설계한 구조를 어떤 스타일로 표현할지 선택하세요.
        </div>
      </div>

      <div style={{ padding: "18px 20px 28px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
        {orderedCategories.map((category) => {
          const list = grouped[category] || [];
          if (!list.length) return null;
          return (
            <section key={category}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 950, color: "#8B7355", letterSpacing: "0.04em" }}>{category}</div>
                <div style={{ height: 1, background: "#EEE7DD", flex: 1 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {list.map((template) => {
                  const active = selectedTemplate === template.id;
                  return (
                    <button
                      key={template.id}
                      type="button"
                      onClick={() => onSelectTemplate(template.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        textAlign: "left",
                        padding: 12,
                        borderRadius: 14,
                        background: active ? "#FFF8F0" : "#FFFFFF",
                        border: active ? "1.8px solid #B87932" : "1px solid #E7DED3",
                        boxShadow: active ? "0 10px 22px rgba(168,117,53,0.14)" : "0 3px 10px rgba(47,38,28,0.04)",
                        cursor: "pointer",
                        transition: "all .18s ease",
                      }}
                    >
                      <MiniPreview template={template} main={themeColor} accent={accent} />
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                          {active && <span style={{ color: "#A87535", fontWeight: 950 }}>✓</span>}
                          <span style={{ fontSize: 14.5, fontWeight: 900, color: "#2B2925", letterSpacing: "-0.03em" }}>{template.label}</span>
                        </div>
                        <div style={{ fontSize: 11.5, color: "#8B8175", lineHeight: 1.4, whiteSpace: "normal" }}>{template.desc}</div>
                        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 7 }}>
                          {template.tags.slice(0, 3).map((tag) => (
                            <span key={tag} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 99, background: active ? "#E8D5BC" : "#F1E9DE", color: active ? "#8B5E2C" : "#8B7355", fontWeight: 700 }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
