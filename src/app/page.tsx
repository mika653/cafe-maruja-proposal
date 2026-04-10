import Image from "next/image";

const pages = [
  { id: "cover", file: "/pages/01-cover.png", label: "Cover" },
  { id: "about", file: "/pages/02-about.png", label: "About" },
  { id: "scope", file: "/pages/03-scope.png", label: "Scope of Work" },
  { id: "investment", file: "/pages/04-investment.png", label: "Investment" },
  { id: "process", file: "/pages/05-process.png", label: "Our Process" },
  { id: "cta", file: "/pages/06-cta.png", label: "Why Us & Contact" },
];

export default function ProposalPage() {
  return (
    <main>
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #1f1f1f",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              minWidth: 0,
            }}
          >
            <span
              style={{
                color: "#c9a962",
                fontSize: 11,
                letterSpacing: 3,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              FISHBONE CREATIVES
            </span>
            <span
              style={{
                color: "#444",
                fontSize: 11,
              }}
            >
              ·
            </span>
            <span
              style={{
                color: "#888",
                fontSize: 11,
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Cafe Maruja Proposal
            </span>
          </div>
          <a
            href="/cafe-maruja-proposal.pdf"
            download
            style={{
              background: "#c9a962",
              color: "#0a0a0a",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.5,
              whiteSpace: "nowrap",
            }}
          >
            DOWNLOAD PDF
          </a>
        </div>
      </header>

      {/* Pages */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 16px 64px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {pages.map((p, i) => (
          <section
            key={p.id}
            id={p.id}
            style={{
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
              border: "1px solid #1f1f1f",
              background: "#0f0f0f",
            }}
          >
            <Image
              src={p.file}
              alt={`Page ${i + 1}: ${p.label}`}
              width={2400}
              height={3200}
              priority={i === 0}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1f1f1f",
          padding: "32px 24px 48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#666",
            fontSize: 11,
            letterSpacing: 1,
          }}
        >
          © 2026 Fishbone Creatives · Prepared for Cafe Maruja, Boracay
        </p>
        <p
          style={{
            color: "#444",
            fontSize: 10,
            marginTop: 8,
            fontStyle: "italic",
          }}
        >
          This proposal is valid for 30 days.
        </p>
      </footer>
    </main>
  );
}
