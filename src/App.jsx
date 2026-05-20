import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

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
        'service_flpgqvr',
        'template_58tn5v9',
        { from_name: form.name, from_email: form.email, message: form.message },
        'Lz97Kzo78hViJY56Z'
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("அனுப்புவதில் பிரச்சனை! மீண்டும் முயற்சிக்கவும்.");
    }
  };

  const s = {
    app: { fontFamily: "'Segoe UI', sans-serif", background: "#0f0c29", minHeight: "100vh", color: "white" },
    nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100 },
    navLogo: { fontSize: "22px", fontWeight: "bold", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    navLinks: { display: "flex", gap: "16px" },
    navBtn: { background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "15px", padding: "8px 16px", borderRadius: "20px" },
    hero: { textAlign: "center", padding: "60px 20px 40px", background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" },
    avatar: { width: "150px", height: "150px", borderRadius: "50%", border: "4px solid #a78bfa", margin: "0 auto 20px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #a78bfa, #60a5fa)", fontSize: "60px" },
    heroName: { fontSize: "38px", fontWeight: "bold", margin: "10px 0" },
    heroRole: { fontSize: "18px", color: "#a78bfa" },
    heroLocation: { fontSize: "15px", color: "#94a3b8", margin: "6px 0" },
    heroBio: { color: "#94a3b8", maxWidth: "600px", margin: "16px auto", lineHeight: "1.8" },
    contactInfo: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", margin: "16px 0" },
    contactChip: { padding: "6px 14px", background: "rgba(255,255,255,0.08)", borderRadius: "20px", fontSize: "14px" },
    skillsWrap: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "20px 0" },
    badge: { padding: "7px 16px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", borderRadius: "20px", fontSize: "13px", fontWeight: "bold" },
    section: { padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" },
    sectionTitle: { fontSize: "28px", fontWeight: "bold", textAlign: "center", marginBottom: "30px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" },
    card: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(167,139,250,0.3)" },
    cardTitle: { fontSize: "17px", fontWeight: "bold", marginBottom: "8px" },
    cardSub: { color: "#94a3b8", fontSize: "14px" },
    tag: { display: "inline-block", margin: "4px", padding: "4px 10px", background: "rgba(167,139,250,0.2)", borderRadius: "10px", fontSize: "12px", color: "#a78bfa" },
    formBox: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "30px", border: "1px solid rgba(167,139,250,0.3)", maxWidth: "600px", margin: "0 auto" },
    input: { width: "100%", padding: "12px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "10px", color: "white", fontSize: "15px", marginBottom: "14px", boxSizing: "border-box", outline: "none" },
    btn: { width: "100%", padding: "14px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", border: "none", borderRadius: "10px", color: "white", fontSize: "17px", fontWeight: "bold", cursor: "pointer" },
    footer: { textAlign: "center", padding: "30px", color: "#475569", borderTop: "1px solid rgba(255,255,255,0.1)" }
  };

  return (
    <div style={s.app}>
      {/* Navigation */}
      <nav style={s.nav}>
        <div style={s.navLogo}>Mohammed Nilaam ✨</div>
        <div style={s.navLinks}>
          {[["home","🏠 Home"],["education","🎓 Education"],["projects","💼 Projects"],["contact","📬 Contact"]].map(([id, label]) => (
            <button key={id} style={s.navBtn} onClick={() => document.getElementById(id).scrollIntoView({ behavior: "smooth" })}>{label}</button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div id="home" style={s.hero}>
        <div style={s.avatar}>
  <img
    src="/nilaam.jpg"
    alt="Mohammed Nilaam"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>
        {profile ? (
          <>
            <h1 style={s.heroName}>{profile.name}</h1>
            <p style={s.heroRole}>💼 {profile.role}</p>
            <p style={s.heroLocation}>📍 {profile.location}</p>
            <p style={s.heroBio}>{profile.bio}</p>
            <div style={s.contactInfo}>
              <span style={s.contactChip}>📧 {profile.email}</span>
              <span style={s.contactChip}>📱 {profile.phone}</span>
            </div>
            <div style={s.skillsWrap}>
              {profile.technicalSkills.map((sk, i) => <span key={i} style={s.badge}>{sk}</span>)}
            </div>
            <div style={s.skillsWrap}>
              {profile.languages.map((l, i) => <span key={i} style={{ ...s.badge, background: "rgba(255,255,255,0.1)" }}>{l}</span>)}
            </div>
          </>
        ) : <p>Loading...</p>}
      </div>

      {/* Education */}
      <div id="education" style={s.section}>
        <h2 style={s.sectionTitle}>🎓 Education</h2>
        <div style={s.grid}>
          {profile?.education.map((e, i) => (
            <div key={i} style={s.card}>
              <div style={s.cardTitle}>🏫 {e.degree}</div>
              <div style={s.cardSub}>{e.place} {e.year && `| ${e.year}`}</div>
              {e.stream && <div style={{ ...s.tag, marginTop: "8px" }}>{e.stream}</div>}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 style={{ ...s.sectionTitle, marginTop: "40px" }}>🏆 Certifications</h2>
        <div style={s.card}>
          {profile?.certifications.map((c, i) => (
            <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8", fontSize: "14px" }}>
              ✅ {c}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects" style={s.section}>
        <h2 style={s.sectionTitle}>💼 Projects & Experience</h2>
        <div style={s.grid}>
          {[
            { icon: "🛒", title: "MSM Communication POS", desc: "MSM Communication கடைக்காக உருவாக்கிய POS & Inventory System. Products, Sales, Receipts, CSV Export.", tags: ["React", "localStorage", "Vite"] },
            { icon: "👥", title: "HorizonHR System", desc: "Employee Records, Payroll, Leave, Attendance, Recruitment கொண்ட முழுமையான HR System.", tags: ["React", "Node.js", "Vite"] },
            { icon: "🎓", title: "ICT Workshop – Univ. of Jaffna", desc: "Faculty of Hindu Studies மாணவர்களுக்கு Internet, AI Tools, Digital Safety கற்பித்தேன்.", tags: ["Education", "ICT", "Tamil"] },
            { icon: "🧑‍🏫", title: "English Teacher", desc: "J/Kokuvil Hindu College-ல் English கற்பித்தேன். Classroom management மற்றும் Communication skills.", tags: ["Teaching", "English", "2025"] },
          ].map((p, i) => (
            <div key={i} style={s.card}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>{p.icon}</div>
              <div style={s.cardTitle}>{p.title}</div>
              <div style={s.cardSub}>{p.desc}</div>
              <div style={{ marginTop: "12px" }}>{p.tags.map((t, j) => <span key={j} style={s.tag}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={s.section}>
        <h2 style={s.sectionTitle}>📬 Contact Me</h2>
        <div style={s.formBox}>
          {sent ? (
            <div style={{ textAlign: "center", color: "#4ade80", fontSize: "20px", padding: "20px" }}>
              ✅ Message அனுப்பப்பட்டது! நன்றி 🙏
            </div>
          ) : (
            <>
              <input style={s.input} placeholder="உங்கள் பெயர்" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input style={s.input} placeholder="உங்கள் Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea style={{ ...s.input, height: "120px", resize: "vertical" }} placeholder="உங்கள் Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button style={s.btn} onClick={handleSubmit}>🚀 அனுப்பு</button>
            </>
          )}
        </div>
      </div>

      <footer style={s.footer}>
        <p>© 2026 Mohammed Nilaam | Valaichenai, Batticaloa, Sri Lanka 🇱🇰</p>
      </footer>
    </div>
  );
}

export default App;