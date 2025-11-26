export default function Page() {
  return (
    <main className="container">
      <header>
        <div className="badge" aria-hidden="true">
          <span>Yoga ? Beginner friendly</span>
        </div>
        <h1>Bridge Pose (Setu Bandha Sarvangasana)</h1>
        <p className="subtitle">
          Lying on your back with knees bent and feet flat, lift the hips upward.
          Arms rest alongside your body. Follow the animated guide and steps below.
        </p>
      </header>

      <section className="grid">
        <figure className="panel figure" aria-labelledby="figcap">
          <svg
            viewBox="0 0 520 320"
            width="100%"
            height="100%"
            role="img"
            aria-describedby="figcap"
          >
            <defs>
              <linearGradient id="gradPerson" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>

            {/* Mat */}
            <rect x="60" y="240" width="400" height="16" rx="8" className="mat" />

            {/* Breath ring */}
            <g className="breath" opacity="0.35">
              <circle cx="260" cy="110" r="34" fill="#22d3ee" filter="url(#soft)" />
            </g>

            {/* Feet */}
            <g>
              <rect x="140" y="218" width="26" height="12" rx="4" fill="#34d399" />
              <rect x="354" y="218" width="26" height="12" rx="4" fill="#34d399" />
            </g>

            {/* Shoulders/head (static) */}
            <g>
              <rect x="210" y="198" width="100" height="14" rx="7" fill="#f472b6" />
              <circle cx="260" cy="188" r="10" fill="#f472b6" />
            </g>

            {/* Lower body + arms group (animated up/down) */}
            <g className="hips-anim">
              {/* Arms alongside body */}
              <rect x="202" y="210" width="8" height="30" rx="4" className="person-fill" />
              <rect x="310" y="210" width="8" height="30" rx="4" className="person-fill" />

              {/* Torso */}
              <rect
                x="220"
                y="188"
                width="80"
                height="32"
                rx="10"
                className="person-fill stroke"
              />

              {/* Hips */}
              <rect
                x="232"
                y="214"
                width="56"
                height="22"
                rx="10"
                className="person-fill stroke"
              />

              {/* Thighs */}
              <rect
                x="184"
                y="220"
                width="64"
                height="16"
                rx="8"
                transform="rotate(-12 184 220)"
                className="person-fill stroke"
              />
              <rect
                x="272"
                y="220"
                width="64"
                height="16"
                rx="8"
                transform="rotate(12 272 220)"
                className="person-fill stroke"
              />

              {/* Calves */}
              <rect
                x="150"
                y="218"
                width="44"
                height="12"
                rx="6"
                transform="rotate(6 150 218)"
                className="person-fill stroke"
              />
              <rect
                x="326"
                y="218"
                width="44"
                height="12"
                rx="6"
                transform="rotate(-6 326 218)"
                className="person-fill stroke"
              />
            </g>
          </svg>
          <figcaption id="figcap" style={{ marginTop: 10, color: 'var(--muted)' }}>
            Animated demonstration of Bridge Pose: hips lift while shoulders and feet stay grounded.
            <div className="legend" aria-hidden="true">
              <span className="dot dot-hips" /> hips
              <span className="dot dot-shoulders" /> shoulders
              <span className="dot dot-feet" /> feet
            </div>
          </figcaption>
        </figure>

        <div className="panel content">
          <h2>Step-by-step</h2>
          <ol className="steps">
            <li>Lie on your back. Bend knees, place feet hip-width apart, flat on the mat.</li>
            <li>Arms rest alongside your body, palms down. Tuck the tailbone slightly.</li>
            <li>Press feet and arms into the mat. On inhale, lift hips toward the ceiling.</li>
            <li>Keep knees tracking forward; avoid letting them splay wide.</li>
            <li>Lengthen through the tailbone, broaden collarbones, and keep the neck neutral.</li>
            <li>Hold for 3?5 breaths, then exhale to slowly roll the spine back down.</li>
          </ol>

          <h2>Tips</h2>
          <ul className="tips">
            <li>Place a block between thighs to encourage alignment if knees splay.</li>
            <li>Lift from the legs and glutes rather than the lower back.</li>
            <li>If neck is sensitive, keep the gaze straight up and chin slightly tucked.</li>
          </ul>

          <h2>Precautions</h2>
          <ul className="tips">
            <li>Avoid if you have acute neck or back injuries; consult a professional.</li>
            <li>Do not turn the head side to side while in the pose.</li>
          </ul>

          <div className="footer">
            This guide is for education only and not a substitute for medical advice.
          </div>
        </div>
      </section>
    </main>
  );
}

