// Oviedo Publishing — landing page
// A small press in Oviedo, FL. Quality books for doers.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "orange",
  "heroLayout": "asymmetric",
  "showSubmissions": true
}/*EDITMODE-END*/;

// ── Themes ───────────────────────────────────────────────────────────────
const THEMES = {
  cream: {
    paper: "#F1E9D7",
    paperDeep: "#E8DEC6",
    ink: "#1F1A14",
    inkSoft: "#5C5142",
    rule: "#1F1A14",
    accent: "#9B2A1F",
    label: "Warm cream"
  },
  bone: {
    paper: "#EDEAE2",
    paperDeep: "#E2DED3",
    ink: "#23211C",
    inkSoft: "#5A574E",
    rule: "#23211C",
    accent: "#1E3A5F",
    label: "Bone & ink"
  },
  oxblood: {
    paper: "#F4ECDC",
    paperDeep: "#ECE0C7",
    ink: "#2A1410",
    inkSoft: "#6A4A40",
    rule: "#2A1410",
    accent: "#7A1F14",
    label: "Oxblood"
  },
  orange: {
    paper: "linear-gradient(135deg, #E84C3D 0%, #F08746 50%, #F5A962 100%)",
    paperDeep: "#E84C3D",
    ink: "#FFFFFF",
    inkSoft: "#FFFAFF",
    rule: "#FFFFFF",
    accent: "#FFD700",
    label: "Vibrant orange"
  }
};

// ── Catalog ──────────────────────────────────────────────────────────────
const CATALOG = [
  {
    id: "smb-ai-playbook",
    title: "The SMB AI Adoption Playbook",
    subtitle: "Volume I. A field guide for owner-operators introducing AI tools to a 5-to-50-person business.",
    author: "David M. Elgueta",
    pubDate: "July 2026",
    pages: 87,
    isbn: "978-1-7385920-1-0",
    format: "Paperback / eBook",
    status: "Coming soon",
    materials: [
      { kind: "PDF", name: "Vendor evaluation rubric", size: "4 pages", ref: "Ch. 2" },
      { kind: "DOCX", name: "Pilot-program one-pager template", size: "1 page", ref: "Ch. 4" },
      { kind: "XLSX", name: "ROI worksheet", size: "2 sheets", ref: "Ch. 6" },
      { kind: "ZIP", name: "Sample policy documents", size: "9 files", ref: "Ch. 8" }
    ]
  },
  {
    id: "smb-ai-playbook",
    title: "The SMB AI Adoption Playbook",
    subtitle: "Volume II. A field guide for owner-operators introducing AI tools to a 5-to-50-person business.",
    author: "David M. Elgueta",
    pubDate: "August 2026",
    pages: 88,
    isbn: "",
    format: "Paperback / eBook",
    status: "Coming soon",
    materials: [
      { kind: "PDF", name: "Vendor evaluation rubric", size: "4 pages", ref: "Ch. 2" },
      { kind: "DOCX", name: "Pilot-program one-pager template", size: "1 page", ref: "Ch. 4" },
      { kind: "XLSX", name: "ROI worksheet", size: "2 sheets", ref: "Ch. 6" },
      { kind: "ZIP", name: "Sample policy documents", size: "9 files", ref: "Ch. 8" }
    ]
  }
];

// ── Small parts ──────────────────────────────────────────────────────────
function Mark({ size = 32, color }) {
  // A simple bookplate mark: an "O" with a hairline rule through it.
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: "block" }}>
      <circle cx="20" cy="20" r="14.5" fill="none" stroke={color} strokeWidth="1" />
      <line x1="3" y1="20" x2="37" y2="20" stroke={color} strokeWidth="0.6" />
      <text x="20" y="14" textAnchor="middle" fontFamily="'EB Garamond', serif"
            fontStyle="italic" fontSize="9" fill={color} letterSpacing="0.02em">est.</text>
      <text x="20" y="30" textAnchor="middle" fontFamily="'EB Garamond', serif"
            fontSize="6.5" fill={color} letterSpacing="0.18em">2026</text>
    </svg>
  );
}

