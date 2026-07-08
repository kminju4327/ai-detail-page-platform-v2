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
    desc: "불필요한 요소를 덜어낸 미니멀하고 깔끔한 스타일",
    tags: ["미니멀", "정돈", "정보"],
  },
  {
    id: "modern-clean",
    label: "Modern Clean",
    category: "Modern",
    desc: "모던한 레이아웃과 컬러로 깔끔하게 정리된 스타일",
    tags: ["모던", "깔끔", "생활"],
  },
  {
    id: "bold-impact",
    label: "Bold Impact",
    category: "Bold",
    desc: "강한 컬러와 큰 타이포로 시선을 사로잡는 스타일",
    tags: ["임팩트", "숫자", "강조"],
  },
  {
    id: "warm-story",
    label: "Warm Story",
    category: "Natural",
    desc: "따뜻한 감성과 스토리텔링이 돋보이는 감성적 스타일",
    tags: ["스토리", "감성", "따뜻함"],
  },
];

function hexToRgba(hex, alpha) {
  const fallback = DEFAULT_MAIN;
  const clean = String(hex || fallback).replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const int = parseInt(full, 16);
  if (Number.isNaN(int)) return `rgba(200,154,90,${alpha})`;
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function Pill({ children, dark = false }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 18,
        padding: "0 7px",
        borderRadius: 99,
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        background: dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.75)",
        color: dark ? "#F4D68A" : "#6F6256",
        border: dark ? "1px solid rgba(244,214,138,0.22)" : "1px solid rgba(50,40,30,0.08)",
      }}
    >
      {children}
    </span>
  );
}

function Bottle({ dark = false, color = "#F4F0E8" }) {
  return (
    <div style={{ position: "relative", width: 43, height: 74 }}>
      <div
        style={{
          position: "absolute",
          left: 13,
          top: 0,
          width: 17,
          height: 9,
          borderRadius: "5px 5px 2px 2px",
          background: dark ? "#1C1510" : "#DAD3C8",
          border: dark ? "1px solid rgba(244,214,138,.35)" : "1px solid rgba(0,0,0,.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 8,
          width: 43,
          height: 66,
          borderRadius: "18px 18px 12px 12px",
          background: color,
          boxShadow: dark ? "0 15px 24px rgba(0,0,0,.35)" : "0 12px 22px rgba(0,0,0,.12)",
          border: dark ? "1px solid rgba(244,214,138,.22)" : "1px solid rgba(0,0,0,.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 37,
          left: 7,
          width: 29,
          height: 17,
          borderRadius: 3,
          background: dark ? "rgba(244,214,138,.12)" : "rgba(255,255,255,.9)",
        }}
      />
    </div>
  );
}

function MiniFeatureRow({ color, dark = false, count = 3 }) {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", width: "100%" }}>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: dark ? "1px solid rgba(244,214,138,.35)" : `1px solid ${hexToRgba(color, 0.36)}`,
              display: "grid",
              placeItems: "center",
              color: dark ? "#F4D68A" : color,
              fontSize: 10,
              fontWeight: 900,
            }}
          >
            {idx + 1}
          </div>
          <div style={{ width: 22, height: 3, borderRadius: 3, background: dark ? "rgba(244,214,138,.28)" : hexToRgba(color, 0.25) }} />
        </div>
      ))}
    </div>
  );
}

function PreviewShell({ children, background = "#fff", border = "#E8E1D7" }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "0.72 / 1",
        minHeight: 232,
        overflow: "hidden",
        borderRadius: 12,
        background,
        border: `1px solid ${border}`,
        position: "relative",
        boxShadow: "0 12px 30px rgba(49,42,34,0.08)",
      }}
    >
      {children}
    </div>
  );
}

