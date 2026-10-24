/* Deezle Infra Diagrams: rf-app, part 4 of 4. The server joins the parts in order and inlines them into the widget page. Built from src/widget-app by scripts/build-server.mjs. */
  // node_modules/html-to-image/es/index.js
  async function toSvg(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const clonedNode = await cloneNode(node, options, true);
    await embedWebFonts(clonedNode, options);
    await embedImages(clonedNode, options);
    applyStyle(clonedNode, options);
    const datauri = await nodeToDataURL(clonedNode, width, height);
    return datauri;
  }
  async function toCanvas(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const svg2 = await toSvg(node, options);
    const img = await createImage(svg2);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const ratio = options.pixelRatio || getPixelRatio();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) {
      checkCanvasDimensions(canvas);
    }
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    if (options.backgroundColor) {
      context.fillStyle = options.backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
  }
  async function toPng(node, options = {}) {
    const canvas = await toCanvas(node, options);
    return canvas.toDataURL();
  }

  // node_modules/@xyflow/react/dist/style.css
  var style_default3 = [
    "/* this gets exported as style.css and can be used for the default theming */",
    "/* these are the necessary styles for React/Svelte Flow, they get used by base.css and style.css */",
    ".react-flow {",
    "  direction: ltr;",
    "",
    "  --xy-edge-stroke-default: #b1b1b7;",
    "  --xy-edge-stroke-width-default: 1;",
    "  --xy-edge-stroke-selected-default: #555;",
    "",
    "  --xy-connectionline-stroke-default: #b1b1b7;",
    "  --xy-connectionline-stroke-width-default: 1;",
    "",
    "  --xy-attribution-background-color-default: rgba(255, 255, 255, 0.5);",
    "",
    "  --xy-minimap-background-color-default: #fff;",
    "  --xy-minimap-mask-background-color-default: rgba(240, 240, 240, 0.6);",
    "  --xy-minimap-mask-stroke-color-default: transparent;",
    "  --xy-minimap-mask-stroke-width-default: 1;",
    "  --xy-minimap-node-background-color-default: #e2e2e2;",
    "  --xy-minimap-node-stroke-color-default: transparent;",
    "  --xy-minimap-node-stroke-width-default: 2;",
    "",
    "  --xy-background-color-default: transparent;",
    "  --xy-background-pattern-dots-color-default: #91919a;",
    "  --xy-background-pattern-lines-color-default: #eee;",
    "  --xy-background-pattern-cross-color-default: #e2e2e2;",
    "  background-color: var(--xy-background-color, var(--xy-background-color-default));",
    "  --xy-node-color-default: inherit;",
    "  --xy-node-border-default: 1px solid #1a192b;",
    "  --xy-node-background-color-default: #fff;",
    "  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);",
    "  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(0, 0, 0, 0.08);",
    "  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #1a192b;",
    "  --xy-node-border-radius-default: 3px;",
    "",
    "  --xy-handle-background-color-default: #1a192b;",
    "  --xy-handle-border-color-default: #fff;",
    "",
    "  --xy-selection-background-color-default: rgba(0, 89, 220, 0.08);",
    "  --xy-selection-border-default: 1px dotted rgba(0, 89, 220, 0.8);",
    "",
    "  --xy-controls-button-background-color-default: #fefefe;",
    "  --xy-controls-button-background-color-hover-default: #f4f4f4;",
    "  --xy-controls-button-color-default: inherit;",
    "  --xy-controls-button-color-hover-default: inherit;",
    "  --xy-controls-button-border-color-default: #eee;",
    "  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);",
    "",
    "  --xy-edge-label-background-color-default: #ffffff;",
    "  --xy-edge-label-color-default: inherit;",
    "  --xy-resize-background-color-default: #3367d9;",
    "}",
    ".react-flow.dark {",
    "  --xy-edge-stroke-default: #3e3e3e;",
    "  --xy-edge-stroke-width-default: 1;",
    "  --xy-edge-stroke-selected-default: #727272;",
    "",
    "  --xy-connectionline-stroke-default: #b1b1b7;",
    "  --xy-connectionline-stroke-width-default: 1;",
    "",
    "  --xy-attribution-background-color-default: rgba(150, 150, 150, 0.25);",
    "",
    "  --xy-minimap-background-color-default: #141414;",
    "  --xy-minimap-mask-background-color-default: rgba(60, 60, 60, 0.6);",
    "  --xy-minimap-mask-stroke-color-default: transparent;",
    "  --xy-minimap-mask-stroke-width-default: 1;",
    "  --xy-minimap-node-background-color-default: #2b2b2b;",
    "  --xy-minimap-node-stroke-color-default: transparent;",
    "  --xy-minimap-node-stroke-width-default: 2;",
    "",
    "  --xy-background-color-default: #141414;",
    "  --xy-background-pattern-dots-color-default: #777;",
    "  --xy-background-pattern-lines-color-default: #777;",
    "  --xy-background-pattern-cross-color-default: #777;",
    "  --xy-node-color-default: #f8f8f8;",
    "  --xy-node-border-default: 1px solid #3c3c3c;",
    "  --xy-node-background-color-default: #1e1e1e;",
    "  --xy-node-group-background-color-default: rgba(240, 240, 240, 0.25);",
    "  --xy-node-boxshadow-hover-default: 0 1px 4px 1px rgba(255, 255, 255, 0.08);",
    "  --xy-node-boxshadow-selected-default: 0 0 0 0.5px #999;",
    "",
    "  --xy-handle-background-color-default: #bebebe;",
    "  --xy-handle-border-color-default: #1e1e1e;",
    "",
    "  --xy-selection-background-color-default: rgba(200, 200, 220, 0.08);",
    "  --xy-selection-border-default: 1px dotted rgba(200, 200, 220, 0.8);",
    "",
    "  --xy-controls-button-background-color-default: #2b2b2b;",
    "  --xy-controls-button-background-color-hover-default: #3e3e3e;",
    "  --xy-controls-button-color-default: #f8f8f8;",
    "  --xy-controls-button-color-hover-default: #fff;",
    "  --xy-controls-button-border-color-default: #5b5b5b;",
    "  --xy-controls-box-shadow-default: 0 0 2px 1px rgba(0, 0, 0, 0.08);",
    "",
    "  --xy-edge-label-background-color-default: #141414;",
    "  --xy-edge-label-color-default: #f8f8f8;",
    "}",
    ".react-flow__background {",
    "  background-color: var(--xy-background-color-props, var(--xy-background-color, var(--xy-background-color-default)));",
    "  pointer-events: none;",
    "  z-index: -1;",
    "}",
    ".react-flow__container {",
    "  position: absolute;",
    "  width: 100%;",
    "  height: 100%;",
    "  top: 0;",
    "  left: 0;",
    "}",
    ".react-flow__pane {",
    "  z-index: 1;",
    "  touch-action: none;",
    "}",
    ".react-flow__pane.draggable {",
    "    cursor: grab;",
    "  }",
    ".react-flow__pane.dragging {",
    "    cursor: grabbing;",
    "  }",
    ".react-flow__pane.selection {",
    "    cursor: pointer;",
    "  }",
    ".react-flow__viewport {",
    "  transform-origin: 0 0;",
    "  z-index: 2;",
    "  pointer-events: none;",
    "}",
    ".react-flow__renderer {",
    "  z-index: 4;",
    "}",
    ".react-flow__selection {",
    "  z-index: 6;",
    "}",
    ".react-flow__nodesselection-rect:focus,",
    ".react-flow__nodesselection-rect:focus-visible {",
    "  outline: none;",
    "}",
    ".react-flow__edge-path {",
    "  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));",
    "  stroke-width: var(--xy-edge-stroke-width, var(--xy-edge-stroke-width-default));",
    "  fill: none;",
    "}",
    ".react-flow__connection-path {",
    "  stroke: var(--xy-connectionline-stroke, var(--xy-connectionline-stroke-default));",
    "  stroke-width: var(--xy-connectionline-stroke-width, var(--xy-connectionline-stroke-width-default));",
    "  fill: none;",
    "}",
    ".react-flow .react-flow__edges {",
    "  position: absolute;",
    "}",
    ".react-flow .react-flow__edges svg {",
    "    overflow: visible;",
    "    position: absolute;",
    "    pointer-events: none;",
    "  }",
    ".react-flow__edge {",
    "  pointer-events: visibleStroke;",
    "}",
    ".react-flow__edge.selectable {",
    "    cursor: pointer;",
    "  }",
    ".react-flow__edge.animated path {",
    "    stroke-dasharray: 5;",
    "    animation: dashdraw 0.5s linear infinite;",
    "  }",
    ".react-flow__edge.animated path.react-flow__edge-interaction {",
    "    stroke-dasharray: none;",
    "    animation: none;",
    "  }",
    ".react-flow__edge.inactive {",
    "    pointer-events: none;",
    "  }",
    ".react-flow__edge.selected,",
    "  .react-flow__edge:focus,",
    "  .react-flow__edge:focus-visible {",
    "    outline: none;",
    "  }",
    ".react-flow__edge.selected .react-flow__edge-path,",
    "  .react-flow__edge.selectable:focus .react-flow__edge-path,",
    "  .react-flow__edge.selectable:focus-visible .react-flow__edge-path {",
    "    stroke: var(--xy-edge-stroke-selected, var(--xy-edge-stroke-selected-default));",
    "  }",
    ".react-flow__edge-textwrapper {",
    "    pointer-events: all;",
    "  }",
    ".react-flow__edge .react-flow__edge-text {",
    "    pointer-events: none;",
    "    -webkit-user-select: none;",
    "       -moz-user-select: none;",
    "            user-select: none;",
    "  }",
    "/* Arrowhead marker styles - use CSS custom properties as default */",
    ".react-flow__arrowhead polyline {",
    "  stroke: var(--xy-edge-stroke, var(--xy-edge-stroke-default));",
    "}",
    ".react-flow__arrowhead polyline.arrowclosed {",
    "  fill: var(--xy-edge-stroke, var(--xy-edge-stroke-default));",
    "}",
    ".react-flow__connection {",
    "  pointer-events: none;",
    "}",
    ".react-flow__connection .animated {",
    "    stroke-dasharray: 5;",
    "    animation: dashdraw 0.5s linear infinite;",
    "  }",
    "svg.react-flow__connectionline {",
    "  z-index: 1001;",
    "  overflow: visible;",
    "  position: absolute;",
    "}",
    ".react-flow__nodes {",
    "  pointer-events: none;",
    "  transform-origin: 0 0;",
    "}",
    ".react-flow__node {",
    "  position: absolute;",
    "  -webkit-user-select: none;",
    "     -moz-user-select: none;",
    "          user-select: none;",
    "  pointer-events: all;",
    "  transform-origin: 0 0;",
    "  box-sizing: border-box;",
    "  cursor: default;",
    "}",
    ".react-flow__node.selectable {",
    "    cursor: pointer;",
    "  }",
    ".react-flow__node.draggable {",
    "    cursor: grab;",
    "    pointer-events: all;",
    "  }",
    ".react-flow__node.draggable.dragging {",
    "      cursor: grabbing;",
    "    }",
    ".react-flow__nodesselection {",
    "  z-index: 3;",
    "  transform-origin: left top;",
    "  pointer-events: none;",
    "}",
    ".react-flow__nodesselection-rect {",
    "    position: absolute;",
    "    pointer-events: all;",
    "    cursor: grab;",
    "  }",
    ".react-flow__handle {",
    "  position: absolute;",
    "  pointer-events: none;",
    "  min-width: 5px;",
    "  min-height: 5px;",
    "  width: 6px;",
    "  height: 6px;",
    "  background-color: var(--xy-handle-background-color, var(--xy-handle-background-color-default));",
    "  border: 1px solid var(--xy-handle-border-color, var(--xy-handle-border-color-default));",
    "  border-radius: 100%;",
    "}",
    ".react-flow__handle.connectingfrom {",
    "    pointer-events: all;",
    "  }",
    ".react-flow__handle.connectionindicator {",
    "    pointer-events: all;",
    "    cursor: crosshair;",
    "  }",
    ".react-flow__handle-bottom {",
    "    top: auto;",
    "    left: 50%;",
    "    bottom: 0;",
    "    transform: translate(-50%, 50%);",
    "  }",
    ".react-flow__handle-top {",
    "    top: 0;",
    "    left: 50%;",
    "    transform: translate(-50%, -50%);",
    "  }",
    ".react-flow__handle-left {",
    "    top: 50%;",
    "    left: 0;",
    "    transform: translate(-50%, -50%);",
    "  }",
    ".react-flow__handle-right {",
    "    top: 50%;",
    "    right: 0;",
    "    transform: translate(50%, -50%);",
    "  }",
    ".react-flow__edgeupdater {",
    "  cursor: move;",
    "  pointer-events: all;",
    "}",
    ".react-flow__pane.selection .react-flow__panel {",
    "  pointer-events: none;",
    "}",
    ".react-flow__panel {",
    "  position: absolute;",
    "  z-index: 5;",
    "  margin: 15px;",
    "}",
    ".react-flow__panel.top {",
    "    top: 0;",
    "  }",
    ".react-flow__panel.bottom {",
    "    bottom: 0;",
    "  }",
    ".react-flow__panel.top.center, .react-flow__panel.bottom.center {",
    "      left: 50%;",
    "      transform: translateX(-15px) translateX(-50%);",
    "    }",
    ".react-flow__panel.left {",
    "    left: 0;",
    "  }",
    ".react-flow__panel.right {",
    "    right: 0;",
    "  }",
    ".react-flow__panel.left.center, .react-flow__panel.right.center {",
    "      top: 50%;",
    "      transform: translateY(-15px) translateY(-50%);",
    "    }",
    ".react-flow__attribution {",
    "  font-size: 10px;",
    "  background: var(--xy-attribution-background-color, var(--xy-attribution-background-color-default));",
    "  padding: 2px 3px;",
    "  margin: 0;",
    "}",
    ".react-flow__attribution a {",
    "    text-decoration: none;",
    "    color: #999;",
    "  }",
    "@keyframes dashdraw {",
    "  from {",
    "    stroke-dashoffset: 10;",
    "  }",
    "}",
    ".react-flow__edgelabel-renderer {",
    "  position: absolute;",
    "  width: 100%;",
    "  height: 100%;",
    "  pointer-events: none;",
    "  -webkit-user-select: none;",
    "     -moz-user-select: none;",
    "          user-select: none;",
    "  left: 0;",
    "  top: 0;",
    "}",
    ".react-flow__viewport-portal {",
    "  position: absolute;",
    "  width: 100%;",
    "  height: 100%;",
    "  left: 0;",
    "  top: 0;",
    "  -webkit-user-select: none;",
    "     -moz-user-select: none;",
    "          user-select: none;",
    "}",
    ".react-flow__minimap {",
    "  background: var(",
    "    --xy-minimap-background-color-props,",
    "    var(--xy-minimap-background-color, var(--xy-minimap-background-color-default))",
    "  );",
    "}",
    ".react-flow__minimap-svg {",
    "    display: block;",
    "  }",
    ".react-flow__minimap-mask {",
    "    fill: var(",
    "      --xy-minimap-mask-background-color-props,",
    "      var(--xy-minimap-mask-background-color, var(--xy-minimap-mask-background-color-default))",
    "    );",
    "    stroke: var(",
    "      --xy-minimap-mask-stroke-color-props,",
    "      var(--xy-minimap-mask-stroke-color, var(--xy-minimap-mask-stroke-color-default))",
    "    );",
    "    stroke-width: var(",
    "      --xy-minimap-mask-stroke-width-props,",
    "      var(--xy-minimap-mask-stroke-width, var(--xy-minimap-mask-stroke-width-default))",
    "    );",
    "  }",
    ".react-flow__minimap-node {",
    "    fill: var(",
    "      --xy-minimap-node-background-color-props,",
    "      var(--xy-minimap-node-background-color, var(--xy-minimap-node-background-color-default))",
    "    );",
    "    stroke: var(",
    "      --xy-minimap-node-stroke-color-props,",
    "      var(--xy-minimap-node-stroke-color, var(--xy-minimap-node-stroke-color-default))",
    "    );",
    "    stroke-width: var(",
    "      --xy-minimap-node-stroke-width-props,",
    "      var(--xy-minimap-node-stroke-width, var(--xy-minimap-node-stroke-width-default))",
    "    );",
    "  }",
    ".react-flow__background-pattern.dots {",
    "    fill: var(",
    "      --xy-background-pattern-color-props,",
    "      var(--xy-background-pattern-color, var(--xy-background-pattern-dots-color-default))",
    "    );",
    "  }",
    ".react-flow__background-pattern.lines {",
    "    stroke: var(",
    "      --xy-background-pattern-color-props,",
    "      var(--xy-background-pattern-color, var(--xy-background-pattern-lines-color-default))",
    "    );",
    "  }",
    ".react-flow__background-pattern.cross {",
    "    stroke: var(",
    "      --xy-background-pattern-color-props,",
    "      var(--xy-background-pattern-color, var(--xy-background-pattern-cross-color-default))",
    "    );",
    "  }",
    ".react-flow__controls {",
    "  display: flex;",
    "  flex-direction: column;",
    "  box-shadow: var(--xy-controls-box-shadow, var(--xy-controls-box-shadow-default));",
    "}",
    ".react-flow__controls.horizontal {",
    "    flex-direction: row;",
    "  }",
    ".react-flow__controls-button {",
    "    display: flex;",
    "    justify-content: center;",
    "    align-items: center;",
    "    height: 26px;",
    "    width: 26px;",
    "    padding: 4px;",
    "    border: none;",
    "    background: var(--xy-controls-button-background-color, var(--xy-controls-button-background-color-default));",
    "    border-bottom: 1px solid",
    "      var(",
    "        --xy-controls-button-border-color-props,",
    "        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))",
    "      );",
    "    color: var(",
    "      --xy-controls-button-color-props,",
    "      var(--xy-controls-button-color, var(--xy-controls-button-color-default))",
    "    );",
    "    cursor: pointer;",
    "    -webkit-user-select: none;",
    "       -moz-user-select: none;",
    "            user-select: none;",
    "  }",
    ".react-flow__controls-button svg {",
    "      width: 100%;",
    "      max-width: 12px;",
    "      max-height: 12px;",
    "      fill: currentColor;",
    "    }",
    ".react-flow__edge.updating .react-flow__edge-path {",
    "      stroke: #777;",
    "    }",
    ".react-flow__edge-text {",
    "    font-size: 10px;",
    "  }",
    ".react-flow__node.selectable:focus,",
    "  .react-flow__node.selectable:focus-visible {",
    "    outline: none;",
    "  }",
    ".react-flow__node-input,",
    ".react-flow__node-default,",
    ".react-flow__node-output,",
    ".react-flow__node-group {",
    "  padding: 10px;",
    "  border-radius: var(--xy-node-border-radius, var(--xy-node-border-radius-default));",
    "  width: 150px;",
    "  font-size: 12px;",
    "  color: var(--xy-node-color, var(--xy-node-color-default));",
    "  text-align: center;",
    "  border: var(--xy-node-border, var(--xy-node-border-default));",
    "  background-color: var(--xy-node-background-color, var(--xy-node-background-color-default));",
    "}",
    ".react-flow__node-input.selectable:hover, .react-flow__node-default.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {",
    "      box-shadow: var(--xy-node-boxshadow-hover, var(--xy-node-boxshadow-hover-default));",
    "    }",
    ".react-flow__node-input.selectable.selected,",
    "    .react-flow__node-input.selectable:focus,",
    "    .react-flow__node-input.selectable:focus-visible,",
    "    .react-flow__node-default.selectable.selected,",
    "    .react-flow__node-default.selectable:focus,",
    "    .react-flow__node-default.selectable:focus-visible,",
    "    .react-flow__node-output.selectable.selected,",
    "    .react-flow__node-output.selectable:focus,",
    "    .react-flow__node-output.selectable:focus-visible,",
    "    .react-flow__node-group.selectable.selected,",
    "    .react-flow__node-group.selectable:focus,",
    "    .react-flow__node-group.selectable:focus-visible {",
    "      box-shadow: var(--xy-node-boxshadow-selected, var(--xy-node-boxshadow-selected-default));",
    "    }",
    ".react-flow__node-group {",
    "  background-color: var(--xy-node-group-background-color, var(--xy-node-group-background-color-default));",
    "}",
    ".react-flow__nodesselection-rect,",
    ".react-flow__selection {",
    "  background: var(--xy-selection-background-color, var(--xy-selection-background-color-default));",
    "  border: var(--xy-selection-border, var(--xy-selection-border-default));",
    "}",
    ".react-flow__nodesselection-rect:focus,",
    "  .react-flow__nodesselection-rect:focus-visible,",
    "  .react-flow__selection:focus,",
    "  .react-flow__selection:focus-visible {",
    "    outline: none;",
    "  }",
    ".react-flow__controls-button:hover {",
    "      background: var(",
    "        --xy-controls-button-background-color-hover-props,",
    "        var(--xy-controls-button-background-color-hover, var(--xy-controls-button-background-color-hover-default))",
    "      );",
    "      color: var(",
    "        --xy-controls-button-color-hover-props,",
    "        var(--xy-controls-button-color-hover, var(--xy-controls-button-color-hover-default))",
    "      );",
    "    }",
    ".react-flow__controls-button:disabled {",
    "      pointer-events: none;",
    "    }",
    ".react-flow__controls-button:disabled svg {",
    "        fill-opacity: 0.4;",
    "      }",
    ".react-flow__controls-button:last-child {",
    "    border-bottom: none;",
    "  }",
    ".react-flow__controls.horizontal .react-flow__controls-button {",
    "    border-bottom: none;",
    "    border-right: 1px solid",
    "      var(",
    "        --xy-controls-button-border-color-props,",
    "        var(--xy-controls-button-border-color, var(--xy-controls-button-border-color-default))",
    "      );",
    "  }",
    ".react-flow__controls.horizontal .react-flow__controls-button:last-child {",
    "    border-right: none;",
    "  }",
    ".react-flow__resize-control {",
    "  position: absolute;",
    "}",
    ".react-flow__resize-control.left,",
    ".react-flow__resize-control.right {",
    "  cursor: ew-resize;",
    "}",
    ".react-flow__resize-control.top,",
    ".react-flow__resize-control.bottom {",
    "  cursor: ns-resize;",
    "}",
    ".react-flow__resize-control.top.left,",
    ".react-flow__resize-control.bottom.right {",
    "  cursor: nwse-resize;",
    "}",
    ".react-flow__resize-control.bottom.left,",
    ".react-flow__resize-control.top.right {",
    "  cursor: nesw-resize;",
    "}",
    "/* handle styles */",
    ".react-flow__resize-control.handle {",
    "  width: 5px;",
    "  height: 5px;",
    "  border: 1px solid #fff;",
    "  border-radius: 1px;",
    "  background-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));",
    "  translate: -50% -50%;",
    "}",
    ".react-flow__resize-control.handle.left {",
    "  left: 0;",
    "  top: 50%;",
    "}",
    ".react-flow__resize-control.handle.right {",
    "  left: 100%;",
    "  top: 50%;",
    "}",
    ".react-flow__resize-control.handle.top {",
    "  left: 50%;",
    "  top: 0;",
    "}",
    ".react-flow__resize-control.handle.bottom {",
    "  left: 50%;",
    "  top: 100%;",
    "}",
    ".react-flow__resize-control.handle.top.left {",
    "  left: 0;",
    "}",
    ".react-flow__resize-control.handle.bottom.left {",
    "  left: 0;",
    "}",
    ".react-flow__resize-control.handle.top.right {",
    "  left: 100%;",
    "}",
    ".react-flow__resize-control.handle.bottom.right {",
    "  left: 100%;",
    "}",
    "/* line styles */",
    ".react-flow__resize-control.line {",
    "  border-color: var(--xy-resize-background-color, var(--xy-resize-background-color-default));",
    "  border-width: 0;",
    "  border-style: solid;",
    "}",
    ".react-flow__resize-control.line.left,",
    ".react-flow__resize-control.line.right {",
    "  width: 1px;",
    "  transform: translate(-50%, 0);",
    "  top: 0;",
    "  height: 100%;",
    "}",
    ".react-flow__resize-control.line.left {",
    "  left: 0;",
    "  border-left-width: 1px;",
    "}",
    ".react-flow__resize-control.line.right {",
    "  left: 100%;",
    "  border-right-width: 1px;",
    "}",
    ".react-flow__resize-control.line.top,",
    ".react-flow__resize-control.line.bottom {",
    "  height: 1px;",
    "  transform: translate(0, -50%);",
    "  left: 0;",
    "  width: 100%;",
    "}",
    ".react-flow__resize-control.line.top {",
    "  top: 0;",
    "  border-top-width: 1px;",
    "}",
    ".react-flow__resize-control.line.bottom {",
    "  border-bottom-width: 1px;",
    "  top: 100%;",
    "}",
    ".react-flow__edge-textbg {",
    "  fill: var(--xy-edge-label-background-color, var(--xy-edge-label-background-color-default));",
    "}",
    ".react-flow__edge-text {",
    "  fill: var(--xy-edge-label-color, var(--xy-edge-label-color-default));",
    "}",
    "",
  ].join("\n");

  // src/widget-app/app.ts
  var SIDE = { L: Position.Left, R: Position.Right, T: Position.Top, B: Position.Bottom };
  var HANDLE = { width: 1, height: 1, minWidth: 1, minHeight: 1, opacity: 0 };
  function handles() {
    return ["L", "R", "T", "B"].flatMap((s3) => [
      k(Handle, {
        key: "s" + s3,
        type: "source",
        position: SIDE[s3],
        id: "s-" + s3,
        style: HANDLE,
      }),
      k(Handle, {
        key: "t" + s3,
        type: "target",
        position: SIDE[s3],
        id: "t-" + s3,
        style: HANDLE,
      }),
    ]);
  }
  function CardNode({ data }) {
    return k(
      "div",
      {
        className: "rfx-card" + (data.external ? " rfx-ext" : ""),
        style: { ["--accent"]: data.accent || "#8a94ad" },
      },
      data.icon
        ? k("img", {
            className: "rfx-cico",
            src: data.icon,
            width: 40,
            height: 40,
            alt: "",
            draggable: false,
          })
        : null,
      k(
        "div",
        { className: "rfx-col" },
        data.type ? k("div", { className: "rfx-type" }, data.type) : null,
        k("div", { className: "rfx-name" }, data.label),
        data.annotation ? k("div", { className: "rfx-ann" }, data.annotation) : null,
      ),
      ...handles(),
    );
  }
  function IconNode({ data }) {
    return k(
      "div",
      {
        className: "rfx-icon" + (data.external ? " rfx-ext" : ""),
        style: { ["--accent"]: data.accent || "#8a94ad" },
      },
      data.icon
        ? k("img", { src: data.icon, width: 56, height: 56, alt: "", draggable: false })
        : k("div", { className: "rfx-box" }, data.label),
      k("div", { className: "rfx-ilab" }, data.label),
      data.external && data.annotation
        ? k("div", { className: "rfx-iann" }, data.annotation)
        : null,
      ...handles(),
    );
  }
  var ER_HDR_H = 64;
  function erHandles(headerCenter) {
    return ["L", "R", "T", "B"].flatMap((s3) => {
      const style2 = s3 === "L" || s3 === "R" ? { ...HANDLE, top: headerCenter } : HANDLE;
      return [
        k(Handle, {
          key: "s" + s3,
          type: "source",
          position: SIDE[s3],
          id: "s-" + s3,
          style: style2,
        }),
        k(Handle, {
          key: "t" + s3,
          type: "target",
          position: SIDE[s3],
          id: "t-" + s3,
          style: style2,
        }),
      ];
    });
  }
  function ErTableNode({ data }) {
    const cols = data.table?.columns ?? [];
    return k(
      "div",
      { className: "rfx-ertable", style: { ["--accent"]: data.accent || "#8a94ad" } },
      k(
        "div",
        { className: "rfx-erhdr" },
        data.icon
          ? k("img", {
              className: "rfx-cico",
              src: data.icon,
              width: 40,
              height: 40,
              alt: "",
              draggable: false,
            })
          : null,
        k(
          "div",
          { className: "rfx-col" },
          data.type ? k("div", { className: "rfx-type" }, data.type) : null,
          k("div", { className: "rfx-name" }, data.label),
        ),
      ),
      cols.length
        ? k(
            "div",
            { className: "rfx-erbody" },
            ...cols.map((c3, i4) =>
              k(
                "div",
                { key: i4, className: "rfx-errow" + (c3.keys.includes("PK") ? " is-pk" : "") },
                k(
                  "span",
                  { className: "rfx-ercol", title: c3.comment || void 0 },
                  c3.type ? k("span", { className: "rfx-ertype" }, c3.type) : null,
                  k("span", { className: "rfx-erfield" }, c3.name),
                ),
                c3.keys.length
                  ? k(
                      "span",
                      { className: "rfx-erkeys" },
                      ...c3.keys.map((k4, ki) =>
                        k(
                          "span",
                          { key: ki, className: "rfx-erkey rfx-erkey-" + k4.toLowerCase() },
                          k4,
                        ),
                      ),
                    )
                  : null,
              ),
            ),
          )
        : null,
      ...erHandles(ER_HDR_H / 2),
    );
  }
  function erMarker(x4, y3, pos, card, color2) {
    if (!card) return [];
    const d3 =
      pos === Position.Left
        ? [-1, 0]
        : pos === Position.Right
          ? [1, 0]
          : pos === Position.Top
            ? [0, -1]
            : [0, 1];
    const p3 = [-d3[1], d3[0]];
    const at = (dist, spread = 0) => [
      x4 + d3[0] * dist + p3[0] * spread,
      y3 + d3[1] * dist + p3[1] * spread,
    ];
    const els = [];
    const line = (a3, b3, key) =>
      k("line", {
        key,
        x1: a3[0],
        y1: a3[1],
        x2: b3[0],
        y2: b3[1],
        stroke: color2,
        strokeWidth: 1.6,
      });
    const many = card.endsWith("many");
    const optional = card.startsWith("zero");
    if (many) {
      const apex = at(13);
      els.push(
        line(apex, at(0, 7), "cf1"),
        line(apex, at(0, 0), "cf2"),
        line(apex, at(0, -7), "cf3"),
      );
      if (optional)
        els.push(
          k("circle", {
            key: "o",
            cx: at(18)[0],
            cy: at(18)[1],
            r: 3.4,
            fill: "none",
            stroke: color2,
            strokeWidth: 1.4,
          }),
        );
      else els.push(line(at(16, 6), at(16, -6), "m1"));
    } else {
      els.push(line(at(8, 6), at(8, -6), "b1"));
      if (optional)
        els.push(
          k("circle", {
            key: "o",
            cx: at(14)[0],
            cy: at(14)[1],
            r: 3.4,
            fill: "none",
            stroke: color2,
            strokeWidth: 1.4,
          }),
        );
      else els.push(line(at(12, 6), at(12, -6), "b2"));
    }
    return els;
  }
  function arrowHead(x4, y3, pos, color2) {
    const d3 =
      pos === Position.Left
        ? [-1, 0]
        : pos === Position.Right
          ? [1, 0]
          : pos === Position.Top
            ? [0, -1]
            : [0, 1];
    const p3 = [-d3[1], d3[0]];
    const at = (dist, spread = 0) => [
      x4 + d3[0] * dist + p3[0] * spread,
      y3 + d3[1] * dist + p3[1] * spread,
    ];
    const b1 = at(11, 5.5);
    const b22 = at(11, -5.5);
    return [
      k("path", {
        key: "ah",
        d: `M${x4} ${y3} L${b1[0]} ${b1[1]} L${b22[0]} ${b22[1]} Z`,
        fill: color2,
        stroke: color2,
        strokeWidth: 1,
        strokeLinejoin: "round",
      }),
    ];
  }
  function ErEdge(props) {
    const {
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
      style: style2,
    } = props;
    const [path, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
      borderRadius: 8,
    });
    const d3 = props.data;
    const color2 = style2?.stroke || d3?.accent || "#8a94ad";
    const dashed = d3?.identifying === false;
    const sw = style2?.strokeWidth || 1.8;
    return k(
      S,
      null,
      k("path", {
        d: path,
        fill: "none",
        stroke: color2,
        strokeWidth: sw,
        strokeOpacity: style2?.strokeOpacity ?? 0.9,
        strokeDasharray: dashed ? "7 4" : void 0,
        className: "react-flow__edge-path",
      }),
      k(
        "g",
        { className: "rfx-cf", fill: "none" },
        ...(d3?.arrows
          ? arrowHead(targetX, targetY, targetPosition, color2)
          : [
              ...erMarker(sourceX, sourceY, sourcePosition, d3?.sourceCard, color2),
              ...erMarker(targetX, targetY, targetPosition, d3?.targetCard, color2),
            ]),
      ),
      d3?.label
        ? k(
            EdgeLabelRenderer,
            null,
            k(
              "div",
              {
                className: "rfx-erlabel",
                style: { transform: `translate(-50%,-50%) translate(${labelX}px,${labelY}px)` },
              },
              d3.label,
            ),
          )
        : null,
    );
  }
  function gripIcon() {
    const dots = [0, 1, 2].flatMap((r3) =>
      [0, 1].map((c3) => k("circle", { key: r3 + "-" + c3, cx: 2 + c3 * 4, cy: 2 + r3 * 4, r: 1 })),
    );
    return k(
      "svg",
      {
        className: "rfx-grip",
        width: 8,
        height: 12,
        viewBox: "0 0 8 12",
        "aria-hidden": "true",
        fill: "currentColor",
      },
      dots,
    );
  }
  function GroupNode2({ data }) {
    return k(
      S,
      null,
      k(NodeResizer, { isVisible: true, minWidth: 150, minHeight: 84, color: "#5b8cff" }),
      k(
        "div",
        { className: "rfx-grp" },
        k(
          "div",
          { className: "rfx-grp-tag", title: "Drag to move this group" },
          gripIcon(),
          k("span", null, data.label),
        ),
      ),
    );
  }
  var SVG_SHAPES = /* @__PURE__ */ new Set([
    "diamond",
    "hexagon",
    "parallelogram",
    "parallelogram-alt",
    "trapezoid",
    "trapezoid-alt",
    "subroutine",
    "cylinder",
    "start",
    "end",
    "fork",
    "note",
  ]);
  var FLOW_RADIUS = { rect: "9px", round: "22px", stadium: "999px", circle: "50%", state: "11px" };
  var FLOW_GLYPH = {
    stadium:
      '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
    circle:
      '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
    diamond:
      '<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/>',
    hexagon:
      '<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',
    subroutine:
      '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
    cylinder:
      '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    parallelogram:
      '<path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/>',
    "parallelogram-alt":
      '<path d="M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m5 11-3 3"/><path d="m5 17-3-3h10"/>',
    trapezoid:
      '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
  };
  FLOW_GLYPH["trapezoid-alt"] = FLOW_GLYPH.trapezoid;
  function flowShapeSvg(shape) {
    const poly = (points) => ({
      fills: [["polygon", { points }]],
      lines: [k("polygon", { key: "o", points, className: "rfx-fline" })],
    });
    switch (shape) {
      case "diamond":
        return poly("50,1 99,50 50,99 1,50");
      case "hexagon":
        return poly("22,1 78,1 99,50 78,99 22,99 1,50");
      case "parallelogram":
        return poly("20,1 99,1 80,99 1,99");
      case "parallelogram-alt":
        return poly("1,1 80,1 99,99 20,99");
      case "trapezoid":
        return poly("20,1 80,1 99,99 1,99");
      case "trapezoid-alt":
        return poly("1,1 99,1 80,99 20,99");
      case "subroutine":
        return {
          fills: [["rect", { x: 1, y: 1, width: 98, height: 98, rx: 5 }]],
          lines: [
            k("rect", {
              key: "o",
              x: 1,
              y: 1,
              width: 98,
              height: 98,
              rx: 5,
              className: "rfx-fline",
            }),
            k("line", { key: "l1", x1: 9, y1: 1, x2: 9, y2: 99, className: "rfx-fline" }),
            k("line", { key: "l2", x1: 91, y1: 1, x2: 91, y2: 99, className: "rfx-fline" }),
          ],
        };
      case "cylinder":
        return {
          fills: [
            ["rect", { x: 1, y: 13, width: 98, height: 74 }],
            ["ellipse", { cx: 50, cy: 87, rx: 49, ry: 12 }],
            ["ellipse", { cx: 50, cy: 13, rx: 49, ry: 12 }],
          ],
          lines: [
            k("line", { key: "sl", x1: 1, y1: 13, x2: 1, y2: 87, className: "rfx-fline" }),
            k("line", { key: "sr", x1: 99, y1: 13, x2: 99, y2: 87, className: "rfx-fline" }),
            k("path", { key: "botarc", d: "M1,87 A49,12 0 0 0 99,87", className: "rfx-fline" }),
            k("ellipse", { key: "rim", cx: 50, cy: 13, rx: 49, ry: 12, className: "rfx-fline" }),
          ],
        };
      // A state machine's terminals: `[*]` as a source is a filled dot, as a target a
      // ringed one — the UML convention, and the same way Mermaid draws them.
      case "start":
        return {
          fills: [],
          lines: [k("circle", { key: "o", cx: 50, cy: 50, r: 42, className: "rfx-fsolid" })],
        };
      case "end":
        return {
          fills: [["circle", { cx: 50, cy: 50, r: 42 }]],
          lines: [
            k("circle", { key: "o", cx: 50, cy: 50, r: 42, className: "rfx-fline" }),
            k("circle", { key: "i", cx: 50, cy: 50, r: 25, className: "rfx-fsolid" }),
          ],
        };
      // A fork/join bar is solid by convention — it is a synchronisation mark, not a box
      // holding a label, so it takes the accent flat with no glass fill or outline.
      case "fork":
        return {
          fills: [],
          lines: [
            k("rect", { key: "o", x: 0, y: 0, width: 100, height: 100, className: "rfx-fsolid" }),
          ],
        };
      case "note": {
        const pts = "1,1 74,1 99,26 99,99 1,99";
        return {
          fills: [["polygon", { points: pts }]],
          lines: [
            k("polygon", { key: "o", points: pts, className: "rfx-fline" }),
            k("path", { key: "fold", d: "M74,1 L74,26 L99,26", className: "rfx-fline" }),
          ],
        };
      }
      default:
        return { fills: [], lines: [] };
    }
  }
  function FlowNode({ data }) {
    const shape = data.shape || "rect";
    const gid = "g" + g2().replace(/:/g, "");
    const { fills, lines } = flowShapeSvg(shape);
    return k(
      "div",
      {
        className: SVG_SHAPES.has(shape) ? "rfx-fnode rfx-fsvgn" : "rfx-fnode",
        style: { ["--accent"]: data.accent || "#6366f1" },
      },
      SVG_SHAPES.has(shape)
        ? k(
            "svg",
            {
              className: "rfx-fsvg",
              viewBox: "0 0 100 100",
              preserveAspectRatio: "none",
              "aria-hidden": true,
            },
            k(
              "defs",
              null,
              k(
                "linearGradient",
                { id: gid, x1: "0", y1: "0", x2: "0", y2: "1" },
                k("stop", { offset: "0", className: "rfx-gs0" }),
                k("stop", { offset: "1", className: "rfx-gs1" }),
              ),
            ),
            ...fills.map(([tag, attrs], i4) =>
              k(tag, { key: "f" + i4, ...attrs, className: "rfx-ffill" }),
            ),
            ...fills.map(([tag, attrs], i4) =>
              k(tag, { key: "g" + i4, ...attrs, fill: `url(#${gid})` }),
            ),
            ...lines,
          )
        : k("div", {
            className: "rfx-fbox",
            style: { borderRadius: FLOW_RADIUS[shape] || "10px" },
          }),
      data.label
        ? k(
            "div",
            { className: "rfx-flab" },
            FLOW_GLYPH[shape]
              ? k("svg", {
                  className: "rfx-fico",
                  viewBox: "0 0 24 24",
                  "aria-hidden": true,
                  dangerouslySetInnerHTML: { __html: FLOW_GLYPH[shape] },
                })
              : null,
            k("span", null, data.label),
          )
        : null,
      ...handles(),
    );
  }
  var nodeTypes = {
    card: CardNode,
    icon: IconNode,
    group: GroupNode2,
    erTable: ErTableNode,
    flow: FlowNode,
  };
  var edgeTypes = { er: ErEdge };
  var EXPORT_BG = { dark: "#0a0c12", light: "#f5f7fb" };
  var svg = (children2, w4 = 14) =>
    k(
      "svg",
      {
        viewBox: "0 0 24 24",
        width: w4,
        height: w4,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
      },
      ...children2,
    );
  var checkIcon = () =>
    k(
      "svg",
      {
        viewBox: "0 0 24 24",
        width: 14,
        height: 14,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.4,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
      },
      k("path", { d: "M4 12.5 9 17.5 20 6.5" }),
    );
  var imageIcon = () =>
    svg([
      k("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2.2, ry: 2.2 }),
      k("circle", { cx: 8.8, cy: 9, r: 1.7 }),
      k("path", { d: "M21 15l-4.2-4.2a2 2 0 0 0-2.8 0L6 19" }),
    ]);
  var stackIcon = () =>
    svg([k("path", { d: "M12 3l9 5-9 5-9-5 9-5z" }), k("path", { d: "M3 13l9 5 9-5" })], 13);
  var layersIcon = () =>
    svg(
      [
        k("rect", { x: 3, y: 4, width: 8, height: 7, rx: 1.6 }),
        k("rect", { x: 13, y: 4, width: 8, height: 7, rx: 1.6 }),
        k("rect", { x: 8, y: 14, width: 8, height: 6, rx: 1.6 }),
      ],
      13,
    );
  var moonIcon = () =>
    svg([k("path", { d: "M21 12.8A8 8 0 1 1 11.2 3a6.4 6.4 0 0 0 9.8 9.8z" })], 15);
  var sunIcon = () =>
    svg(
      [
        k("circle", { cx: 12, cy: 12, r: 4.2 }),
        k("path", {
          d: "M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
        }),
      ],
      15,
    );
  var searchIcon = () =>
    svg([k("circle", { cx: 11, cy: 11, r: 7 }), k("path", { d: "M21 21l-4.3-4.3" })], 15);
  var chevronIcon = (open) => svg([k("path", { d: open ? "M6 9l6 6 6-6" : "M9 6l6 6-6 6" })], 14);
  var codeIcon = () =>
    svg(
      [k("path", { d: "M9.5 8.5 6 12l3.5 3.5" }), k("path", { d: "M14.5 8.5 18 12l-3.5 3.5" })],
      15,
    );
  var copyIcon = () =>
    svg(
      [
        k("rect", { x: 9, y: 9, width: 11, height: 11, rx: 2 }),
        k("path", { d: "M5 15V5a2 2 0 0 1 2-2h10" }),
      ],
      14,
    );
  var closeIcon = () => svg([k("path", { d: "M6 6l12 12M18 6 6 18" })], 15);
  function Toolbar({ theme, setTheme, grouping, setGrouping, hasFunction, onShowSource }) {
    const { getNodes } = useReactFlow();
    const [busy, setBusy] = d2(null);
    const [done, setDone] = d2(null);
    const save = (kind) => {
      if (busy) return;
      const vp = document.querySelector(".react-flow__viewport");
      if (!vp) return;
      const root2 = vp.closest(".rfx");
      const bounds = getNodesBounds(getNodes());
      if (!bounds.width || !bounds.height) return;
      setBusy(kind);
      setDone(null);
      const pad = 0.1;
      const longest = Math.max(bounds.width, bounds.height);
      const scale = longest * 2 > 4096 ? 4096 / longest : 2;
      const w4 = Math.round(bounds.width * scale * (1 + pad * 2));
      const hgt = Math.round(bounds.height * scale * (1 + pad * 2));
      const { x: x4, y: y3, zoom } = getViewportForBounds(bounds, w4, hgt, 0.1, 4, pad);
      const opts = {
        backgroundColor: EXPORT_BG[theme],
        width: w4,
        height: hgt,
        pixelRatio: 1,
        style: {
          width: w4 + "px",
          height: hgt + "px",
          transform: `translate(${x4}px, ${y3}px) scale(${zoom})`,
        },
      };
      root2?.classList.add("rfx-exporting");
      const render = kind === "png" ? toPng : toSvg;
      render(vp, opts)
        .then((dataUrl) => {
          const a3 = document.createElement("a");
          a3.download = "architecture." + kind;
          a3.href = dataUrl;
          a3.click();
          setDone(kind);
          setTimeout(() => setDone((d3) => (d3 === kind ? null : d3)), 1600);
        })
        .catch(() => {})
        .then(() => {
          root2?.classList.remove("rfx-exporting");
          setBusy(null);
        });
    };
    const seg = (g4, label, icon) =>
      k(
        "button",
        {
          type: "button",
          className: "rfx-sbtn" + (grouping === g4 ? " is-active" : ""),
          "aria-pressed": grouping === g4,
          "aria-label": "Group by " + label.toLowerCase(),
          title: "Group by " + label.toLowerCase(),
          onClick: () => setGrouping(g4),
        },
        icon,
        k("span", null, label),
      );
    const xbtn = (kind, label) => {
      const state = busy === kind ? "busy" : done === kind ? "done" : "idle";
      return k(
        "button",
        {
          type: "button",
          className: "rfx-xbtn" + (state === "done" ? " is-done" : ""),
          disabled: !!busy,
          title: "Download diagram as " + label,
          "aria-label": "Download diagram as " + label,
          onClick: () => save(kind),
        },
        state === "done" ? checkIcon() : imageIcon(),
        k("span", null, state === "busy" ? "Saving" : state === "done" ? "Saved" : label),
      );
    };
    return k(
      Panel,
      { position: "top-left", className: "rfx-bar-panel" },
      k(
        "div",
        {
          className: "rfx-bar" + (hasFunction ? "" : " rfx-bar--short"),
          role: "toolbar",
          "aria-label": "Diagram controls",
        },
        hasFunction
          ? k(
              "div",
              { className: "rfx-seg", role: "group", "aria-label": "Group by" },
              seg("infra", "Infrastructure", stackIcon()),
              seg("function", "Function", layersIcon()),
            )
          : null,
        hasFunction ? k("div", { className: "rfx-div" }) : null,
        k(
          "button",
          {
            type: "button",
            className: "rfx-tbtn",
            title: theme === "dark" ? "Switch to light" : "Switch to dark",
            "aria-label": "Toggle dark/light theme",
            onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          },
          theme === "dark" ? sunIcon() : moonIcon(),
        ),
        onShowSource
          ? k(
              "button",
              {
                type: "button",
                className: "rfx-tbtn",
                title: "View Mermaid source",
                "aria-label": "View Mermaid source",
                onClick: onShowSource,
              },
              codeIcon(),
            )
          : null,
        k("div", { className: "rfx-div" }),
        xbtn("png", "PNG"),
        xbtn("svg", "SVG"),
        k(
          "span",
          { className: "rfx-sr", "aria-live": "polite" },
          busy
            ? "Exporting " + busy.toUpperCase() + "\u2026"
            : done
              ? done.toUpperCase() + " saved"
              : "",
        ),
      ),
    );
  }
  var TEAM_FX = {
    chiefs: {
      emoji: ["\u{1F3C8}", "\u2764\uFE0F", "\u{1F49B}"],
      toast: "\u{1F3C8} Travis \u2764\uFE0F Taylor \u2014 GO CHIEFS! \u{1F3C8}",
    },
    eagles: {
      emoji: ["\u{1F985}", "\u{1F3C6}", "\u{1F49A}"],
      toast: "\u{1F985} E-A-G-L-E-S \u2014 Super Bowl Champs! \u{1F3C6}",
    },
  };
  function teamFor(q4) {
    const s3 = q4.toLowerCase().replace(/[^a-z]/g, "");
    if (
      s3 === "travistaylor" ||
      s3 === "travishearttaylor" ||
      s3 === "travislovestaylor" ||
      s3 === "travisandtaylor"
    )
      return "chiefs";
    if (s3 === "eagleseagles" || s3 === "flyeaglesfly" || s3 === "gobirds") return "eagles";
    return null;
  }
  function Finder({ services, icons, spotlight, noun, startOpen, onEasterEgg }) {
    const rf = useReactFlow();
    const [q4, setQ] = d2("");
    const [open, setOpen] = d2(startOpen);
    const named2 = T2(() => services.filter((n2) => n2.label.trim()), [services]);
    const rows = T2(() => {
      const needle = q4.trim().toLowerCase();
      const hit = needle
        ? named2.filter((n2) => (n2.label + " " + (n2.type ?? "")).toLowerCase().includes(needle))
        : named2;
      return [...hit].sort((a3, b3) => a3.label.localeCompare(b3.label));
    }, [named2, q4]);
    const locate = (id2) => {
      rf.fitView({ nodes: [{ id: id2 }], duration: 600, minZoom: 2, maxZoom: 2 });
      spotlight(id2);
    };
    if (!named2.length) return null;
    return k(
      Panel,
      { position: "top-left", className: "rfx-finder-panel" },
      k(
        "div",
        { className: "rfx-finder" + (open ? "" : " is-collapsed") },
        k(
          "div",
          { className: "rfx-find-head" },
          searchIcon(),
          k("input", {
            className: "rfx-find-box",
            type: "search",
            placeholder: `Search ${noun}\u2026`,
            value: q4,
            "aria-label": `Search ${noun} by name or type`,
            onChange: (e3) => {
              const v3 = e3.target.value;
              setQ(v3);
              onEasterEgg(teamFor(v3));
            },
            onKeyDown: (e3) => {
              e3.stopPropagation();
              if (e3.key === "Enter" && rows[0]) locate(rows[0].id);
            },
          }),
          k(
            "button",
            {
              type: "button",
              className: "rfx-find-toggle",
              title: open ? "Collapse list" : "Expand list",
              "aria-expanded": open,
              onClick: () => setOpen((o3) => !o3),
            },
            chevronIcon(open),
          ),
        ),
        open
          ? k(
              "div",
              { className: "rfx-find-list nowheel nopan" },
              rows.length
                ? rows.map((n2) =>
                    k(
                      "button",
                      {
                        key: n2.id,
                        type: "button",
                        className: "rfx-find-row",
                        style: { ["--accent"]: n2.accent || "#8a94ad" },
                        title: "Center on " + n2.label,
                        onClick: () => locate(n2.id),
                      },
                      icons[n2.id]
                        ? k("img", {
                            className: "rfx-find-ico",
                            src: icons[n2.id],
                            width: 22,
                            height: 22,
                            alt: "",
                            draggable: false,
                          })
                        : k("span", { className: "rfx-find-dot" }),
                      k(
                        "span",
                        { className: "rfx-find-text" },
                        k("span", { className: "rfx-find-name" }, n2.label),
                        n2.type ? k("span", { className: "rfx-find-type" }, n2.type) : null,
                      ),
                    ),
                  )
                : k("div", { className: "rfx-find-empty" }, "No matches"),
            )
          : null,
      ),
    );
  }
  function fallbackCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
  function SourceModal({ source, onClose, kind }) {
    const [copied, setCopied] = d2(false);
    h2(() => {
      const onKey = (e3) => {
        if (e3.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
    const copy = () => {
      const done = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(source).then(done, () => {
            if (fallbackCopy(source)) done();
          });
          return;
        }
      } catch {}
      if (fallbackCopy(source)) done();
    };
    return k(
      "div",
      {
        className: "rfx-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Mermaid source",
        onClick: onClose,
      },
      k(
        "div",
        { className: "rfx-modal-card", onClick: (e3) => e3.stopPropagation() },
        k(
          "div",
          { className: "rfx-modal-head" },
          k(
            "span",
            { className: "rfx-modal-title" },
            kind === "er"
              ? "Mermaid \xB7 erDiagram"
              : kind === "flowchart"
                ? "Mermaid \xB7 flowchart"
                : kind === "state"
                  ? "Mermaid \xB7 stateDiagram-v2"
                  : "Mermaid \xB7 architecture-beta",
          ),
          k(
            "div",
            { className: "rfx-modal-actions" },
            k(
              "button",
              { type: "button", className: "rfx-xbtn" + (copied ? " is-done" : ""), onClick: copy },
              copied ? checkIcon() : copyIcon(),
              k("span", null, copied ? "Copied" : "Copy"),
            ),
            k(
              "button",
              {
                type: "button",
                className: "rfx-modal-x",
                title: "Close",
                "aria-label": "Close",
                onClick: onClose,
              },
              closeIcon(),
            ),
          ),
        ),
        k("pre", { className: "rfx-modal-pre nowheel" }, source),
      ),
    );
  }
  function resolveTheme(t3) {
    if (t3 === "light") return "light";
    if (t3 === "dark") return "dark";
    return typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  var cssInjected = false;
  function injectCss() {
    if (cssInjected || typeof document === "undefined") return;
    cssInjected = true;
    const style2 = document.createElement("style");
    style2.textContent = style_default3 + "\n" + THEME_CSS;
    document.head.appendChild(style2);
  }
  function Flow({
    root: root2,
    data,
    theme,
    grouping,
    setTheme,
    setGrouping,
    hasFunction,
    erArrows,
    setErArrows,
    rewires,
    setRewires,
  }) {
    const dark = theme === "dark";
    const active = data.views[grouping] ?? data.views.infra;
    const style2 = data.style ?? "card";
    const icons = data.icons ?? {};
    const accentOf = T2(() => {
      const m3 = /* @__PURE__ */ new Map();
      for (const n2 of active.nodes) if (n2.accent) m3.set(n2.id, n2.accent);
      return m3;
    }, [active]);
    const ends = T2(
      () =>
        new Map(
          active.edges.map((e3) => [e3.id, effectiveEnds(e3, rewires[rewireKey(grouping, e3.id)])]),
        ),
      [active, rewires, grouping],
    );
    const adjacency = T2(() => {
      const m3 = /* @__PURE__ */ new Map();
      const add = (a3, b3) => (m3.get(a3) ?? m3.set(a3, /* @__PURE__ */ new Set()).get(a3)).add(b3);
      for (const e3 of ends.values()) {
        add(e3.source, e3.target);
        add(e3.target, e3.source);
      }
      return m3;
    }, [ends]);
    const FALLBACK = dark ? "#5b6b8c" : "#aab2c6";
    const DIM_MARK = "rgba(132,142,164,.16)";
    const strokeOf = (src) => accentOf.get(src) || FALLBACK;
    const dash = (dashed) => (dashed ? "7 5" : void 0);
    const restStyle = (src, dashed, thick) => ({
      stroke: strokeOf(src),
      strokeWidth: thick ? 3 : 1.8,
      strokeOpacity: dark ? 0.62 : 0.72,
      strokeDasharray: dash(dashed),
    });
    const hlStyle = (src, dashed, thick) => ({
      stroke: strokeOf(src),
      strokeWidth: thick ? 4.6 : 3.4,
      strokeOpacity: 1,
      strokeDasharray: dash(dashed),
    });
    const dimStyle = (dashed, thick) => ({
      stroke: FALLBACK,
      strokeWidth: thick ? 2.6 : 1.6,
      strokeOpacity: 0.1,
      strokeDasharray: dash(dashed),
    });
    const mark = (color2) => ({
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: color2,
    });
    const markersFor = (color2, sa, ta) => ({
      markerStart: sa ? mark(color2) : void 0,
      markerEnd: ta ? mark(color2) : void 0,
    });
    const LBG = dark ? "#141c2e" : "#ffffff";
    const LFG = dark ? "#aab4cf" : "#5b6b85";
    const LBORD = dark ? "rgba(255,255,255,.10)" : "#e3e7f1";
    const initialNodes = T2(
      () =>
        active.nodes.map((n2) => ({
          id: n2.id,
          type: n2.isGroup
            ? "group"
            : n2.table
              ? "erTable"
              : n2.shape
                ? "flow"
                : style2 === "card"
                  ? "card"
                  : "icon",
          position: { x: n2.x, y: n2.y },
          data: n2.isGroup ? n2 : { ...n2, icon: icons[n2.id] },
          style: { width: n2.w, height: n2.h },
          // Groups move only by their label chip (.rfx-grp-tag); the body is
          // pointer-events:none so dragging the interior pans the canvas instead.
          ...(n2.isGroup ? { dragHandle: ".rfx-grp-tag" } : {}),
          ...(n2.parent ? { parentId: n2.parent, extent: "parent" } : {}),
        })),
      [active, style2, icons],
    );
    const initialEdges = T2(
      () =>
        active.edges.map((layoutEdge) => {
          const ed = { ...layoutEdge, ...ends.get(layoutEdge.id) };
          if (ed.sourceCard || ed.targetCard) {
            return {
              id: ed.id,
              source: ed.source,
              target: ed.target,
              sourceHandle: "s-" + ed.sourceSide,
              targetHandle: "t-" + ed.targetSide,
              type: "er",
              style: restStyle(ed.source),
              data: {
                accent: strokeOf(ed.source),
                sourceCard: ed.sourceCard,
                targetCard: ed.targetCard,
                identifying: ed.identifying,
                label: ed.label || void 0,
                arrows: erArrows[ed.id] ?? false,
                sa: false,
                ta: false,
              },
            };
          }
          return {
            id: ed.id,
            source: ed.source,
            target: ed.target,
            sourceHandle: "s-" + ed.sourceSide,
            targetHandle: "t-" + ed.targetSide,
            label: ed.label || void 0,
            type: "smoothstep",
            ...markersFor(strokeOf(ed.source), !!ed.sourceArrow, !!ed.targetArrow),
            style: restStyle(ed.source, ed.dashed, ed.thick),
            data: {
              accent: strokeOf(ed.source),
              sa: !!ed.sourceArrow,
              ta: !!ed.targetArrow,
              dashed: !!ed.dashed,
              thick: !!ed.thick,
            },
            labelStyle: { fill: LFG, fontSize: 10.5, fontWeight: 500 },
            labelBgStyle: { fill: LBG, stroke: LBORD },
            labelBgPadding: [6, 3],
            labelBgBorderRadius: 8,
          };
        }),
      [active, dark, erArrows, ends],
    );
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const layoutEnds = T2(
      () => new Map(active.edges.map((e3) => [e3.id, effectiveEnds(e3, void 0)])),
      [active],
    );
    const [reattaching, setReattaching] = d2(false);
    const saveRewire = (id2, rw) =>
      setRewires((m3) => {
        const key = rewireKey(grouping, id2);
        const { [key]: _old, ...rest } = m3;
        const layout = layoutEnds.get(id2);
        return rw && layout && !sameEnds(rw, layout) ? { ...rest, [key]: rw } : rest;
      });
    const onReconnect = (oldEdge, conn) => {
      const rw = rewireFromConnection(conn);
      if (!rw) return;
      saveRewire(oldEdge.id, rw);
      setEdges((es) =>
        es.map((e3) =>
          e3.id === oldEdge.id
            ? {
                ...e3,
                source: rw.source,
                target: rw.target,
                sourceHandle: "s-" + rw.sourceSide,
                targetHandle: "t-" + rw.targetSide,
                data: { ...e3.data, accent: strokeOf(rw.source) },
              }
            : e3,
        ),
      );
    };
    const resetRewire = (id2) => {
      setRewires((m3) => {
        if (id2 !== void 0) {
          const { [rewireKey(grouping, id2)]: _old, ...rest } = m3;
          return rest;
        }
        const prefix = rewireKey(grouping, "");
        return Object.fromEntries(Object.entries(m3).filter(([k4]) => !k4.startsWith(prefix)));
      });
      setEdges((es) =>
        es.map((e3) => {
          const layout = layoutEnds.get(e3.id);
          if (!layout || (id2 !== void 0 && e3.id !== id2)) return e3;
          return {
            ...e3,
            source: layout.source,
            target: layout.target,
            sourceHandle: "s-" + layout.sourceSide,
            targetHandle: "t-" + layout.targetSide,
            data: { ...e3.data, accent: strokeOf(layout.source) },
          };
        }),
      );
    };
    const isRewired = (id2) => rewireKey(grouping, id2) in rewires;
    const anyRewired = active.edges.some((e3) => isRewired(e3.id));
    const applyHighlight = (activeNodes, isOn) => {
      setEdges((es) =>
        es.map((e3) => {
          const on2 = isOn(e3);
          const d3 = e3.data;
          const acc = d3?.accent || strokeOf(e3.source);
          return {
            ...e3,
            animated: on2,
            zIndex: on2 ? 20 : 0,
            style: on2
              ? hlStyle(e3.source, d3?.dashed, d3?.thick)
              : dimStyle(d3?.dashed, d3?.thick),
            ...markersFor(on2 ? acc : DIM_MARK, !!d3?.sa, !!d3?.ta),
          };
        }),
      );
      setNodes((ns) =>
        ns.map((n2) =>
          n2.type === "group"
            ? n2
            : { ...n2, className: activeNodes.has(n2.id) ? void 0 : "rfx-dim" },
        ),
      );
    };
    const onNodeEnter = (_e, node) => {
      if (node.type === "group") return;
      applyHighlight(
        /* @__PURE__ */ new Set([node.id, ...(adjacency.get(node.id) ?? [])]),
        (e3) => e3.source === node.id || e3.target === node.id,
      );
    };
    const onEdgeEnter = (_e, edge) => {
      applyHighlight(
        /* @__PURE__ */ new Set([edge.source, edge.target]),
        (e3) => e3.id === edge.id,
      );
    };
    const onLeave = () => {
      setEdges((es) =>
        es.map((e3) => {
          const d3 = e3.data;
          return {
            ...e3,
            animated: false,
            zIndex: 0,
            style: restStyle(e3.source, d3?.dashed, d3?.thick),
            ...markersFor(d3?.accent || strokeOf(e3.source), !!d3?.sa, !!d3?.ta),
          };
        }),
      );
      setNodes((ns) => ns.map((n2) => (n2.type === "group" ? n2 : { ...n2, className: void 0 })));
    };
    const services = T2(() => active.nodes.filter((n2) => !n2.isGroup), [active]);
    const fitOpts = T2(
      () => ({
        padding: fitPadding(
          root2.clientWidth || window.innerWidth,
          window.innerWidth,
          services.some((n2) => n2.label.trim()),
        ),
      }),
      [root2, services],
    );
    const crowded = finderCrowdsCanvas(root2.clientWidth || window.innerWidth, window.innerWidth);
    const spotTimer = A2(void 0);
    h2(() => () => clearTimeout(spotTimer.current), []);
    const spotlight = (id2) => {
      applyHighlight(
        /* @__PURE__ */ new Set([id2, ...(adjacency.get(id2) ?? [])]),
        (e3) => e3.source === id2 || e3.target === id2,
      );
      setNodes((ns) => ns.map((n2) => (n2.id === id2 ? { ...n2, className: "rfx-spot" } : n2)));
      clearTimeout(spotTimer.current);
      spotTimer.current = setTimeout(onLeave, 2400);
    };
    const [sourceOpen, setSourceOpen] = d2(false);
    const [team, setTeam] = d2(null);
    const [menu, setMenu] = d2(null);
    const setEdgeArrows = (arrows, id2) => {
      setErArrows((m3) => {
        if (id2 !== void 0) return { ...m3, [id2]: arrows };
        const nm = { ...m3 };
        for (const e3 of edges) if (e3.type === "er") nm[e3.id] = arrows;
        return nm;
      });
      setEdges((es) =>
        es.map((e3) =>
          e3.type === "er" && (id2 === void 0 || e3.id === id2)
            ? { ...e3, data: { ...e3.data, arrows } }
            : e3,
        ),
      );
    };
    const selectAllNodes = (selected2) =>
      setNodes((ns) => ns.map((n2) => (n2.type === "group" ? n2 : { ...n2, selected: selected2 })));
    const onEdgeContextMenu = (ev, edge) => {
      const er = edge.type === "er";
      if (!er && !isRewired(edge.id)) return;
      ev.preventDefault();
      setMenu({
        kind: "edge",
        id: edge.id,
        er,
        x: ev.clientX,
        y: ev.clientY,
        arrows: !!edge.data?.arrows,
      });
    };
    const onPaneContextMenu = (ev) => {
      ev.preventDefault();
      setMenu({ kind: "pane", x: ev.clientX, y: ev.clientY });
    };
    h2(() => {
      if (!menu) return;
      const close = (ev) => {
        if (!ev.target?.closest?.(".rfx-ctx")) setMenu(null);
      };
      document.addEventListener("mousedown", close);
      return () => document.removeEventListener("mousedown", close);
    }, [menu]);
    const isEr = data.kind === "er";
    const erEdges = edges.filter((e3) => e3.type === "er");
    const allArrows = erEdges.length > 0 && erEdges.every((e3) => !!e3.data?.arrows);
    return k(
      S,
      null,
      k(
        index,
        {
          className:
            [team ? "rfx-" + team : "", reattaching ? "rfx-reattaching" : ""]
              .filter(Boolean)
              .join(" ") || void 0,
          nodes,
          edges,
          onNodesChange,
          onEdgesChange,
          nodeTypes,
          edgeTypes,
          fitView: true,
          fitViewOptions: fitOpts,
          minZoom: 0.15,
          colorMode: theme,
          proOptions: { hideAttribution: true },
          // Handles stay connectable so a dragged line end can land on them; with no
          // onConnect, starting a brand-new line from a handle does nothing.
          nodesConnectable: true,
          edgesReconnectable: true,
          onReconnect,
          onReconnectStart: () => setReattaching(true),
          onReconnectEnd: () => setReattaching(false),
          isValidConnection: (c3) => c3.source !== c3.target,
          reconnectRadius: 14,
          connectionRadius: 36,
          onNodeMouseEnter: onNodeEnter,
          onNodeMouseLeave: onLeave,
          onEdgeMouseEnter: onEdgeEnter,
          onEdgeMouseLeave: onLeave,
          onEdgeContextMenu,
          onPaneContextMenu,
        },
        k(Background, {
          variant: BackgroundVariant.Dots,
          gap: 24,
          size: 1,
          color: dark ? "rgba(255,255,255,.06)" : "rgba(20,40,90,.07)",
        }),
        k(Controls, {
          showInteractive: false,
          position: "bottom-center",
          className: "rfx-zoom",
          orientation: "horizontal",
          fitViewOptions: fitOpts,
        }),
        k(MiniMap, { pannable: true, zoomable: true }),
        k(Toolbar, {
          theme,
          setTheme,
          grouping,
          setGrouping,
          hasFunction,
          onShowSource: data.source ? () => setSourceOpen(true) : void 0,
        }),
        k(Finder, {
          services,
          icons,
          spotlight,
          noun:
            data.kind === "er"
              ? "entities"
              : data.kind === "flowchart"
                ? "nodes"
                : data.kind === "state"
                  ? "states"
                  : "resources",
          startOpen: !crowded,
          onEasterEgg: setTeam,
        }),
        team
          ? k(
              S,
              { key: team },
              k(
                "div",
                { className: "rfx-team-fx", "aria-hidden": true },
                ...Array.from({ length: 18 }, (_3, i4) =>
                  k(
                    "span",
                    {
                      key: i4,
                      className: "rfx-conf c" + (i4 % 3),
                      style: {
                        left: i4 * 5.4 + 1 + "%",
                        animationDelay: (i4 % 6) * 0.5 + "s",
                        animationDuration: 4 + (i4 % 4) + "s",
                      },
                    },
                    TEAM_FX[team].emoji[i4 % 3],
                  ),
                ),
              ),
              k(
                "div",
                { className: "rfx-team-toast rfx-toast-" + team, role: "status" },
                TEAM_FX[team].toast,
              ),
            )
          : null,
      ),
      sourceOpen && data.source
        ? k(SourceModal, {
            source: data.source,
            onClose: () => setSourceOpen(false),
            kind: data.kind,
          })
        : null,
      menu
        ? k(
            "div",
            { className: "rfx-ctx", style: { left: menu.x, top: menu.y } },
            ...(menu.kind === "edge"
              ? [
                  ...(menu.er
                    ? [
                        k(
                          "button",
                          {
                            key: "one",
                            className: "rfx-ctx-item",
                            onClick: () => {
                              setEdgeArrows(!menu.arrows, menu.id);
                              setMenu(null);
                            },
                          },
                          menu.arrows ? "Show as crow\u2019s-foot" : "Show as directional arrow",
                        ),
                        k("div", { key: "sep", className: "rfx-ctx-sep" }),
                        k(
                          "button",
                          {
                            key: "all",
                            className: "rfx-ctx-item",
                            onClick: () => {
                              setEdgeArrows(!allArrows);
                              setMenu(null);
                            },
                          },
                          allArrows
                            ? "Show all as crow\u2019s-foot"
                            : "Show all as directional arrows",
                        ),
                      ]
                    : []),
                  ...(isRewired(menu.id)
                    ? [
                        ...(menu.er ? [k("div", { key: "sep2", className: "rfx-ctx-sep" })] : []),
                        k(
                          "button",
                          {
                            key: "reset",
                            className: "rfx-ctx-item",
                            onClick: () => {
                              resetRewire(menu.id);
                              setMenu(null);
                            },
                          },
                          "Reset line ends",
                        ),
                      ]
                    : []),
                ]
              : [
                  k(
                    "button",
                    {
                      key: "selall",
                      className: "rfx-ctx-item",
                      onClick: () => {
                        selectAllNodes(true);
                        setMenu(null);
                      },
                    },
                    isEr ? "Select all entities" : "Select all nodes",
                  ),
                  k(
                    "button",
                    {
                      key: "desel",
                      className: "rfx-ctx-item",
                      onClick: () => {
                        selectAllNodes(false);
                        setMenu(null);
                      },
                    },
                    "Deselect all",
                  ),
                  ...(isEr
                    ? [
                        k("div", { key: "sep", className: "rfx-ctx-sep" }),
                        k(
                          "button",
                          {
                            key: "all",
                            className: "rfx-ctx-item",
                            onClick: () => {
                              setEdgeArrows(!allArrows);
                              setMenu(null);
                            },
                          },
                          allArrows
                            ? "All connectors \u2192 crow\u2019s-foot"
                            : "All connectors \u2192 arrows",
                        ),
                      ]
                    : []),
                  ...(anyRewired
                    ? [
                        k("div", { key: "sep3", className: "rfx-ctx-sep" }),
                        k(
                          "button",
                          {
                            key: "resetall",
                            className: "rfx-ctx-item",
                            onClick: () => {
                              resetRewire();
                              setMenu(null);
                            },
                          },
                          "Reset all line ends",
                        ),
                      ]
                    : []),
                ]),
          )
        : null,
    );
  }
  function Diagram({ root: root2, data }) {
    const [theme, setTheme] = d2(() => resolveTheme(data.theme));
    const [grouping, setGrouping] = d2(
      data.grouping === "function" && data.views.function ? "function" : "infra",
    );
    h2(() => {
      if (data.theme === "dark" || data.theme === "light") setTheme(data.theme);
    }, [data.theme]);
    h2(() => {
      root2.className = "rfx " + theme;
    }, [root2, theme]);
    const [erArrows, setErArrows] = d2({});
    const [rewires, setRewires] = d2({});
    const hasFunction = !!data.views.function;
    const g4 = hasFunction ? grouping : "infra";
    return k(Flow, {
      key: theme + ":" + g4,
      root: root2,
      data,
      theme,
      grouping: g4,
      setTheme,
      setGrouping,
      hasFunction,
      erArrows,
      setErArrows,
      rewires,
      setRewires,
    });
  }
  function mount(root2, data) {
    injectCss();
    if (!/\brfx\b/.test(root2.className)) root2.className = "rfx " + resolveTheme(data.theme);
    const holder = root2;
    if (!holder.__rfroot) holder.__rfroot = createRoot(root2);
    holder.__rfroot.render(k(S, null, k(Diagram, { root: root2, data })));
  }
  globalThis.InfraDiagram = { mount };
  var THEME_CSS = `
.rfx{position:relative;width:100%;height:100%;font-family:ui-sans-serif,-apple-system,"Segoe UI",Roboto,system-ui,sans-serif}
.rfx.dark{--bg:#0a0c12;--card:linear-gradient(180deg,rgba(30,35,48,.92),rgba(20,24,34,.92));--bord:rgba(255,255,255,.10);--name:#eef2fb;--sub:#828ca6;--ilab:#cfd6e6;--gbg:rgba(255,255,255,.014);--gbord:rgba(255,255,255,.07);--gtbg:#12151f;--gtfg:#8a94ad;--glow1:rgba(91,140,255,.13);--glow2:rgba(45,212,167,.09);--exp-bg:rgba(22,26,36,.92);--exp-bord:rgba(255,255,255,.12);--exp-shadow:0 12px 32px -12px rgba(0,0,0,.8);--fnodebg:#181d29}
.rfx.light{--bg:#f5f7fb;--card:#fff;--bord:#e6e9f2;--name:#141a2b;--sub:#7a839a;--ilab:#3a4254;--gbg:rgba(255,255,255,.5);--gbord:#dfe4f0;--gtbg:#eef1f8;--gtfg:#5b6b85;--glow1:rgba(91,140,255,.07);--glow2:rgba(45,212,167,.05);--exp-bg:#ffffff;--exp-bord:#e3e7f1;--exp-shadow:0 10px 26px -12px rgba(20,40,90,.22);--fnodebg:#ffffff}
.rfx .react-flow{background:radial-gradient(820px 420px at 78% -8%,var(--glow1),transparent 60%),radial-gradient(680px 460px at 4% 112%,var(--glow2),transparent 58%),var(--bg)}
.rfx .react-flow__node{border:0;padding:0;background:transparent;font-family:inherit;transition:opacity .16s}
.rfx .react-flow__node.rfx-dim{opacity:.26}
.rfx .react-flow__handle{opacity:0;border:0}
.rfx .rfx-reattaching .react-flow__node:not(.react-flow__node-group) .react-flow__handle{opacity:1!important;width:9px!important;height:9px!important;min-width:9px!important;min-height:9px!important;border-radius:50%;background:#5b8cff;border:2px solid var(--bg)}
.rfx .rfx-reattaching .react-flow__handle.connectingto,.rfx .rfx-reattaching .react-flow__handle.valid{background:#2dd4a7;transform:translate(-50%,-50%) scale(1.5)}
.rfx .react-flow__edgeupdater{cursor:move}
.rfx .react-flow__edge{cursor:pointer}
.rfx .react-flow__edge-path{transition:stroke .16s,stroke-width .16s,stroke-opacity .16s}
@media (prefers-reduced-motion:reduce){.rfx .react-flow__edge.animated .react-flow__edge-path{animation:none}}
.rfx-card{display:flex;align-items:center;gap:12px;width:100%;height:100%;box-sizing:border-box;padding:0 15px;border-radius:14px;background:var(--card);border:1px solid color-mix(in srgb,var(--accent) 40%,var(--bord));transition:transform .17s,box-shadow .17s,border-color .17s;overflow:hidden}
.rfx.dark .rfx-card{box-shadow:0 18px 40px -18px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.05);backdrop-filter:blur(7px)}
.rfx.light .rfx-card{box-shadow:0 8px 22px -12px rgba(20,40,90,.2),0 1px 2px rgba(20,40,90,.06)}
.rfx .react-flow__node:hover .rfx-card{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 75%,transparent)}
.rfx.dark .react-flow__node:hover .rfx-card{box-shadow:0 24px 48px -18px rgba(0,0,0,.9),0 0 26px -8px var(--accent)}
.rfx.light .react-flow__node:hover .rfx-card{box-shadow:0 18px 32px -14px rgba(20,40,90,.28),0 0 18px -8px var(--accent)}
.rfx-cico{flex:0 0 auto;border-radius:10px}
.rfx-col{min-width:0;display:flex;flex-direction:column;gap:1px}
.rfx-type{font-size:10px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--accent);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rfx-name{font-size:14.5px;font-weight:600;letter-spacing:-.01em;color:var(--name);line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word}
.rfx-ann{font-size:11px;color:var(--accent);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
/* Marketplace SaaS / externally-hosted: a dashed border + accent dot so it reads as third-party. */
.rfx-card.rfx-ext{border-style:dashed;border-width:1.5px}
.rfx-card.rfx-ext::before{content:"";position:absolute;top:8px;right:9px;width:6px;height:6px;border-radius:50%;background:var(--accent)}
.rfx-card{position:relative}
.rfx-icon.rfx-ext img{outline:1.5px dashed var(--accent);outline-offset:3px;border-radius:8px}
.rfx-iann{margin-top:3px;font-size:10.5px;font-weight:600;color:var(--accent);text-align:center;max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rfx-icon{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}
.rfx-icon img{filter:drop-shadow(0 6px 14px rgba(0,0,0,.25))}
.rfx-ilab{margin-top:5px;font-size:12.5px;font-weight:500;text-align:center;color:var(--ilab)}
.rfx-box{width:100%;flex:1;min-height:40px;display:flex;align-items:center;justify-content:center;text-align:center;padding:6px;box-sizing:border-box;border-radius:10px;background:var(--gbg);border:1px solid var(--bord);font-size:11px;color:var(--name)}
.rfx-grp{width:100%;height:100%;border-radius:18px;background:var(--gbg);border:1px solid var(--gbord);position:relative}
.rfx-grp-tag{position:absolute;top:-13px;left:18px;display:inline-flex;align-items:center;gap:7px;padding:4px 12px;font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-radius:8px;background:var(--gtbg);color:var(--gtfg);border:1px solid var(--gbord);cursor:move}
.rfx-grip{flex:0 0 auto;opacity:.5;margin-left:-2px}
.rfx-grp-tag:hover .rfx-grip{opacity:.8}
/* Frame groups: pan through the body; move only by the label chip; resize at the edges.
   !important overrides the inline pointer-events:all React Flow sets on draggable nodes. */
.rfx .react-flow__node-group{pointer-events:none!important}
.rfx .react-flow__node-group .rfx-grp-tag,.rfx .react-flow__node-group .react-flow__resize-control{pointer-events:all!important}
.rfx .react-flow__pane{cursor:grab}
.rfx .react-flow__pane:active{cursor:grabbing}
.rfx .react-flow__resize-control.handle{width:9px;height:9px;border-radius:3px;background:#5b8cff;border:1.5px solid var(--bg);opacity:0;transition:opacity .14s}
.rfx .react-flow__node:hover .react-flow__resize-control.handle{opacity:1}
.rfx .react-flow__resize-control.line{border-color:transparent}
.rfx .react-flow__node:hover .react-flow__resize-control.line{border-color:color-mix(in srgb,#5b8cff 50%,transparent)}
.rfx-bar{display:flex;align-items:center;justify-content:space-between;gap:6px;box-sizing:border-box;width:${FINDER_W + FINDER_BORDER}px;max-width:${FINDER_MAX_VW}vw;padding:7px 9px;border-radius:13px;background:var(--exp-bg);border:1px solid var(--exp-bord);box-shadow:var(--exp-shadow);flex-wrap:nowrap}
/* The toolbar and the finder form one top-left column: same left edge, same width,
   same border and radius, with the finder starting 8px below the toolbar (its 50px
   height plus the gap, from the panel margin). To fit the column the toolbar is compact:
   the Group-by buttons show only their icons (each keeps its tooltip and label), and
   PNG/SVG show only their text, since their two picture icons are the same. These
   rules come before the buttons' own, so each carries an extra .rfx to win. */
.rfx .rfx-sbtn{padding:6px 8px}
.rfx .rfx-sbtn>span{display:none}
.rfx .rfx-xbtn{padding:8px 10px}
.rfx .rfx-xbtn>svg{display:none}
.rfx .react-flow__panel.rfx-finder-panel{top:${TOOLBAR_STACK}px}
/* Phones (STACK_W in fitGeometry): both bars span the window inside the panel margins,
   and the open finder is only as tall as its rows, scrolling past the screen bottom. */
@media (max-width:${STACK_W}px){
.rfx .react-flow__panel.rfx-bar-panel{right:0}
.rfx .rfx-bar{width:auto;max-width:none}
.rfx .react-flow__panel.rfx-finder-panel{right:0}
.rfx .rfx-finder{width:auto;max-width:none;height:auto;max-height:100%}
.rfx .rfx-find-list{min-height:0}
}
/* Without the Group-by buttons (every diagram but cloud architecture) the bar has four
   buttons. Spread evenly, they leave gaps that look like missing buttons, so the theme
   and source buttons sit together on the left and PNG/SVG sit on the right. */
.rfx-bar--short{justify-content:flex-start}
.rfx-bar--short>.rfx-div{margin-left:auto}
.rfx.dark .rfx-bar{backdrop-filter:blur(8px)}
.rfx-div{width:1px;align-self:stretch;margin:2px 0;background:var(--gbord)}
.rfx-seg{display:flex;gap:3px;padding:3px;border-radius:9px;background:var(--gbg);border:1px solid var(--gbord)}
.rfx-sbtn{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:7px;border:0;cursor:pointer;font:600 11.5px/1 ui-sans-serif,-apple-system,"Segoe UI",Roboto,system-ui,sans-serif;color:var(--sub);background:transparent;transition:background .14s,color .14s}
.rfx-sbtn svg{flex:0 0 auto}
.rfx-sbtn:hover{color:var(--name)}
.rfx-sbtn.is-active{color:#fff;background:#5b8cff;box-shadow:0 2px 9px -3px rgba(91,140,255,.6)}
.rfx-sbtn:focus-visible{outline:2px solid #5b8cff;outline-offset:2px}
.rfx-tbtn{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:9px;border:1px solid var(--gbord);background:var(--gtbg);color:var(--name);cursor:pointer;transition:border-color .14s,background .14s}
.rfx-tbtn:hover{border-color:#5b8cff;background:color-mix(in srgb,#5b8cff 12%,var(--gtbg))}
.rfx-tbtn:focus-visible{outline:2px solid #5b8cff;outline-offset:2px}
.rfx-xbtn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 12px;border-radius:9px;font:600 12px/1 ui-sans-serif,-apple-system,"Segoe UI",Roboto,system-ui,sans-serif;letter-spacing:.02em;cursor:pointer;color:var(--name);background:var(--gtbg);border:1px solid var(--gbord);transition:background .15s,border-color .15s,color .15s,transform .08s}
.rfx-xbtn svg{color:#5b8cff;flex:0 0 auto}
.rfx-xbtn:hover{border-color:#5b8cff;background:color-mix(in srgb,#5b8cff 13%,var(--gtbg));transform:translateY(-1px)}
.rfx-xbtn:active{transform:translateY(0)}
.rfx-xbtn:focus-visible{outline:2px solid #5b8cff;outline-offset:2px}
.rfx-xbtn[disabled]{cursor:default;opacity:.65}
.rfx-xbtn.is-done{border-color:#2dd4a7;color:#2dd4a7}
.rfx-xbtn.is-done svg{color:#2dd4a7}
.rfx-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
@media (prefers-reduced-motion:reduce){.rfx-xbtn,.rfx-sbtn,.rfx-tbtn{transition:none}}
/* Zoom controls: a horizontal strip centered along the bottom edge (clear of the
   full-height finder on the left and the minimap on the right). */
.rfx .react-flow__controls.rfx-zoom{flex-direction:row}
/* View-source modal: full-cover overlay with a centered card + scrollable source. */
.rfx-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(6,9,16,.55);backdrop-filter:blur(2px)}
.rfx-modal-card{display:flex;flex-direction:column;width:min(720px,92vw);max-height:82vh;border-radius:14px;background:var(--exp-bg);border:1px solid var(--exp-bord);box-shadow:var(--exp-shadow);overflow:hidden}
.rfx-modal-head{display:flex;align-items:center;gap:10px;padding:10px 12px 10px 16px;border-bottom:1px solid var(--gbord)}
.rfx-modal-title{flex:1;font:700 11px/1 ui-sans-serif,-apple-system,"Segoe UI",Roboto,system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--sub)}
.rfx-modal-actions{display:flex;align-items:center;gap:8px}
.rfx-modal-x{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:9px;border:1px solid var(--gbord);background:var(--gtbg);color:var(--sub);cursor:pointer;transition:color .14s,border-color .14s}
.rfx-modal-x:hover{color:#ff6b6b;border-color:#ff6b6b}
.rfx-modal-pre{margin:0;padding:16px;overflow:auto;white-space:pre;tab-size:2;color:var(--name);background:var(--gbg);font:500 12.5px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace}
.rfx.rfx-exporting .react-flow__node.rfx-dim{opacity:1}
.rfx.rfx-exporting .react-flow__resize-control{display:none}
.rfx.rfx-exporting .rfx-card{backdrop-filter:none}
.rfx.rfx-exporting .react-flow__node:hover .rfx-card{transform:none;box-shadow:none}
/* Resource finder (sticky top-left): omni search + scrollable list. */
/* Stretch the finder panel from the toolbar's top to the minimap's bottom (all
   three panels share the 15px panel margin, so their edges line up). The panel
   itself is click-through; only the finder card captures events, so the empty
   space under a collapsed finder doesn't block panning the canvas. */
.rfx .react-flow__panel.rfx-finder-panel{bottom:0;pointer-events:none}
.rfx-finder{display:flex;flex-direction:column;height:100%;pointer-events:auto;width:${FINDER_W}px;max-width:${FINDER_MAX_VW}vw;border-radius:13px;background:var(--exp-bg);border:1px solid var(--exp-bord);box-shadow:var(--exp-shadow);overflow:hidden;font:500 12.5px/1.3 ui-sans-serif,-apple-system,"Segoe UI",Roboto,system-ui,sans-serif}
.rfx-finder.is-collapsed{height:auto}
.rfx.dark .rfx-finder{backdrop-filter:blur(8px)}
.rfx-find-head{display:flex;align-items:center;gap:7px;padding:7px 9px}
.rfx-finder:not(.is-collapsed) .rfx-find-head{border-bottom:1px solid var(--gbord)}
.rfx-find-head>svg{flex:0 0 auto;color:var(--sub)}
.rfx-find-box{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--name);font:inherit}
.rfx-find-box::placeholder{color:var(--sub)}
.rfx-find-box::-webkit-search-cancel-button{-webkit-appearance:none;height:12px;width:12px;background:var(--sub);border-radius:50%;-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M18 6 6 18M6 6l12 12' stroke='black' stroke-width='3'/%3E%3C/svg%3E") center/10px no-repeat;cursor:pointer}
.rfx-find-toggle{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border:0;border-radius:7px;background:transparent;color:var(--sub);cursor:pointer}
.rfx-find-toggle:hover{color:var(--name);background:var(--gbg)}
.rfx-find-list{display:flex;flex-direction:column;gap:2px;padding:6px;flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain}
/* Refined, theme-aware scrollbar for the scrollable panels (slim, rounded, inset). */
.rfx-find-list,.rfx-modal-pre{scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--sub) 45%,transparent) transparent}
.rfx-find-list::-webkit-scrollbar,.rfx-modal-pre::-webkit-scrollbar{width:10px;height:10px}
.rfx-find-list::-webkit-scrollbar-track,.rfx-modal-pre::-webkit-scrollbar-track{background:transparent}
.rfx-find-list::-webkit-scrollbar-thumb,.rfx-modal-pre::-webkit-scrollbar-thumb{background:color-mix(in srgb,var(--sub) 42%,transparent);border-radius:999px;border:3px solid transparent;background-clip:padding-box}
.rfx-find-list::-webkit-scrollbar-thumb:hover,.rfx-modal-pre::-webkit-scrollbar-thumb:hover{background:color-mix(in srgb,var(--sub) 72%,transparent);background-clip:padding-box}
.rfx-find-list::-webkit-scrollbar-corner,.rfx-modal-pre::-webkit-scrollbar-corner{background:transparent}
.rfx-find-row{display:flex;align-items:center;gap:9px;width:100%;text-align:left;padding:6px 8px;border:0;border-radius:9px;background:transparent;color:var(--name);cursor:pointer;font:inherit;transition:background .12s}
.rfx-find-row:hover{background:color-mix(in srgb,var(--accent) 14%,transparent)}
.rfx-find-row:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}
.rfx-find-ico{flex:0 0 auto;border-radius:5px}
.rfx-find-dot{flex:0 0 auto;width:8px;height:8px;margin:7px;border-radius:50%;background:var(--accent)}
.rfx-find-text{display:flex;flex-direction:column;min-width:0;gap:1px}
.rfx-find-name{color:var(--name);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rfx-find-type{color:var(--accent);font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rfx-find-empty{padding:14px 10px;text-align:center;color:var(--sub);font-size:12px}
/* "light-up": a pulsing accent ring on the located node. */
.rfx .react-flow__node.rfx-spot{z-index:40}
.rfx .react-flow__node.rfx-spot .rfx-card,.rfx .react-flow__node.rfx-spot .rfx-icon img,.rfx .react-flow__node.rfx-spot .rfx-box,.rfx .react-flow__node.rfx-spot .rfx-ertable{animation:rfx-pulse 1.15s ease-out 2}
.rfx-ctx{position:fixed;z-index:60;min-width:186px;padding:5px;border-radius:10px;background:var(--exp-bg);border:1px solid var(--exp-bord);box-shadow:var(--exp-shadow);backdrop-filter:blur(8px)}
.rfx-ctx-item{display:block;width:100%;text-align:left;padding:7px 10px;border:0;background:transparent;color:var(--name);border-radius:6px;cursor:pointer;font:inherit;font-size:12.5px;white-space:nowrap}
.rfx-ctx-item:hover{background:rgba(91,140,255,.16)}
.rfx-ctx-sep{height:1px;margin:4px 6px;background:var(--exp-bord)}
.rfx .react-flow__node.selected .rfx-card,.rfx .react-flow__node.selected .rfx-ertable,.rfx .react-flow__node.selected .rfx-icon img,.rfx .react-flow__node.selected .rfx-box{outline:2px solid color-mix(in srgb,var(--accent,#5b8cff) 80%,transparent);outline-offset:2px}
/* Easter eggs \u2014 team themes ("Travis \u2764\uFE0F Taylor" \u2192 Chiefs, "E-A-G-L-E-S Eagles!" \u2192 Eagles). */
.rfx .react-flow.rfx-chiefs{background:radial-gradient(760px 380px at 78% -8%,rgba(255,184,28,.20),transparent 60%),radial-gradient(680px 460px at 6% 112%,rgba(227,24,55,.30),transparent 58%),linear-gradient(160deg,#3a0b12,#210a0e)!important}
.rfx .react-flow.rfx-chiefs .rfx-card,.rfx .react-flow.rfx-chiefs .rfx-ertable,.rfx .react-flow.rfx-chiefs .rfx-icon,.rfx .react-flow.rfx-chiefs .rfx-box{--accent:#e31837!important}
.rfx .react-flow.rfx-chiefs .rfx-type{color:#ffb81c!important}
.rfx .react-flow.rfx-eagles{background:radial-gradient(760px 380px at 78% -8%,rgba(165,172,175,.14),transparent 60%),radial-gradient(680px 460px at 6% 112%,rgba(0,76,84,.55),transparent 58%),linear-gradient(160deg,#04262b,#02161a)!important}
.rfx .react-flow.rfx-eagles .rfx-card,.rfx .react-flow.rfx-eagles .rfx-ertable,.rfx .react-flow.rfx-eagles .rfx-icon,.rfx .react-flow.rfx-eagles .rfx-box{--accent:#00b34d!important}
.rfx .react-flow.rfx-eagles .rfx-type{color:#a5acaf!important}
.rfx-team-toast{position:absolute;top:76px;left:50%;transform:translateX(-50%);z-index:56;padding:10px 20px;border-radius:999px;font-weight:800;font-size:14px;letter-spacing:.02em;border:2px solid;white-space:nowrap;animation:rfx-pop .5s ease-out both}
.rfx-toast-chiefs{background:linear-gradient(90deg,#c8102e,#e31837);color:#ffb81c;border-color:#ffb81c;box-shadow:0 12px 30px -8px rgba(227,24,55,.75)}
.rfx-toast-eagles{background:linear-gradient(90deg,#004C54,#046a75);color:#fff;border-color:#a5acaf;box-shadow:0 12px 30px -8px rgba(0,76,84,.75)}
@keyframes rfx-pop{0%{transform:translateX(-50%) scale(.6);opacity:0}60%{transform:translateX(-50%) scale(1.08);opacity:1}100%{transform:translateX(-50%) scale(1)}}
.rfx-team-fx{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:55}
.rfx-conf{position:absolute;top:-8%;font-size:22px;animation-name:rfx-fall;animation-timing-function:linear;animation-iteration-count:infinite;will-change:transform}
.rfx-conf.c0{font-size:27px}
@keyframes rfx-fall{0%{transform:translateY(-12vh) rotate(0)}100%{transform:translateY(112vh) rotate(340deg)}}
@media (prefers-reduced-motion:reduce){.rfx-conf{display:none}.rfx-team-toast{animation:none}}
@keyframes rfx-pulse{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--accent,#5b8cff) 75%,transparent)}100%{box-shadow:0 0 0 16px transparent}}
@media (prefers-reduced-motion:reduce){.rfx .react-flow__node.rfx-spot .rfx-card,.rfx .react-flow__node.rfx-spot .rfx-icon img,.rfx .react-flow__node.rfx-spot .rfx-box,.rfx .react-flow__node.rfx-spot .rfx-ertable{animation:none;box-shadow:0 0 0 3px var(--accent,#5b8cff)}}
/* \u2500\u2500 ER (entity-relationship) tables + crow's-foot edges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.rfx-ertable{display:flex;flex-direction:column;width:100%;height:100%;box-sizing:border-box;border-radius:12px;overflow:hidden;background:var(--card);border:1px solid color-mix(in srgb,var(--accent) 45%,var(--bord));transition:transform .17s,box-shadow .17s,border-color .17s}
.rfx.dark .rfx-ertable{box-shadow:0 18px 40px -20px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.05);backdrop-filter:blur(7px)}
.rfx.light .rfx-ertable{box-shadow:0 8px 22px -12px rgba(20,40,90,.2),0 1px 2px rgba(20,40,90,.06)}
.rfx .react-flow__node:hover .rfx-ertable{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 80%,transparent)}
.rfx.dark .react-flow__node:hover .rfx-ertable{box-shadow:0 24px 48px -18px rgba(0,0,0,.9),0 0 24px -10px var(--accent)}
.rfx-erhdr{display:flex;align-items:center;gap:12px;height:64px;box-sizing:border-box;padding:0 15px;background:var(--card);border-bottom:1px solid color-mix(in srgb,var(--accent) 38%,var(--bord))}
.rfx-erhdr .rfx-name{display:block;-webkit-line-clamp:unset;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rfx-erbody{display:flex;flex-direction:column}
.rfx-errow{display:flex;align-items:center;justify-content:space-between;gap:10px;height:28px;padding:0 12px;font-size:13.5px;color:var(--name);border-top:1px solid var(--bord)}
.rfx-errow.is-pk{background:color-mix(in srgb,var(--accent) 8%,transparent)}
.rfx-ercol{display:flex;align-items:baseline;gap:7px;min-width:0}
.rfx-ertype{color:var(--sub);font-size:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;white-space:nowrap}
.rfx-erfield{color:var(--name);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rfx-errow.is-pk .rfx-erfield{font-weight:700}
.rfx-erkeys{display:inline-flex;gap:4px;flex:0 0 auto}
.rfx-erkey{font-size:9px;font-weight:800;letter-spacing:.04em;padding:1px 4px;border-radius:4px;line-height:1.5}
.rfx-erkey-pk{color:#e0a458;background:rgba(224,164,88,.18)}
.rfx-erkey-fk{color:#6ea8ff;background:rgba(110,168,255,.18)}
.rfx-erkey-uk{color:#2dd4a7;background:rgba(45,212,167,.18)}
.rfx-cf line,.rfx-cf circle{vector-effect:non-scaling-stroke}
.rfx-erlabel{position:absolute;pointer-events:none;font-size:10.5px;font-weight:500;color:var(--sub);background:var(--exp-bg);border:1px solid var(--gbord);border-radius:7px;padding:1px 6px;white-space:nowrap}
/* \u2500\u2500 Flowchart nodes (process / decision / datastore / \u2026) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.rfx-fnode{position:relative;width:100%;height:100%;--fstroke:color-mix(in srgb,var(--accent) 64%,var(--bord));--fill:color-mix(in srgb,var(--accent) 13%,var(--fnodebg));transition:transform .17s,filter .17s}
.rfx-fsvg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.rfx-fnode .rfx-ffill{fill:var(--fill)}
.rfx-fnode .rfx-fline{fill:none;stroke:var(--fstroke);stroke-width:1.7;vector-effect:non-scaling-stroke;stroke-linejoin:round}
.rfx-fnode .rfx-fsolid{fill:var(--accent);stroke:none}
/* Top-down sheen over the fill \u2014 the glass highlight the cards get from their gradient. */
.rfx.dark .rfx-gs0{stop-color:#fff;stop-opacity:.085}
.rfx.dark .rfx-gs1{stop-color:#000;stop-opacity:.10}
.rfx.light .rfx-gs0{stop-color:#fff;stop-opacity:.62}
.rfx.light .rfx-gs1{stop-color:#fff;stop-opacity:.06}
/* The shadow sits on the node wrapper, never on the <svg>: a CSS filter on an
   SVG root shadows the element's BOX, which drew a phantom rounded rectangle
   behind every drawn shape. On the wrapper it traces the geometry instead. */
.rfx-fsvgn{filter:var(--fsh,var(--fshbase))}
.rfx-fbox{position:absolute;inset:0;box-sizing:border-box;background:linear-gradient(180deg,var(--fgloss0),var(--fgloss1)),var(--fill);border:1.7px solid var(--fstroke)}
.rfx.dark{--fgloss0:rgba(255,255,255,.085);--fgloss1:rgba(0,0,0,.10);--fshbase:drop-shadow(0 10px 15px rgba(0,0,0,.45));--fglow:drop-shadow(0 0 16px color-mix(in srgb,var(--accent) 45%,transparent))}
.rfx.light{--fgloss0:rgba(255,255,255,.62);--fgloss1:rgba(255,255,255,.06);--fshbase:drop-shadow(0 6px 11px rgba(20,40,90,.17));--fglow:drop-shadow(0 0 12px color-mix(in srgb,var(--accent) 34%,transparent))}
.rfx.dark .rfx-fbox{box-shadow:0 18px 40px -18px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.07)}
.rfx.light .rfx-fbox{box-shadow:0 8px 22px -12px rgba(20,40,90,.2),0 1px 2px rgba(20,40,90,.06)}
.rfx-flab{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;text-align:center;padding:6px 14px;box-sizing:border-box;font-size:14px;font-weight:600;letter-spacing:-.01em;line-height:1.28;color:var(--name);white-space:pre-line;word-break:break-word;pointer-events:none}
.rfx-fico{flex:0 0 auto;width:17px;height:17px;fill:none;stroke:var(--accent);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:.92}
.rfx .react-flow__node:hover .rfx-fnode{transform:translateY(-2px);--fill:color-mix(in srgb,var(--accent) 20%,var(--fnodebg))}
.rfx .react-flow__node:hover .rfx-fnode:not(.rfx-fsvgn){filter:var(--fglow)}
.rfx .react-flow__node:hover .rfx-fsvgn{--fsh:var(--fshbase) var(--fglow)}
.rfx .react-flow__node:hover .rfx-fnode .rfx-fline{stroke:var(--accent)}
.rfx .react-flow__node:hover .rfx-fbox{border-color:var(--accent)}
/* Selection ring: on a box it follows the border radius (pill, circle); a drawn
   shape would be fenced in by a rectangle, so its own outline lights up. */
.rfx .react-flow__node.selected .rfx-fbox,.rfx .react-flow__node.rfx-spot .rfx-fbox{outline:2px solid color-mix(in srgb,var(--accent,#5b8cff) 80%,transparent);outline-offset:3px}
.rfx .react-flow__node.selected .rfx-fsvgn,.rfx .react-flow__node.rfx-spot .rfx-fsvgn{--fstroke:var(--accent);--fsh:var(--fshbase) var(--fglow)}
.rfx .react-flow__node.selected .rfx-fsvgn .rfx-fline,.rfx .react-flow__node.rfx-spot .rfx-fsvgn .rfx-fline{stroke-width:3}
.rfx.rfx-exporting .react-flow__node .rfx-fnode{transform:none;--fsh:var(--fshbase)}
.rfx.rfx-exporting .react-flow__node .rfx-fnode:not(.rfx-fsvgn){filter:none}
`;
  return __toCommonJS(app_exports);
})();
