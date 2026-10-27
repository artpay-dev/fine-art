const EcosystemDiagram = () => (
  <svg
    viewBox="0 0 1080 1350"
    className="w-full h-auto"
    role="img"
    aria-label="Ecosistema Artpay con partner finanziari, merchant e collezionista"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      .ec-node circle, .ec-node text, .ec-solo-circle {
        transition: transform 0.35s ease, fill 0.35s ease;
        transform-box: fill-box;
        transform-origin: center;
        cursor: default;
      }
      .ec-node:hover circle { transform: scale(1.18); }
      .ec-node:hover text { transform: scale(1.12); fill: #8F96FF; }
      .ec-label {
        transition: transform 0.35s ease, fill 0.35s ease;
        transform-box: fill-box;
        transform-origin: center;
        cursor: default;
      }
      .ec-label:hover { transform: scale(1.12); fill: #8F96FF; }
      .ec-solo-circle:hover { transform: scale(1.08); }
    `}</style>

    {/* Linee di collegamento */}
    <g stroke="#3D4FED" strokeWidth="3" fill="none">
      <line x1="527" y1="327" x2="594" y2="148" />
      <line x1="527" y1="327" x2="213" y2="1155" />
      <line x1="527" y1="327" x2="840" y2="1155" />
    </g>

    {/* Cerchio centrale */}
    <circle className="ec-solo-circle" cx="527" cy="327" r="62" fill="#FFFFFF" />

    {/* Nodi esterni con etichette */}
    <g className="ec-node">
      <circle cx="594" cy="148" r="30" fill="#3D4FED" />
      <text className="ec-label" x="539" y="158" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="400" fill="#3D4FED">Servizi Finanziari</text>
    </g>
    <g className="ec-node">
      <circle cx="213" cy="1155" r="30" fill="#3D4FED" />
      <text className="ec-label" x="213" y="1230" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="400" fill="#3D4FED">Merchant</text>
    </g>
    <g className="ec-node">
      <circle cx="840" cy="1155" r="30" fill="#3D4FED" />
      <text className="ec-label" x="840" y="1230" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="400" fill="#3D4FED">Collezionista</text>
    </g>

    {/* Etichetta centrale */}
    <g className="ec-node">
      <text className="ec-label" x="250" y="337" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="400" fill="#FFFFFF">We're here!</text>
    </g>

  </svg>
);

export default EcosystemDiagram;