function PreviewPremiumWhite({ mainColor, accentColor }) {
  return (
    <PreviewShell background="#FFFDFC">
      <div style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ width: 36, height: 5, borderRadius: 5, background: hexToRgba(mainColor, 0.3), marginBottom: 26 }} />
        <div style={{ fontSize: 19, fontWeight: 900, lineHeight: 1.2, letterSpacing: "-0.06em", color: "#26221E" }}>식후 건강,<br />하루 두 알로<br />간편하게</div>
        <div style={{ width: 74, height: 28, borderRadius: 4, border: `1px solid ${hexToRgba(accentColor, 0.5)}`, marginTop: 18, display: "grid", placeItems: "center", fontSize: 9, fontWeight: 800, color: accentColor }}>자세히 보기</div>
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 10 }}>
          <div style={{ width: 50, height: 28, borderRadius: "50%", background: hexToRgba(accentColor, 0.16), transform: "rotate(-8deg)", marginBottom: 13 }} />
          <Bottle color="#EFEAE1" />
        </div>
        <div style={{ height: 53, margin: "16px -22px -22px", background: "#F7F4EF", display: "flex", alignItems: "center" }}>
          <MiniFeatureRow color={mainColor} />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewSoftBeige({ mainColor, accentColor }) {
  return (
    <PreviewShell background="linear-gradient(145deg,#FFF7EA,#EBD8B9)" border="#E5D0AE">
      <div style={{ position: "absolute", right: -20, top: -30, width: 110, height: 110, borderRadius: "50%", background: "rgba(255,255,255,.28)" }} />
      <div style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: 38, fontSize: 20, fontWeight: 900, lineHeight: 1.18, letterSpacing: "-0.06em", color: "#2A241C" }}>자연에서 온<br />건강한 선택</div>
        <div style={{ width: 96, height: 7, borderRadius: 99, background: "rgba(255,255,255,.52)", marginTop: 12 }} />
        <div style={{ width: 74, height: 26, borderRadius: 4, background: mainColor, marginTop: 17, display: "grid", placeItems: "center", fontSize: 9, fontWeight: 800, color: "#fff" }}>자세히 보기</div>
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 6 }}>
          <div style={{ width: 56, height: 30, borderRadius: "48%", background: "#D7B681", marginBottom: 10 }} />
          <div style={{ width: 38, height: 58, borderRadius: "24px 24px 6px 6px", background: hexToRgba(accentColor, 0.32), transform: "rotate(8deg)", marginBottom: 17 }} />
        </div>
        <div style={{ height: 52, margin: "12px -22px -22px", background: "rgba(255,255,255,.48)", display: "flex", alignItems: "center" }}>
          <MiniFeatureRow color={mainColor} />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewEditorial({ mainColor }) {
  return (
    <PreviewShell background="#FEFCF7">
      <div style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 6, fontWeight: 800, letterSpacing: 1.3, color: "#766C60" }}><span>BRAND ENGINE</span><span>01</span></div>
        <div style={{ height: 1, background: "#DCD4C8", margin: "10px 0 20px" }} />
        <div style={{ fontFamily: "Georgia, serif", fontSize: 26, lineHeight: 0.98, letterSpacing: "-0.06em", color: "#171513" }}>Better<br />Choice,<br />Better Life</div>
        <div style={{ width: 80, height: 5, borderRadius: 5, background: hexToRgba(mainColor, 0.25), marginTop: 16 }} />
        <div style={{ marginTop: "auto", background: "#E8E0D4", height: 94, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Bottle color="#4A3326" />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewDarkLuxury({ mainColor }) {
  return (
    <PreviewShell background="radial-gradient(circle at center,#3B2717,#17100B 72%)" border="#3B2A1E">
      <div style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", color: "#F4D68A" }}>
        <div style={{ fontSize: 8, letterSpacing: 1.8, fontWeight: 800, marginTop: 10 }}>BRAND</div>
        <div style={{ width: 22, height: 1, background: "#F4D68A", margin: "8px 0 24px" }} />
        <div style={{ fontFamily: "Georgia, serif", fontSize: 20, lineHeight: 1.3, textAlign: "center", letterSpacing: "-0.03em" }}>정성을 담은<br />프리미엄 케어</div>
        <div style={{ width: 118, height: 118, borderRadius: "50%", border: "1px solid rgba(244,214,138,.5)", marginTop: 21, display: "grid", placeItems: "center" }}>
          <Bottle dark color="#2B1B12" />
        </div>
        <div style={{ marginTop: "auto", marginBottom: 1 }}><MiniFeatureRow color={mainColor} dark /></div>
      </div>
    </PreviewShell>
  );
}

function PreviewScienceLab() {
  return (
    <PreviewShell background="#FFFFFF" border="#D9E8F3">
      <div style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center", color: "#2B73B7", fontSize: 8, fontWeight: 900, letterSpacing: .5 }}><span style={{ fontSize: 13 }}>△</span> SCIENCE LAB</div>
        <div style={{ marginTop: 34, fontSize: 20, fontWeight: 900, lineHeight: 1.25, letterSpacing: "-0.06em", color: "#17212C" }}>과학이 만든<br />건강 솔루션</div>
        <div style={{ width: 94, height: 5, borderRadius: 4, background: "#D9EAF8", marginTop: 14 }} />
        <div style={{ marginTop: "auto", display: "flex", gap: 6, flexDirection: "column" }}>
          {["연구 기반 설계", "기능성 원료", "엄격한 품질관리"].map((t) => <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 8, fontWeight: 800, color: "#2A628E" }}><span style={{ width: 18, height: 18, borderRadius: "50%", background: "#EAF4FB", display: "grid", placeItems: "center" }}>i</span>{t}</div>)}
        </div>
        <div style={{ height: 35, margin: "16px -20px -20px", background: "#2F76B8", color: "#fff", fontSize: 9, fontWeight: 900, display: "grid", placeItems: "center" }}>신뢰할 수 있는 과학적 설계</div>
      </div>
    </PreviewShell>
  );
}

