"use client";

import { useState } from "react";

interface Gallery {
  name: string;
  logo: string;
}

const PER_PAGE = 4;

export default function GalleryLogos({ galleries, placeholders = 0 }: { galleries: Gallery[]; placeholders?: number }) {
  const [page, setPage] = useState(0);
  const placeholderCount = Math.max(placeholders, 0);
  const rawCount = galleries.length + placeholderCount;
  const pageCount = Math.ceil(rawCount / PER_PAGE);
  // Pad the last page so the grid never shows empty slots.
  const totalCount = pageCount * PER_PAGE;
  const start = page * PER_PAGE;

  const current = Array.from({ length: totalCount }, (_, i) => {
    const gallery = galleries[i];
    return gallery ? { type: "gallery" as const, gallery } : { type: "placeholder" as const };
  }).slice(start, start + PER_PAGE);

  return (
    <div className="mt-4">
      <div key={page} className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
        {current.map((item, i) =>
          item.type === "gallery" ? (
            <div
              key={item.gallery.name}
              className="h-32 px-8 border border-border rounded bg-white flex items-center justify-center"
            >
              <img loading="lazy" src={item.gallery.logo} alt={item.gallery.name} className="max-h-16 max-w-full object-contain" />
            </div>
          ) : (
            <div
              key={`placeholder-${i}`}
              className="h-32 px-8 border border-border rounded bg-white flex items-center justify-center"
            >
              <span className="text-sm text-slate">Galleria in arrivo</span>
            </div>
          )
        )}
      </div>
      {pageCount > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Vai alla schermata ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-6 bg-foreground" : "w-2 bg-border hover:bg-slate"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
