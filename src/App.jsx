import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    fetch("https://portfolio-backend-2026-production.up.railway.app/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

 const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    alert("எல்லா fields-உம் நிரப்புங்கள்!");
    return;
  }

  try {
    await emailjs.send(
      'service_flpgqvr',    // Service ID
      'template_58tn5v9',   // Template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'Lz97Kzo78hViJY56Z'     // Public Key
    );
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  } catch (error) {
    alert("அனுப்புவதில் பிரச்சனை! மீண்டும் முயற்சிக்கவும்.");
  }
};

  const styles = {
    app: { fontFamily: "'Segoe UI', sans-serif", background: "#0f0c29", minHeight: "100vh", color: "white" },
    nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100 },
    navLogo: { fontSize: "24px", fontWeight: "bold", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    navLinks: { display: "flex", gap: "20px" },
    navBtn: { background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "16px", padding: "8px 16px", borderRadius: "20px", transition: "all 0.3s" },
    hero: { textAlign: "center", padding: "80px 20px 40px", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" },
    avatar: { width: "150px", height: "150px", borderRadius: "50%", border: "4px solid #a78bfa", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "60px", background: "linear-gradient(135deg, #a78bfa, #60a5fa)" },
    heroName: { fontSize: "42px", fontWeight: "bold", margin: "10px 0" },
    heroRole: { fontSize: "20px", color: "#a78bfa", margin: "5px 0" },
    heroLocation: { fontSize: "16px", color: "#94a3b8" },
    skillsWrap: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "30px 0" },
    skillBadge: { padding: "8px 18px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", borderRadius: "20px", fontSize: "14px", fontWeight: "bold" },
    section: { padding: "60px 40px", maxWidth: "1000px", margin: "0 auto" },
    sectionTitle: { fontSize: "32px", fontWeight: "bold", textAlign: "center", marginBottom: "40px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    projectsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" },
    card: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "24px", border: "1px solid rgba(167,139,250,0.3)", transition: "transform 0.3s" },
    cardIcon: { fontSize: "40px", marginBottom: "12px" },
    cardTitle: { fontSize: "20px", fontWeight: "bold", marginBottom: "8px" },
    cardDesc: { color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" },
    cardTags: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" },
    tag: { padding: "4px 10px", background: "rgba(167,139,250,0.2)", borderRadius: "10px", fontSize: "12px", color: "#a78bfa" },
    formBox: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "40px", border: "1px solid rgba(167,139,250,0.3)", maxWidth: "600px", margin: "0 auto" },
    input: { width: "100%", padding: "14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "10px", color: "white", fontSize: "16px", marginBottom: "16px", boxSizing: "border-box", outline: "none" },
    submitBtn: { width: "100%", padding: "14px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", border: "none", borderRadius: "10px", color: "white", fontSize: "18px", fontWeight: "bold", cursor: "pointer" },
    successMsg: { textAlign: "center", padding: "30px", color: "#4ade80", fontSize: "20px" },
    footer: { textAlign: "center", padding: "30px", color: "#475569", borderTop: "1px solid rgba(255,255,255,0.1)" }
  };

  return (
    <div style={styles.app}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navLogo}>Nilaam ✨</div>
        <div style={styles.navLinks}>
          {["home", "projects", "contact"].map((s) => (
            <button key={s} style={{ ...styles.navBtn, background: activeSection === s ? "rgba(167,139,250,0.2)" : "none" }}
              onClick={() => { setActiveSection(s); document.getElementById(s).scrollIntoView({ behavior: "smooth" }); }}>
              {s === "home" ? "🏠 Home" : s === "projects" ? "💼 Projects" : "📬 Contact"}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" style={styles.hero}>
        <div style={styles.avatar}>👨‍💻</div>
        {profile ? (
          <>
            <h1 style={styles.heroName}>{profile.name}</h1>
            <p style={styles.heroRole}>💼 {profile.role}</p>
            <p style={styles.heroLocation}>📍 {profile.location}</p>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "20px auto", lineHeight: "1.8" }}>{profile.bio}</p>
            <div style={styles.skillsWrap}>
              {profile.skills.map((skill, i) => (
                <span key={i} style={styles.skillBadge}>{skill}</span>
              ))}
            </div>
          </>
        ) : <p>Loading...</p>}
      </div>

      {/* Projects Section */}
      <div id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>💼 My Projects</h2>
        <div style={styles.projectsGrid}>
          {[
            { icon: "🛒", title: "MSM Communication POS", desc: "MSM Communication கடைக்காக உருவாக்கிய POS & Inventory Management System. Products, Sales, Receipts, CSV Export எல்லாம் உள்ளது.", tags: ["React", "localStorage", "Vite", "Tailwind CSS"] },
            { icon: "❄️", title: "MSM Ice Wadi System", desc: "MSM Ice Wadi கடைக்காக Design செய்த Storefront System மற்றும் Signage Design.", tags: ["HTML", "CSS", "Design"] },
            { icon: "👥", title: "HorizonHR System", desc: "Employee Records, Payroll, Leave Management, Attendance, Recruitment எல்லாம் கொண்ட HR System.", tags: ["React", "JSX", "Vite"] },
            { icon: "🎓", title: "ICT Workshop", desc: "University of Jaffna, Faculty of Hindu Studies மாணவர்களுக்கு ICT Workshop நடத்தினேன். Browser, Email, Google Drive, AI Tools கற்பித்தேன்.", tags: ["Education", "ICT", "Tamil"] },
          ].map((p, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardIcon}>{p.icon}</div>
              <div style={styles.cardTitle}>{p.title}</div>
              <div style={styles.cardDesc}>{p.desc}</div>
              <div style={styles.cardTags}>
                {p.tags.map((t, j) => <span key={j} style={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>📬 Contact Me</h2>
        <div style={styles.formBox}>
          {sent ? (
            <div style={styles.successMsg}>
              ✅ Message அனுப்பப்பட்டது! நன்றி 🙏
            </div>
          ) : (
            <>
              <input style={styles.input} placeholder="உங்கள் பெயர்" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input style={styles.input} placeholder="உங்கள் Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea style={{ ...styles.input, height: "120px", resize: "vertical" }} placeholder="உங்கள் Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button style={styles.submitBtn} onClick={handleSubmit}>🚀 அனுப்பு</button>
            </>
          )}
        </div>
      </div>

      <footer style={styles.footer}>
        <p>© 2026 Nilaam | Jaffna, Sri Lanka 🇱🇰</p>
      </footer>
    </div>
  );
}

export default App;