function CoverPlaceholder({ title, author, accent, ink, paperDeep, status, large = false }) {
  // Type-driven placeholder cover — small-press style.
  const stripes = (
    <svg width="100%" height="100%" viewBox="0 0 100 140" preserveAspectRatio="none"
         style={{ position: "absolute", inset: 0, opacity: 0.07 }}>
      <defs>
        <pattern id={`p-${title.replace(/\s/g, "")}`} patternUnits="userSpaceOnUse"
                 width="3" height="3" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="3" stroke={ink} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100" height="140" fill={`url(#p-${title.replace(/\s/g, "")})`} />
    </svg>
  );
  return (
    <div style={{
      position: "relative", aspectRatio: "5/7", background: paperDeep,
      border: `0.5px solid ${ink}22`, padding: large ? "28px 22px" : "18px 14px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      boxShadow: `0.5px 0.5px 0 ${ink}10, 4px 4px 0 ${ink}08`,
      fontFamily: "'EB Garamond', serif", color: ink, overflow: "hidden"
    }}>
      {stripes}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: large ? 9 : 7,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: ink, opacity: 0.55, marginBottom: large ? 16 : 10
        }}>Oviedo Publishing</div>
        <div style={{
          fontSize: large ? 28 : 17, lineHeight: 1.05, fontWeight: 500,
          letterSpacing: "-0.01em", textWrap: "balance"
        }}>{title}</div>
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          height: 0.5, background: ink, opacity: 0.35,
          marginBottom: large ? 12 : 8
        }} />
        <div style={{
          fontStyle: "italic", fontSize: large ? 13 : 9, opacity: 0.8
        }}>{author}</div>
        {status && (
          <div style={{
            marginTop: large ? 10 : 6,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: large ? 8 : 6, letterSpacing: "0.16em",
            textTransform: "uppercase", color: accent
          }}>{status}</div>
        )}
      </div>
    </div>
  );
}

function FileBadge({ kind, ink }) {
  return (
    <span style={{
      display: "inline-block", fontFamily: "'JetBrains Mono', monospace",
      fontSize: 9, letterSpacing: "0.08em", padding: "2px 6px",
      border: `0.5px solid ${ink}55`, color: ink, minWidth: 38, textAlign: "center"
    }}>{kind}</span>
  );
}

