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

function Thumbnail({ template, main, accent }) {
  const isDark = template.id === "dark-luxury";
  const isScience = template.id === "science-lab";
  const isEditorial = template.id === "editorial";
  const isBold = template.id === "bold-impact";
  const isNatural = template.id === "natural-green";
  const bg = isDark ? "#1F211C" : template.id === "soft-beige" || template.id === "warm-story" ? "#F5EADC" : isScience ? "#EEF5F7" : isNatural ? "#EEF4EA" : "#FBFAF6";
  const title = isDark ? "#F8E7C4" : isScience ? "#2F5D69" : isNatural ? "#426447" : main;
  const line = isDark ? "#B88A46" : accent;

  return (
    <div style={{ height: 118, borderRadius: 14, background: bg, border: "1px solid rgba(31,42,36,.08)", overflow: "hidden", position: "relative", padding: 14 }}>
      {isBold && <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${main} 0%, #F7EFE5 72%)`, opacity: .28 }} />}
      {isDark && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 24, background: "#2F3028" }} />}
      {isScience && <div style={{ position: "absolute", top: 12, right: 12, width: 36, height: 36, borderRadius: 12, background: "#D7E7EC" }} />}
      {isNatural && <div style={{ position: "absolute", top: 14, right: 18, width: 28, height: 28, borderRadius: "60% 40% 60% 40%", background: "#B9CDA9", transform: "rotate(-22deg)" }} />}

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ width: isEditorial ? 86 : 50, height: 6, borderRadius: 99, background: line, opacity: .9, marginBottom: 10 }} />
        <div style={{ width: isEditorial ? 110 : 82, height: isEditorial ? 12 : 10, borderRadius: 4, background: title, opacity: .95, marginBottom: 8 }} />
        <div style={{ width: 130, height: 5, borderRadius: 99, background: isDark ? "#E8D7B8" : "#CFC7BA", opacity: .8, marginBottom: 5 }} />
        <div style={{ width: 96, height: 5, borderRadius: 99, background: isDark ? "#E8D7B8" : "#DCD5CA", opacity: .75 }} />
      </div>

      <div style={{ position: "absolute", left: 14, right: 14, bottom: 12, display: "flex", gap: 6 }}>
        <div style={{ flex: 1, height: 20, borderRadius: 7, background: isDark ? "#35362D" : "#FFFFFF", border: isDark ? "1px solid #5D543E" : "1px solid #E6DED2" }} />
        <div style={{ flex: 1, height: 20, borderRadius: 7, background: isScience ? "#DCEBF0" : isDark ? "#B88A46" : `${main}22`, border: isDark ? "none" : `1px solid ${main}22` }} />
      </div>
    </div>
  );
}

export default function TemplateGallery({
  selectedTemplate,
  onSelectTemplate,
  onBack,
  onGenerate,
  themeColor = DEFAULT_MAIN,
  pointColors = [DEFAULT_ACCENT],
}) {
  const accent = pointColors?.[0] || DEFAULT_ACCENT;
  const selected = DESIGN_TEMPLATES.find((t) => t.id === selectedTemplate);

  return (
    <div style={{ background: "#F6F3EC", color: "#2B2925", padding: "30px 32px", display: "flex", flexDirection: "column", gap: 22, overflowY: "auto", flex: 1, minHeight: "100vh" }}>
      <style>{`
        .template-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; width: 100%; }
        @media (max-width: 760px) { .template-gallery-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 18, paddingBottom: 18, borderBottom: "1px solid #E6DED2" }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 1000, letterSpacing: "-0.06em", marginBottom: 8 }}>상세페이지 템플릿</div>
          <div style={{ fontSize: 13.5, color: "#8B8175", lineHeight: 1.6 }}>AI가 설계한 상세페이지 구조를 어떤 디자인 스타일로 표현할지 선택하세요.</div>
          {selected && <div style={{ marginTop: 8, fontSize: 12, color: "#7A6A56" }}>선택됨: <b>{selected.label}</b></div>}
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
          <button onClick={onBack} style={{ padding: "9px 13px", borderRadius: 9, border: "1px solid #D4A574", background: "#fff", color: "#A87535", fontWeight: 800, fontSize: 12, cursor: "pointer" }}>
            이전 단계로
          </button>
          <button onClick={onGenerate} disabled={!selectedTemplate} style={{ padding: "10px 15px", borderRadius: 9, border: "none", background: selectedTemplate ? "linear-gradient(135deg, #5A6E52 0%, #4A5E42 100%)" : "#CFC7BA", color: "#fff", fontWeight: 900, fontSize: 12, cursor: selectedTemplate ? "pointer" : "not-allowed", boxShadow: selectedTemplate ? "0 8px 18px rgba(90,110,82,0.22)" : "none" }}>
            이 템플릿으로 생성
          </button>
        </div>
      </div>

      {!selectedTemplate && (
        <div style={{ padding: "13px 16px", borderRadius: 12, background: "#FFFCF0", border: "1px solid #E8D5BC", color: "#8B7355", fontSize: 13 }}>
          템플릿을 선택한 뒤 우측 상단의 <b>이 템플릿으로 생성</b> 버튼을 눌러주세요.
        </div>
      )}

      <div className="template-gallery-grid">
        {DESIGN_TEMPLATES.map((template) => {
          const active = selectedTemplate === template.id;
          return (
            <button
              key={template.id}
              type="button"
              onClick={() => onSelectTemplate(template.id)}
              style={{
                textAlign: "left",
                padding: 14,
                borderRadius: 18,
                background: active ? "#FFF8F0" : "#FFFFFF",
                border: active ? "2px solid #A87535" : "1px solid #E3E1DA",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: active ? "0 10px 28px rgba(168,117,53,0.16)" : "0 3px 12px rgba(0,0,0,0.04)",
              }}
            >
              <Thumbnail template={template} main={themeColor} accent={accent} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 12, gap: 8 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 900, color: "#8B7355", marginBottom: 4 }}>{template.category}</div>
                  <div style={{ fontSize: 16, fontWeight: 950, color: "#2B2925", letterSpacing: "-0.03em" }}>{template.label}</div>
                </div>
                {active && <span style={{ width: 24, height: 24, borderRadius: 999, background: "#5A6E52", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900 }}>✓</span>}
              </div>
              <div style={{ fontSize: 12, color: "#8B8175", lineHeight: 1.45, marginTop: 7, minHeight: 34 }}>{template.desc}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
                {template.tags?.map((tag, i) => (
                  <span key={i} style={{ fontSize: 10, padding: "3px 7px", borderRadius: 99, background: active ? "#E8D5BC" : "#F1E9DE", color: active ? "#8B5E2C" : "#8B7355", fontWeight: 700 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
