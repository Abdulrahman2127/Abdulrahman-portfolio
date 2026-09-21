const apps = [
  { name: "Claude", url: "https://claude.ai", icon: "🤖" },
  { name: "ChatGPT", url: "https://chat.openai.com", icon: "💬" },
  { name: "Gemini", url: "https://gemini.google.com", icon: "✨" },
  { name: "React Docs", url: "https://react.dev", icon: "⚛️" },
  { name: "GitHub", url: "https://github.com", icon: "🐙" },
  { name: "X", url: "https://x.com", icon: "𝕏" },
  { name: "Instagram", url: "https://instagram.com", icon: "📸" },
  { name: "Email", url: "https://mail.google.com", icon: "📧" },
  { name: "Material UI", url: "https://mui.com", icon: "🎨" },
  { name: "Clarity", url: "https://clarity.microsoft.com", icon: "📊" },
  { name: "Translate", url: "https://translate.google.com", icon: "🌐" },
  { name: "Uiverse", url: "https://uiverse.io", icon: "🧩" },
  { name: "iLovePDF", url: "https://www.ilovepdf.com", icon: "📄" },
];

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    padding: "60px 24px",
    marginTop: "100px",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "40px",
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-1px",
    margin: 0,
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: "14px",
    marginTop: "8px",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "16px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "28px 16px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.03)",
    textDecoration: "none",
    color: "#e5e5e5",
    transition: "all 0.2s ease",
  },
  icon: {
    fontSize: "28px",
  },
  label: {
    fontSize: "14px",
    fontWeight: 500,
  },
};

export default function Dashboard({ language = "en" }) {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          {language === "ar" ? "أدوات المطوّر" : "Dev Dashboard"}
        </h1>
        <p style={styles.subtitle}>
          {language === "ar"
            ? "وصول سريع إلى الأدوات التي تستخدمها يوميًا."
            : "Quick access to the tools you use every day."}
        </p>

        <div style={styles.grid}>
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noreferrer"
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={styles.icon}>{app.icon}</span>
              <span style={styles.label}>{app.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
