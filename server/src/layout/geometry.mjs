// src/layout/geometry.ts
function centerToBox(cx, cy, width, height) {
  return { x: cx - width / 2, y: cy - height / 2, width, height };
}
function sideAnchor(box, side) {
  switch (side) {
    case "L":
      return { x: box.x, y: box.y + box.height / 2 };
    case "R":
      return { x: box.x + box.width, y: box.y + box.height / 2 };
    case "T":
      return { x: box.x + box.width / 2, y: box.y };
    case "B":
      return { x: box.x + box.width / 2, y: box.y + box.height };
  }
}
function unionBounds(boxes, padding = 0) {
  if (boxes.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const b of boxes) {
    minX = Math.min(minX, b.x);
    minY = Math.min(minY, b.y);
    maxX = Math.max(maxX, b.x + b.width);
    maxY = Math.max(maxY, b.y + b.height);
  }
  return {
    x: minX - padding,
    y: minY - padding,
    width: maxX - minX + padding * 2,
    height: maxY - minY + padding * 2
  };
}
export {
  centerToBox,
  sideAnchor,
  unionBounds
};