// ── Hero variants ────────────────────────────────────────────────────────
function HeroAsymmetric({ t, onLookup, lookupValue, setLookupValue, openBook }) {
  return (
    <section style={{
      padding: "64px 56px 80px", display: "grid",
      gridTemplateColumns: "1.15fr 1fr", gap: 64, alignItems: "end",
      borderBottom: `0.5px solid ${t.ink}33`
    }}>
      <div>
        <div className="ovd-eyebrow" style={{ color: t.inkSoft }}>
          A small press · Oviedo, Florida · est. 2026
        </div>
        <h1 className="ovd-display" style={{ color: t.ink }}>
          Quality books<br />
          <em>for doers.</em>
        </h1>
        <p className="ovd-lede" style={{ color: t.inkSoft, maxWidth: "32ch" }}>
          We publish mid-length, practical handbooks — the kind you keep on
          the workbench, not the shelf. Every book here has a companion page
          with the worksheets, checklists, and code you'll actually use.
        </p>
        <div style={{ marginTop: 36, maxWidth: 460 }}>
          <label className="ovd-label" style={{ color: t.inkSoft }}>
            Have one of our books? Pull up its materials.
          </label>
          <form onSubmit={onLookup} style={{
            display: "flex", borderBottom: `1px solid ${t.ink}`, marginTop: 8
          }}>
            <input
              value={lookupValue}
              onChange={(e) => setLookupValue(e.target.value)}
              placeholder="Title, author, or ISBN"
              className="ovd-input"
              style={{ color: t.ink }}
            />
            <button type="submit" className="ovd-arrow" style={{ color: t.ink }}>
              Find materials &nbsp;→
            </button>
          </form>
          <div style={{
            marginTop: 10, fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, color: t.inkSoft, letterSpacing: "0.04em"
          }}>
            try: <button onClick={() => { setLookupValue("draft-proof"); openBook("draft-proof-house"); }}
              className="ovd-textlink" style={{ color: t.accent }}>draft-proof house</button>
            &nbsp;·&nbsp;
            <button onClick={() => { setLookupValue("smb ai"); openBook("smb-ai-playbook"); }}
              className="ovd-textlink" style={{ color: t.accent }}>smb ai playbook</button>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: 24 }}>
        <div style={{ maxWidth: 360, marginLeft: "auto" }}>
          <CoverPlaceholder title={CATALOG[0].title} author={CATALOG[0].author}
            accent={t.accent} ink={t.ink} paperDeep={t.paperDeep}
            status={CATALOG[0].status} large />
        </div>
        <div style={{
          marginTop: 14, display: "flex", justifyContent: "flex-end",
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          letterSpacing: "0.12em", color: t.inkSoft, textTransform: "uppercase"
        }}>
          New · Vol. 001 · Spring 2026
        </div>
      </div>
    </section>
  );
}

function HeroCentered({ t, onLookup, lookupValue, setLookupValue }) {
  return (
    <section style={{
      padding: "96px 56px 88px", textAlign: "center",
      borderBottom: `0.5px solid ${t.ink}33`
    }}>
      <div className="ovd-eyebrow" style={{ color: t.inkSoft, justifyContent: "center" }}>
        A small press · Oviedo, Florida · est. 2026
      </div>
      <h1 className="ovd-display" style={{
        color: t.ink, maxWidth: "16ch", margin: "0 auto", textAlign: "center"
      }}>
        Quality books <em>for&nbsp;doers.</em>
      </h1>
      <p className="ovd-lede" style={{
        color: t.inkSoft, maxWidth: "52ch", margin: "24px auto 0", textAlign: "center"
      }}>
        Mid-length, practical handbooks from Oviedo, Florida — the kind you
        keep on the workbench. Every book has a companion page with the
        worksheets, checklists, and code you'll actually use.
      </p>
      <form onSubmit={onLookup} style={{
        margin: "44px auto 0", maxWidth: 520, display: "flex",
        borderBottom: `1px solid ${t.ink}`
      }}>
        <input
          value={lookupValue}
          onChange={(e) => setLookupValue(e.target.value)}
          placeholder="Have a book? Look up its materials by title or ISBN"
          className="ovd-input"
          style={{ color: t.ink, textAlign: "left" }}
        />
        <button type="submit" className="ovd-arrow" style={{ color: t.ink }}>→</button>
      </form>
    </section>
  );
}

