import { useState } from "react";
import emailjs from '@emailjs/browser';

const profile = {
  name: "Mohammed Nilaam",
  role: "Aspiring IT Professional",
  location: "Valaichenai, Batticaloa, Sri Lanka",
  email: "mohammednilam4433@gmail.com",
  phone: "0764433998",
  bio: "Motivated and dedicated IT graduate from University of Jaffna with knowledge in Information Technology, Web Designing, and Computer Applications.",
  technicalSkills: ["Python", "HTML", "CSS", "JavaScript", "MySQL", "WordPress", "Canva", "MS Office"],
  softSkills: ["Leadership", "Teamwork", "Communication", "Problem-Solving", "Decision-Making", "Project Management"],
  education: [
    { degree: "Bachelor of Arts (B.A.)", place: "University of Jaffna", year: "2026", stream: "IT, ELT, Economics" },
    { degree: "G.C.E. Advanced Level", place: "Arts Stream", year: "2020", stream: "Z-Score: 1.5932" },
    { degree: "G.C.E. Ordinary Level", place: "", year: "2017/2018", stream: "" }
  ],
  certifications: [
    "Journey to Salesforce Program (Cohort 2) – Distinction Pass",
    "IT Field Career Development Workshop (IFCD-2025)",
    "Diploma in Human Psychology",
    "Diploma in Organization Behaviorism",
    "Certificate in Fundamentals – Future Career Bridge Program"
  ],
  languages: ["Tamil – Fluent", "English – Intermediate"]
};

const projects = [
  { icon: "🛒", title: "MSM Communication POS", desc: "Full POS & Inventory System with Sales, Receipts, CSV Export.", tags: ["React", "localStorage", "Vite"] },
  { icon: "👥", title: "HorizonHR System", desc: "Complete HR System with Payroll, Leave & Attendance modules.", tags: ["React", "Node.js", "Vite"] },
  { icon: "🎓", title: "ICT Workshop – Univ. of Jaffna", desc: "Facilitated Internet, AI Tools & Digital Safety workshop.", tags: ["Education", "ICT", "Tamil"] },
  { icon: "🧑‍🏫", title: "English Teacher", desc: "Taught English at J/Kokuvil Hindu College with classroom management.", tags: ["Teaching", "English", "2025"] },
];

