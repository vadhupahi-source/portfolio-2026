import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("portfolio-backend-2026-production.up.railway.app/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>🌟 My Portfolio</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>💼 {profile.role}</p>
          <p>📍 {profile.location}</p>
          <h3>Skills:</h3>
          {profile.skills.map((skill, i) => (
            <span key={i} style={{
              margin: "5px",
              padding: "5px 10px",
              background: "#0070f3",
              color: "white",
              borderRadius: "5px"
            }}>
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;