function HeroEditorial({ t }) {
  // A "front-page-of-a-broadsheet" treatment.
  return (
    <section style={{
      padding: "32px 40px 48px", borderBottom: `0.5px solid ${t.ink}33`
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
        letterSpacing: "0.16em", textTransform: "uppercase", color: t.inkSoft,
        paddingBottom: 14, borderBottom: `0.5px solid ${t.ink}55`
      }}>
        <span>Vol. I — No. 001</span>
        <span>Oviedo Publishing — Oviedo, FL</span>
        <span>Spring 2026</span>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1.6fr 1fr",
        gap: 40, marginTop: 32, alignItems: "start"
      }}>
        <div>
          <div className="ovd-kicker" style={{ color: t.accent }}>The Press</div>
          <p style={{
            fontFamily: "'EB Garamond', serif", fontSize: 16, lineHeight: 1.55,
            color: t.ink, margin: "10px 0 0", textWrap: "pretty"
          }}>
            Oviedo Publishing is a small independent press in central Florida.
            We make mid-length, practical handbooks for people who are
            actually going to do the thing.
          </p>
          <p style={{
            fontFamily: "'EB Garamond', serif", fontStyle: "italic",
            fontSize: 14, lineHeight: 1.5, color: t.inkSoft, marginTop: 12
          }}>
            Catalog of two. Growing slowly, on purpose.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 className="ovd-display" style={{
            color: t.ink, fontSize: "clamp(64px, 9vw, 132px)",
            margin: 0, lineHeight: 0.92, textAlign: "center"
          }}>
            Books<br /><em>for doers.</em>
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ width: "100%", maxWidth: 200 }}>
            <CoverPlaceholder title={CATALOG[0].title} author={CATALOG[0].author}
              accent={t.accent} ink={t.ink} paperDeep={t.paperDeep}
              status={CATALOG[0].status} />
            <div style={{
              marginTop: 8, fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, letterSpacing: "0.12em", color: t.inkSoft,
              textTransform: "uppercase", textAlign: "center"
            }}>Now available →</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Catalog grid ─────────────────────────────────────────────────────────
