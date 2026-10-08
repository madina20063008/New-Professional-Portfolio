export function ProjectVisual({ tone, compact = false, image, imageAlt = "" }: { tone: string; compact?: boolean; image?: string; imageAlt?: string }) {
  if (image) {
    return (
      <div className={`project-visual project-visual-image tone-${tone} ${compact ? "compact" : ""}`}>
        <img src={image} alt={imageAlt} />
      </div>
    );
  }

  return (
    <div className={`project-visual tone-${tone} ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="pv-window">
        <div className="pv-bar"><i/><i/><i/><span /></div>
        <div className="pv-content">
          <aside><b/><b/><b/><b/></aside>
          <div className="pv-main">
            <div className="pv-heading"><span/><small/></div>
            <div className="pv-kpis"><i/><i/><i/></div>
            <div className="pv-chart"><b/><b/><b/><b/><b/><b/></div>
          </div>
        </div>
      </div>
      <div className="pv-float"><i/><span/><span/></div>
    </div>
  );
}