function PreviewNaturalGreen({ accentColor }) {
  return (
    <PreviewShell background="linear-gradient(145deg,#F3F8EE,#DCEAD1)" border="#D1E0C5">
      <div style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 19, fontWeight: 900, lineHeight: 1.22, letterSpacing: "-0.06em", color: "#233429", marginTop: 30 }}>자연의 건강함을<br />그대로 담았습니다</div>
        <div style={{ width: 82, height: 26, borderRadius: 4, background: hexToRgba(accentColor, .55), marginTop: 17, display: "grid", placeItems: "center", fontSize: 9, fontWeight: 800, color: "#fff" }}>자세히 보기</div>
        <div style={{ position: "relative", flex: 1 }}>
          <div style={{ position: "absolute", left: 32, bottom: 16, width: 4, height: 105, background: "#75A15F", borderRadius: 3 }} />
          {[0, 1, 2, 3, 4].map((i) => <div key={i} style={{ position: "absolute", left: i % 2 ? 20 : 36, bottom: 29 + i * 18, width: 42, height: 23, borderRadius: "100% 0 100% 0", background: `rgba(91,142,72,${0.42 + i * .06})`, transform: i % 2 ? "rotate(-28deg)" : "rotate(28deg)" }} />)}
        </div>
        <div style={{ height: 52, margin: "12px -22px -22px", background: "rgba(255,255,255,.32)", display: "flex", alignItems: "center" }}>
          <MiniFeatureRow color={accentColor} />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewMinimal({ mainColor }) {
  return (
    <PreviewShell background="#FFFFFF">
      <div style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 7, fontWeight: 900, letterSpacing: 1.2, color: "#8D8378" }}>BRAND</div>
        <div style={{ marginTop: 44, fontSize: 20, fontWeight: 900, lineHeight: 1.25, letterSpacing: "-0.06em", color: "#222" }}>단순하게,<br />더 건강하게</div>
        <div style={{ width: 92, height: 5, borderRadius: 4, background: "#ECE8E0", marginTop: 16 }} />
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ width: 88, height: 24, borderRadius: "50%", background: "rgba(0,0,0,.06)", position: "absolute", bottom: 72 }} />
          <Bottle color="#F5F2EC" />
        </div>
        <div style={{ height: 52, margin: "12px -22px -22px", background: "#FAF9F6", display: "flex", alignItems: "center" }}>
          <MiniFeatureRow color={mainColor} />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewModernClean() {
  return (
    <PreviewShell background="linear-gradient(160deg,#F7FCFF,#DFF0FA)" border="#D8E8F2">
      <div style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: 42, fontSize: 20, fontWeight: 900, lineHeight: 1.27, letterSpacing: "-0.06em", color: "#1E2E39" }}>새로운<br />건강 습관의 시작</div>
        <div style={{ width: 74, height: 26, borderRadius: 4, background: "#91B7D3", color: "#fff", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 800, marginTop: 16 }}>자세히 보기</div>
        <div style={{ flex: 1, position: "relative" }}>
          <div style={{ position: "absolute", right: 10, bottom: 20, width: 57, height: 70, borderRadius: "0 0 27px 27px", border: "2px solid rgba(96,139,166,.35)", borderTop: "none" }} />
          <div style={{ position: "absolute", right: 12, bottom: 27, width: 53, height: 28, borderRadius: "0 0 25px 25px", background: "rgba(145,183,211,.25)" }} />
        </div>
        <div style={{ height: 52, margin: "12px -22px -22px", background: "rgba(255,255,255,.42)", display: "flex", alignItems: "center" }}>
          <MiniFeatureRow color="#7AA7C4" />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewBoldImpact() {
  return (
    <PreviewShell background="#FFFDF9" border="#F2CBB6">
      <div style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 8, fontWeight: 900, color: "#EA6D24", letterSpacing: 1 }}>BRAND</div>
        <div style={{ marginTop: 28, fontSize: 21, fontWeight: 1000, lineHeight: 1.18, letterSpacing: "-0.07em", color: "#1F1B17" }}>더 강력한<br />변화를 경험하세요</div>
        <div style={{ marginTop: 18, display: "flex", gap: 6 }}>
          {["98%", "2정", "30일"].map((n) => <div key={n} style={{ flex: 1, height: 44, borderRadius: 7, background: "#FFF3EC", display: "grid", placeItems: "center", color: "#EA6D24", fontSize: 14, fontWeight: 1000 }}>{n}</div>)}
        </div>
        <div style={{ margin: "auto -20px -20px", height: 69, background: "#F36C21", color: "#fff", display: "flex", alignItems: "center" }}>
          <MiniFeatureRow color="#fff" dark />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewWarmStory({ mainColor }) {
  return (
    <PreviewShell background="linear-gradient(145deg,#F9E2D4,#EFC1A8)" border="#E9BBA5">
      <div style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: 36, fontSize: 19, fontWeight: 900, lineHeight: 1.23, letterSpacing: "-0.06em", color: "#82351F" }}>당신의 건강한<br />이야기를 응원합니다</div>
        <div style={{ width: 88, height: 5, borderRadius: 5, background: "rgba(255,255,255,.44)", marginTop: 13 }} />
        <div style={{ width: 74, height: 26, borderRadius: 4, background: "#A4613D", color: "#fff", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 800, marginTop: 17 }}>자세히 보기</div>
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
          <Bottle color="#F4E6D8" />
        </div>
        <div style={{ height: 52, margin: "12px -22px -22px", background: "rgba(255,255,255,.24)", display: "flex", alignItems: "center" }}>
          <MiniFeatureRow color={mainColor} />
        </div>
      </div>
    </PreviewShell>
  );
}