const C = {
  bg: "#0A0F1E",
  surface: "#111827",
  card: "#1A2235",
  border: "#1E3A5F",
  accent: "#3B82F6",
  accentLight: "#60A5FA",
  gold: "#F59E0B",
  text: "#F1F5F9",
  muted: "#94A3B8",
  success: "#10B981",
};

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("எல்லா fields-உம் நிரப்புங்கள்!");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        'service_flpgqvr',
        'template_58tn5v9',
        { from_name: form.name, from_email: form.email, message: form.message },
        'Lz97Kzo78hViJY56Z'
      );
      setSent(true);
    } catch {
      alert("அனுப்புவதில் பிரச்சனை! மீண்டும் முயற்சிக்கவும்.");
    }
    setSending(false);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px",
    background: "#0A0F1E",
    border: `1px solid ${C.border}`,
    borderRadius: "10px", color: C.text,
    fontSize: "15px", marginBottom: "14px",
    boxSizing: "border-box", outline: "none",
    transition: "border 0.3s"
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: C.bg, minHeight: "100vh", color: C.text }}>

      {/* ── NAV ── */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", background: C.surface, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, zIndex: 100, flexWrap: "wrap", gap: "12px" }}>
        <div style={{ fontWeight: "700", fontSize: "20px", color: C.accentLight, letterSpacing: "0.5px" }}>
          MN<span style={{ color: C.gold }}>.</span>
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[["home","Home"],["education","Education"],["projects","Projects"],["contact","Contact"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "transparent", border: `1px solid ${C.border}`,
              color: C.muted, padding: "7px 18px", borderRadius: "6px",
              cursor: "pointer", fontSize: "14px", transition: "all 0.2s",
              fontWeight: "500", letterSpacing: "0.3px"
            }}
              onMouseEnter={e => { e.target.style.color = C.accentLight; e.target.style.borderColor = C.accent; }}
              onMouseLeave={e => { e.target.style.color = C.muted; e.target.style.borderColor = C.border; }}>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <div id="home" style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 24px 60px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
        
        {/* Left */}
        <div style={{ flex: "1", minWidth: "260px" }}>
          <p style={{ color: C.gold, fontSize: "14px", fontWeight: "600", letterSpacing: "2px", marginBottom: "12px" }}>PORTFOLIO</p>
          <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "0 0 8px", lineHeight: "1.2" }}>
            Mohammed<br /><span style={{ color: C.accentLight }}>Nilaam</span>
          </h1>
          <p style={{ color: C.gold, fontSize: "18px", fontWeight: "500", margin: "0 0 16px" }}>{profile.role}</p>
          <p style={{ color: C.muted, lineHeight: "1.8", marginBottom: "24px", fontSize: "15px" }}>{profile.bio}</p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: C.muted, fontSize: "14px" }}>
              📧 {profile.email}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: C.muted, fontSize: "14px" }}>
              📱 {profile.phone}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: C.muted, fontSize: "14px" }}>
              📍 {profile.location}
            </span>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => scrollTo("contact")} style={{ padding: "12px 28px", background: C.accent, border: "none", borderRadius: "8px", color: "white", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
              Contact Me
            </button>
            <button onClick={() => scrollTo("projects")} style={{ padding: "12px 28px", background: "transparent", border: `1px solid ${C.accent}`, borderRadius: "8px", color: C.accentLight, fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
              View Work
            </button>
          </div>
        </div>

        {/* Right - Photo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "200px", height: "200px", borderRadius: "20px", border: `2px solid ${C.accent}`, overflow: "hidden", background: C.card }}>
            <img src="/Nilaam.jpg" alt="Mohammed Nilaam"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => { e.target.parentNode.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:80px">👨‍💻</div>'; }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center", maxWidth: "220px" }}>
            {profile.languages.map((l, i) => (
              <span key={i} style={{ padding: "5px 12px", background: C.card, border: `1px solid ${C.border}`, borderRadius: "20px", fontSize: "13px", color: C.gold }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "40px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: "12px", fontWeight: "600", letterSpacing: "2px", textAlign: "center", marginBottom: "20px" }}>TECHNICAL SKILLS</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {profile.technicalSkills.map((s, i) => (
              <span key={i} style={{ padding: "8px 20px", background: C.card, border: `1px solid ${C.border}`, borderRadius: "8px", fontSize: "14px", color: C.accentLight, fontWeight: "500" }}>
                {s}
              </span>
            ))}
          </div>
          <p style={{ color: C.gold, fontSize: "12px", fontWeight: "600", letterSpacing: "2px", textAlign: "center", margin: "24px 0 16px" }}>SOFT SKILLS</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {profile.softSkills.map((s, i) => (
              <span key={i} style={{ padding: "8px 20px", background: C.card, border: `1px solid ${C.border}`, borderRadius: "8px", fontSize: "14px", color: C.muted }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <div id="education" style={{ maxWidth: "1000px", margin: "0 auto", padding: "70px 24px" }}>
        <p style={{ color: C.gold, fontSize: "12px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px" }}>BACKGROUND</p>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "40px" }}>Education</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "50px" }}>
          {profile.education.map((e, i) => (
            <div key={i} style={{ background: C.card, borderRadius: "12px", padding: "24px", border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.accent}` }}>
              <p style={{ color: C.gold, fontSize: "12px", fontWeight: "600", marginBottom: "8px" }}>{e.year}</p>
              <p style={{ fontWeight: "700", fontSize: "16px", marginBottom: "4px" }}>{e.degree}</p>
              {e.place && <p style={{ color: C.muted, fontSize: "14px", marginBottom: "8px" }}>{e.place}</p>}
              {e.stream && <span style={{ padding: "4px 10px", background: C.surface, borderRadius: "6px", fontSize: "12px", color: C.accentLight }}>{e.stream}</span>}
            </div>
          ))}
        </div>

        <p style={{ color: C.gold, fontSize: "12px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px" }}>ACHIEVEMENTS</p>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "24px" }}>Certifications</h2>
        <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, overflow: "hidden" }}>
          {profile.certifications.map((c, i) => (
            <div key={i} style={{ padding: "16px 24px", borderBottom: i < profile.certifications.length - 1 ? `1px solid ${C.border}` : "none", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ color: C.success, fontSize: "18px" }}>✓</span>
              <span style={{ color: C.muted, fontSize: "14px" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div id="projects" style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "70px 24px" }}>
          <p style={{ color: C.gold, fontSize: "12px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px" }}>PORTFOLIO</p>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "40px" }}>Projects & Experience</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {projects.map((p, i) => (
              <div key={i} style={{ background: C.card, borderRadius: "12px", padding: "28px", border: `1px solid ${C.border}`, transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{p.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", marginBottom: "10px" }}>{p.title}</h3>
                <p style={{ color: C.muted, fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tags.map((t, j) => (
                    <span key={j} style={{ padding: "4px 10px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: "6px", fontSize: "12px", color: C.accentLight }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div id="contact" style={{ maxWidth: "680px", margin: "0 auto", padding: "70px 24px" }}>
        <p style={{ color: C.gold, fontSize: "12px", fontWeight: "600", letterSpacing: "2px", marginBottom: "8px" }}>GET IN TOUCH</p>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px" }}>Contact Me</h2>
        <p style={{ color: C.muted, marginBottom: "36px" }}>உங்கள் Message-ஐ அனுப்புங்கள் — விரைவில் பதில் சொல்கிறேன்.</p>
        <div style={{ background: C.card, borderRadius: "16px", padding: "36px", border: `1px solid ${C.border}` }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "30px" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h3 style={{ color: C.success, fontSize: "22px", marginBottom: "8px" }}>Message Sent!</h3>
              <p style={{ color: C.muted }}>நன்றி — விரைவில் தொடர்புகொள்கிறேன்.</p>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <input style={inputStyle} placeholder="உங்கள் பெயர்" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input style={inputStyle} placeholder="உங்கள் Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <textarea style={{ ...inputStyle, height: "130px", resize: "vertical" }} placeholder="உங்கள் Message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              <button onClick={handleSubmit} disabled={sending} style={{ width: "100%", padding: "14px", background: sending ? C.border : C.accent, border: "none", borderRadius: "10px", color: "white", fontSize: "16px", fontWeight: "700", cursor: sending ? "not-allowed" : "pointer", transition: "background 0.3s" }}>
                {sending ? "அனுப்புகிறது..." : "🚀 அனுப்பு"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "30px", textAlign: "center" }}>
        <p style={{ color: C.muted, fontSize: "14px" }}>
          © 2026 <span style={{ color: C.accentLight }}>Mohammed Nilaam</span> · Valaichenai, Batticaloa, Sri Lanka 🇱🇰
        </p>
      </footer>
    </div>
  );
}