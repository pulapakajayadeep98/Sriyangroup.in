import React from "react";
import "./PageLoader.css";

/**
 * PageLoader
 * Props:
 *  - visible: boolean
 *  - logoSrc: string (path to your logo)
 */
export default function PageLoader({ visible, logoSrc = "/logo.png" }) {
  return (
    <div className={`pgloader ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <div className="pgloader__box">
        <div className="pgloader__ring" />
        <img className="pgloader__logo" src={logoSrc} alt="Loading…" />
        <div className="pgloader__hint">Loading…</div>
      </div>
    </div>
  );
}
