import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaUndo, FaRedo } from "react-icons/fa";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function Product360Viewer({ product }) {
  const hasRealViews = product.views?.length > 1;
  const views = hasRealViews
    ? product.views
    : product.demo360
      ? Array.from({ length: 12 }, () => product.image)
      : [product.image];
  const [frame, setFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, startFrame: 0 });

  useEffect(() => {
    if (!isPlaying || views.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setFrame((currentFrame) => (currentFrame + 1) % views.length);
    }, 120);

    return () => window.clearInterval(intervalId);
  }, [isPlaying, views.length]);

  const moveFrame = (direction) => {
    setFrame((currentFrame) => (currentFrame + direction + views.length) % views.length);
  };

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = { startX: event.clientX, startFrame: frame };
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!isDragging || views.length < 2) return;

    const distance = event.clientX - dragState.current.startX;
    const frameOffset = Math.round(distance / 24);
    const nextFrame = dragState.current.startFrame - frameOffset;
    setFrame((nextFrame % views.length + views.length) % views.length);
  };

  const stopDragging = () => setIsDragging(false);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/logo.png";
  };

  const demoRotation = product.demo360 && !hasRealViews
    ? ((frame - 6) * 7)
    : 0;

  return (
    <div className={`viewer-360${isDragging ? " is-dragging" : ""}`}>
      <div
        className="viewer-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
      >
        <img
          src={views[frame]}
          alt={`${product.name}, vista ${frame + 1} de ${views.length}`}
          draggable="false"
          style={{ transform: `perspective(900px) rotateY(${demoRotation}deg) scaleX(${Math.max(0.72, 1 - Math.abs(demoRotation) / 180)})` }}
          onError={handleImageError}
        />
        <span className="viewer-badge">{product.demo360 && !hasRealViews ? "Demo 360" : "Vista 360"}</span>
      </div>

      <div className="viewer-controls" aria-label="Controles de vista 360">
        <button type="button" onClick={() => moveFrame(-1)} aria-label="Vista anterior" title="Vista anterior">
          <FaUndo aria-hidden="true" />
        </button>
        <button
          type="button"
          className="viewer-play"
          onClick={() => setIsPlaying((playing) => !playing)}
          disabled={views.length < 2}
          aria-label={isPlaying ? "Pausar giro" : "Girar producto"}
          title={views.length < 2 ? "Agrega más vistas para activar el giro" : undefined}
        >
          {isPlaying ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
        </button>
        <button type="button" onClick={() => moveFrame(1)} aria-label="Vista siguiente" title="Vista siguiente">
          <FaRedo aria-hidden="true" />
        </button>
      </div>

      <p className="viewer-hint">
        {product.demo360 && !hasRealViews
          ? "Demo interactiva con una imagen de internet"
          : views.length > 1
            ? "Arrastra para girar el producto"
            : "Agrega fotos laterales para activar el 360 real"}
      </p>
    </div>
  );
}