function Catalog({ t, openBook }) {
  return (
    <section id="catalog" style={{
      padding: "80px 56px", borderBottom: `0.5px solid ${t.ink}33`
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        marginBottom: 48
      }}>
        <h2 className="ovd-section-title" style={{ color: t.ink, whiteSpace: "nowrap" }}>
          The catalog
        </h2>
        <div className="ovd-kicker" style={{ color: t.inkSoft }}>
          02 titles · 2026
        </div>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 56
      }}>
        {CATALOG.map((book) => (
          <article key={book.id} style={{
            display: "grid", gridTemplateColumns: "200px 1fr", gap: 32,
            alignItems: "start"
          }}>
            <button onClick={() => openBook(book.id)} className="ovd-coverbtn">
              <CoverPlaceholder title={book.title} author={book.author}
                accent={t.accent} ink={t.ink} paperDeep={t.paperDeep}
                status={book.status} />
            </button>
            <div>
              <div className="ovd-kicker" style={{ color: t.accent }}>
                {book.status}
              </div>
              <h3 style={{
                fontFamily: "'EB Garamond', serif", fontWeight: 500,
                fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.01em",
                margin: "10px 0 0", color: t.ink, textWrap: "balance"
              }}>{book.title}</h3>
              <p style={{
                fontFamily: "'EB Garamond', serif", fontStyle: "italic",
                fontSize: 16, lineHeight: 1.45, color: t.inkSoft,
                margin: "10px 0 0", textWrap: "pretty"
              }}>{book.subtitle}</p>
              <dl style={{
                marginTop: 20, display: "grid",
                gridTemplateColumns: "auto 1fr", gap: "4px 20px",
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                color: t.inkSoft, letterSpacing: "0.02em"
              }}>
                <dt>Author</dt><dd style={{ margin: 0, color: t.ink }}>{book.author}</dd>
                <dt>Pages</dt><dd style={{ margin: 0, color: t.ink }}>{book.pages}</dd>
                <dt>Format</dt><dd style={{ margin: 0, color: t.ink }}>{book.format}</dd>
                <dt>ISBN</dt><dd style={{ margin: 0, color: t.ink }}>{book.isbn}</dd>
                <dt>Materials</dt><dd style={{ margin: 0, color: t.ink }}>
                  {book.materials.length} downloads
                </dd>
              </dl>
              <button onClick={() => openBook(book.id)} className="ovd-readmore"
                style={{ color: t.ink, borderColor: t.ink }}>
                Open companion page &nbsp;→
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── Materials hub ────────────────────────────────────────────────────────
function MaterialsHub({ t, openBook }) {
  return (
    <section id="materials" style={{
      padding: "80px 56px", borderBottom: `0.5px solid ${t.ink}33`,
      background: t.paperDeep
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80,
        alignItems: "start"
      }}>
        <div style={{ position: "sticky", top: 24 }}>
          <div className="ovd-kicker" style={{ color: t.accent }}>
            Companion materials
          </div>
          <h2 className="ovd-section-title" style={{
            color: t.ink, marginTop: 12
          }}>
            Everything that ships <em>alongside</em> the book.
          </h2>
          <p style={{
            fontFamily: "'EB Garamond', serif", fontSize: 17,
            lineHeight: 1.5, color: t.inkSoft, marginTop: 18,
            textWrap: "pretty", maxWidth: "38ch"
          }}>
            Worksheets, checklists, spreadsheets, code, and templates —
            organized by book. Free to download, no account needed.
            Materials are versioned and updated as books are revised.
          </p>
          <ul style={{
            listStyle: "none", padding: 0, margin: "28px 0 0",
            fontFamily: "'EB Garamond', serif", fontSize: 16,
            color: t.ink, display: "flex", flexDirection: "column", gap: 10
          }}>
            <li>· Print-ready PDFs at letter and A4</li>
            <li>· Editable spreadsheets and documents</li>
            <li>· Source files where relevant</li>
            <li>· Errata and revisions, dated</li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {CATALOG.map((book) => (
            <div key={book.id} style={{
              borderTop: `0.5px solid ${t.ink}55`, paddingTop: 24
            }}>
              <button onClick={() => openBook(book.id)}
                className="ovd-bookheader" style={{ color: t.ink }}>
                <span style={{
                  fontFamily: "'EB Garamond', serif", fontStyle: "italic",
                  fontSize: 22, fontWeight: 500
                }}>{book.title}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  letterSpacing: "0.1em", color: t.inkSoft,
                  textTransform: "uppercase"
                }}>{book.materials.length} files →</span>
              </button>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
                {book.materials.map((m, i) => (
                  <li key={i} style={{
                    display: "grid", gridTemplateColumns: "auto 1fr auto auto",
                    alignItems: "baseline", gap: 16, padding: "10px 0",
                    borderTop: i === 0 ? "none" : `0.5px solid ${t.ink}22`
                  }}>
                    <FileBadge kind={m.kind} ink={t.ink} />
                    <span style={{
                      fontFamily: "'EB Garamond', serif", fontSize: 16,
                      color: t.ink
                    }}>{m.name}</span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      color: t.inkSoft, letterSpacing: "0.04em"
                    }}>{m.ref} · {m.size}</span>
                    <button className="ovd-dl" style={{ color: t.accent }}>
                      download
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ────────────────────────────────────────────────────────────────
function About({ t }) {
  return (
    <section id="about" style={{
      padding: "96px 56px", borderBottom: `0.5px solid ${t.ink}33`
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80,
        alignItems: "start"
      }}>
        <div>
          <div className="ovd-kicker" style={{ color: t.accent }}>
            About the press
          </div>
          <h2 className="ovd-section-title" style={{ color: t.ink, marginTop: 12 }}>
            A small press in <em>central Florida.</em>
          </h2>
        </div>
        <div style={{
          fontFamily: "'EB Garamond', serif", fontSize: 19,
          lineHeight: 1.55, color: t.ink, columnCount: 2,
          columnGap: 40, textWrap: "pretty"
        }}>
          <p style={{ margin: "0 0 1em" }}>
            Oviedo Publishing is a one-room press founded in 2026, in
            Oviedo, Florida — a small town outside Orlando. We make
            mid-length, practical handbooks for people who are actually
            going to do the thing: homeowners, operators, builders,
            tinkerers, and small-business owners.
          </p>
          <p style={{ margin: "0 0 1em" }}>
            We believe a useful book is one you can hold in one hand and
            apply with the other. So we keep our titles short, our prose
            plain, and our companion materials free. Every page on this
            website exists in service of one of our books.
          </p>
          <p style={{ margin: 0, fontStyle: "italic", color: t.inkSoft }}>
            We grow the catalog slowly and on purpose. If a book doesn't
            earn its place on a workbench, we don't publish it.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Submissions / Contact ────────────────────────────────────────────────
function Submissions({ t }) {
  return (
    <section id="submissions" style={{
      padding: "80px 56px", background: t.paperDeep,
      borderBottom: `0.5px solid ${t.ink}33`
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80
      }}>
        <div>
          <div className="ovd-kicker" style={{ color: t.accent }}>
            Submissions
          </div>
          <h2 className="ovd-section-title" style={{ color: t.ink, marginTop: 12 }}>
            Pitching a handbook?
          </h2>
          <p style={{
            fontFamily: "'EB Garamond', serif", fontSize: 17,
            lineHeight: 1.5, color: t.ink, marginTop: 18,
            textWrap: "pretty", maxWidth: "42ch"
          }}>
            We read short pitches year-round. Send a one-page outline,
            a sample chapter (no more than 3,000 words), and a few
            sentences about who the book is for. We respond within
            three weeks, every time.
          </p>
          <a href="mailto:submissions@oviedopublishing.com"
            className="ovd-bigmail" style={{ color: t.ink }}>
            submissions@oviedopublishing.com&nbsp;→
          </a>
        </div>
        <div>
          <div className="ovd-kicker" style={{ color: t.accent }}>
            Get in touch
          </div>
          <h2 className="ovd-section-title" style={{ color: t.ink, marginTop: 12 }}>
            Anything else.
          </h2>
          <dl style={{
            marginTop: 24, display: "grid",
            gridTemplateColumns: "auto 1fr", gap: "12px 28px",
            fontFamily: "'EB Garamond', serif", fontSize: 17,
            color: t.ink
          }}>
            <dt style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              letterSpacing: "0.1em", color: t.inkSoft,
              textTransform: "uppercase", paddingTop: 4
            }}>Hello</dt>
            <dd style={{ margin: 0 }}>
              <a className="ovd-mail" style={{ color: t.ink }}
                href="mailto:hello@oviedopublishing.com">
                hello@oviedopublishing.com
              </a>
            </dd>
            <dt style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              letterSpacing: "0.1em", color: t.inkSoft,
              textTransform: "uppercase", paddingTop: 4
            }}>Press</dt>
            <dd style={{ margin: 0 }}>
              <a className="ovd-mail" style={{ color: t.ink }}
                href="mailto:press@oviedopublishing.com">
                press@oviedopublishing.com
              </a>
            </dd>
            <dt style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              letterSpacing: "0.1em", color: t.inkSoft,
              textTransform: "uppercase", paddingTop: 4
            }}>Post</dt>
            <dd style={{ margin: 0, fontStyle: "italic" }}>
              Oviedo Publishing<br />
              P.O. Box 248<br />
              Oviedo, FL 32765
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────
function Footer({ t }) {
  return (
    <footer style={{
      padding: "40px 56px 56px", display: "flex",
      justifyContent: "space-between", alignItems: "center",
      gap: 32, color: t.inkSoft,
      fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
      letterSpacing: "0.06em"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Mark size={28} color={t.ink} />
        <span style={{ color: t.ink }}>Oviedo Publishing</span>
        <span>·</span>
        <span>Oviedo, FL · est. 2026</span>
      </div>
      <div>oviedopublishing.com</div>
      <div>© 2026, all rights reserved</div>
    </footer>
  );
}

// ── Book detail overlay ──────────────────────────────────────────────────
function BookDetail({ t, book, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: t.paper, zIndex: 50,
      overflow: "auto"
    }}>
      <div style={{
        position: "sticky", top: 0, padding: "20px 56px",
        background: `${t.paper}f0`, backdropFilter: "blur(6px)",
        borderBottom: `0.5px solid ${t.ink}33`, display: "flex",
        justifyContent: "space-between", alignItems: "center", zIndex: 1
      }}>
        <button onClick={onClose} className="ovd-back"
          style={{ color: t.ink }}>
          ← Back to catalog
        </button>
        <div className="ovd-kicker" style={{ color: t.inkSoft }}>
          oviedopublishing.com / books / {book.id}
        </div>
      </div>
      <div style={{ padding: "56px 56px 80px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64,
          alignItems: "end", paddingBottom: 56,
          borderBottom: `0.5px solid ${t.ink}33`
        }}>
          <div>
            <div className="ovd-kicker" style={{ color: t.accent }}>
              {book.status}
            </div>
            <h1 className="ovd-display" style={{
              color: t.ink, fontSize: "clamp(48px, 6vw, 88px)",
              marginTop: 16
            }}>{book.title}</h1>
            <p style={{
              fontFamily: "'EB Garamond', serif", fontStyle: "italic",
              fontSize: 22, lineHeight: 1.4, color: t.inkSoft,
              marginTop: 18, maxWidth: "40ch", textWrap: "pretty"
            }}>{book.subtitle}</p>
            <dl style={{
              marginTop: 32, display: "grid",
              gridTemplateColumns: "auto 1fr", gap: "8px 32px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: t.inkSoft, letterSpacing: "0.04em",
              maxWidth: 420
            }}>
              <dt>Author</dt><dd style={{ margin: 0, color: t.ink }}>{book.author}</dd>
              <dt>Pub. date</dt><dd style={{ margin: 0, color: t.ink }}>{book.pubDate}</dd>
              <dt>Pages</dt><dd style={{ margin: 0, color: t.ink }}>{book.pages}</dd>
              <dt>Format</dt><dd style={{ margin: 0, color: t.ink }}>{book.format}</dd>
              <dt>ISBN</dt><dd style={{ margin: 0, color: t.ink }}>{book.isbn}</dd>
            </dl>
          </div>
          <div style={{ maxWidth: 360, marginLeft: "auto", width: "100%" }}>
            <CoverPlaceholder title={book.title} author={book.author}
              accent={t.accent} ink={t.ink} paperDeep={t.paperDeep}
              status={book.status} large />
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "baseline", marginBottom: 28
          }}>
            <h2 className="ovd-section-title" style={{
              color: t.ink, fontSize: "clamp(32px, 4vw, 48px)"
            }}>Companion materials</h2>
            <div className="ovd-kicker" style={{ color: t.inkSoft }}>
              {book.materials.length} files · free download
            </div>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {book.materials.map((m, i) => (
              <li key={i} style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr auto auto",
                alignItems: "center", gap: 24, padding: "20px 0",
                borderTop: `0.5px solid ${t.ink}33`,
                borderBottom: i === book.materials.length - 1
                  ? `0.5px solid ${t.ink}33` : "none"
              }}>
                <FileBadge kind={m.kind} ink={t.ink} />
                <div>
                  <div style={{
                    fontFamily: "'EB Garamond', serif", fontSize: 22,
                    color: t.ink, lineHeight: 1.2
                  }}>{m.name}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                    color: t.inkSoft, letterSpacing: "0.04em", marginTop: 4
                  }}>From {m.ref} · {m.size}</div>
                </div>
                <div className="ovd-kicker" style={{ color: t.inkSoft }}>
                  v.1.0 · 2026
                </div>
                <button className="ovd-bigdl" style={{
                  color: t.ink, borderColor: t.ink
                }}>Download &nbsp;↓</button>
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          marginTop: 64, padding: "32px 36px",
          border: `0.5px solid ${t.ink}55`,
          fontFamily: "'EB Garamond', serif"
        }}>
          <div className="ovd-kicker" style={{ color: t.accent }}>
            Errata
          </div>
          <p style={{
            fontSize: 17, lineHeight: 1.55, color: t.ink, marginTop: 12,
            fontStyle: "italic"
          }}>
            No corrections logged for the current printing.
            Found something? Email <a className="ovd-mail"
              style={{ color: t.ink }} href="mailto:errata@oviedopublishing.com">
              errata@oviedopublishing.com</a> — we publish corrections here, dated.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const t = THEMES[tweaks.theme] || THEMES.cream;

  const [lookupValue, setLookupValue] = React.useState("");
  const [activeBookId, setActiveBookId] = React.useState(null);
  const activeBook = CATALOG.find((b) => b.id === activeBookId);

  const openBook = (id) => {
    setActiveBookId(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const onLookup = (e) => {
    e.preventDefault();
    const q = lookupValue.trim().toLowerCase();
    if (!q) return;
    const hit = CATALOG.find((b) =>
      b.title.toLowerCase().includes(q) ||
      b.id.includes(q.replace(/\s/g, "-")) ||
      b.isbn.includes(q)
    );
    if (hit) openBook(hit.id);
    else {
      // soft: scroll to catalog
      document.getElementById("catalog")?.scrollIntoView();
    }
  };

  // Apply theme to body for full-bleed
  React.useEffect(() => {
    document.body.style.background = t.paper;
    document.body.style.color = t.ink;
  }, [t]);

  const Hero = {
    asymmetric: HeroAsymmetric,
    centered: HeroCentered,
    editorial: HeroEditorial
  }[tweaks.heroLayout] || HeroAsymmetric;

  return (
    <div style={{ background: t.paper, color: t.ink, minHeight: "100vh" }}>
      {/* Top bar */}
      <header style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "24px 56px", borderBottom: `0.5px solid ${t.ink}33`,
        position: "sticky", top: 0, background: `${t.paper}ee`,
        backdropFilter: "blur(6px)", zIndex: 10
      }}>
        <a href="#top" style={{
          display: "flex", alignItems: "center", gap: 12,
          textDecoration: "none", color: t.ink
        }}>
          <Mark size={32} color={t.ink} />
          <span style={{
            fontFamily: "'EB Garamond', serif", fontSize: 22,
            fontWeight: 500, letterSpacing: "-0.005em"
          }}>Oviedo Publishing</span>
        </a>
        <nav style={{ display: "flex", gap: 32 }}>
          {[
            ["Catalog", "catalog"],
            ["Materials", "materials"],
            ["About", "about"],
            ["Submissions", "submissions"]
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} className="ovd-nav"
              style={{ color: t.ink }}>{label}</a>
          ))}
        </nav>
      </header>

      <Hero t={t} onLookup={onLookup} lookupValue={lookupValue}
        setLookupValue={setLookupValue} openBook={openBook} />

      <Catalog t={t} openBook={openBook} />
      <MaterialsHub t={t} openBook={openBook} />
      <About t={t} />
      {tweaks.showSubmissions && <Submissions t={t} />}
      <Footer t={t} />

      {activeBook && (
        <BookDetail t={t} book={activeBook} onClose={() => setActiveBookId(null)} />
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio label="Palette" value={tweaks.theme}
          options={[
            { value: "cream", label: "Cream" },
            { value: "bone", label: "Bone" },
            { value: "oxblood", label: "Oxblood" }
          ]}
          onChange={(v) => setTweak("theme", v)} />
        <TweakSection label="Hero layout" />
        <TweakRadio label="Variant" value={tweaks.heroLayout}
          options={[
            { value: "asymmetric", label: "Asym." },
            { value: "centered", label: "Center" },
            { value: "editorial", label: "Broad." }
          ]}
          onChange={(v) => setTweak("heroLayout", v)} />
        <TweakSection label="Sections" />
        <TweakToggle label="Show submissions" value={tweaks.showSubmissions}
          onChange={(v) => setTweak("showSubmissions", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);