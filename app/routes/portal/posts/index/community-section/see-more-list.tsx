import React, { FC, useState } from "react";


const ITEMS_PER_PAGE = 5;

interface SeeMoreListProps<T> {
  title: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const SeeMoreList = <T,>({ title, data, renderItem }: SeeMoreListProps<T>) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="space-y-4">{data.slice(0, visibleCount).map(renderItem)}</div>
      {visibleCount < data.length && (
        <button
          className="text-blue-400 text-sm mt-2"
          onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
        >
          See more
        </button>
      )}
    </div>
  );
};