function TemplatePreview({ id, mainColor, accentColor }) {
  const props = { mainColor: mainColor || DEFAULT_MAIN, accentColor: accentColor || DEFAULT_ACCENT };
  switch (id) {
    case "premium-white":
      return <PreviewPremiumWhite {...props} />;
    case "soft-beige":
      return <PreviewSoftBeige {...props} />;
    case "editorial":
      return <PreviewEditorial {...props} />;
    case "dark-luxury":
      return <PreviewDarkLuxury {...props} />;
    case "science-lab":
      return <PreviewScienceLab {...props} />;
    case "natural-green":
      return <PreviewNaturalGreen {...props} />;
    case "minimal":
      return <PreviewMinimal {...props} />;
    case "modern-clean":
      return <PreviewModernClean {...props} />;
    case "bold-impact":
      return <PreviewBoldImpact {...props} />;
    case "warm-story":
      return <PreviewWarmStory {...props} />;
    default:
      return <PreviewPremiumWhite {...props} />;
  }
}

export default function TemplateGallery({ selected, onSelect, onBack, mainColor = DEFAULT_MAIN, accentColor = DEFAULT_ACCENT, recommendedId = "premium-white" }) {
  const groups = DESIGN_TEMPLATES.reduce((acc, template) => {
    acc[template.category] = acc[template.category] || [];
    acc[template.category].push(template);
    return acc;
  }, {});
  const order = ["Premium", "Natural", "Modern", "Bold"];

  return (
    <div
      style={{
        background: "#F6F3EC",
        color: "#2B2925",
        padding: "30px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        borderRight: "1px solid #E8E1D7",
        overflowY: "auto",
        flex: 1,
      }}
    >
      <div style={{ paddingBottom: 14, borderBottom: "1px solid #E6DED2" }}>
        <div style={{ fontSize: 28, fontWeight: 1000, letterSpacing: "-0.06em", marginBottom: 6 }}>상세페이지 템플릿</div>
        <div style={{ fontSize: 13, color: "#8B8175", lineHeight: 1.55 }}>원하는 디자인 스타일을 선택하세요. 선택한 컬러가 썸네일에도 함께 반영됩니다.</div>
      </div>

      {order.map((groupName) => {
        const items = groups[groupName] || [];
        if (!items.length) return null;
        return (
          <section key={groupName} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: "#5B5147", letterSpacing: "-0.02em" }}>{groupName}</div>
              <div style={{ flex: 1, height: 1, background: "#E7DFD3", marginLeft: 12 }} />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))",
                gap: 18,
              }}
            >
              {items.map((template) => {
                const isSelected = selected === template.id;
                const isRecommended = recommendedId === template.id;
                return (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => onSelect?.(template.id)}
                    style={{
                      border: isSelected ? `2px solid ${mainColor}` : "1px solid #E1D8CB",
                      background: isSelected ? "#FFF8EF" : "#FFFFFF",
                      borderRadius: 16,
                      padding: 10,
                      cursor: "pointer",
                      textAlign: "left",
                      position: "relative",
                      boxShadow: isSelected ? `0 14px 34px ${hexToRgba(mainColor, 0.18)}` : "0 8px 20px rgba(45,37,28,0.05)",
                      transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 16px 32px ${hexToRgba(mainColor, 0.14)}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = isSelected ? `0 14px 34px ${hexToRgba(mainColor, 0.18)}` : "0 8px 20px rgba(45,37,28,0.05)";
                    }}
                  >
                    {isRecommended && (
                      <div
                        style={{
                          position: "absolute",
                          top: 18,
                          left: 18,
                          zIndex: 3,
                          height: 22,
                          padding: "0 8px",
                          borderRadius: 99,
                          background: "rgba(30,24,18,.78)",
                          color: "#F7D58B",
                          fontSize: 10,
                          fontWeight: 900,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        AI 추천
                      </div>
                    )}
                    {isSelected && (
                      <div
                        style={{
                          position: "absolute",
                          top: 18,
                          right: 18,
                          zIndex: 3,
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: mainColor,
                          color: "#fff",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 14,
                          fontWeight: 1000,
                          boxShadow: `0 6px 16px ${hexToRgba(mainColor, 0.36)}`,
                        }}
                      >
                        ✓
                      </div>
                    )}

                    <TemplatePreview id={template.id} mainColor={mainColor} accentColor={accentColor} />

                    <div style={{ padding: "13px 2px 2px" }}>
                      <div style={{ fontSize: 15, fontWeight: 1000, letterSpacing: "-0.04em", color: "#2B2925", marginBottom: 6 }}>{template.label}</div>
                      <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#7B7064", minHeight: 36 }}>{template.desc}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 9 }}>
                        {template.tags.map((tag) => (
                          <Pill key={tag}>{tag}</Pill>
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

      <button
        onClick={onBack}
        style={{
          marginTop: 4,
          padding: "13px 16px",
          borderRadius: 12,
          border: "none",
          background: mainColor,
          color: "#fff",
          fontWeight: 900,
          fontSize: 14,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          boxShadow: `0 10px 22px ${hexToRgba(mainColor, 0.22)}`,
        }}
      >
        ← 돌아가기
      </button>
    </div>
  );
}
