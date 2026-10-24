/* Deezle Infra Diagrams: rf-app, part 3 of 4. The server joins the parts in order and inlines them into the widget page. Built from src/widget-app by scripts/build-server.mjs. */
  // node_modules/@xyflow/react/dist/esm/index.js
  init_compat_module();
  var StoreContext = X(null);
  var Provider$1 = StoreContext.Provider;
  var zustandErrorMessage = errorMessages["error001"]("react");
  function useStore(selector, equalityFn) {
    const store = x2(StoreContext);
    if (store === null) {
      throw new Error(zustandErrorMessage);
    }
    return useStoreWithEqualityFn(store, selector, equalityFn);
  }
  function useStoreApi() {
    const store = x2(StoreContext);
    if (store === null) {
      throw new Error(zustandErrorMessage);
    }
    return T2(
      () => ({
        getState: store.getState,
        setState: store.setState,
        subscribe: store.subscribe,
      }),
      [store],
    );
  }
  var style = { display: "none" };
  var ariaLiveStyle = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)",
  };
  var ARIA_NODE_DESC_KEY = "react-flow__node-desc";
  var ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
  var ARIA_LIVE_MESSAGE = "react-flow__aria-live";
  var ariaLiveSelector = (s3) => s3.ariaLiveMessage;
  var ariaLabelConfigSelector = (s3) => s3.ariaLabelConfig;
  function AriaLiveMessage({ rfId }) {
    const ariaLiveMessage = useStore(ariaLiveSelector);
    return u3("div", {
      id: `${ARIA_LIVE_MESSAGE}-${rfId}`,
      "aria-live": "assertive",
      "aria-atomic": "true",
      style: ariaLiveStyle,
      children: ariaLiveMessage,
    });
  }
  function A11yDescriptions({ rfId, disableKeyboardA11y }) {
    const ariaLabelConfig = useStore(ariaLabelConfigSelector);
    return u3(S, {
      children: [
        u3("div", {
          id: `${ARIA_NODE_DESC_KEY}-${rfId}`,
          style,
          children: disableKeyboardA11y
            ? ariaLabelConfig["node.a11yDescription.default"]
            : ariaLabelConfig["node.a11yDescription.keyboardDisabled"],
        }),
        u3("div", {
          id: `${ARIA_EDGE_DESC_KEY}-${rfId}`,
          style,
          children: ariaLabelConfig["edge.a11yDescription.default"],
        }),
        !disableKeyboardA11y && u3(AriaLiveMessage, { rfId }),
      ],
    });
  }
  var Panel = D3(
    ({ position = "top-left", children: children2, className, style: style2, ...rest }, ref) => {
      const positionClasses = `${position}`.split("-");
      return u3("div", {
        className: cc(["react-flow__panel", className, ...positionClasses]),
        style: style2,
        ref,
        ...rest,
        children: children2,
      });
    },
  );
  Panel.displayName = "Panel";
  var link = `https://reactflow.dev${true ? "?utm_source=attribution" : "/attribution"}`;
  function Attribution({ proOptions, position = "bottom-right" }) {
    if (proOptions?.hideAttribution) {
      return null;
    }
    return u3(Panel, {
      position,
      className: "react-flow__attribution",
      "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${link}`,
      children: u3("a", {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "React Flow attribution",
        children: "React Flow",
      }),
    });
  }
  var selector$m = (s3) => {
    const selectedNodes = [];
    const selectedEdges = [];
    for (const [, node] of s3.nodeLookup) {
      if (node.selected) {
        selectedNodes.push(node.internals.userNode);
      }
    }
    for (const [, edge] of s3.edgeLookup) {
      if (edge.selected) {
        selectedEdges.push(edge);
      }
    }
    return { selectedNodes, selectedEdges };
  };
  var selectId = (obj) => obj.id;
  function areEqual(a3, b3) {
    return (
      shallow$1(a3.selectedNodes.map(selectId), b3.selectedNodes.map(selectId)) &&
      shallow$1(a3.selectedEdges.map(selectId), b3.selectedEdges.map(selectId))
    );
  }
  function SelectionListenerInner({ onSelectionChange }) {
    const store = useStoreApi();
    const { selectedNodes, selectedEdges } = useStore(selector$m, areEqual);
    h2(() => {
      const params = { nodes: selectedNodes, edges: selectedEdges };
      onSelectionChange?.(params);
      store.getState().onSelectionChangeHandlers.forEach((fn2) => fn2(params));
    }, [selectedNodes, selectedEdges, onSelectionChange]);
    return null;
  }
  var changeSelector = (s3) => !!s3.onSelectionChangeHandlers;
  function SelectionListener({ onSelectionChange }) {
    const storeHasSelectionChangeHandlers = useStore(changeSelector);
    if (onSelectionChange || storeHasSelectionChangeHandlers) {
      return u3(SelectionListenerInner, { onSelectionChange });
    }
    return null;
  }
  var defaultNodeOrigin = [0, 0];
  var defaultViewport = { x: 0, y: 0, zoom: 1 };
  var reactFlowFieldsToTrack = [
    "nodes",
    "edges",
    "defaultNodes",
    "defaultEdges",
    "onConnect",
    "onConnectStart",
    "onConnectEnd",
    "onClickConnectStart",
    "onClickConnectEnd",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "nodesFocusable",
    "edgesFocusable",
    "edgesReconnectable",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "minZoom",
    "maxZoom",
    "nodeExtent",
    "onNodesChange",
    "onEdgesChange",
    "elementsSelectable",
    "connectionMode",
    "snapGrid",
    "snapToGrid",
    "translateExtent",
    "connectOnClick",
    "defaultEdgeOptions",
    "fitView",
    "fitViewOptions",
    "onNodesDelete",
    "onEdgesDelete",
    "onDelete",
    "onNodeDrag",
    "onNodeDragStart",
    "onNodeDragStop",
    "onSelectionDrag",
    "onSelectionDragStart",
    "onSelectionDragStop",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "noPanClassName",
    "nodeOrigin",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onError",
    "connectionRadius",
    "isValidConnection",
    "selectNodesOnDrag",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "onBeforeDelete",
    "debug",
    "autoPanSpeed",
    "ariaLabelConfig",
    "zIndexMode",
  ];
  var fieldsToTrack = [...reactFlowFieldsToTrack, "rfId"];
  var selector$l = (s3) => ({
    setNodes: s3.setNodes,
    setEdges: s3.setEdges,
    setMinZoom: s3.setMinZoom,
    setMaxZoom: s3.setMaxZoom,
    setTranslateExtent: s3.setTranslateExtent,
    setNodeExtent: s3.setNodeExtent,
    reset: s3.reset,
    setDefaultNodesAndEdges: s3.setDefaultNodesAndEdges,
  });
  var initPrevValues2 = {
    /*
     * these are values that are also passed directly to other components
     * than the StoreUpdater. We can reduce the number of setStore calls
     * by setting the same values here as prev fields.
     */
    translateExtent: infiniteExtent,
    nodeOrigin: defaultNodeOrigin,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: true,
    noPanClassName: "nopan",
    rfId: "1",
  };
  function StoreUpdater(props) {
    const {
      setNodes,
      setEdges,
      setMinZoom,
      setMaxZoom,
      setTranslateExtent,
      setNodeExtent,
      reset,
      setDefaultNodesAndEdges,
    } = useStore(selector$l, shallow$1);
    const store = useStoreApi();
    h2(() => {
      setDefaultNodesAndEdges(props.defaultNodes, props.defaultEdges);
      return () => {
        previousFields.current = initPrevValues2;
        reset();
      };
    }, []);
    const previousFields = A2(initPrevValues2);
    h2(
      () => {
        for (const fieldName of fieldsToTrack) {
          const fieldValue = props[fieldName];
          const previousFieldValue = previousFields.current[fieldName];
          if (fieldValue === previousFieldValue) continue;
          if (typeof props[fieldName] === "undefined") continue;
          if (fieldName === "nodes") setNodes(fieldValue);
          else if (fieldName === "edges") setEdges(fieldValue);
          else if (fieldName === "minZoom") setMinZoom(fieldValue);
          else if (fieldName === "maxZoom") setMaxZoom(fieldValue);
          else if (fieldName === "translateExtent") setTranslateExtent(fieldValue);
          else if (fieldName === "nodeExtent") setNodeExtent(fieldValue);
          else if (fieldName === "ariaLabelConfig")
            store.setState({ ariaLabelConfig: mergeAriaLabelConfig(fieldValue) });
          else if (fieldName === "fitView") store.setState({ fitViewQueued: fieldValue });
          else if (fieldName === "fitViewOptions") store.setState({ fitViewOptions: fieldValue });
          else store.setState({ [fieldName]: fieldValue });
        }
        previousFields.current = props;
      },
      // Only re-run the effect if one of the fields we track changes
      fieldsToTrack.map((fieldName) => props[fieldName]),
    );
    return null;
  }
  function getMediaQuery() {
    if (typeof window === "undefined" || !window.matchMedia) {
      return null;
    }
    return window.matchMedia("(prefers-color-scheme: dark)");
  }
  function useColorModeClass(colorMode) {
    const [colorModeClass, setColorModeClass] = d2(colorMode === "system" ? null : colorMode);
    h2(() => {
      if (colorMode !== "system") {
        setColorModeClass(colorMode);
        return;
      }
      const mediaQuery = getMediaQuery();
      const updateColorModeClass = () => setColorModeClass(mediaQuery?.matches ? "dark" : "light");
      updateColorModeClass();
      mediaQuery?.addEventListener("change", updateColorModeClass);
      return () => {
        mediaQuery?.removeEventListener("change", updateColorModeClass);
      };
    }, [colorMode]);
    return colorModeClass !== null ? colorModeClass : getMediaQuery()?.matches ? "dark" : "light";
  }
  var defaultDoc = typeof document !== "undefined" ? document : null;
  function useKeyPress(
    keyCode = null,
    options = { target: defaultDoc, actInsideInputWithModifier: true },
  ) {
    const [keyPressed, setKeyPressed] = d2(false);
    const modifierPressed = A2(false);
    const pressedKeys = A2(/* @__PURE__ */ new Set([]));
    const [keyCodes, keysToWatch] = T2(() => {
      if (keyCode !== null) {
        const keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
        const keys = keyCodeArr
          .filter((kc) => typeof kc === "string")
          .map((kc) => kc.replace("+", "\n").replace("\n\n", "\n+").split("\n"));
        const keysFlat = keys.reduce((res, item) => res.concat(...item), []);
        return [keys, keysFlat];
      }
      return [[], []];
    }, [keyCode]);
    h2(() => {
      const target = options?.target ?? defaultDoc;
      const actInsideInputWithModifier = options?.actInsideInputWithModifier ?? true;
      if (keyCode !== null) {
        const downHandler = (event) => {
          modifierPressed.current =
            event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
          const preventAction =
            (!modifierPressed.current ||
              (modifierPressed.current && !actInsideInputWithModifier)) &&
            isInputDOMNode(event);
          if (preventAction) {
            return false;
          }
          const keyOrCode = useKeyOrCode(event.code, keysToWatch);
          pressedKeys.current.add(event[keyOrCode]);
          if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
            const target2 = event.composedPath?.()?.[0] || event.target;
            const isInteractiveElement =
              target2?.nodeName === "BUTTON" || target2?.nodeName === "A";
            if (
              options.preventDefault !== false &&
              (modifierPressed.current || !isInteractiveElement)
            ) {
              event.preventDefault();
            }
            setKeyPressed(true);
          }
        };
        const upHandler = (event) => {
          const keyOrCode = useKeyOrCode(event.code, keysToWatch);
          if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
            setKeyPressed(false);
            pressedKeys.current.clear();
          } else {
            pressedKeys.current.delete(event[keyOrCode]);
          }
          if (event.key === "Meta") {
            pressedKeys.current.clear();
          }
          modifierPressed.current = false;
        };
        const resetHandler = () => {
          pressedKeys.current.clear();
          setKeyPressed(false);
        };
        target?.addEventListener("keydown", downHandler);
        target?.addEventListener("keyup", upHandler);
        window.addEventListener("blur", resetHandler);
        window.addEventListener("contextmenu", resetHandler);
        return () => {
          target?.removeEventListener("keydown", downHandler);
          target?.removeEventListener("keyup", upHandler);
          window.removeEventListener("blur", resetHandler);
          window.removeEventListener("contextmenu", resetHandler);
        };
      }
    }, [keyCode, setKeyPressed]);
    return keyPressed;
  }
  function isMatchingKey(keyCodes, pressedKeys, isUp) {
    return keyCodes
      .filter((keys) => isUp || keys.length === pressedKeys.size)
      .some((keys) => keys.every((k4) => pressedKeys.has(k4)));
  }
  function useKeyOrCode(eventCode, keysToWatch) {
    return keysToWatch.includes(eventCode) ? "code" : "key";
  }
  var useViewportHelper = () => {
    const store = useStoreApi();
    return T2(() => {
      return {
        zoomIn: async (options) => {
          const { panZoom } = store.getState();
          return panZoom ? panZoom.scaleBy(1.2, options) : false;
        },
        zoomOut: async (options) => {
          const { panZoom } = store.getState();
          return panZoom ? panZoom.scaleBy(1 / 1.2, options) : false;
        },
        zoomTo: async (zoomLevel, options) => {
          const { panZoom } = store.getState();
          return panZoom ? panZoom.scaleTo(zoomLevel, options) : false;
        },
        getZoom: () => store.getState().transform[2],
        setViewport: async (viewport, options) => {
          const {
            transform: [tX, tY, tZoom],
            panZoom,
          } = store.getState();
          if (!panZoom) {
            return false;
          }
          await panZoom.setViewport(
            {
              x: viewport.x ?? tX,
              y: viewport.y ?? tY,
              zoom: viewport.zoom ?? tZoom,
            },
            options,
          );
          return true;
        },
        getViewport: () => {
          const [x4, y3, zoom] = store.getState().transform;
          return { x: x4, y: y3, zoom };
        },
        setCenter: async (x4, y3, options) => {
          return store.getState().setCenter(x4, y3, options);
        },
        fitBounds: async (bounds, options) => {
          const { width, height, minZoom, maxZoom, panZoom } = store.getState();
          const viewport = getViewportForBounds(
            bounds,
            width,
            height,
            minZoom,
            maxZoom,
            options?.padding ?? 0.1,
          );
          if (!panZoom) {
            return false;
          }
          await panZoom.setViewport(viewport, {
            duration: options?.duration,
            ease: options?.ease,
            interpolate: options?.interpolate,
          });
          return true;
        },
        screenToFlowPosition: (clientPosition, options = {}) => {
          const { transform: transform2, snapGrid, snapToGrid, domNode } = store.getState();
          if (!domNode) {
            return clientPosition;
          }
          const { x: domX, y: domY } = domNode.getBoundingClientRect();
          const correctedPosition = {
            x: clientPosition.x - domX,
            y: clientPosition.y - domY,
          };
          const _snapGrid = options.snapGrid ?? snapGrid;
          const _snapToGrid = options.snapToGrid ?? snapToGrid;
          return pointToRendererPoint(correctedPosition, transform2, _snapToGrid, _snapGrid);
        },
        flowToScreenPosition: (flowPosition) => {
          const { transform: transform2, domNode } = store.getState();
          if (!domNode) {
            return flowPosition;
          }
          const { x: domX, y: domY } = domNode.getBoundingClientRect();
          const rendererPosition = rendererPointToPoint(flowPosition, transform2);
          return {
            x: rendererPosition.x + domX,
            y: rendererPosition.y + domY,
          };
        },
      };
    }, []);
  };
  function applyChanges(changes, elements) {
    const updatedElements = [];
    const changesMap = /* @__PURE__ */ new Map();
    const addItemChanges = [];
    for (const change of changes) {
      if (change.type === "add") {
        addItemChanges.push(change);
        continue;
      } else if (change.type === "remove" || change.type === "replace") {
        changesMap.set(change.id, [change]);
      } else {
        const elementChanges = changesMap.get(change.id);
        if (elementChanges) {
          elementChanges.push(change);
        } else {
          changesMap.set(change.id, [change]);
        }
      }
    }
    for (const element of elements) {
      const changes2 = changesMap.get(element.id);
      if (!changes2) {
        updatedElements.push(element);
        continue;
      }
      if (changes2[0].type === "remove") {
        continue;
      }
      if (changes2[0].type === "replace") {
        updatedElements.push({ ...changes2[0].item });
        continue;
      }
      const updatedElement = { ...element };
      for (const change of changes2) {
        applyChange(change, updatedElement);
      }
      updatedElements.push(updatedElement);
    }
    if (addItemChanges.length) {
      addItemChanges.forEach((change) => {
        if (change.index !== void 0) {
          updatedElements.splice(change.index, 0, { ...change.item });
        } else {
          updatedElements.push({ ...change.item });
        }
      });
    }
    return updatedElements;
  }
  function applyChange(change, element) {
    switch (change.type) {
      case "select": {
        element.selected = change.selected;
        break;
      }
      case "position": {
        if (typeof change.position !== "undefined") {
          element.position = change.position;
        }
        if (typeof change.dragging !== "undefined") {
          element.dragging = change.dragging;
        }
        break;
      }
      case "dimensions": {
        if (typeof change.dimensions !== "undefined") {
          element.measured = {
            ...change.dimensions,
          };
          if (change.setAttributes) {
            if (change.setAttributes === true || change.setAttributes === "width") {
              element.width = change.dimensions.width;
            }
            if (change.setAttributes === true || change.setAttributes === "height") {
              element.height = change.dimensions.height;
            }
          }
        }
        if (typeof change.resizing === "boolean") {
          element.resizing = change.resizing;
        }
        break;
      }
    }
  }
  function applyNodeChanges(changes, nodes) {
    return applyChanges(changes, nodes);
  }
  function applyEdgeChanges(changes, edges) {
    return applyChanges(changes, edges);
  }
  function createSelectionChange(id2, selected2) {
    return {
      id: id2,
      type: "select",
      selected: selected2,
    };
  }
  function getSelectionChanges(items, selectedIds = /* @__PURE__ */ new Set(), mutateItem = false) {
    const changes = [];
    for (const [id2, item] of items) {
      const willBeSelected = selectedIds.has(id2);
      if (!(item.selected === void 0 && !willBeSelected) && item.selected !== willBeSelected) {
        if (mutateItem) {
          item.selected = willBeSelected;
        }
        changes.push(createSelectionChange(item.id, willBeSelected));
      }
    }
    return changes;
  }
  function getElementsDiffChanges({ items = [], lookup }) {
    const changes = [];
    const itemsLookup = new Map(items.map((item) => [item.id, item]));
    for (const [index2, item] of items.entries()) {
      const lookupItem = lookup.get(item.id);
      const storeItem = lookupItem?.internals?.userNode ?? lookupItem;
      if (storeItem !== void 0 && storeItem !== item) {
        changes.push({ id: item.id, item, type: "replace" });
      }
      if (storeItem === void 0) {
        changes.push({ item, type: "add", index: index2 });
      }
    }
    for (const [id2] of lookup) {
      const nextNode = itemsLookup.get(id2);
      if (nextNode === void 0) {
        changes.push({ id: id2, type: "remove" });
      }
    }
    return changes;
  }
  function elementToRemoveChange(item) {
    return {
      id: item.id,
      type: "remove",
    };
  }
  var defaultOnError = createDevWarn("React Flow", "https://reactflow.dev/");
  function addEdge2(edgeParams, edges, options = {}) {
    return addEdge(edgeParams, edges, {
      ...options,
      onError: options.onError ?? defaultOnError,
    });
  }
  var isNode = (element) => isNodeBase(element);
  var isEdge = (element) => isEdgeBase(element);
  function fixedForwardRef(render) {
    return D3(render);
  }
  var useIsomorphicLayoutEffect = typeof window !== "undefined" ? _2 : h2;
  function useQueue(runQueue) {
    const [serial, setSerial] = d2(BigInt(0));
    const [queue] = d2(() => createQueue(() => setSerial((n2) => n2 + BigInt(1))));
    useIsomorphicLayoutEffect(() => {
      const queueItems = queue.get();
      if (queueItems.length) {
        runQueue(queueItems);
        queue.reset();
      }
    }, [serial]);
    return queue;
  }
  function createQueue(cb) {
    let queue = [];
    return {
      get: () => queue,
      reset: () => {
        queue = [];
      },
      push: (item) => {
        queue.push(item);
        cb();
      },
    };
  }
  var BatchContext = X(null);
  function BatchProvider({ children: children2 }) {
    const store = useStoreApi();
    const nodeQueueHandler = q2((queueItems) => {
      const {
        nodes = [],
        setNodes,
        hasDefaultNodes,
        onNodesChange,
        nodeLookup,
        fitViewQueued,
        onNodesChangeMiddlewareMap,
      } = store.getState();
      let next = nodes;
      for (const payload of queueItems) {
        next = typeof payload === "function" ? payload(next) : payload;
      }
      let changes = getElementsDiffChanges({
        items: next,
        lookup: nodeLookup,
      });
      for (const middleware of onNodesChangeMiddlewareMap.values()) {
        changes = middleware(changes);
      }
      if (hasDefaultNodes) {
        setNodes(next);
      }
      if (changes.length > 0) {
        onNodesChange?.(changes);
      } else if (fitViewQueued) {
        window.requestAnimationFrame(() => {
          const {
            fitViewQueued: fitViewQueued2,
            nodes: nodes2,
            setNodes: setNodes2,
          } = store.getState();
          if (fitViewQueued2) {
            setNodes2(nodes2);
          }
        });
      }
    }, []);
    const nodeQueue = useQueue(nodeQueueHandler);
    const edgeQueueHandler = q2((queueItems) => {
      const { edges = [], setEdges, hasDefaultEdges, onEdgesChange, edgeLookup } = store.getState();
      let next = edges;
      for (const payload of queueItems) {
        next = typeof payload === "function" ? payload(next) : payload;
      }
      if (hasDefaultEdges) {
        setEdges(next);
      } else if (onEdgesChange) {
        onEdgesChange(
          getElementsDiffChanges({
            items: next,
            lookup: edgeLookup,
          }),
        );
      }
    }, []);
    const edgeQueue = useQueue(edgeQueueHandler);
    const value = T2(() => ({ nodeQueue, edgeQueue }), []);
    return u3(BatchContext.Provider, { value, children: children2 });
  }
  function useBatchContext() {
    const batchContext = x2(BatchContext);
    if (!batchContext) {
      throw new Error("useBatchContext must be used within a BatchProvider");
    }
    return batchContext;
  }
  var selector$k = (s3) => !!s3.panZoom;
  function useReactFlow() {
    const viewportHelper = useViewportHelper();
    const store = useStoreApi();
    const batchContext = useBatchContext();
    const viewportInitialized = useStore(selector$k);
    const generalHelper = T2(() => {
      const getInternalNode = (id2) => store.getState().nodeLookup.get(id2);
      const setNodes = (payload) => {
        batchContext.nodeQueue.push(payload);
      };
      const setEdges = (payload) => {
        batchContext.edgeQueue.push(payload);
      };
      const getNodeRect = (node) => {
        const { nodeLookup, nodeOrigin } = store.getState();
        const nodeToUse = isNode(node) ? node : nodeLookup.get(node.id);
        const position = nodeToUse.parentId
          ? evaluateAbsolutePosition(
              nodeToUse.position,
              nodeToUse.measured,
              nodeToUse.parentId,
              nodeLookup,
              nodeOrigin,
            )
          : nodeToUse.position;
        const nodeWithPosition = {
          ...nodeToUse,
          position,
          width: nodeToUse.measured?.width ?? nodeToUse.width,
          height: nodeToUse.measured?.height ?? nodeToUse.height,
        };
        return nodeToRect(nodeWithPosition);
      };
      const updateNode = (id2, nodeUpdate, options = { replace: false }) => {
        setNodes((prevNodes) =>
          prevNodes.map((node) => {
            if (node.id === id2) {
              const nextNode = typeof nodeUpdate === "function" ? nodeUpdate(node) : nodeUpdate;
              return options.replace && isNode(nextNode) ? nextNode : { ...node, ...nextNode };
            }
            return node;
          }),
        );
      };
      const updateEdge = (id2, edgeUpdate, options = { replace: false }) => {
        setEdges((prevEdges) =>
          prevEdges.map((edge) => {
            if (edge.id === id2) {
              const nextEdge = typeof edgeUpdate === "function" ? edgeUpdate(edge) : edgeUpdate;
              return options.replace && isEdge(nextEdge) ? nextEdge : { ...edge, ...nextEdge };
            }
            return edge;
          }),
        );
      };
      return {
        getNodes: () => store.getState().nodes.map((n2) => ({ ...n2 })),
        getNode: (id2) => getInternalNode(id2)?.internals.userNode,
        getInternalNode,
        getEdges: () => {
          const { edges = [] } = store.getState();
          return edges.map((e3) => ({ ...e3 }));
        },
        getEdge: (id2) => store.getState().edgeLookup.get(id2),
        setNodes,
        setEdges,
        addNodes: (payload) => {
          const newNodes = Array.isArray(payload) ? payload : [payload];
          batchContext.nodeQueue.push((nodes) => [...nodes, ...newNodes]);
        },
        addEdges: (payload) => {
          const newEdges = Array.isArray(payload) ? payload : [payload];
          batchContext.edgeQueue.push((edges) => [...edges, ...newEdges]);
        },
        toObject: () => {
          const { nodes = [], edges = [], transform: transform2 } = store.getState();
          const [x4, y3, zoom] = transform2;
          return {
            nodes: nodes.map((n2) => ({ ...n2 })),
            edges: edges.map((e3) => ({ ...e3 })),
            viewport: {
              x: x4,
              y: y3,
              zoom,
            },
          };
        },
        deleteElements: async ({ nodes: nodesToRemove = [], edges: edgesToRemove = [] }) => {
          const {
            nodes,
            edges,
            onNodesDelete,
            onEdgesDelete,
            triggerNodeChanges,
            triggerEdgeChanges,
            onDelete,
            onBeforeDelete,
          } = store.getState();
          const { nodes: matchingNodes, edges: matchingEdges } = await getElementsToRemove({
            nodesToRemove,
            edgesToRemove,
            nodes,
            edges,
            onBeforeDelete,
          });
          const hasMatchingEdges = matchingEdges.length > 0;
          const hasMatchingNodes = matchingNodes.length > 0;
          if (hasMatchingEdges) {
            const edgeChanges = matchingEdges.map(elementToRemoveChange);
            onEdgesDelete?.(matchingEdges);
            triggerEdgeChanges(edgeChanges);
          }
          if (hasMatchingNodes) {
            const nodeChanges = matchingNodes.map(elementToRemoveChange);
            onNodesDelete?.(matchingNodes);
            triggerNodeChanges(nodeChanges);
          }
          if (hasMatchingNodes || hasMatchingEdges) {
            onDelete?.({ nodes: matchingNodes, edges: matchingEdges });
          }
          return { deletedNodes: matchingNodes, deletedEdges: matchingEdges };
        },
        /**
         * Partial is defined as "the 2 nodes/areas are intersecting partially".
         * If a is contained in b or b is contained in a, they are both
         * considered fully intersecting.
         */
        getIntersectingNodes: (nodeOrRect, partially = true, nodes) => {
          const isRect = isRectObject(nodeOrRect);
          const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
          const hasNodesOption = nodes !== void 0;
          if (!nodeRect) {
            return [];
          }
          return (nodes || store.getState().nodes).filter((n2) => {
            const internalNode = store.getState().nodeLookup.get(n2.id);
            if (
              internalNode &&
              !isRect &&
              (n2.id === nodeOrRect.id || !internalNode.internals.positionAbsolute)
            ) {
              return false;
            }
            const currNodeRect = nodeToRect(hasNodesOption ? n2 : internalNode);
            const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
            const partiallyVisible = partially && overlappingArea > 0;
            return (
              partiallyVisible ||
              overlappingArea >= currNodeRect.width * currNodeRect.height ||
              overlappingArea >= nodeRect.width * nodeRect.height
            );
          });
        },
        isNodeIntersecting: (nodeOrRect, area, partially = true) => {
          const isRect = isRectObject(nodeOrRect);
          const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
          if (!nodeRect) {
            return false;
          }
          const overlappingArea = getOverlappingArea(nodeRect, area);
          const partiallyVisible = partially && overlappingArea > 0;
          return (
            partiallyVisible ||
            overlappingArea >= area.width * area.height ||
            overlappingArea >= nodeRect.width * nodeRect.height
          );
        },
        updateNode,
        updateNodeData: (id2, dataUpdate, options = { replace: false }) => {
          updateNode(
            id2,
            (node) => {
              const nextData = typeof dataUpdate === "function" ? dataUpdate(node) : dataUpdate;
              return options.replace
                ? { ...node, data: nextData }
                : { ...node, data: { ...node.data, ...nextData } };
            },
            options,
          );
        },
        updateEdge,
        updateEdgeData: (id2, dataUpdate, options = { replace: false }) => {
          updateEdge(
            id2,
            (edge) => {
              const nextData = typeof dataUpdate === "function" ? dataUpdate(edge) : dataUpdate;
              return options.replace
                ? { ...edge, data: nextData }
                : { ...edge, data: { ...edge.data, ...nextData } };
            },
            options,
          );
        },
        getNodesBounds: (nodes) => {
          const { nodeLookup, nodeOrigin } = store.getState();
          return getNodesBounds(nodes, { nodeLookup, nodeOrigin });
        },
        getHandleConnections: ({ type, id: id2, nodeId }) =>
          Array.from(
            store
              .getState()
              .connectionLookup.get(`${nodeId}-${type}${id2 ? `-${id2}` : ""}`)
              ?.values() ?? [],
          ),
        getNodeConnections: ({ type, handleId, nodeId }) =>
          Array.from(
            store
              .getState()
              .connectionLookup.get(
                `${nodeId}${type ? (handleId ? `-${type}-${handleId}` : `-${type}`) : ""}`,
              )
              ?.values() ?? [],
          ),
        fitView: async (options) => {
          const fitViewResolver = store.getState().fitViewResolver ?? withResolvers();
          store.setState({ fitViewQueued: true, fitViewOptions: options, fitViewResolver });
          batchContext.nodeQueue.push((nodes) => [...nodes]);
          return fitViewResolver.promise;
        },
      };
    }, []);
    return T2(() => {
      return {
        ...generalHelper,
        ...viewportHelper,
        viewportInitialized,
      };
    }, [viewportInitialized]);
  }
  var selected = (item) => item.selected;
  var win$1 = typeof window !== "undefined" ? window : void 0;
  function useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode }) {
    const store = useStoreApi();
    const { deleteElements } = useReactFlow();
    const deleteKeyPressed = useKeyPress(deleteKeyCode, { actInsideInputWithModifier: false });
    const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode, { target: win$1 });
    h2(() => {
      if (deleteKeyPressed) {
        const { edges, nodes } = store.getState();
        deleteElements({ nodes: nodes.filter(selected), edges: edges.filter(selected) });
        store.setState({ nodesSelectionActive: false });
      }
    }, [deleteKeyPressed]);
    h2(() => {
      store.setState({ multiSelectionActive: multiSelectionKeyPressed });
    }, [multiSelectionKeyPressed]);
  }
  function useResizeHandler(domNode) {
    const store = useStoreApi();
    h2(() => {
      const updateDimensions = () => {
        if (!domNode.current || !(domNode.current.checkVisibility?.() ?? true)) {
          return false;
        }
        const size = getDimensions(domNode.current);
        if (size.height === 0 || size.width === 0) {
          store.getState().onError?.("004", errorMessages["error004"]());
        }
        store.setState({ width: size.width || 500, height: size.height || 500 });
      };
      if (domNode.current) {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        const resizeObserver = new ResizeObserver(() => updateDimensions());
        resizeObserver.observe(domNode.current);
        return () => {
          window.removeEventListener("resize", updateDimensions);
          if (resizeObserver && domNode.current) {
            resizeObserver.unobserve(domNode.current);
          }
        };
      }
    }, []);
  }
  var containerStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };
  var selector$j = (s3) => ({
    userSelectionActive: s3.userSelectionActive,
    lib: s3.lib,
    connectionInProgress: s3.connection.inProgress,
  });
  function ZoomPane({
    onPaneContextMenu,
    zoomOnScroll = true,
    zoomOnPinch = true,
    panOnScroll = false,
    panOnScrollSpeed = 0.5,
    panOnScrollMode = PanOnScrollMode.Free,
    zoomOnDoubleClick = true,
    panOnDrag = true,
    defaultViewport: defaultViewport2,
    translateExtent,
    minZoom,
    maxZoom,
    zoomActivationKeyCode,
    preventScrolling = true,
    children: children2,
    noWheelClassName,
    noPanClassName,
    onViewportChange,
    isControlledViewport,
    paneClickDistance,
    selectionOnDrag,
  }) {
    const store = useStoreApi();
    const zoomPane = A2(null);
    const { userSelectionActive, lib, connectionInProgress } = useStore(selector$j, shallow$1);
    const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
    const panZoom = A2();
    useResizeHandler(zoomPane);
    const onTransformChange = q2(
      (transform2) => {
        onViewportChange?.({ x: transform2[0], y: transform2[1], zoom: transform2[2] });
        if (!isControlledViewport) {
          store.setState({ transform: transform2 });
        }
      },
      [onViewportChange, isControlledViewport],
    );
    h2(() => {
      if (zoomPane.current) {
        panZoom.current = XYPanZoom({
          domNode: zoomPane.current,
          minZoom,
          maxZoom,
          translateExtent,
          viewport: defaultViewport2,
          onDraggingChange: (paneDragging) =>
            store.setState((prevState) =>
              prevState.paneDragging === paneDragging ? prevState : { paneDragging },
            ),
          onPanZoomStart: (event, vp) => {
            const { onViewportChangeStart, onMoveStart } = store.getState();
            onMoveStart?.(event, vp);
            onViewportChangeStart?.(vp);
          },
          onPanZoom: (event, vp) => {
            const { onViewportChange: onViewportChange2, onMove } = store.getState();
            onMove?.(event, vp);
            onViewportChange2?.(vp);
          },
          onPanZoomEnd: (event, vp) => {
            const { onViewportChangeEnd, onMoveEnd } = store.getState();
            onMoveEnd?.(event, vp);
            onViewportChangeEnd?.(vp);
          },
        });
        const { x: x4, y: y3, zoom } = panZoom.current.getViewport();
        store.setState({
          panZoom: panZoom.current,
          transform: [x4, y3, zoom],
          domNode: zoomPane.current.closest(".react-flow"),
        });
        return () => {
          panZoom.current?.destroy();
        };
      }
    }, []);
    h2(() => {
      panZoom.current?.update({
        onPaneContextMenu,
        zoomOnScroll,
        zoomOnPinch,
        panOnScroll,
        panOnScrollSpeed,
        panOnScrollMode,
        zoomOnDoubleClick,
        panOnDrag,
        zoomActivationKeyPressed,
        preventScrolling,
        noPanClassName,
        userSelectionActive,
        noWheelClassName,
        lib,
        onTransformChange,
        connectionInProgress,
        selectionOnDrag,
        paneClickDistance,
      });
    }, [
      onPaneContextMenu,
      zoomOnScroll,
      zoomOnPinch,
      panOnScroll,
      panOnScrollSpeed,
      panOnScrollMode,
      zoomOnDoubleClick,
      panOnDrag,
      zoomActivationKeyPressed,
      preventScrolling,
      noPanClassName,
      userSelectionActive,
      noWheelClassName,
      lib,
      onTransformChange,
      connectionInProgress,
      selectionOnDrag,
      paneClickDistance,
    ]);
    return u3("div", {
      className: "react-flow__renderer",
      ref: zoomPane,
      style: containerStyle,
      children: children2,
    });
  }
  var selector$i = (s3) => ({
    userSelectionActive: s3.userSelectionActive,
    userSelectionRect: s3.userSelectionRect,
  });
  function UserSelection() {
    const { userSelectionActive, userSelectionRect } = useStore(selector$i, shallow$1);
    const isActive = userSelectionActive && userSelectionRect;
    if (!isActive) {
      return null;
    }
    return u3("div", {
      className: "react-flow__selection react-flow__container",
      style: {
        width: userSelectionRect.width,
        height: userSelectionRect.height,
        transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`,
      },
    });
  }
  var wrapHandler = (handler, containerRef) => {
    return (event) => {
      if (event.target !== containerRef.current) {
        return;
      }
      handler?.(event);
    };
  };
  var selector$h = (s3) => ({
    userSelectionActive: s3.userSelectionActive,
    elementsSelectable: s3.elementsSelectable,
    dragging: s3.paneDragging,
    panBy: s3.panBy,
    autoPanSpeed: s3.autoPanSpeed,
  });
  function Pane({
    isSelecting,
    selectionKeyPressed,
    selectionMode = SelectionMode.Full,
    panOnDrag,
    autoPanOnSelection,
    paneClickDistance,
    selectionOnDrag,
    onSelectionStart,
    onSelectionEnd,
    onPaneClick,
    onPaneContextMenu,
    onPaneScroll,
    onPaneMouseEnter,
    onPaneMouseMove,
    onPaneMouseLeave,
    children: children2,
  }) {
    const autoPanId = A2(0);
    const store = useStoreApi();
    const {
      userSelectionActive,
      elementsSelectable,
      dragging,
      panBy: panBy2,
      autoPanSpeed,
    } = useStore(selector$h, shallow$1);
    const isSelectionEnabled = elementsSelectable && (isSelecting || userSelectionActive);
    const container = A2(null);
    const containerBounds = A2();
    const selectedNodeIds = A2(/* @__PURE__ */ new Set());
    const selectedEdgeIds = A2(/* @__PURE__ */ new Set());
    const connectionEndedOnPane = A2(false);
    const selectionInProgress = A2(false);
    const position = A2({ x: 0, y: 0 });
    const autoPanStarted = A2(false);
    const onClick = (event) => {
      if (
        selectionInProgress.current ||
        connectionEndedOnPane.current ||
        store.getState().connection.inProgress
      ) {
        selectionInProgress.current = false;
        connectionEndedOnPane.current = false;
        return;
      }
      onPaneClick?.(event);
      store.getState().resetSelectedElements();
      store.setState({ nodesSelectionActive: false });
    };
    const onContextMenu = (event) => {
      if (Array.isArray(panOnDrag) && panOnDrag?.includes(2)) {
        event.preventDefault();
        return;
      }
      onPaneContextMenu?.(event);
    };
    const onWheel = onPaneScroll ? (event) => onPaneScroll(event) : void 0;
    const onClickCapture = (event) => {
      if (selectionInProgress.current) {
        event.stopPropagation();
        selectionInProgress.current = false;
      }
    };
    const onPointerDownCapture = (event) => {
      const { domNode, transform: transform2 } = store.getState();
      containerBounds.current = domNode?.getBoundingClientRect();
      if (!containerBounds.current) return;
      const eventTargetIsContainer = event.target === container.current;
      const isNoKeyEvent = !eventTargetIsContainer && !!event.target.closest(".nokey");
      const isSelectionActive = (selectionOnDrag && eventTargetIsContainer) || selectionKeyPressed;
      if (
        isNoKeyEvent ||
        !isSelecting ||
        !isSelectionActive ||
        event.button !== 0 ||
        !event.isPrimary
      ) {
        return;
      }
      event.target?.setPointerCapture?.(event.pointerId);
      selectionInProgress.current = false;
      const { x: x4, y: y3 } = getEventPosition(event.nativeEvent, containerBounds.current);
      const userSelectionStartPosition = pointToRendererPoint({ x: x4, y: y3 }, transform2);
      store.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: userSelectionStartPosition.x,
          startY: userSelectionStartPosition.y,
          x: x4,
          y: y3,
        },
      });
      if (!eventTargetIsContainer) {
        event.stopPropagation();
        event.preventDefault();
      }
    };
    function commitUserSelectionRect(mouseX, mouseY) {
      const { userSelectionRect } = store.getState();
      if (!userSelectionRect) {
        return;
      }
      const {
        transform: transform2,
        nodeLookup,
        edgeLookup,
        connectionLookup,
        triggerNodeChanges,
        triggerEdgeChanges,
        defaultEdgeOptions,
      } = store.getState();
      const userStartPosition = { x: userSelectionRect.startX, y: userSelectionRect.startY };
      const { x: screenStartX, y: screenStartY } = rendererPointToPoint(
        userStartPosition,
        transform2,
      );
      const nextUserSelectRect = {
        startX: userStartPosition.x,
        startY: userStartPosition.y,
        x: mouseX < screenStartX ? mouseX : screenStartX,
        y: mouseY < screenStartY ? mouseY : screenStartY,
        width: Math.abs(mouseX - screenStartX),
        height: Math.abs(mouseY - screenStartY),
      };
      const prevSelectedNodeIds = selectedNodeIds.current;
      const prevSelectedEdgeIds = selectedEdgeIds.current;
      selectedNodeIds.current = new Set(
        getNodesInside(
          nodeLookup,
          nextUserSelectRect,
          transform2,
          selectionMode === SelectionMode.Partial,
          true,
        ).map((node) => node.id),
      );
      selectedEdgeIds.current = /* @__PURE__ */ new Set();
      const edgesSelectable = defaultEdgeOptions?.selectable ?? true;
      for (const nodeId of selectedNodeIds.current) {
        const connections = connectionLookup.get(nodeId);
        if (!connections) continue;
        for (const { edgeId } of connections.values()) {
          const edge = edgeLookup.get(edgeId);
          if (edge && (edge.selectable ?? edgesSelectable)) {
            selectedEdgeIds.current.add(edgeId);
          }
        }
      }
      if (!areSetsEqual(prevSelectedNodeIds, selectedNodeIds.current)) {
        const changes = getSelectionChanges(nodeLookup, selectedNodeIds.current, true);
        triggerNodeChanges(changes);
      }
      if (!areSetsEqual(prevSelectedEdgeIds, selectedEdgeIds.current)) {
        const changes = getSelectionChanges(edgeLookup, selectedEdgeIds.current);
        triggerEdgeChanges(changes);
      }
      store.setState({
        userSelectionRect: nextUserSelectRect,
        userSelectionActive: true,
        nodesSelectionActive: false,
      });
    }
    function autoPan() {
      if (!autoPanOnSelection || !containerBounds.current) {
        return;
      }
      const [x4, y3] = calcAutoPan(position.current, containerBounds.current, autoPanSpeed);
      panBy2({ x: x4, y: y3 }).then((panned) => {
        if (!selectionInProgress.current || !panned) {
          autoPanId.current = requestAnimationFrame(autoPan);
          return;
        }
        const { x: mx, y: my } = position.current;
        commitUserSelectionRect(mx, my);
        autoPanId.current = requestAnimationFrame(autoPan);
      });
    }
    const cleanupAutoPan = () => {
      cancelAnimationFrame(autoPanId.current);
      autoPanId.current = 0;
      autoPanStarted.current = false;
    };
    h2(() => {
      return () => cleanupAutoPan();
    }, []);
    const onPointerMove = (event) => {
      const { userSelectionRect, transform: transform2, resetSelectedElements } = store.getState();
      if (!containerBounds.current || !userSelectionRect) {
        return;
      }
      const { x: mouseX, y: mouseY } = getEventPosition(event.nativeEvent, containerBounds.current);
      position.current = { x: mouseX, y: mouseY };
      const screenStart = rendererPointToPoint(
        { x: userSelectionRect.startX, y: userSelectionRect.startY },
        transform2,
      );
      if (!selectionInProgress.current) {
        const requiredDistance = selectionKeyPressed ? 0 : paneClickDistance;
        const distance2 = Math.hypot(mouseX - screenStart.x, mouseY - screenStart.y);
        if (distance2 <= requiredDistance) {
          return;
        }
        resetSelectedElements();
        onSelectionStart?.(event);
      }
      selectionInProgress.current = true;
      if (!autoPanStarted.current) {
        autoPan();
        autoPanStarted.current = true;
      }
      commitUserSelectionRect(mouseX, mouseY);
    };
    const onPointerUp = (event) => {
      if (!isSelectionEnabled) {
        if (event.target === container.current && store.getState().connection.inProgress) {
          connectionEndedOnPane.current = true;
        }
        return;
      }
      if (event.button !== 0) {
        return;
      }
      event.target?.releasePointerCapture?.(event.pointerId);
      if (
        !userSelectionActive &&
        event.target === container.current &&
        store.getState().userSelectionRect
      ) {
        onClick?.(event);
      }
      store.setState({
        userSelectionActive: false,
        userSelectionRect: null,
      });
      if (selectionInProgress.current) {
        onSelectionEnd?.(event);
        store.setState({
          nodesSelectionActive: selectedNodeIds.current.size > 0,
        });
      }
      cleanupAutoPan();
    };
    const onPointerCancel = (event) => {
      event.target?.releasePointerCapture?.(event.pointerId);
      cleanupAutoPan();
    };
    const draggable = panOnDrag === true || (Array.isArray(panOnDrag) && panOnDrag.includes(0));
    return u3("div", {
      className: cc(["react-flow__pane", { draggable, dragging, selection: isSelecting }]),
      onClick: isSelectionEnabled ? void 0 : wrapHandler(onClick, container),
      onContextMenu: wrapHandler(onContextMenu, container),
      onWheel: wrapHandler(onWheel, container),
      onPointerEnter: isSelectionEnabled ? void 0 : onPaneMouseEnter,
      onPointerMove: isSelectionEnabled ? onPointerMove : onPaneMouseMove,
      onPointerUp,
      onPointerCancel: isSelectionEnabled ? onPointerCancel : void 0,
      onPointerDownCapture: isSelectionEnabled ? onPointerDownCapture : void 0,
      onClickCapture: isSelectionEnabled ? onClickCapture : void 0,
      onPointerLeave: onPaneMouseLeave,
      ref: container,
      style: containerStyle,
      children: [children2, u3(UserSelection, {})],
    });
  }
  function handleNodeClick({ id: id2, store, unselect = false, nodeRef }) {
    const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeLookup, onError } =
      store.getState();
    const node = nodeLookup.get(id2);
    if (!node) {
      onError?.("012", errorMessages["error012"](id2));
      return;
    }
    store.setState({ nodesSelectionActive: false });
    if (!node.selected) {
      addSelectedNodes([id2]);
    } else if (unselect || (node.selected && multiSelectionActive)) {
      unselectNodesAndEdges({ nodes: [node], edges: [] });
      requestAnimationFrame(() => nodeRef?.current?.blur());
    }
  }
  function useDrag({
    nodeRef,
    disabled = false,
    noDragClassName,
    handleSelector,
    nodeId,
    isSelectable,
    nodeClickDistance,
  }) {
    const store = useStoreApi();
    const [dragging, setDragging] = d2(false);
    const xyDrag = A2();
    h2(() => {
      xyDrag.current = XYDrag({
        getStoreItems: () => store.getState(),
        onNodeMouseDown: (id2) => {
          handleNodeClick({
            id: id2,
            store,
            nodeRef,
          });
        },
        onDragStart: () => {
          setDragging(true);
        },
        onDragStop: () => {
          setDragging(false);
        },
      });
    }, []);
    h2(() => {
      if (disabled || !nodeRef.current || !xyDrag.current) {
        return;
      }
      xyDrag.current.update({
        noDragClassName,
        handleSelector,
        domNode: nodeRef.current,
        isSelectable,
        nodeId,
        nodeClickDistance,
      });
      return () => {
        xyDrag.current?.destroy();
      };
    }, [
      noDragClassName,
      handleSelector,
      disabled,
      isSelectable,
      nodeRef,
      nodeId,
      nodeClickDistance,
    ]);
    return dragging;
  }
  var selectedAndDraggable = (nodesDraggable) => (n2) =>
    n2.selected && (n2.draggable || (nodesDraggable && typeof n2.draggable === "undefined"));
  function useMoveSelectedNodes() {
    const store = useStoreApi();
    const moveSelectedNodes = q2((params) => {
      const {
        nodeExtent,
        snapToGrid,
        snapGrid,
        nodesDraggable,
        onError,
        updateNodePositions,
        nodeLookup,
        nodeOrigin,
      } = store.getState();
      const nodeUpdates = /* @__PURE__ */ new Map();
      const isSelected = selectedAndDraggable(nodesDraggable);
      const xVelo = snapToGrid ? snapGrid[0] : 5;
      const yVelo = snapToGrid ? snapGrid[1] : 5;
      const xDiff = params.direction.x * xVelo * params.factor;
      const yDiff = params.direction.y * yVelo * params.factor;
      for (const [, node] of nodeLookup) {
        if (!isSelected(node)) {
          continue;
        }
        let nextPosition = {
          x: node.internals.positionAbsolute.x + xDiff,
          y: node.internals.positionAbsolute.y + yDiff,
        };
        if (snapToGrid) {
          nextPosition = snapPosition(nextPosition, snapGrid);
        }
        const { position, positionAbsolute } = calculateNodePosition({
          nodeId: node.id,
          nextPosition,
          nodeLookup,
          nodeExtent,
          nodeOrigin,
          onError,
        });
        node.position = position;
        node.internals.positionAbsolute = positionAbsolute;
        nodeUpdates.set(node.id, node);
      }
      updateNodePositions(nodeUpdates);
    }, []);
    return moveSelectedNodes;
  }
  var NodeIdContext = X(null);
  var Provider = NodeIdContext.Provider;
  NodeIdContext.Consumer;
  var useNodeId = () => {
    const nodeId = x2(NodeIdContext);
    return nodeId;
  };
  var selector$g = (s3) => ({
    connectOnClick: s3.connectOnClick,
    noPanClassName: s3.noPanClassName,
    rfId: s3.rfId,
  });
  var HandleConfigContext = X(null);
  function HandleConfigProvider({ children: children2 }) {
    const config = useStore(selector$g, shallow$1);
    return u3(HandleConfigContext.Provider, { value: config, children: children2 });
  }
  function useHandleConfig() {
    const config = x2(HandleConfigContext);
    if (!config) {
      throw new Error("useHandleConfig must be used within a HandleConfigProvider");
    }
    return config;
  }
  var idleConnectingState = {
    connectingFrom: false,
    connectingTo: false,
    clickConnecting: false,
    isPossibleEndHandle: true,
    connectionInProcess: false,
    clickConnectionInProcess: false,
    valid: false,
  };
  var connectingSelector = (nodeId, handleId, type) => (state) => {
    const { connectionClickStartHandle: clickHandle, connectionMode, connection } = state;
    const { fromHandle, toHandle, isValid } = connection;
    if (!fromHandle && !clickHandle) {
      return idleConnectingState;
    }
    const connectingTo =
      toHandle?.nodeId === nodeId && toHandle?.id === handleId && toHandle?.type === type;
    return {
      connectingFrom:
        fromHandle?.nodeId === nodeId && fromHandle?.id === handleId && fromHandle?.type === type,
      connectingTo,
      clickConnecting:
        clickHandle?.nodeId === nodeId &&
        clickHandle?.id === handleId &&
        clickHandle?.type === type,
      isPossibleEndHandle:
        connectionMode === ConnectionMode.Strict
          ? fromHandle?.type !== type
          : nodeId !== fromHandle?.nodeId || handleId !== fromHandle?.id,
      connectionInProcess: !!fromHandle,
      clickConnectionInProcess: !!clickHandle,
      valid: connectingTo && isValid,
    };
  };
  function HandleComponent(
    {
      type = "source",
      position = Position.Top,
      isValidConnection,
      isConnectable = true,
      isConnectableStart = true,
      isConnectableEnd = true,
      id: id2,
      onConnect,
      children: children2,
      className,
      onMouseDown,
      onTouchStart,
      ...rest
    },
    ref,
  ) {
    const handleId = id2 || null;
    const isTarget = type === "target";
    const store = useStoreApi();
    const nodeId = useNodeId();
    const { connectOnClick, noPanClassName, rfId } = useHandleConfig();
    const {
      connectingFrom,
      connectingTo,
      clickConnecting,
      isPossibleEndHandle,
      connectionInProcess,
      clickConnectionInProcess,
      valid,
    } = useStore(connectingSelector(nodeId, handleId, type), shallow$1);
    if (!nodeId) {
      store.getState().onError?.("010", errorMessages["error010"]());
    }
    const onConnectExtended = (params) => {
      const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
      const edgeParams = {
        ...defaultEdgeOptions,
        ...params,
      };
      if (hasDefaultEdges) {
        const { edges, setEdges, onError } = store.getState();
        setEdges(addEdge2(edgeParams, edges, { onError }));
      }
      onConnectAction?.(edgeParams);
      onConnect?.(edgeParams);
    };
    const onPointerDown2 = (event) => {
      if (!nodeId) {
        return;
      }
      const isMouseTriggered = isMouseEvent(event.nativeEvent);
      if (isConnectableStart && ((isMouseTriggered && event.button === 0) || !isMouseTriggered)) {
        const currentStore = store.getState();
        XYHandle.onPointerDown(event.nativeEvent, {
          handleDomNode: event.currentTarget,
          autoPanOnConnect: currentStore.autoPanOnConnect,
          connectionMode: currentStore.connectionMode,
          connectionRadius: currentStore.connectionRadius,
          domNode: currentStore.domNode,
          nodeLookup: currentStore.nodeLookup,
          lib: currentStore.lib,
          isTarget,
          handleId,
          nodeId,
          flowId: currentStore.rfId,
          panBy: currentStore.panBy,
          cancelConnection: currentStore.cancelConnection,
          onConnectStart: currentStore.onConnectStart,
          onConnectEnd: (...args) => store.getState().onConnectEnd?.(...args),
          updateConnection: currentStore.updateConnection,
          onConnect: onConnectExtended,
          isValidConnection:
            isValidConnection ||
            ((...args) => store.getState().isValidConnection?.(...args) ?? true),
          getTransform: () => store.getState().transform,
          getFromHandle: () => store.getState().connection.fromHandle,
          autoPanSpeed: currentStore.autoPanSpeed,
          dragThreshold: currentStore.connectionDragThreshold,
        });
      }
      if (isMouseTriggered) {
        onMouseDown?.(event);
      } else {
        onTouchStart?.(event);
      }
    };
    const onClick = (event) => {
      const {
        onClickConnectStart,
        onClickConnectEnd,
        connectionClickStartHandle,
        connectionMode,
        isValidConnection: isValidConnectionStore,
        lib,
        rfId: flowId,
        nodeLookup,
        connection: connectionState,
      } = store.getState();
      if (!nodeId || (!connectionClickStartHandle && !isConnectableStart)) {
        return;
      }
      if (!connectionClickStartHandle) {
        onClickConnectStart?.(event.nativeEvent, { nodeId, handleId, handleType: type });
        store.setState({ connectionClickStartHandle: { nodeId, type, id: handleId } });
        return;
      }
      const doc = getHostForElement(event.target);
      const isValidConnectionHandler = isValidConnection || isValidConnectionStore;
      const { connection, isValid } = XYHandle.isValid(event.nativeEvent, {
        handle: {
          nodeId,
          id: handleId,
          type,
        },
        connectionMode,
        fromNodeId: connectionClickStartHandle.nodeId,
        fromHandleId: connectionClickStartHandle.id || null,
        fromType: connectionClickStartHandle.type,
        isValidConnection: isValidConnectionHandler,
        flowId,
        doc,
        lib,
        nodeLookup,
      });
      if (isValid && connection) {
        onConnectExtended(connection);
      }
      const connectionClone = structuredClone(connectionState);
      delete connectionClone.inProgress;
      connectionClone.toPosition = connectionClone.toHandle
        ? connectionClone.toHandle.position
        : null;
      onClickConnectEnd?.(event, connectionClone);
      store.setState({ connectionClickStartHandle: null });
    };
    return u3("div", {
      "data-handleid": handleId,
      "data-nodeid": nodeId,
      "data-handlepos": position,
      "data-id": `${rfId}-${nodeId}-${handleId}-${type}`,
      className: cc([
        "react-flow__handle",
        `react-flow__handle-${position}`,
        "nodrag",
        noPanClassName,
        className,
        {
          source: !isTarget,
          target: isTarget,
          connectable: isConnectable,
          connectablestart: isConnectableStart,
          connectableend: isConnectableEnd,
          clickconnecting: clickConnecting,
          connectingfrom: connectingFrom,
          connectingto: connectingTo,
          valid,
          /*
           * shows where you can start a connection from
           * and where you can end it while connecting
           */
          connectionindicator:
            isConnectable &&
            (!connectionInProcess || isPossibleEndHandle) &&
            (connectionInProcess || clickConnectionInProcess
              ? isConnectableEnd
              : isConnectableStart),
        },
      ]),
      onMouseDown: onPointerDown2,
      onTouchStart: onPointerDown2,
      onClick: connectOnClick ? onClick : void 0,
      ref,
      ...rest,
      children: children2,
    });
  }
  var Handle = N2(fixedForwardRef(HandleComponent));
  function InputNode({ data, isConnectable, sourcePosition = Position.Bottom }) {
    return u3(S, {
      children: [
        data?.label,
        u3(Handle, { type: "source", position: sourcePosition, isConnectable }),
      ],
    });
  }
  function DefaultNode({
    data,
    isConnectable,
    targetPosition = Position.Top,
    sourcePosition = Position.Bottom,
  }) {
    return u3(S, {
      children: [
        u3(Handle, { type: "target", position: targetPosition, isConnectable }),
        data?.label,
        u3(Handle, { type: "source", position: sourcePosition, isConnectable }),
      ],
    });
  }
  function GroupNode() {
    return null;
  }
  function OutputNode({ data, isConnectable, targetPosition = Position.Top }) {
    return u3(S, {
      children: [
        u3(Handle, { type: "target", position: targetPosition, isConnectable }),
        data?.label,
      ],
    });
  }
  var arrowKeyDiffs = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  };
  var builtinNodeTypes = {
    input: InputNode,
    default: DefaultNode,
    output: OutputNode,
    group: GroupNode,
  };
  function getNodeInlineStyleDimensions(node) {
    if (node.internals.handleBounds === void 0) {
      return {
        width: node.width ?? node.initialWidth ?? node.style?.width,
        height: node.height ?? node.initialHeight ?? node.style?.height,
      };
    }
    return {
      width: node.width ?? node.style?.width,
      height: node.height ?? node.style?.height,
    };
  }
  var selector$f = (s3) => {
    const {
      width,
      height,
      x: x4,
      y: y3,
    } = getInternalNodesBounds(s3.nodeLookup, {
      filter: (node) => !!node.selected,
    });
    return {
      width: isNumeric(width) ? width : null,
      height: isNumeric(height) ? height : null,
      userSelectionActive: s3.userSelectionActive,
      transformString: `translate(${s3.transform[0]}px,${s3.transform[1]}px) scale(${s3.transform[2]}) translate(${x4}px,${y3}px)`,
    };
  };
  function NodesSelection({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y }) {
    const store = useStoreApi();
    const { width, height, transformString, userSelectionActive } = useStore(selector$f, shallow$1);
    const moveSelectedNodes = useMoveSelectedNodes();
    const nodeRef = A2(null);
    h2(() => {
      if (!disableKeyboardA11y) {
        nodeRef.current?.focus({
          preventScroll: true,
        });
      }
    }, [disableKeyboardA11y]);
    const shouldRender = !userSelectionActive && width !== null && height !== null;
    useDrag({
      nodeRef,
      disabled: !shouldRender,
    });
    if (!shouldRender) {
      return null;
    }
    const onContextMenu = onSelectionContextMenu
      ? (event) => {
          const selectedNodes = store.getState().nodes.filter((n2) => n2.selected);
          onSelectionContextMenu(event, selectedNodes);
        }
      : void 0;
    const onKeyDown = (event) => {
      if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
        event.preventDefault();
        moveSelectedNodes({
          direction: arrowKeyDiffs[event.key],
          factor: event.shiftKey ? 4 : 1,
        });
      }
    };
    return u3("div", {
      className: cc(["react-flow__nodesselection", "react-flow__container", noPanClassName]),
      style: {
        transform: transformString,
      },
      children: u3("div", {
        ref: nodeRef,
        className: "react-flow__nodesselection-rect",
        onContextMenu,
        tabIndex: disableKeyboardA11y ? void 0 : -1,
        onKeyDown: disableKeyboardA11y ? void 0 : onKeyDown,
        style: {
          width,
          height,
        },
      }),
    });
  }
  var win = typeof window !== "undefined" ? window : void 0;
  var selector$e = (s3) => {
    return {
      nodesSelectionActive: s3.nodesSelectionActive,
      userSelectionActive: s3.userSelectionActive,
    };
  };
  function FlowRendererComponent({
    children: children2,
    onPaneClick,
    onPaneMouseEnter,
    onPaneMouseMove,
    onPaneMouseLeave,
    onPaneContextMenu,
    onPaneScroll,
    paneClickDistance,
    deleteKeyCode,
    selectionKeyCode,
    selectionOnDrag,
    selectionMode,
    onSelectionStart,
    onSelectionEnd,
    multiSelectionKeyCode,
    panActivationKeyCode,
    zoomActivationKeyCode,
    elementsSelectable,
    zoomOnScroll,
    zoomOnPinch,
    panOnScroll: _panOnScroll,
    panOnScrollSpeed,
    panOnScrollMode,
    zoomOnDoubleClick,
    panOnDrag: _panOnDrag,
    autoPanOnSelection,
    defaultViewport: defaultViewport2,
    translateExtent,
    minZoom,
    maxZoom,
    preventScrolling,
    onSelectionContextMenu,
    noWheelClassName,
    noPanClassName,
    disableKeyboardA11y,
    onViewportChange,
    isControlledViewport,
  }) {
    const { nodesSelectionActive, userSelectionActive } = useStore(selector$e, shallow$1);
    const selectionKeyPressed = useKeyPress(selectionKeyCode, { target: win });
    const panActivationKeyPressed = useKeyPress(panActivationKeyCode, { target: win });
    const panOnDrag = panActivationKeyPressed || _panOnDrag;
    const panOnScroll = panActivationKeyPressed || _panOnScroll;
    const _selectionOnDrag = selectionOnDrag && panOnDrag !== true;
    const isSelecting = selectionKeyPressed || userSelectionActive || _selectionOnDrag;
    useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode });
    return u3(ZoomPane, {
      onPaneContextMenu,
      elementsSelectable,
      zoomOnScroll,
      zoomOnPinch,
      panOnScroll,
      panOnScrollSpeed,
      panOnScrollMode,
      zoomOnDoubleClick,
      panOnDrag: !selectionKeyPressed && panOnDrag,
      defaultViewport: defaultViewport2,
      translateExtent,
      minZoom,
      maxZoom,
      zoomActivationKeyCode,
      preventScrolling,
      noWheelClassName,
      noPanClassName,
      onViewportChange,
      isControlledViewport,
      paneClickDistance,
      selectionOnDrag: _selectionOnDrag,
      children: u3(Pane, {
        onSelectionStart,
        onSelectionEnd,
        onPaneClick,
        onPaneMouseEnter,
        onPaneMouseMove,
        onPaneMouseLeave,
        onPaneContextMenu,
        onPaneScroll,
        panOnDrag,
        autoPanOnSelection,
        isSelecting: !!isSelecting,
        selectionMode,
        selectionKeyPressed,
        paneClickDistance,
        selectionOnDrag: _selectionOnDrag,
        children: [
          children2,
          nodesSelectionActive &&
            u3(NodesSelection, { onSelectionContextMenu, noPanClassName, disableKeyboardA11y }),
        ],
      }),
    });
  }
  FlowRendererComponent.displayName = "FlowRenderer";
  var FlowRenderer = N2(FlowRendererComponent);
  var selector$d = (onlyRenderVisible) => (s3) => {
    return onlyRenderVisible
      ? getNodesInside(
          s3.nodeLookup,
          { x: 0, y: 0, width: s3.width, height: s3.height },
          s3.transform,
          true,
        ).map((node) => node.id)
      : Array.from(s3.nodeLookup.keys());
  };
  function useVisibleNodeIds(onlyRenderVisible) {
    const nodeIds = useStore(q2(selector$d(onlyRenderVisible), [onlyRenderVisible]), shallow$1);
    return nodeIds;
  }
  var selector$c = (s3) => s3.updateNodeInternals;
  function useResizeObserver() {
    const updateNodeInternals2 = useStore(selector$c);
    const [resizeObserver] = d2(() => {
      if (typeof ResizeObserver === "undefined") {
        return null;
      }
      return new ResizeObserver((entries) => {
        const updates = /* @__PURE__ */ new Map();
        entries.forEach((entry) => {
          const id2 = entry.target.getAttribute("data-id");
          updates.set(id2, {
            id: id2,
            nodeElement: entry.target,
            force: true,
          });
        });
        updateNodeInternals2(updates);
      });
    });
    h2(() => {
      return () => {
        resizeObserver?.disconnect();
      };
    }, [resizeObserver]);
    return resizeObserver;
  }
  function useNodeObserver({ node, nodeType, hasDimensions, resizeObserver }) {
    const store = useStoreApi();
    const nodeRef = A2(null);
    const observedNode = A2(null);
    const prevSourcePosition = A2(node.sourcePosition);
    const prevTargetPosition = A2(node.targetPosition);
    const prevType = A2(nodeType);
    const isInitialized = hasDimensions && !!node.internals.handleBounds;
    h2(() => {
      if (
        nodeRef.current &&
        !node.hidden &&
        (!isInitialized || observedNode.current !== nodeRef.current)
      ) {
        if (observedNode.current) {
          resizeObserver?.unobserve(observedNode.current);
        }
        resizeObserver?.observe(nodeRef.current);
        observedNode.current = nodeRef.current;
      }
    }, [isInitialized, node.hidden]);
    h2(() => {
      return () => {
        if (observedNode.current) {
          resizeObserver?.unobserve(observedNode.current);
          observedNode.current = null;
        }
      };
    }, []);
    h2(() => {
      if (nodeRef.current) {
        const typeChanged = prevType.current !== nodeType;
        const sourcePosChanged = prevSourcePosition.current !== node.sourcePosition;
        const targetPosChanged = prevTargetPosition.current !== node.targetPosition;
        if (typeChanged || sourcePosChanged || targetPosChanged) {
          prevType.current = nodeType;
          prevSourcePosition.current = node.sourcePosition;
          prevTargetPosition.current = node.targetPosition;
          store
            .getState()
            .updateNodeInternals(
              /* @__PURE__ */ new Map([
                [node.id, { id: node.id, nodeElement: nodeRef.current, force: true }],
              ]),
            );
        }
      }
    }, [node.id, nodeType, node.sourcePosition, node.targetPosition]);
    return nodeRef;
  }
  function NodeWrapper({
    id: id2,
    onClick,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    onContextMenu,
    onDoubleClick,
    nodesDraggable,
    elementsSelectable,
    nodesConnectable,
    nodesFocusable,
    resizeObserver,
    noDragClassName,
    noPanClassName,
    disableKeyboardA11y,
    rfId,
    nodeTypes: nodeTypes2,
    nodeClickDistance,
    onError,
  }) {
    const { node, internals, isParent } = useStore((s3) => {
      const node2 = s3.nodeLookup.get(id2);
      const isParent2 = s3.parentLookup.has(id2);
      return {
        node: node2,
        internals: node2.internals,
        isParent: isParent2,
      };
    }, shallow$1);
    let nodeType = node.type || "default";
    let NodeComponent = nodeTypes2?.[nodeType] || builtinNodeTypes[nodeType];
    if (NodeComponent === void 0) {
      onError?.("003", errorMessages["error003"](nodeType));
      nodeType = "default";
      NodeComponent = nodeTypes2?.["default"] || builtinNodeTypes.default;
    }
    const isDraggable = !!(
      node.draggable ||
      (nodesDraggable && typeof node.draggable === "undefined")
    );
    const isSelectable = !!(
      node.selectable ||
      (elementsSelectable && typeof node.selectable === "undefined")
    );
    const isConnectable = !!(
      node.connectable ||
      (nodesConnectable && typeof node.connectable === "undefined")
    );
    const isFocusable = !!(
      node.focusable ||
      (nodesFocusable && typeof node.focusable === "undefined")
    );
    const store = useStoreApi();
    const hasDimensions = nodeHasDimensions(node);
    const nodeRef = useNodeObserver({ node, nodeType, hasDimensions, resizeObserver });
    const dragging = useDrag({
      nodeRef,
      disabled: node.hidden || !isDraggable,
      noDragClassName,
      handleSelector: node.dragHandle,
      nodeId: id2,
      isSelectable,
      nodeClickDistance,
    });
    const moveSelectedNodes = useMoveSelectedNodes();
    if (node.hidden) {
      return null;
    }
    const nodeDimensions = getNodeDimensions(node);
    const inlineDimensions = getNodeInlineStyleDimensions(node);
    const hasPointerEvents =
      isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
    const onMouseEnterHandler = onMouseEnter
      ? (event) => onMouseEnter(event, { ...internals.userNode })
      : void 0;
    const onMouseMoveHandler = onMouseMove
      ? (event) => onMouseMove(event, { ...internals.userNode })
      : void 0;
    const onMouseLeaveHandler = onMouseLeave
      ? (event) => onMouseLeave(event, { ...internals.userNode })
      : void 0;
    const onContextMenuHandler = onContextMenu
      ? (event) => onContextMenu(event, { ...internals.userNode })
      : void 0;
    const onDoubleClickHandler = onDoubleClick
      ? (event) => onDoubleClick(event, { ...internals.userNode })
      : void 0;
    const onSelectNodeHandler = (event) => {
      const { selectNodesOnDrag, nodeDragThreshold } = store.getState();
      if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) {
        handleNodeClick({
          id: id2,
          store,
          nodeRef,
        });
      }
      if (onClick) {
        onClick(event, { ...internals.userNode });
      }
    };
    const onKeyDown = (event) => {
      if (isInputDOMNode(event.nativeEvent) || disableKeyboardA11y) {
        return;
      }
      if (elementSelectionKeys.includes(event.key) && isSelectable) {
        const unselect = event.key === "Escape";
        handleNodeClick({
          id: id2,
          store,
          unselect,
          nodeRef,
        });
      } else if (
        isDraggable &&
        node.selected &&
        Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)
      ) {
        event.preventDefault();
        const { ariaLabelConfig } = store.getState();
        store.setState({
          ariaLiveMessage: ariaLabelConfig["node.a11yDescription.ariaLiveMessage"]({
            direction: event.key.replace("Arrow", "").toLowerCase(),
            x: ~~internals.positionAbsolute.x,
            y: ~~internals.positionAbsolute.y,
          }),
        });
        moveSelectedNodes({
          direction: arrowKeyDiffs[event.key],
          factor: event.shiftKey ? 4 : 1,
        });
      }
    };
    const onFocus = () => {
      if (disableKeyboardA11y || !nodeRef.current?.matches(":focus-visible")) {
        return;
      }
      const {
        transform: transform2,
        width,
        height,
        autoPanOnNodeFocus,
        setCenter,
      } = store.getState();
      if (!autoPanOnNodeFocus) {
        return;
      }
      const withinViewport =
        getNodesInside(
          /* @__PURE__ */ new Map([[id2, node]]),
          { x: 0, y: 0, width, height },
          transform2,
          true,
        ).length > 0;
      if (!withinViewport) {
        setCenter(
          node.position.x + nodeDimensions.width / 2,
          node.position.y + nodeDimensions.height / 2,
          {
            zoom: transform2[2],
          },
        );
      }
    };
    return u3("div", {
      className: cc([
        "react-flow__node",
        `react-flow__node-${nodeType}`,
        {
          // this is overwritable by passing `nopan` as a class name
          [noPanClassName]: isDraggable,
        },
        node.className,
        {
          selected: node.selected,
          selectable: isSelectable,
          parent: isParent,
          draggable: isDraggable,
          dragging,
        },
      ]),
      ref: nodeRef,
      style: {
        zIndex: internals.z,
        transform: `translate(${internals.positionAbsolute.x}px,${internals.positionAbsolute.y}px)`,
        pointerEvents: hasPointerEvents ? "all" : "none",
        visibility: hasDimensions ? "visible" : "hidden",
        ...node.style,
        ...inlineDimensions,
      },
      "data-id": id2,
      "data-testid": `rf__node-${id2}`,
      onMouseEnter: onMouseEnterHandler,
      onMouseMove: onMouseMoveHandler,
      onMouseLeave: onMouseLeaveHandler,
      onContextMenu: onContextMenuHandler,
      onClick: onSelectNodeHandler,
      onDoubleClick: onDoubleClickHandler,
      onKeyDown: isFocusable ? onKeyDown : void 0,
      tabIndex: isFocusable ? 0 : void 0,
      onFocus: isFocusable ? onFocus : void 0,
      role: node.ariaRole ?? (isFocusable ? "group" : void 0),
      "aria-roledescription": "node",
      "aria-describedby": disableKeyboardA11y ? void 0 : `${ARIA_NODE_DESC_KEY}-${rfId}`,
      "aria-label": node.ariaLabel,
      ...node.domAttributes,
      children: u3(Provider, {
        value: id2,
        children: u3(NodeComponent, {
          id: id2,
          data: node.data,
          type: nodeType,
          positionAbsoluteX: internals.positionAbsolute.x,
          positionAbsoluteY: internals.positionAbsolute.y,
          selected: node.selected ?? false,
          selectable: isSelectable,
          draggable: isDraggable,
          deletable: node.deletable ?? true,
          isConnectable,
          sourcePosition: node.sourcePosition,
          targetPosition: node.targetPosition,
          dragging,
          dragHandle: node.dragHandle,
          zIndex: internals.z,
          parentId: node.parentId,
          ...nodeDimensions,
        }),
      }),
    });
  }
  var NodeWrapper$1 = N2(NodeWrapper);
  var selector$b = (s3) => ({
    nodesDraggable: s3.nodesDraggable,
    nodesConnectable: s3.nodesConnectable,
    nodesFocusable: s3.nodesFocusable,
    elementsSelectable: s3.elementsSelectable,
    onError: s3.onError,
  });
  function NodeRendererComponent(props) {
    const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, onError } =
      useStore(selector$b, shallow$1);
    const nodeIds = useVisibleNodeIds(props.onlyRenderVisibleElements);
    const resizeObserver = useResizeObserver();
    return u3("div", {
      className: "react-flow__nodes",
      style: containerStyle,
      children: nodeIds.map((nodeId) => {
        return (
          /*
           * The split of responsibilities between NodeRenderer and
           * NodeComponentWrapper may appear weird. However, it’s designed to
           * minimize the cost of updates when individual nodes change.
           *
           * For example, when you’re dragging a single node, that node gets
           * updated multiple times per second. If `NodeRenderer` were to update
           * every time, it would have to re-run the `nodes.map()` loop every
           * time. This gets pricey with hundreds of nodes, especially if every
           * loop cycle does more than just rendering a JSX element!
           *
           * As a result of this choice, we took the following implementation
           * decisions:
           * - NodeRenderer subscribes *only* to node IDs – and therefore
           *   rerender *only* when visible nodes are added or removed.
           * - NodeRenderer performs all operations the result of which can be
           *   shared between nodes (such as creating the `ResizeObserver`
           *   instance, or subscribing to `selector`). This means extra prop
           *   drilling into `NodeComponentWrapper`, but it means we need to run
           *   these operations only once – instead of once per node.
           * - Any operations that you’d normally write inside `nodes.map` are
           *   moved into `NodeComponentWrapper`. This ensures they are
           *   memorized – so if `NodeRenderer` *has* to rerender, it only
           *   needs to regenerate the list of nodes, nothing else.
           */
          u3(
            NodeWrapper$1,
            {
              id: nodeId,
              nodeTypes: props.nodeTypes,
              nodeExtent: props.nodeExtent,
              onClick: props.onNodeClick,
              onMouseEnter: props.onNodeMouseEnter,
              onMouseMove: props.onNodeMouseMove,
              onMouseLeave: props.onNodeMouseLeave,
              onContextMenu: props.onNodeContextMenu,
              onDoubleClick: props.onNodeDoubleClick,
              noDragClassName: props.noDragClassName,
              noPanClassName: props.noPanClassName,
              rfId: props.rfId,
              disableKeyboardA11y: props.disableKeyboardA11y,
              resizeObserver,
              nodesDraggable,
              nodesConnectable,
              nodesFocusable,
              elementsSelectable,
              nodeClickDistance: props.nodeClickDistance,
              onError,
            },
            nodeId,
          )
        );
      }),
    });
  }
  NodeRendererComponent.displayName = "NodeRenderer";
  var NodeRenderer = N2(NodeRendererComponent);
  function useVisibleEdgeIds(onlyRenderVisible) {
    const edgeIds = useStore(
      q2(
        (s3) => {
          if (!onlyRenderVisible) {
            return s3.edges.map((edge) => edge.id);
          }
          const visibleEdgeIds = [];
          if (s3.width && s3.height) {
            for (const edge of s3.edges) {
              const sourceNode = s3.nodeLookup.get(edge.source);
              const targetNode = s3.nodeLookup.get(edge.target);
              if (
                sourceNode &&
                targetNode &&
                isEdgeVisible({
                  sourceNode,
                  targetNode,
                  width: s3.width,
                  height: s3.height,
                  transform: s3.transform,
                })
              ) {
                visibleEdgeIds.push(edge.id);
              }
            }
          }
          return visibleEdgeIds;
        },
        [onlyRenderVisible],
      ),
      shallow$1,
    );
    return edgeIds;
  }
  var ArrowSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
    const style2 = {
      strokeWidth,
      ...(color2 && { stroke: color2 }),
    };
    return u3("polyline", {
      className: "arrow",
      style: style2,
      strokeLinecap: "round",
      fill: "none",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4",
    });
  };
  var ArrowClosedSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
    const style2 = {
      strokeWidth,
      ...(color2 && { stroke: color2, fill: color2 }),
    };
    return u3("polyline", {
      className: "arrowclosed",
      style: style2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4 -5,-4",
    });
  };
  var MarkerSymbols = {
    [MarkerType.Arrow]: ArrowSymbol,
    [MarkerType.ArrowClosed]: ArrowClosedSymbol,
  };
  function useMarkerSymbol(type) {
    const store = useStoreApi();
    const symbol = T2(() => {
      const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
      if (!symbolExists) {
        store.getState().onError?.("009", errorMessages["error009"](type));
        return null;
      }
      return MarkerSymbols[type];
    }, [type]);
    return symbol;
  }
  var Marker = ({
    id: id2,
    type,
    color: color2,
    width = 12.5,
    height = 12.5,
    markerUnits = "strokeWidth",
    strokeWidth,
    orient = "auto-start-reverse",
  }) => {
    const Symbol2 = useMarkerSymbol(type);
    if (!Symbol2) {
      return null;
    }
    return u3("marker", {
      className: "react-flow__arrowhead",
      id: id2,
      markerWidth: `${width}`,
      markerHeight: `${height}`,
      viewBox: "-10 -10 20 20",
      markerUnits,
      orient,
      refX: "0",
      refY: "0",
      children: u3(Symbol2, { color: color2, strokeWidth }),
    });
  };
  var MarkerDefinitions = ({ defaultColor, rfId }) => {
    const edges = useStore((s3) => s3.edges);
    const defaultEdgeOptions = useStore((s3) => s3.defaultEdgeOptions);
    const markers = T2(() => {
      const markers2 = createMarkerIds(edges, {
        id: rfId,
        defaultColor,
        defaultMarkerStart: defaultEdgeOptions?.markerStart,
        defaultMarkerEnd: defaultEdgeOptions?.markerEnd,
      });
      return markers2;
    }, [edges, defaultEdgeOptions, rfId, defaultColor]);
    if (!markers.length) {
      return null;
    }
    return u3("svg", {
      className: "react-flow__marker",
      "aria-hidden": "true",
      children: u3("defs", {
        children: markers.map((marker) =>
          u3(
            Marker,
            {
              id: marker.id,
              type: marker.type,
              color: marker.color,
              width: marker.width,
              height: marker.height,
              markerUnits: marker.markerUnits,
              strokeWidth: marker.strokeWidth,
              orient: marker.orient,
            },
            marker.id,
          ),
        ),
      }),
    });
  };
  MarkerDefinitions.displayName = "MarkerDefinitions";
  var MarkerDefinitions$1 = N2(MarkerDefinitions);
  function EdgeTextComponent({
    x: x4,
    y: y3,
    label,
    labelStyle,
    labelShowBg = true,
    labelBgStyle,
    labelBgPadding = [2, 4],
    labelBgBorderRadius = 2,
    children: children2,
    className,
    ...rest
  }) {
    const [edgeTextBbox, setEdgeTextBbox] = d2({ x: 1, y: 0, width: 0, height: 0 });
    const edgeTextClasses = cc(["react-flow__edge-textwrapper", className]);
    const edgeTextRef = A2(null);
    h2(() => {
      if (edgeTextRef.current) {
        const textBbox = edgeTextRef.current.getBBox();
        setEdgeTextBbox({
          x: textBbox.x,
          y: textBbox.y,
          width: textBbox.width,
          height: textBbox.height,
        });
      }
    }, [label]);
    if (!label) {
      return null;
    }
    return u3("g", {
      transform: `translate(${x4 - edgeTextBbox.width / 2} ${y3 - edgeTextBbox.height / 2})`,
      className: edgeTextClasses,
      visibility: edgeTextBbox.width ? "visible" : "hidden",
      ...rest,
      children: [
        labelShowBg &&
          u3("rect", {
            width: edgeTextBbox.width + 2 * labelBgPadding[0],
            x: -labelBgPadding[0],
            y: -labelBgPadding[1],
            height: edgeTextBbox.height + 2 * labelBgPadding[1],
            className: "react-flow__edge-textbg",
            style: labelBgStyle,
            rx: labelBgBorderRadius,
            ry: labelBgBorderRadius,
          }),
        u3("text", {
          className: "react-flow__edge-text",
          y: edgeTextBbox.height / 2,
          dy: "0.3em",
          ref: edgeTextRef,
          style: labelStyle,
          children: label,
        }),
        children2,
      ],
    });
  }
  EdgeTextComponent.displayName = "EdgeText";
  var EdgeText = N2(EdgeTextComponent);
  function BaseEdge({
    path,
    labelX,
    labelY,
    label,
    labelStyle,
    labelShowBg,
    labelBgStyle,
    labelBgPadding,
    labelBgBorderRadius,
    interactionWidth = 20,
    ...props
  }) {
    return u3(S, {
      children: [
        u3("path", {
          ...props,
          d: path,
          fill: "none",
          className: cc(["react-flow__edge-path", props.className]),
        }),
        interactionWidth
          ? u3("path", {
              d: path,
              fill: "none",
              strokeOpacity: 0,
              strokeWidth: interactionWidth,
              className: "react-flow__edge-interaction",
            })
          : null,
        label && isNumeric(labelX) && isNumeric(labelY)
          ? u3(EdgeText, {
              x: labelX,
              y: labelY,
              label,
              labelStyle,
              labelShowBg,
              labelBgStyle,
              labelBgPadding,
              labelBgBorderRadius,
            })
          : null,
      ],
    });
  }
  function getControl({ pos, x1, y1, x2: x22, y2: y22 }) {
    if (pos === Position.Left || pos === Position.Right) {
      return [0.5 * (x1 + x22), y1];
    }
    return [x1, 0.5 * (y1 + y22)];
  }
  function getSimpleBezierPath({
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top,
  }) {
    const [sourceControlX, sourceControlY] = getControl({
      pos: sourcePosition,
      x1: sourceX,
      y1: sourceY,
      x2: targetX,
      y2: targetY,
    });
    const [targetControlX, targetControlY] = getControl({
      pos: targetPosition,
      x1: targetX,
      y1: targetY,
      x2: sourceX,
      y2: sourceY,
    });
    const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourceControlX,
      sourceControlY,
      targetControlX,
      targetControlY,
    });
    return [
      `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
      labelX,
      labelY,
      offsetX,
      offsetY,
    ];
  }
  function createSimpleBezierEdge(params) {
    return N2(
      ({
        id: id2,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        label,
        labelStyle,
        labelShowBg,
        labelBgStyle,
        labelBgPadding,
        labelBgBorderRadius,
        style: style2,
        markerEnd,
        markerStart,
        interactionWidth,
      }) => {
        const [path, labelX, labelY] = getSimpleBezierPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
        });
        const _id = params.isInternal ? void 0 : id2;
        return u3(BaseEdge, {
          id: _id,
          path,
          labelX,
          labelY,
          label,
          labelStyle,
          labelShowBg,
          labelBgStyle,
          labelBgPadding,
          labelBgBorderRadius,
          style: style2,
          markerEnd,
          markerStart,
          interactionWidth,
        });
      },
    );
  }
  var SimpleBezierEdge = createSimpleBezierEdge({ isInternal: false });
  var SimpleBezierEdgeInternal = createSimpleBezierEdge({ isInternal: true });
  SimpleBezierEdge.displayName = "SimpleBezierEdge";
  SimpleBezierEdgeInternal.displayName = "SimpleBezierEdgeInternal";
  function createSmoothStepEdge(params) {
    return N2(
      ({
        id: id2,
        sourceX,
        sourceY,
        targetX,
        targetY,
        label,
        labelStyle,
        labelShowBg,
        labelBgStyle,
        labelBgPadding,
        labelBgBorderRadius,
        style: style2,
        sourcePosition = Position.Bottom,
        targetPosition = Position.Top,
        markerEnd,
        markerStart,
        pathOptions,
        interactionWidth,
      }) => {
        const [path, labelX, labelY] = getSmoothStepPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
          borderRadius: pathOptions?.borderRadius,
          offset: pathOptions?.offset,
          stepPosition: pathOptions?.stepPosition,
        });
        const _id = params.isInternal ? void 0 : id2;
        return u3(BaseEdge, {
          id: _id,
          path,
          labelX,
          labelY,
          label,
          labelStyle,
          labelShowBg,
          labelBgStyle,
          labelBgPadding,
          labelBgBorderRadius,
          style: style2,
          markerEnd,
          markerStart,
          interactionWidth,
        });
      },
    );
  }
  var SmoothStepEdge = createSmoothStepEdge({ isInternal: false });
  var SmoothStepEdgeInternal = createSmoothStepEdge({ isInternal: true });
  SmoothStepEdge.displayName = "SmoothStepEdge";
  SmoothStepEdgeInternal.displayName = "SmoothStepEdgeInternal";
  function createStepEdge(params) {
    return N2(({ id: id2, ...props }) => {
      const _id = params.isInternal ? void 0 : id2;
      return u3(SmoothStepEdge, {
        ...props,
        id: _id,
        pathOptions: T2(
          () => ({ borderRadius: 0, offset: props.pathOptions?.offset }),
          [props.pathOptions?.offset],
        ),
      });
    });
  }
  var StepEdge = createStepEdge({ isInternal: false });
  var StepEdgeInternal = createStepEdge({ isInternal: true });
  StepEdge.displayName = "StepEdge";
  StepEdgeInternal.displayName = "StepEdgeInternal";
  function createStraightEdge(params) {
    return N2(
      ({
        id: id2,
        sourceX,
        sourceY,
        targetX,
        targetY,
        label,
        labelStyle,
        labelShowBg,
        labelBgStyle,
        labelBgPadding,
        labelBgBorderRadius,
        style: style2,
        markerEnd,
        markerStart,
        interactionWidth,
      }) => {
        const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });
        const _id = params.isInternal ? void 0 : id2;
        return u3(BaseEdge, {
          id: _id,
          path,
          labelX,
          labelY,
          label,
          labelStyle,
          labelShowBg,
          labelBgStyle,
          labelBgPadding,
          labelBgBorderRadius,
          style: style2,
          markerEnd,
          markerStart,
          interactionWidth,
        });
      },
    );
  }
  var StraightEdge = createStraightEdge({ isInternal: false });
  var StraightEdgeInternal = createStraightEdge({ isInternal: true });
  StraightEdge.displayName = "StraightEdge";
  StraightEdgeInternal.displayName = "StraightEdgeInternal";
  function createBezierEdge(params) {
    return N2(
      ({
        id: id2,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition = Position.Bottom,
        targetPosition = Position.Top,
        label,
        labelStyle,
        labelShowBg,
        labelBgStyle,
        labelBgPadding,
        labelBgBorderRadius,
        style: style2,
        markerEnd,
        markerStart,
        pathOptions,
        interactionWidth,
      }) => {
        const [path, labelX, labelY] = getBezierPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
          curvature: pathOptions?.curvature,
        });
        const _id = params.isInternal ? void 0 : id2;
        return u3(BaseEdge, {
          id: _id,
          path,
          labelX,
          labelY,
          label,
          labelStyle,
          labelShowBg,
          labelBgStyle,
          labelBgPadding,
          labelBgBorderRadius,
          style: style2,
          markerEnd,
          markerStart,
          interactionWidth,
        });
      },
    );
  }
  var BezierEdge = createBezierEdge({ isInternal: false });
  var BezierEdgeInternal = createBezierEdge({ isInternal: true });
  BezierEdge.displayName = "BezierEdge";
  BezierEdgeInternal.displayName = "BezierEdgeInternal";
  var builtinEdgeTypes = {
    default: BezierEdgeInternal,
    straight: StraightEdgeInternal,
    step: StepEdgeInternal,
    smoothstep: SmoothStepEdgeInternal,
    simplebezier: SimpleBezierEdgeInternal,
  };
  var nullPosition = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
    zIndex: void 0,
  };
  var shiftX = (x4, shift, position) => {
    if (position === Position.Left) return x4 - shift;
    if (position === Position.Right) return x4 + shift;
    return x4;
  };
  var shiftY = (y3, shift, position) => {
    if (position === Position.Top) return y3 - shift;
    if (position === Position.Bottom) return y3 + shift;
    return y3;
  };
  var EdgeUpdaterClassName = "react-flow__edgeupdater";
  function EdgeAnchor({
    position,
    centerX,
    centerY,
    radius = 10,
    onMouseDown,
    onMouseEnter,
    onMouseOut,
    type,
  }) {
    return u3("circle", {
      onMouseDown,
      onMouseEnter,
      onMouseOut,
      className: cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`]),
      cx: shiftX(centerX, radius, position),
      cy: shiftY(centerY, radius, position),
      r: radius,
      stroke: "transparent",
      fill: "transparent",
    });
  }
  function EdgeUpdateAnchors({
    isReconnectable,
    reconnectRadius,
    edge,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    onReconnect,
    onReconnectStart,
    onReconnectEnd,
    setReconnecting,
    setUpdateHover,
  }) {
    const store = useStoreApi();
    const handleEdgeUpdater = (event, oppositeHandle) => {
      if (event.button !== 0) {
        return;
      }
      const {
        autoPanOnConnect,
        domNode,
        connectionMode,
        connectionRadius,
        lib,
        onConnectStart,
        cancelConnection,
        nodeLookup,
        rfId: flowId,
        panBy: panBy2,
        updateConnection,
      } = store.getState();
      const isTarget = oppositeHandle.type === "target";
      const _onReconnectEnd = (evt, connectionState) => {
        setReconnecting(false);
        onReconnectEnd?.(evt, edge, oppositeHandle.type, connectionState);
      };
      const onConnectEdge = (connection) => onReconnect?.(edge, connection);
      const _onConnectStart = (_event, params) => {
        setReconnecting(true);
        onReconnectStart?.(event, edge, oppositeHandle.type);
        onConnectStart?.(_event, params);
      };
      XYHandle.onPointerDown(event.nativeEvent, {
        autoPanOnConnect,
        connectionMode,
        connectionRadius,
        domNode,
        handleId: oppositeHandle.id,
        nodeId: oppositeHandle.nodeId,
        nodeLookup,
        isTarget,
        edgeUpdaterType: oppositeHandle.type,
        lib,
        flowId,
        cancelConnection,
        panBy: panBy2,
        isValidConnection: (...args) => store.getState().isValidConnection?.(...args) ?? true,
        onConnect: onConnectEdge,
        onConnectStart: _onConnectStart,
        onConnectEnd: (...args) => store.getState().onConnectEnd?.(...args),
        onReconnectEnd: _onReconnectEnd,
        updateConnection,
        getTransform: () => store.getState().transform,
        getFromHandle: () => store.getState().connection.fromHandle,
        dragThreshold: store.getState().connectionDragThreshold,
        handleDomNode: event.currentTarget,
      });
    };
    const onReconnectSourceMouseDown = (event) =>
      handleEdgeUpdater(event, {
        nodeId: edge.target,
        id: edge.targetHandle ?? null,
        type: "target",
      });
    const onReconnectTargetMouseDown = (event) =>
      handleEdgeUpdater(event, {
        nodeId: edge.source,
        id: edge.sourceHandle ?? null,
        type: "source",
      });
    const onReconnectMouseEnter = () => setUpdateHover(true);
    const onReconnectMouseOut = () => setUpdateHover(false);
    return u3(S, {
      children: [
        (isReconnectable === true || isReconnectable === "source") &&
          u3(EdgeAnchor, {
            position: sourcePosition,
            centerX: sourceX,
            centerY: sourceY,
            radius: reconnectRadius,
            onMouseDown: onReconnectSourceMouseDown,
            onMouseEnter: onReconnectMouseEnter,
            onMouseOut: onReconnectMouseOut,
            type: "source",
          }),
        (isReconnectable === true || isReconnectable === "target") &&
          u3(EdgeAnchor, {
            position: targetPosition,
            centerX: targetX,
            centerY: targetY,
            radius: reconnectRadius,
            onMouseDown: onReconnectTargetMouseDown,
            onMouseEnter: onReconnectMouseEnter,
            onMouseOut: onReconnectMouseOut,
            type: "target",
          }),
      ],
    });
  }
  function EdgeWrapper({
    id: id2,
    edgesFocusable,
    edgesReconnectable,
    elementsSelectable,
    onClick,
    onDoubleClick,
    onContextMenu,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    reconnectRadius,
    onReconnect,
    onReconnectStart,
    onReconnectEnd,
    rfId,
    edgeTypes: edgeTypes2,
    noPanClassName,
    onError,
    disableKeyboardA11y,
  }) {
    let edge = useStore((s3) => s3.edgeLookup.get(id2));
    const defaultEdgeOptions = useStore((s3) => s3.defaultEdgeOptions);
    edge = defaultEdgeOptions ? { ...defaultEdgeOptions, ...edge } : edge;
    let edgeType = edge.type || "default";
    let EdgeComponent = edgeTypes2?.[edgeType] || builtinEdgeTypes[edgeType];
    if (EdgeComponent === void 0) {
      onError?.("011", errorMessages["error011"](edgeType));
      edgeType = "default";
      EdgeComponent = edgeTypes2?.["default"] || builtinEdgeTypes.default;
    }
    const isFocusable = !!(
      edge.focusable ||
      (edgesFocusable && typeof edge.focusable === "undefined")
    );
    const isReconnectable =
      typeof onReconnect !== "undefined" &&
      (edge.reconnectable || (edgesReconnectable && typeof edge.reconnectable === "undefined"));
    const isSelectable = !!(
      edge.selectable ||
      (elementsSelectable && typeof edge.selectable === "undefined")
    );
    const edgeRef = A2(null);
    const [updateHover, setUpdateHover] = d2(false);
    const [reconnecting, setReconnecting] = d2(false);
    const store = useStoreApi();
    const {
      zIndex = edge.zIndex,
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
    } = useStore(
      q2(
        (store2) => {
          const sourceNode = store2.nodeLookup.get(edge.source);
          const targetNode = store2.nodeLookup.get(edge.target);
          if (!sourceNode || !targetNode) {
            return nullPosition;
          }
          const edgePosition = getEdgePosition({
            id: id2,
            sourceNode,
            targetNode,
            sourceHandle: edge.sourceHandle || null,
            targetHandle: edge.targetHandle || null,
            connectionMode: store2.connectionMode,
            onError,
          });
          const zIndex2 = getElevatedEdgeZIndex({
            selected: edge.selected,
            zIndex: edge.zIndex,
            sourceNode,
            targetNode,
            elevateOnSelect: store2.elevateEdgesOnSelect,
            zIndexMode: store2.zIndexMode,
          });
          return {
            ...(edgePosition || nullPosition),
            zIndex: zIndex2,
          };
        },
        [
          edge.source,
          edge.target,
          edge.sourceHandle,
          edge.targetHandle,
          edge.selected,
          edge.zIndex,
        ],
      ),
      shallow$1,
    );
    const markerStartUrl = T2(
      () => (edge.markerStart ? `url('#${getMarkerId(edge.markerStart, rfId)}')` : void 0),
      [edge.markerStart, rfId],
    );
    const markerEndUrl = T2(
      () => (edge.markerEnd ? `url('#${getMarkerId(edge.markerEnd, rfId)}')` : void 0),
      [edge.markerEnd, rfId],
    );
    if (
      edge.hidden ||
      sourceX === null ||
      sourceY === null ||
      targetX === null ||
      targetY === null
    ) {
      return null;
    }
    const onEdgeClick = (event) => {
      const { addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
      if (isSelectable) {
        store.setState({ nodesSelectionActive: false });
        if (edge.selected && multiSelectionActive) {
          unselectNodesAndEdges({ nodes: [], edges: [edge] });
          edgeRef.current?.blur();
        } else {
          addSelectedEdges([id2]);
        }
      }
      if (onClick) {
        onClick(event, edge);
      }
    };
    const onEdgeDoubleClick = onDoubleClick
      ? (event) => {
          onDoubleClick(event, { ...edge });
        }
      : void 0;
    const onEdgeContextMenu = onContextMenu
      ? (event) => {
          onContextMenu(event, { ...edge });
        }
      : void 0;
    const onEdgeMouseEnter = onMouseEnter
      ? (event) => {
          onMouseEnter(event, { ...edge });
        }
      : void 0;
    const onEdgeMouseMove = onMouseMove
      ? (event) => {
          onMouseMove(event, { ...edge });
        }
      : void 0;
    const onEdgeMouseLeave = onMouseLeave
      ? (event) => {
          onMouseLeave(event, { ...edge });
        }
      : void 0;
    const onKeyDown = (event) => {
      if (!disableKeyboardA11y && elementSelectionKeys.includes(event.key) && isSelectable) {
        const { unselectNodesAndEdges, addSelectedEdges } = store.getState();
        const unselect = event.key === "Escape";
        if (unselect) {
          edgeRef.current?.blur();
          unselectNodesAndEdges({ edges: [edge] });
        } else {
          addSelectedEdges([id2]);
        }
      }
    };
    return u3("svg", {
      style: { zIndex },
      children: u3("g", {
        className: cc([
          "react-flow__edge",
          `react-flow__edge-${edgeType}`,
          edge.className,
          noPanClassName,
          {
            selected: edge.selected,
            animated: edge.animated,
            inactive: !isSelectable && !onClick,
            updating: updateHover,
            selectable: isSelectable,
          },
        ]),
        onClick: onEdgeClick,
        onDoubleClick: onEdgeDoubleClick,
        onContextMenu: onEdgeContextMenu,
        onMouseEnter: onEdgeMouseEnter,
        onMouseMove: onEdgeMouseMove,
        onMouseLeave: onEdgeMouseLeave,
        onKeyDown: isFocusable ? onKeyDown : void 0,
        tabIndex: isFocusable ? 0 : void 0,
        role: edge.ariaRole ?? (isFocusable ? "group" : "img"),
        "aria-roledescription": "edge",
        "data-id": id2,
        "data-testid": `rf__edge-${id2}`,
        "aria-label":
          edge.ariaLabel === null
            ? void 0
            : edge.ariaLabel || `Edge from ${edge.source} to ${edge.target}`,
        "aria-describedby": isFocusable ? `${ARIA_EDGE_DESC_KEY}-${rfId}` : void 0,
        ref: edgeRef,
        ...edge.domAttributes,
        children: [
          !reconnecting &&
            u3(EdgeComponent, {
              id: id2,
              source: edge.source,
              target: edge.target,
              type: edge.type,
              selected: edge.selected,
              animated: edge.animated,
              selectable: isSelectable,
              deletable: edge.deletable ?? true,
              label: edge.label,
              labelStyle: edge.labelStyle,
              labelShowBg: edge.labelShowBg,
              labelBgStyle: edge.labelBgStyle,
              labelBgPadding: edge.labelBgPadding,
              labelBgBorderRadius: edge.labelBgBorderRadius,
              sourceX,
              sourceY,
              targetX,
              targetY,
              sourcePosition,
              targetPosition,
              data: edge.data,
              style: edge.style,
              sourceHandleId: edge.sourceHandle,
              targetHandleId: edge.targetHandle,
              markerStart: markerStartUrl,
              markerEnd: markerEndUrl,
              pathOptions: "pathOptions" in edge ? edge.pathOptions : void 0,
              interactionWidth: edge.interactionWidth,
            }),
          isReconnectable &&
            u3(EdgeUpdateAnchors, {
              edge,
              isReconnectable,
              reconnectRadius,
              onReconnect,
              onReconnectStart,
              onReconnectEnd,
              sourceX,
              sourceY,
              targetX,
              targetY,
              sourcePosition,
              targetPosition,
              setUpdateHover,
              setReconnecting,
            }),
        ],
      }),
    });
  }
  var EdgeWrapper$1 = N2(EdgeWrapper);
  var selector$a = (s3) => ({
    edgesFocusable: s3.edgesFocusable,
    edgesReconnectable: s3.edgesReconnectable,
    elementsSelectable: s3.elementsSelectable,
    connectionMode: s3.connectionMode,
    onError: s3.onError,
  });
  function EdgeRendererComponent({
    defaultMarkerColor,
    onlyRenderVisibleElements,
    rfId,
    edgeTypes: edgeTypes2,
    noPanClassName,
    onReconnect,
    onEdgeContextMenu,
    onEdgeMouseEnter,
    onEdgeMouseMove,
    onEdgeMouseLeave,
    onEdgeClick,
    reconnectRadius,
    onEdgeDoubleClick,
    onReconnectStart,
    onReconnectEnd,
    disableKeyboardA11y,
  }) {
    const { edgesFocusable, edgesReconnectable, elementsSelectable, onError } = useStore(
      selector$a,
      shallow$1,
    );
    const edgeIds = useVisibleEdgeIds(onlyRenderVisibleElements);
    return u3("div", {
      className: "react-flow__edges",
      children: [
        u3(MarkerDefinitions$1, { defaultColor: defaultMarkerColor, rfId }),
        edgeIds.map((id2) => {
          return u3(
            EdgeWrapper$1,
            {
              id: id2,
              edgesFocusable,
              edgesReconnectable,
              elementsSelectable,
              noPanClassName,
              onReconnect,
              onContextMenu: onEdgeContextMenu,
              onMouseEnter: onEdgeMouseEnter,
              onMouseMove: onEdgeMouseMove,
              onMouseLeave: onEdgeMouseLeave,
              onClick: onEdgeClick,
              reconnectRadius,
              onDoubleClick: onEdgeDoubleClick,
              onReconnectStart,
              onReconnectEnd,
              rfId,
              onError,
              edgeTypes: edgeTypes2,
              disableKeyboardA11y,
            },
            id2,
          );
        }),
      ],
    });
  }
  EdgeRendererComponent.displayName = "EdgeRenderer";
  var EdgeRenderer = N2(EdgeRendererComponent);
  var selector$9 = (s3) =>
    `translate(${s3.transform[0]}px,${s3.transform[1]}px) scale(${s3.transform[2]})`;
  function Viewport({ children: children2 }) {
    const transform2 = useStore(selector$9);
    return u3("div", {
      className: "react-flow__viewport xyflow__viewport react-flow__container",
      style: { transform: transform2 },
      children: children2,
    });
  }
  function useOnInitHandler(onInit) {
    const rfInstance = useReactFlow();
    const isInitialized = A2(false);
    h2(() => {
      if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
        setTimeout(() => onInit(rfInstance), 1);
        isInitialized.current = true;
      }
    }, [onInit, rfInstance.viewportInitialized]);
  }
  var selector$8 = (state) => state.panZoom?.syncViewport;
  function useViewportSync(viewport) {
    const syncViewport = useStore(selector$8);
    const store = useStoreApi();
    h2(() => {
      if (viewport) {
        syncViewport?.(viewport);
        store.setState({ transform: [viewport.x, viewport.y, viewport.zoom] });
      }
    }, [viewport, syncViewport]);
    return null;
  }
  function storeSelector$1(s3) {
    return s3.connection.inProgress
      ? { ...s3.connection, to: pointToRendererPoint(s3.connection.to, s3.transform) }
      : { ...s3.connection };
  }
  function getSelector(connectionSelector) {
    if (connectionSelector) {
      const combinedSelector = (s3) => {
        const connection = storeSelector$1(s3);
        return connectionSelector(connection);
      };
      return combinedSelector;
    }
    return storeSelector$1;
  }
  function useConnection(connectionSelector) {
    const combinedSelector = getSelector(connectionSelector);
    return useStore(combinedSelector, shallow$1);
  }
  var selector$7 = (s3) => ({
    nodesConnectable: s3.nodesConnectable,
    isValid: s3.connection.isValid,
    inProgress: s3.connection.inProgress,
    width: s3.width,
    height: s3.height,
  });
  function ConnectionLineWrapper({
    containerStyle: containerStyle2,
    style: style2,
    type,
    component,
  }) {
    const { nodesConnectable, width, height, isValid, inProgress } = useStore(
      selector$7,
      shallow$1,
    );
    const renderConnection = !!(width && nodesConnectable && inProgress);
    if (!renderConnection) {
      return null;
    }
    return u3("svg", {
      style: containerStyle2,
      width,
      height,
      className: "react-flow__connectionline react-flow__container",
      children: u3("g", {
        className: cc(["react-flow__connection", getConnectionStatus(isValid)]),
        children: u3(ConnectionLine, { style: style2, type, CustomComponent: component, isValid }),
      }),
    });
  }
  var ConnectionLine = ({
    style: style2,
    type = ConnectionLineType.Bezier,
    CustomComponent,
    isValid,
  }) => {
    const {
      inProgress,
      from,
      fromNode,
      fromHandle,
      fromPosition,
      to,
      toNode,
      toHandle,
      toPosition,
      pointer,
    } = useConnection();
    if (!inProgress) {
      return;
    }
    if (CustomComponent) {
      return u3(CustomComponent, {
        connectionLineType: type,
        connectionLineStyle: style2,
        fromNode,
        fromHandle,
        fromX: from.x,
        fromY: from.y,
        toX: to.x,
        toY: to.y,
        fromPosition,
        toPosition,
        connectionStatus: getConnectionStatus(isValid),
        toNode,
        toHandle,
        pointer,
      });
    }
    let path = "";
    const pathParams = {
      sourceX: from.x,
      sourceY: from.y,
      sourcePosition: fromPosition,
      targetX: to.x,
      targetY: to.y,
      targetPosition: toPosition,
    };
    switch (type) {
      case ConnectionLineType.Bezier:
        [path] = getBezierPath(pathParams);
        break;
      case ConnectionLineType.SimpleBezier:
        [path] = getSimpleBezierPath(pathParams);
        break;
      case ConnectionLineType.Step:
        [path] = getSmoothStepPath({
          ...pathParams,
          borderRadius: 0,
        });
        break;
      case ConnectionLineType.SmoothStep:
        [path] = getSmoothStepPath(pathParams);
        break;
      default:
        [path] = getStraightPath(pathParams);
    }
    return u3("path", {
      d: path,
      fill: "none",
      className: "react-flow__connection-path",
      style: style2,
    });
  };
  ConnectionLine.displayName = "ConnectionLine";
  var emptyTypes = {};
  function useNodeOrEdgeTypesWarning(nodeOrEdgeTypes = emptyTypes) {
    const typesRef = A2(nodeOrEdgeTypes);
    const store = useStoreApi();
    h2(() => {
      if (false) {
        const usedKeys = /* @__PURE__ */ new Set([
          ...Object.keys(typesRef.current),
          ...Object.keys(nodeOrEdgeTypes),
        ]);
        for (const key of usedKeys) {
          if (typesRef.current[key] !== nodeOrEdgeTypes[key]) {
            store.getState().onError?.("002", errorMessages["error002"]());
            break;
          }
        }
        typesRef.current = nodeOrEdgeTypes;
      }
    }, [nodeOrEdgeTypes]);
  }
  function useStylesLoadedWarning() {
    const store = useStoreApi();
    const checked = A2(false);
    h2(() => {
      if (false) {
        if (!checked.current) {
          const pane = document.querySelector(".react-flow__pane");
          if (pane && !(window.getComputedStyle(pane).zIndex === "1")) {
            store.getState().onError?.("013", errorMessages["error013"]("react"));
          }
          checked.current = true;
        }
      }
    }, []);
  }
  function GraphViewComponent({
    nodeTypes: nodeTypes2,
    edgeTypes: edgeTypes2,
    onInit,
    onNodeClick,
    onEdgeClick,
    onNodeDoubleClick,
    onEdgeDoubleClick,
    onNodeMouseEnter,
    onNodeMouseMove,
    onNodeMouseLeave,
    onNodeContextMenu,
    onSelectionContextMenu,
    onSelectionStart,
    onSelectionEnd,
    connectionLineType,
    connectionLineStyle,
    connectionLineComponent,
    connectionLineContainerStyle,
    selectionKeyCode,
    selectionOnDrag,
    selectionMode,
    multiSelectionKeyCode,
    panActivationKeyCode,
    zoomActivationKeyCode,
    deleteKeyCode,
    onlyRenderVisibleElements,
    elementsSelectable,
    defaultViewport: defaultViewport2,
    translateExtent,
    minZoom,
    maxZoom,
    preventScrolling,
    defaultMarkerColor,
    zoomOnScroll,
    zoomOnPinch,
    panOnScroll,
    panOnScrollSpeed,
    panOnScrollMode,
    zoomOnDoubleClick,
    panOnDrag,
    autoPanOnSelection,
    onPaneClick,
    onPaneMouseEnter,
    onPaneMouseMove,
    onPaneMouseLeave,
    onPaneScroll,
    onPaneContextMenu,
    paneClickDistance,
    nodeClickDistance,
    onEdgeContextMenu,
    onEdgeMouseEnter,
    onEdgeMouseMove,
    onEdgeMouseLeave,
    reconnectRadius,
    onReconnect,
    onReconnectStart,
    onReconnectEnd,
    noDragClassName,
    noWheelClassName,
    noPanClassName,
    disableKeyboardA11y,
    nodeExtent,
    rfId,
    viewport,
    onViewportChange,
  }) {
    useNodeOrEdgeTypesWarning(nodeTypes2);
    useNodeOrEdgeTypesWarning(edgeTypes2);
    useStylesLoadedWarning();
    useOnInitHandler(onInit);
    useViewportSync(viewport);
    return u3(FlowRenderer, {
      onPaneClick,
      onPaneMouseEnter,
      onPaneMouseMove,
      onPaneMouseLeave,
      onPaneContextMenu,
      onPaneScroll,
      paneClickDistance,
      deleteKeyCode,
      selectionKeyCode,
      selectionOnDrag,
      selectionMode,
      onSelectionStart,
      onSelectionEnd,
      multiSelectionKeyCode,
      panActivationKeyCode,
      zoomActivationKeyCode,
      elementsSelectable,
      zoomOnScroll,
      zoomOnPinch,
      zoomOnDoubleClick,
      panOnScroll,
      panOnScrollSpeed,
      panOnScrollMode,
      panOnDrag,
      autoPanOnSelection,
      defaultViewport: defaultViewport2,
      translateExtent,
      minZoom,
      maxZoom,
      onSelectionContextMenu,
      preventScrolling,
      noDragClassName,
      noWheelClassName,
      noPanClassName,
      disableKeyboardA11y,
      onViewportChange,
      isControlledViewport: !!viewport,
      children: u3(Viewport, {
        children: [
          u3(EdgeRenderer, {
            edgeTypes: edgeTypes2,
            onEdgeClick,
            onEdgeDoubleClick,
            onReconnect,
            onReconnectStart,
            onReconnectEnd,
            onlyRenderVisibleElements,
            onEdgeContextMenu,
            onEdgeMouseEnter,
            onEdgeMouseMove,
            onEdgeMouseLeave,
            reconnectRadius,
            defaultMarkerColor,
            noPanClassName,
            disableKeyboardA11y,
            rfId,
          }),
          u3(ConnectionLineWrapper, {
            style: connectionLineStyle,
            type: connectionLineType,
            component: connectionLineComponent,
            containerStyle: connectionLineContainerStyle,
          }),
          u3("div", { className: "react-flow__edgelabel-renderer" }),
          u3(NodeRenderer, {
            nodeTypes: nodeTypes2,
            onNodeClick,
            onNodeDoubleClick,
            onNodeMouseEnter,
            onNodeMouseMove,
            onNodeMouseLeave,
            onNodeContextMenu,
            nodeClickDistance,
            onlyRenderVisibleElements,
            noPanClassName,
            noDragClassName,
            disableKeyboardA11y,
            nodeExtent,
            rfId,
          }),
          u3("div", { className: "react-flow__viewport-portal" }),
        ],
      }),
    });
  }
  GraphViewComponent.displayName = "GraphView";
  var GraphView = N2(GraphViewComponent);
  var devWarn = createDevWarn("React Flow", "https://reactflow.dev/");
  var getInitialState = ({
    nodes,
    edges,
    defaultNodes,
    defaultEdges,
    width,
    height,
    fitView,
    fitViewOptions,
    minZoom = 0.5,
    maxZoom = 2,
    nodeOrigin,
    nodeExtent,
    zIndexMode = "basic",
  } = {}) => {
    const nodeLookup = /* @__PURE__ */ new Map();
    const parentLookup = /* @__PURE__ */ new Map();
    const connectionLookup = /* @__PURE__ */ new Map();
    const edgeLookup = /* @__PURE__ */ new Map();
    const storeEdges = defaultEdges ?? edges ?? [];
    const storeNodes = defaultNodes ?? nodes ?? [];
    const storeNodeOrigin = nodeOrigin ?? [0, 0];
    const storeNodeExtent = nodeExtent ?? infiniteExtent;
    updateConnectionLookup(connectionLookup, edgeLookup, storeEdges);
    const { nodesInitialized } = adoptUserNodes(storeNodes, nodeLookup, parentLookup, {
      nodeOrigin: storeNodeOrigin,
      nodeExtent: storeNodeExtent,
      zIndexMode,
    });
    let transform2 = [0, 0, 1];
    if (fitView && width && height) {
      const bounds = getInternalNodesBounds(nodeLookup, {
        filter: (node) =>
          !!((node.width || node.initialWidth) && (node.height || node.initialHeight)),
      });
      const {
        x: x4,
        y: y3,
        zoom,
      } = getViewportForBounds(
        bounds,
        width,
        height,
        minZoom,
        maxZoom,
        fitViewOptions?.padding ?? 0.1,
      );
      transform2 = [x4, y3, zoom];
    }
    return {
      rfId: "1",
      width: width ?? 0,
      height: height ?? 0,
      transform: transform2,
      nodes: storeNodes,
      nodesInitialized,
      nodeLookup,
      parentLookup,
      edges: storeEdges,
      edgeLookup,
      connectionLookup,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: defaultNodes !== void 0,
      hasDefaultEdges: defaultEdges !== void 0,
      panZoom: null,
      minZoom,
      maxZoom,
      translateExtent: infiniteExtent,
      nodeExtent: storeNodeExtent,
      nodesSelectionActive: false,
      userSelectionActive: false,
      userSelectionRect: null,
      connectionMode: ConnectionMode.Strict,
      domNode: null,
      paneDragging: false,
      noPanClassName: "nopan",
      nodeOrigin: storeNodeOrigin,
      nodeDragThreshold: 1,
      connectionDragThreshold: 1,
      snapGrid: [15, 15],
      snapToGrid: false,
      nodesDraggable: true,
      nodesConnectable: true,
      nodesFocusable: true,
      edgesFocusable: true,
      edgesReconnectable: true,
      elementsSelectable: true,
      elevateNodesOnSelect: true,
      elevateEdgesOnSelect: true,
      selectNodesOnDrag: true,
      multiSelectionActive: false,
      fitViewQueued: fitView ?? false,
      fitViewOptions,
      fitViewResolver: null,
      connection: { ...initialConnection },
      connectionClickStartHandle: null,
      connectOnClick: true,
      ariaLiveMessage: "",
      autoPanOnConnect: true,
      autoPanOnNodeDrag: true,
      autoPanOnNodeFocus: true,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: devWarn,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: "react",
      debug: false,
      ariaLabelConfig: defaultAriaLabelConfig,
      zIndexMode,
      onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
      onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
    };
  };
  var createStore2 = ({
    nodes,
    edges,
    defaultNodes,
    defaultEdges,
    width,
    height,
    fitView,
    fitViewOptions,
    minZoom,
    maxZoom,
    nodeOrigin,
    nodeExtent,
    zIndexMode,
  }) =>
    createWithEqualityFn((set3, get3) => {
      async function resolveFitView() {
        const {
          nodeLookup,
          panZoom,
          fitViewOptions: fitViewOptions2,
          fitViewResolver,
          width: width2,
          height: height2,
          minZoom: minZoom2,
          maxZoom: maxZoom2,
        } = get3();
        if (!panZoom) {
          return;
        }
        await fitViewport(
          {
            nodes: nodeLookup,
            width: width2,
            height: height2,
            panZoom,
            minZoom: minZoom2,
            maxZoom: maxZoom2,
          },
          fitViewOptions2,
        );
        fitViewResolver?.resolve(true);
        set3({ fitViewResolver: null });
      }
      return {
        ...getInitialState({
          nodes,
          edges,
          width,
          height,
          fitView,
          fitViewOptions,
          minZoom,
          maxZoom,
          nodeOrigin,
          nodeExtent,
          defaultNodes,
          defaultEdges,
          zIndexMode,
        }),
        setNodes: (nodes2) => {
          const {
            nodeLookup,
            parentLookup,
            nodeOrigin: nodeOrigin2,
            elevateNodesOnSelect,
            fitViewQueued,
            zIndexMode: zIndexMode2,
            nodesSelectionActive,
          } = get3();
          const { nodesInitialized, hasSelectedNodes } = adoptUserNodes(
            nodes2,
            nodeLookup,
            parentLookup,
            {
              nodeOrigin: nodeOrigin2,
              nodeExtent,
              elevateNodesOnSelect,
              checkEquality: true,
              zIndexMode: zIndexMode2,
            },
          );
          const nextNodesSelectionActive = nodesSelectionActive && hasSelectedNodes;
          if (fitViewQueued && nodesInitialized) {
            resolveFitView();
            set3({
              nodes: nodes2,
              nodesInitialized,
              fitViewQueued: false,
              fitViewOptions: void 0,
              nodesSelectionActive: nextNodesSelectionActive,
            });
          } else {
            set3({
              nodes: nodes2,
              nodesInitialized,
              nodesSelectionActive: nextNodesSelectionActive,
            });
          }
        },
        setEdges: (edges2) => {
          const { connectionLookup, edgeLookup } = get3();
          updateConnectionLookup(connectionLookup, edgeLookup, edges2);
          set3({ edges: edges2 });
        },
        setDefaultNodesAndEdges: (nodes2, edges2) => {
          if (nodes2) {
            const { setNodes } = get3();
            setNodes(nodes2);
            set3({ hasDefaultNodes: true });
          }
          if (edges2) {
            const { setEdges } = get3();
            setEdges(edges2);
            set3({ hasDefaultEdges: true });
          }
        },
        /*
         * Every node gets registered at a ResizeObserver. Whenever a node
         * changes its dimensions, this function is called to measure the
         * new dimensions and update the nodes.
         */
        updateNodeInternals: (updates) => {
          const {
            triggerNodeChanges,
            nodeLookup,
            parentLookup,
            domNode,
            nodeOrigin: nodeOrigin2,
            nodeExtent: nodeExtent2,
            debug,
            fitViewQueued,
            zIndexMode: zIndexMode2,
          } = get3();
          const { changes, updatedInternals } = updateNodeInternals(
            updates,
            nodeLookup,
            parentLookup,
            domNode,
            nodeOrigin2,
            nodeExtent2,
            zIndexMode2,
          );
          if (!updatedInternals) {
            return;
          }
          updateAbsolutePositions(nodeLookup, parentLookup, {
            nodeOrigin: nodeOrigin2,
            nodeExtent: nodeExtent2,
            zIndexMode: zIndexMode2,
          });
          if (fitViewQueued) {
            resolveFitView();
            set3({ fitViewQueued: false, fitViewOptions: void 0 });
          } else {
            set3({});
          }
          if (changes?.length > 0) {
            if (debug) {
              console.log("React Flow: trigger node changes", changes);
            }
            triggerNodeChanges?.(changes);
          }
        },
        updateNodePositions: (nodeDragItems, dragging = false) => {
          const parentExpandChildren = [];
          let changes = [];
          const {
            nodeLookup,
            triggerNodeChanges,
            connection,
            updateConnection,
            onNodesChangeMiddlewareMap,
          } = get3();
          for (const [id2, dragItem] of nodeDragItems) {
            const node = nodeLookup.get(id2);
            const expandParent = !!(node?.expandParent && node?.parentId && dragItem?.position);
            const change = {
              id: id2,
              type: "position",
              position: expandParent
                ? {
                    x: Math.max(0, dragItem.position.x),
                    y: Math.max(0, dragItem.position.y),
                  }
                : dragItem.position,
              dragging,
            };
            if (node && connection.inProgress && connection.fromNode.id === node.id) {
              const updatedFrom = getHandlePosition(
                node,
                connection.fromHandle,
                Position.Left,
                true,
              );
              updateConnection({ ...connection, from: updatedFrom });
            }
            if (expandParent && node.parentId) {
              parentExpandChildren.push({
                id: id2,
                parentId: node.parentId,
                rect: {
                  ...dragItem.internals.positionAbsolute,
                  width: dragItem.measured.width ?? 0,
                  height: dragItem.measured.height ?? 0,
                },
              });
            }
            changes.push(change);
          }
          if (parentExpandChildren.length > 0) {
            const { parentLookup, nodeOrigin: nodeOrigin2 } = get3();
            const parentExpandChanges = handleExpandParent(
              parentExpandChildren,
              nodeLookup,
              parentLookup,
              nodeOrigin2,
            );
            changes.push(...parentExpandChanges);
          }
          for (const middleware of onNodesChangeMiddlewareMap.values()) {
            changes = middleware(changes);
          }
          triggerNodeChanges(changes);
        },
        triggerNodeChanges: (changes) => {
          const { onNodesChange, setNodes, nodes: nodes2, hasDefaultNodes, debug } = get3();
          if (changes?.length) {
            if (hasDefaultNodes) {
              const updatedNodes = applyNodeChanges(changes, nodes2);
              setNodes(updatedNodes);
            }
            if (debug) {
              console.log("React Flow: trigger node changes", changes);
            }
            onNodesChange?.(changes);
          }
        },
        triggerEdgeChanges: (changes) => {
          const { onEdgesChange, setEdges, edges: edges2, hasDefaultEdges, debug } = get3();
          if (changes?.length) {
            if (hasDefaultEdges) {
              const updatedEdges = applyEdgeChanges(changes, edges2);
              setEdges(updatedEdges);
            }
            if (debug) {
              console.log("React Flow: trigger edge changes", changes);
            }
            onEdgesChange?.(changes);
          }
        },
        addSelectedNodes: (selectedNodeIds) => {
          const {
            multiSelectionActive,
            edgeLookup,
            nodeLookup,
            triggerNodeChanges,
            triggerEdgeChanges,
          } = get3();
          if (multiSelectionActive) {
            const nodeChanges = selectedNodeIds.map((nodeId) =>
              createSelectionChange(nodeId, true),
            );
            triggerNodeChanges(nodeChanges);
            return;
          }
          triggerNodeChanges(
            getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set([...selectedNodeIds]), true),
          );
          triggerEdgeChanges(getSelectionChanges(edgeLookup));
        },
        addSelectedEdges: (selectedEdgeIds) => {
          const {
            multiSelectionActive,
            edgeLookup,
            nodeLookup,
            triggerNodeChanges,
            triggerEdgeChanges,
          } = get3();
          if (multiSelectionActive) {
            const changedEdges = selectedEdgeIds.map((edgeId) =>
              createSelectionChange(edgeId, true),
            );
            triggerEdgeChanges(changedEdges);
            return;
          }
          triggerEdgeChanges(
            getSelectionChanges(edgeLookup, /* @__PURE__ */ new Set([...selectedEdgeIds])),
          );
          triggerNodeChanges(getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set(), true));
        },
        unselectNodesAndEdges: ({ nodes: nodes2, edges: edges2 } = {}) => {
          const {
            edges: storeEdges,
            nodes: storeNodes,
            nodeLookup,
            triggerNodeChanges,
            triggerEdgeChanges,
          } = get3();
          const nodesToUnselect = nodes2 ? nodes2 : storeNodes;
          const edgesToUnselect = edges2 ? edges2 : storeEdges;
          const nodeChanges = [];
          for (const node of nodesToUnselect) {
            if (!node.selected) {
              continue;
            }
            const internalNode = nodeLookup.get(node.id);
            if (internalNode) {
              internalNode.selected = false;
            }
            nodeChanges.push(createSelectionChange(node.id, false));
          }
          const edgeChanges = [];
          for (const edge of edgesToUnselect) {
            if (!edge.selected) {
              continue;
            }
            edgeChanges.push(createSelectionChange(edge.id, false));
          }
          triggerNodeChanges(nodeChanges);
          triggerEdgeChanges(edgeChanges);
        },
        setMinZoom: (minZoom2) => {
          const { panZoom, maxZoom: maxZoom2 } = get3();
          panZoom?.setScaleExtent([minZoom2, maxZoom2]);
          set3({ minZoom: minZoom2 });
        },
        setMaxZoom: (maxZoom2) => {
          const { panZoom, minZoom: minZoom2 } = get3();
          panZoom?.setScaleExtent([minZoom2, maxZoom2]);
          set3({ maxZoom: maxZoom2 });
        },
        setTranslateExtent: (translateExtent) => {
          get3().panZoom?.setTranslateExtent(translateExtent);
          set3({ translateExtent });
        },
        resetSelectedElements: () => {
          const {
            edges: edges2,
            nodes: nodes2,
            triggerNodeChanges,
            triggerEdgeChanges,
            elementsSelectable,
          } = get3();
          if (!elementsSelectable) {
            return;
          }
          const nodeChanges = nodes2.reduce(
            (res, node) => (node.selected ? [...res, createSelectionChange(node.id, false)] : res),
            [],
          );
          const edgeChanges = edges2.reduce(
            (res, edge) => (edge.selected ? [...res, createSelectionChange(edge.id, false)] : res),
            [],
          );
          triggerNodeChanges(nodeChanges);
          triggerEdgeChanges(edgeChanges);
        },
        setNodeExtent: (nextNodeExtent) => {
          const {
            nodes: nodes2,
            nodeLookup,
            parentLookup,
            nodeOrigin: nodeOrigin2,
            elevateNodesOnSelect,
            nodeExtent: nodeExtent2,
            zIndexMode: zIndexMode2,
          } = get3();
          if (
            nextNodeExtent[0][0] === nodeExtent2[0][0] &&
            nextNodeExtent[0][1] === nodeExtent2[0][1] &&
            nextNodeExtent[1][0] === nodeExtent2[1][0] &&
            nextNodeExtent[1][1] === nodeExtent2[1][1]
          ) {
            return;
          }
          adoptUserNodes(nodes2, nodeLookup, parentLookup, {
            nodeOrigin: nodeOrigin2,
            nodeExtent: nextNodeExtent,
            elevateNodesOnSelect,
            checkEquality: false,
            zIndexMode: zIndexMode2,
          });
          set3({ nodeExtent: nextNodeExtent });
        },
        panBy: (delta) => {
          const {
            transform: transform2,
            width: width2,
            height: height2,
            panZoom,
            translateExtent,
          } = get3();
          return panBy({
            delta,
            panZoom,
            transform: transform2,
            translateExtent,
            width: width2,
            height: height2,
          });
        },
        setCenter: async (x4, y3, options) => {
          const { width: width2, height: height2, maxZoom: maxZoom2, panZoom } = get3();
          if (!panZoom) {
            return false;
          }
          const nextZoom = typeof options?.zoom !== "undefined" ? options.zoom : maxZoom2;
          await panZoom.setViewport(
            {
              x: width2 / 2 - x4 * nextZoom,
              y: height2 / 2 - y3 * nextZoom,
              zoom: nextZoom,
            },
            { duration: options?.duration, ease: options?.ease, interpolate: options?.interpolate },
          );
          return true;
        },
        cancelConnection: () => {
          set3({
            connection: { ...initialConnection },
          });
        },
        updateConnection: (connection) => {
          set3({ connection });
        },
        reset: () => set3({ ...getInitialState() }),
      };
    }, Object.is);
  function ReactFlowProvider({
    initialNodes: nodes,
    initialEdges: edges,
    defaultNodes,
    defaultEdges,
    initialWidth: width,
    initialHeight: height,
    initialMinZoom: minZoom,
    initialMaxZoom: maxZoom,
    initialFitViewOptions: fitViewOptions,
    fitView,
    nodeOrigin,
    nodeExtent,
    zIndexMode,
    children: children2,
  }) {
    const [store] = d2(() =>
      createStore2({
        nodes,
        edges,
        defaultNodes,
        defaultEdges,
        width,
        height,
        fitView,
        minZoom,
        maxZoom,
        fitViewOptions,
        nodeOrigin,
        nodeExtent,
        zIndexMode,
      }),
    );
    return u3(Provider$1, {
      value: store,
      children: u3(BatchProvider, { children: u3(HandleConfigProvider, { children: children2 }) }),
    });
  }
  function Wrapper({
    children: children2,
    nodes,
    edges,
    defaultNodes,
    defaultEdges,
    width,
    height,
    fitView,
    fitViewOptions,
    minZoom,
    maxZoom,
    nodeOrigin,
    nodeExtent,
    zIndexMode,
  }) {
    const isWrapped = x2(StoreContext);
    if (isWrapped) {
      return u3(S, { children: children2 });
    }
    return u3(ReactFlowProvider, {
      initialNodes: nodes,
      initialEdges: edges,
      defaultNodes,
      defaultEdges,
      initialWidth: width,
      initialHeight: height,
      fitView,
      initialFitViewOptions: fitViewOptions,
      initialMinZoom: minZoom,
      initialMaxZoom: maxZoom,
      nodeOrigin,
      nodeExtent,
      zIndexMode,
      children: children2,
    });
  }
  var wrapperStyle = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
  };
  function ReactFlow(
    {
      nodes,
      edges,
      defaultNodes,
      defaultEdges,
      className,
      nodeTypes: nodeTypes2,
      edgeTypes: edgeTypes2,
      onNodeClick,
      onEdgeClick,
      onInit,
      onMove,
      onMoveStart,
      onMoveEnd,
      onConnect,
      onConnectStart,
      onConnectEnd,
      onClickConnectStart,
      onClickConnectEnd,
      onNodeMouseEnter,
      onNodeMouseMove,
      onNodeMouseLeave,
      onNodeContextMenu,
      onNodeDoubleClick,
      onNodeDragStart,
      onNodeDrag,
      onNodeDragStop,
      onNodesDelete,
      onEdgesDelete,
      onDelete,
      onSelectionChange,
      onSelectionDragStart,
      onSelectionDrag,
      onSelectionDragStop,
      onSelectionContextMenu,
      onSelectionStart,
      onSelectionEnd,
      onBeforeDelete,
      connectionMode,
      connectionLineType = ConnectionLineType.Bezier,
      connectionLineStyle,
      connectionLineComponent,
      connectionLineContainerStyle,
      deleteKeyCode = "Backspace",
      selectionKeyCode = "Shift",
      selectionOnDrag = false,
      selectionMode = SelectionMode.Full,
      panActivationKeyCode = "Space",
      multiSelectionKeyCode = isMacOs() ? "Meta" : "Control",
      zoomActivationKeyCode = isMacOs() ? "Meta" : "Control",
      snapToGrid,
      snapGrid,
      onlyRenderVisibleElements = false,
      selectNodesOnDrag,
      nodesDraggable,
      autoPanOnNodeFocus,
      nodesConnectable,
      nodesFocusable,
      nodeOrigin = defaultNodeOrigin,
      edgesFocusable,
      edgesReconnectable,
      elementsSelectable = true,
      defaultViewport: defaultViewport$1 = defaultViewport,
      minZoom = 0.5,
      maxZoom = 2,
      translateExtent = infiniteExtent,
      preventScrolling = true,
      nodeExtent,
      defaultMarkerColor = "#b1b1b7",
      zoomOnScroll = true,
      zoomOnPinch = true,
      panOnScroll = false,
      panOnScrollSpeed = 0.5,
      panOnScrollMode = PanOnScrollMode.Free,
      zoomOnDoubleClick = true,
      panOnDrag = true,
      onPaneClick,
      onPaneMouseEnter,
      onPaneMouseMove,
      onPaneMouseLeave,
      onPaneScroll,
      onPaneContextMenu,
      paneClickDistance = 1,
      nodeClickDistance = 0,
      children: children2,
      onReconnect,
      onReconnectStart,
      onReconnectEnd,
      onEdgeContextMenu,
      onEdgeDoubleClick,
      onEdgeMouseEnter,
      onEdgeMouseMove,
      onEdgeMouseLeave,
      reconnectRadius = 10,
      onNodesChange,
      onEdgesChange,
      noDragClassName = "nodrag",
      noWheelClassName = "nowheel",
      noPanClassName = "nopan",
      fitView,
      fitViewOptions,
      connectOnClick,
      attributionPosition,
      proOptions,
      defaultEdgeOptions,
      elevateNodesOnSelect = true,
      elevateEdgesOnSelect = false,
      disableKeyboardA11y = false,
      autoPanOnConnect,
      autoPanOnNodeDrag,
      autoPanOnSelection = true,
      autoPanSpeed,
      connectionRadius,
      isValidConnection,
      onError,
      style: style2,
      id: id2,
      nodeDragThreshold,
      connectionDragThreshold,
      viewport,
      onViewportChange,
      width,
      height,
      colorMode = "light",
      debug,
      onScroll,
      ariaLabelConfig,
      zIndexMode = "basic",
      ...rest
    },
    ref,
  ) {
    const rfId = id2 || "1";
    const colorModeClassName = useColorModeClass(colorMode);
    const wrapperOnScroll = q2(
      (e3) => {
        e3.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" });
        onScroll?.(e3);
      },
      [onScroll],
    );
    return u3("div", {
      "data-testid": "rf__wrapper",
      ...rest,
      onScroll: wrapperOnScroll,
      style: { ...style2, ...wrapperStyle },
      ref,
      className: cc(["react-flow", className, colorModeClassName]),
      id: id2,
      role: "application",
      children: u3(Wrapper, {
        nodes,
        edges,
        width,
        height,
        fitView,
        fitViewOptions,
        minZoom,
        maxZoom,
        nodeOrigin,
        nodeExtent,
        zIndexMode,
        children: [
          u3(StoreUpdater, {
            nodes,
            edges,
            defaultNodes,
            defaultEdges,
            onConnect,
            onConnectStart,
            onConnectEnd,
            onClickConnectStart,
            onClickConnectEnd,
            nodesDraggable,
            autoPanOnNodeFocus,
            nodesConnectable,
            nodesFocusable,
            edgesFocusable,
            edgesReconnectable,
            elementsSelectable,
            elevateNodesOnSelect,
            elevateEdgesOnSelect,
            minZoom,
            maxZoom,
            nodeExtent,
            onNodesChange,
            onEdgesChange,
            snapToGrid,
            snapGrid,
            connectionMode,
            translateExtent,
            connectOnClick,
            defaultEdgeOptions,
            fitView,
            fitViewOptions,
            onNodesDelete,
            onEdgesDelete,
            onDelete,
            onNodeDragStart,
            onNodeDrag,
            onNodeDragStop,
            onSelectionDrag,
            onSelectionDragStart,
            onSelectionDragStop,
            onMove,
            onMoveStart,
            onMoveEnd,
            noPanClassName,
            nodeOrigin,
            rfId,
            autoPanOnConnect,
            autoPanOnNodeDrag,
            autoPanSpeed,
            onError,
            connectionRadius,
            isValidConnection,
            selectNodesOnDrag,
            nodeDragThreshold,
            connectionDragThreshold,
            onBeforeDelete,
            debug,
            ariaLabelConfig,
            zIndexMode,
          }),
          u3(GraphView, {
            onInit,
            onNodeClick,
            onEdgeClick,
            onNodeMouseEnter,
            onNodeMouseMove,
            onNodeMouseLeave,
            onNodeContextMenu,
            onNodeDoubleClick,
            nodeTypes: nodeTypes2,
            edgeTypes: edgeTypes2,
            connectionLineType,
            connectionLineStyle,
            connectionLineComponent,
            connectionLineContainerStyle,
            selectionKeyCode,
            selectionOnDrag,
            selectionMode,
            deleteKeyCode,
            multiSelectionKeyCode,
            panActivationKeyCode,
            zoomActivationKeyCode,
            onlyRenderVisibleElements,
            defaultViewport: defaultViewport$1,
            translateExtent,
            minZoom,
            maxZoom,
            preventScrolling,
            zoomOnScroll,
            zoomOnPinch,
            zoomOnDoubleClick,
            panOnScroll,
            panOnScrollSpeed,
            panOnScrollMode,
            panOnDrag,
            autoPanOnSelection,
            onPaneClick,
            onPaneMouseEnter,
            onPaneMouseMove,
            onPaneMouseLeave,
            onPaneScroll,
            onPaneContextMenu,
            paneClickDistance,
            nodeClickDistance,
            onSelectionContextMenu,
            onSelectionStart,
            onSelectionEnd,
            onReconnect,
            onReconnectStart,
            onReconnectEnd,
            onEdgeContextMenu,
            onEdgeDoubleClick,
            onEdgeMouseEnter,
            onEdgeMouseMove,
            onEdgeMouseLeave,
            reconnectRadius,
            defaultMarkerColor,
            noDragClassName,
            noWheelClassName,
            noPanClassName,
            rfId,
            disableKeyboardA11y,
            nodeExtent,
            viewport,
            onViewportChange,
          }),
          u3(SelectionListener, { onSelectionChange }),
          children2,
          u3(Attribution, { proOptions, position: attributionPosition }),
          u3(A11yDescriptions, { rfId, disableKeyboardA11y }),
        ],
      }),
    });
  }
  var index = fixedForwardRef(ReactFlow);
  var selector$6 = (s3) => s3.domNode?.querySelector(".react-flow__edgelabel-renderer");
  function EdgeLabelRenderer({ children: children2 }) {
    const edgeLabelRenderer = useStore(selector$6);
    if (!edgeLabelRenderer) {
      return null;
    }
    return $2(children2, edgeLabelRenderer);
  }
  function useNodesState(initialNodes) {
    const [nodes, setNodes] = d2(initialNodes);
    const onNodesChange = q2((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
    return [nodes, setNodes, onNodesChange];
  }
  function useEdgesState(initialEdges) {
    const [edges, setEdges] = d2(initialEdges);
    const onEdgesChange = q2((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
    return [edges, setEdges, onEdgesChange];
  }
  var error014 = errorMessages["error014"]();
  function LinePattern({ dimensions, lineWidth, variant, className }) {
    return u3("path", {
      strokeWidth: lineWidth,
      d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`,
      className: cc(["react-flow__background-pattern", variant, className]),
    });
  }
  function DotPattern({ radius, className }) {
    return u3("circle", {
      cx: radius,
      cy: radius,
      r: radius,
      className: cc(["react-flow__background-pattern", "dots", className]),
    });
  }
  var BackgroundVariant;
  (function (BackgroundVariant2) {
    BackgroundVariant2["Lines"] = "lines";
    BackgroundVariant2["Dots"] = "dots";
    BackgroundVariant2["Cross"] = "cross";
  })(BackgroundVariant || (BackgroundVariant = {}));
  var defaultSize = {
    [BackgroundVariant.Dots]: 1,
    [BackgroundVariant.Lines]: 1,
    [BackgroundVariant.Cross]: 6,
  };
  var selector$3 = (s3) => ({ transform: s3.transform, patternId: `pattern-${s3.rfId}` });
  function BackgroundComponent({
    id: id2,
    variant = BackgroundVariant.Dots,
    // only used for dots and cross
    gap = 20,
    // only used for lines and cross
    size,
    lineWidth = 1,
    offset = 0,
    color: color2,
    bgColor,
    style: style2,
    className,
    patternClassName,
  }) {
    const ref = A2(null);
    const { transform: transform2, patternId } = useStore(selector$3, shallow$1);
    const patternSize = size || defaultSize[variant];
    const isDots = variant === BackgroundVariant.Dots;
    const isCross = variant === BackgroundVariant.Cross;
    const gapXY = Array.isArray(gap) ? gap : [gap, gap];
    const scaledGap = [gapXY[0] * transform2[2] || 1, gapXY[1] * transform2[2] || 1];
    const scaledSize = patternSize * transform2[2];
    const offsetXY = Array.isArray(offset) ? offset : [offset, offset];
    const patternDimensions = isCross ? [scaledSize, scaledSize] : scaledGap;
    const scaledOffset = [
      offsetXY[0] * transform2[2] || 1 + patternDimensions[0] / 2,
      offsetXY[1] * transform2[2] || 1 + patternDimensions[1] / 2,
    ];
    const _patternId = `${patternId}${id2 ? id2 : ""}`;
    return u3("svg", {
      className: cc(["react-flow__background", className]),
      style: {
        ...style2,
        ...containerStyle,
        "--xy-background-color-props": bgColor,
        "--xy-background-pattern-color-props": color2,
      },
      ref,
      "data-testid": "rf__background",
      children: [
        u3("pattern", {
          id: _patternId,
          x: transform2[0] % scaledGap[0],
          y: transform2[1] % scaledGap[1],
          width: scaledGap[0],
          height: scaledGap[1],
          patternUnits: "userSpaceOnUse",
          patternTransform: `translate(-${scaledOffset[0]},-${scaledOffset[1]})`,
          children: isDots
            ? u3(DotPattern, { radius: scaledSize / 2, className: patternClassName })
            : u3(LinePattern, {
                dimensions: patternDimensions,
                lineWidth,
                variant,
                className: patternClassName,
              }),
        }),
        u3("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${_patternId})` }),
      ],
    });
  }
  BackgroundComponent.displayName = "Background";
  var Background = N2(BackgroundComponent);
  function PlusIcon() {
    return u3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      children: u3("path", {
        d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
      }),
    });
  }
  function MinusIcon() {
    return u3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 5",
      children: u3("path", { d: "M0 0h32v4.2H0z" }),
    });
  }
  function FitViewIcon() {
    return u3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 30",
      children: u3("path", {
        d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
      }),
    });
  }
  function LockIcon() {
    return u3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: u3("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
      }),
    });
  }
  function UnlockIcon() {
    return u3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 32",
      children: u3("path", {
        d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
      }),
    });
  }
  function ControlButton({ children: children2, className, ...rest }) {
    return u3("button", {
      type: "button",
      className: cc(["react-flow__controls-button", className]),
      ...rest,
      children: children2,
    });
  }
  var selector$2 = (s3) => ({
    isInteractive: s3.nodesDraggable || s3.nodesConnectable || s3.elementsSelectable,
    minZoomReached: s3.transform[2] <= s3.minZoom,
    maxZoomReached: s3.transform[2] >= s3.maxZoom,
    ariaLabelConfig: s3.ariaLabelConfig,
  });
  function ControlsComponent({
    style: style2,
    showZoom = true,
    showFitView = true,
    showInteractive = true,
    fitViewOptions,
    onZoomIn,
    onZoomOut,
    onFitView,
    onInteractiveChange,
    className,
    children: children2,
    position = "bottom-left",
    orientation = "vertical",
    "aria-label": ariaLabel,
  }) {
    const store = useStoreApi();
    const { isInteractive, minZoomReached, maxZoomReached, ariaLabelConfig } = useStore(
      selector$2,
      shallow$1,
    );
    const { zoomIn, zoomOut, fitView } = useReactFlow();
    const onZoomInHandler = () => {
      zoomIn();
      onZoomIn?.();
    };
    const onZoomOutHandler = () => {
      zoomOut();
      onZoomOut?.();
    };
    const onFitViewHandler = () => {
      fitView(fitViewOptions);
      onFitView?.();
    };
    const onToggleInteractivity = () => {
      store.setState({
        nodesDraggable: !isInteractive,
        nodesConnectable: !isInteractive,
        elementsSelectable: !isInteractive,
      });
      onInteractiveChange?.(!isInteractive);
    };
    const orientationClass = orientation === "horizontal" ? "horizontal" : "vertical";
    return u3(Panel, {
      className: cc(["react-flow__controls", orientationClass, className]),
      position,
      style: style2,
      "data-testid": "rf__controls",
      "aria-label": ariaLabel ?? ariaLabelConfig["controls.ariaLabel"],
      children: [
        showZoom &&
          u3(S, {
            children: [
              u3(ControlButton, {
                onClick: onZoomInHandler,
                className: "react-flow__controls-zoomin",
                title: ariaLabelConfig["controls.zoomIn.ariaLabel"],
                "aria-label": ariaLabelConfig["controls.zoomIn.ariaLabel"],
                disabled: maxZoomReached,
                children: u3(PlusIcon, {}),
              }),
              u3(ControlButton, {
                onClick: onZoomOutHandler,
                className: "react-flow__controls-zoomout",
                title: ariaLabelConfig["controls.zoomOut.ariaLabel"],
                "aria-label": ariaLabelConfig["controls.zoomOut.ariaLabel"],
                disabled: minZoomReached,
                children: u3(MinusIcon, {}),
              }),
            ],
          }),
        showFitView &&
          u3(ControlButton, {
            className: "react-flow__controls-fitview",
            onClick: onFitViewHandler,
            title: ariaLabelConfig["controls.fitView.ariaLabel"],
            "aria-label": ariaLabelConfig["controls.fitView.ariaLabel"],
            children: u3(FitViewIcon, {}),
          }),
        showInteractive &&
          u3(ControlButton, {
            className: "react-flow__controls-interactive",
            onClick: onToggleInteractivity,
            title: ariaLabelConfig["controls.interactive.ariaLabel"],
            "aria-label": ariaLabelConfig["controls.interactive.ariaLabel"],
            children: isInteractive ? u3(UnlockIcon, {}) : u3(LockIcon, {}),
          }),
        children2,
      ],
    });
  }
  ControlsComponent.displayName = "Controls";
  var Controls = N2(ControlsComponent);
  function MiniMapNodeComponent({
    id: id2,
    x: x4,
    y: y3,
    width,
    height,
    style: style2,
    color: color2,
    strokeColor,
    strokeWidth,
    className,
    borderRadius,
    shapeRendering,
    selected: selected2,
    onClick,
  }) {
    const { background, backgroundColor } = style2 || {};
    const fill = color2 || background || backgroundColor;
    return u3("rect", {
      className: cc(["react-flow__minimap-node", { selected: selected2 }, className]),
      x: x4,
      y: y3,
      rx: borderRadius,
      ry: borderRadius,
      width,
      height,
      style: {
        fill,
        stroke: strokeColor,
        strokeWidth,
      },
      shapeRendering,
      onClick: onClick ? (event) => onClick(event, id2) : void 0,
    });
  }
  var MiniMapNode = N2(MiniMapNodeComponent);
  var selectorNodeIds = (s3) => s3.nodes.map((node) => node.id);
  var getAttrFunction = (func) => (func instanceof Function ? func : () => func);
  function MiniMapNodes({
    nodeStrokeColor,
    nodeColor,
    nodeClassName = "",
    nodeBorderRadius = 5,
    nodeStrokeWidth,
    /*
     * We need to rename the prop to be `CapitalCase` so that JSX will render it as
     * a component properly.
     */
    nodeComponent: NodeComponent = MiniMapNode,
    onClick,
  }) {
    const nodeIds = useStore(selectorNodeIds, shallow$1);
    const nodeColorFunc = getAttrFunction(nodeColor);
    const nodeStrokeColorFunc = getAttrFunction(nodeStrokeColor);
    const nodeClassNameFunc = getAttrFunction(nodeClassName);
    const shapeRendering =
      typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
    return u3(S, {
      children: nodeIds.map((nodeId) =>
        /*
         * The split of responsibilities between MiniMapNodes and
         * NodeComponentWrapper may appear weird. However, it’s designed to
         * minimize the cost of updates when individual nodes change.
         *
         * For more details, see a similar commit in `NodeRenderer/index.tsx`.
         */
        u3(
          NodeComponentWrapper,
          {
            id: nodeId,
            nodeColorFunc,
            nodeStrokeColorFunc,
            nodeClassNameFunc,
            nodeBorderRadius,
            nodeStrokeWidth,
            NodeComponent,
            onClick,
            shapeRendering,
          },
          nodeId,
        ),
      ),
    });
  }
  function NodeComponentWrapperInner({
    id: id2,
    nodeColorFunc,
    nodeStrokeColorFunc,
    nodeClassNameFunc,
    nodeBorderRadius,
    nodeStrokeWidth,
    shapeRendering,
    NodeComponent,
    onClick,
  }) {
    const {
      node,
      x: x4,
      y: y3,
      width,
      height,
    } = useStore((s3) => {
      const node2 = s3.nodeLookup.get(id2);
      if (!node2) {
        return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
      }
      const userNode = node2.internals.userNode;
      const { x: x5, y: y4 } = node2.internals.positionAbsolute;
      const { width: width2, height: height2 } = getNodeDimensions(userNode);
      return {
        node: userNode,
        x: x5,
        y: y4,
        width: width2,
        height: height2,
      };
    }, shallow$1);
    if (!node || node.hidden || !nodeHasDimensions(node)) {
      return null;
    }
    return u3(NodeComponent, {
      x: x4,
      y: y3,
      width,
      height,
      style: node.style,
      selected: !!node.selected,
      className: nodeClassNameFunc(node),
      color: nodeColorFunc(node),
      borderRadius: nodeBorderRadius,
      strokeColor: nodeStrokeColorFunc(node),
      strokeWidth: nodeStrokeWidth,
      shapeRendering,
      onClick,
      id: node.id,
    });
  }
  var NodeComponentWrapper = N2(NodeComponentWrapperInner);
  var MiniMapNodes$1 = N2(MiniMapNodes);
  var defaultWidth = 200;
  var defaultHeight = 150;
  var filterHidden = (node) => !node.hidden;
  var selector$1 = (s3) => {
    const viewBB = {
      x: -s3.transform[0] / s3.transform[2],
      y: -s3.transform[1] / s3.transform[2],
      width: s3.width / s3.transform[2],
      height: s3.height / s3.transform[2],
    };
    return {
      viewBB,
      boundingRect:
        s3.nodeLookup.size > 0
          ? getBoundsOfRects(
              getInternalNodesBounds(s3.nodeLookup, { filter: filterHidden }),
              viewBB,
            )
          : viewBB,
      rfId: s3.rfId,
      panZoom: s3.panZoom,
      translateExtent: s3.translateExtent,
      flowWidth: s3.width,
      flowHeight: s3.height,
      ariaLabelConfig: s3.ariaLabelConfig,
    };
  };
  var ARIA_LABEL_KEY = "react-flow__minimap-desc";
  function MiniMapComponent({
    style: style2,
    className,
    nodeStrokeColor,
    nodeColor,
    nodeClassName = "",
    nodeBorderRadius = 5,
    nodeStrokeWidth,
    /*
     * We need to rename the prop to be `CapitalCase` so that JSX will render it as
     * a component properly.
     */
    nodeComponent,
    bgColor,
    maskColor,
    maskStrokeColor,
    maskStrokeWidth,
    position = "bottom-right",
    onClick,
    onNodeClick,
    pannable = false,
    zoomable = false,
    ariaLabel,
    inversePan,
    zoomStep = 1,
    offsetScale = 5,
  }) {
    const store = useStoreApi();
    const svg2 = A2(null);
    const {
      boundingRect,
      viewBB,
      rfId,
      panZoom,
      translateExtent,
      flowWidth,
      flowHeight,
      ariaLabelConfig,
    } = useStore(selector$1, shallow$1);
    const elementWidth = style2?.width ?? defaultWidth;
    const elementHeight = style2?.height ?? defaultHeight;
    const scaledWidth = boundingRect.width / elementWidth;
    const scaledHeight = boundingRect.height / elementHeight;
    const viewScale = Math.max(scaledWidth, scaledHeight);
    const viewWidth = viewScale * elementWidth;
    const viewHeight = viewScale * elementHeight;
    const offset = offsetScale * viewScale;
    const x4 = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset;
    const y3 = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset;
    const width = viewWidth + offset * 2;
    const height = viewHeight + offset * 2;
    const labelledBy = `${ARIA_LABEL_KEY}-${rfId}`;
    const viewScaleRef = A2(0);
    const minimapInstance = A2();
    viewScaleRef.current = viewScale;
    h2(() => {
      if (svg2.current && panZoom) {
        minimapInstance.current = XYMinimap({
          domNode: svg2.current,
          panZoom,
          getTransform: () => store.getState().transform,
          getViewScale: () => viewScaleRef.current,
        });
        return () => {
          minimapInstance.current?.destroy();
        };
      }
    }, [panZoom]);
    h2(() => {
      minimapInstance.current?.update({
        translateExtent,
        width: flowWidth,
        height: flowHeight,
        inversePan,
        pannable,
        zoomStep,
        zoomable,
      });
    }, [pannable, zoomable, inversePan, zoomStep, translateExtent, flowWidth, flowHeight]);
    const onSvgClick = onClick
      ? (event) => {
          const [x5, y4] = minimapInstance.current?.pointer(event) || [0, 0];
          onClick(event, { x: x5, y: y4 });
        }
      : void 0;
    const onSvgNodeClick = onNodeClick
      ? q2((event, nodeId) => {
          const node = store.getState().nodeLookup.get(nodeId).internals.userNode;
          onNodeClick(event, node);
        }, [])
      : void 0;
    const _ariaLabel = ariaLabel ?? ariaLabelConfig["minimap.ariaLabel"];
    return u3(Panel, {
      position,
      style: {
        ...style2,
        "--xy-minimap-background-color-props": typeof bgColor === "string" ? bgColor : void 0,
        "--xy-minimap-mask-background-color-props":
          typeof maskColor === "string" ? maskColor : void 0,
        "--xy-minimap-mask-stroke-color-props":
          typeof maskStrokeColor === "string" ? maskStrokeColor : void 0,
        "--xy-minimap-mask-stroke-width-props":
          typeof maskStrokeWidth === "number" ? maskStrokeWidth * viewScale : void 0,
        "--xy-minimap-node-background-color-props":
          typeof nodeColor === "string" ? nodeColor : void 0,
        "--xy-minimap-node-stroke-color-props":
          typeof nodeStrokeColor === "string" ? nodeStrokeColor : void 0,
        "--xy-minimap-node-stroke-width-props":
          typeof nodeStrokeWidth === "number" ? nodeStrokeWidth : void 0,
      },
      className: cc(["react-flow__minimap", className]),
      "data-testid": "rf__minimap",
      children: u3("svg", {
        width: elementWidth,
        height: elementHeight,
        viewBox: `${x4} ${y3} ${width} ${height}`,
        className: "react-flow__minimap-svg",
        role: "img",
        "aria-labelledby": labelledBy,
        ref: svg2,
        onClick: onSvgClick,
        children: [
          _ariaLabel && u3("title", { id: labelledBy, children: _ariaLabel }),
          u3(MiniMapNodes$1, {
            onClick: onSvgNodeClick,
            nodeColor,
            nodeStrokeColor,
            nodeBorderRadius,
            nodeClassName,
            nodeStrokeWidth,
            nodeComponent,
          }),
          u3("path", {
            className: "react-flow__minimap-mask",
            d: `M${x4 - offset},${y3 - offset}h${width + offset * 2}v${height + offset * 2}h${-width - offset * 2}z
        M${viewBB.x},${viewBB.y}h${viewBB.width}v${viewBB.height}h${-viewBB.width}z`,
            fillRule: "evenodd",
            pointerEvents: "none",
          }),
        ],
      }),
    });
  }
  MiniMapComponent.displayName = "MiniMap";
  var MiniMap = N2(MiniMapComponent);
  var scaleSelector = (calculateScale) => (store) =>
    calculateScale ? `${Math.max(1 / store.transform[2], 1)}` : void 0;
  var defaultPositions = {
    [ResizeControlVariant.Line]: "right",
    [ResizeControlVariant.Handle]: "bottom-right",
  };
  function ResizeControl({
    nodeId,
    position,
    variant = ResizeControlVariant.Handle,
    className,
    style: style2 = void 0,
    children: children2,
    color: color2,
    minWidth = 10,
    minHeight = 10,
    maxWidth = Number.MAX_VALUE,
    maxHeight = Number.MAX_VALUE,
    keepAspectRatio = false,
    resizeDirection,
    autoScale = true,
    shouldResize,
    onResizeStart,
    onResize,
    onResizeEnd,
  }) {
    const contextNodeId = useNodeId();
    const id2 = typeof nodeId === "string" ? nodeId : contextNodeId;
    const store = useStoreApi();
    const resizeControlRef = A2(null);
    const isHandleControl = variant === ResizeControlVariant.Handle;
    const scale = useStore(
      q2(scaleSelector(isHandleControl && autoScale), [isHandleControl, autoScale]),
      shallow$1,
    );
    const resizer = A2(null);
    const controlPosition = position ?? defaultPositions[variant];
    h2(() => {
      if (!resizeControlRef.current || !id2) {
        return;
      }
      if (!resizer.current) {
        resizer.current = XYResizer({
          domNode: resizeControlRef.current,
          nodeId: id2,
          getStoreItems: () => {
            const {
              nodeLookup,
              transform: transform2,
              snapGrid,
              snapToGrid,
              nodeOrigin,
              domNode,
            } = store.getState();
            return {
              nodeLookup,
              transform: transform2,
              snapGrid,
              snapToGrid,
              nodeOrigin,
              paneDomNode: domNode,
            };
          },
          onChange: (change, childChanges) => {
            const { triggerNodeChanges, nodeLookup, parentLookup, nodeOrigin } = store.getState();
            const changes = [];
            const nextPosition = { x: change.x, y: change.y };
            const node = nodeLookup.get(id2);
            if (node && node.expandParent && node.parentId) {
              const origin = node.origin ?? nodeOrigin;
              const width = change.width ?? node.measured.width ?? 0;
              const height = change.height ?? node.measured.height ?? 0;
              const child = {
                id: node.id,
                parentId: node.parentId,
                rect: {
                  width,
                  height,
                  ...evaluateAbsolutePosition(
                    {
                      x: change.x ?? node.position.x,
                      y: change.y ?? node.position.y,
                    },
                    { width, height },
                    node.parentId,
                    nodeLookup,
                    origin,
                  ),
                },
              };
              const parentExpandChanges = handleExpandParent(
                [child],
                nodeLookup,
                parentLookup,
                nodeOrigin,
              );
              changes.push(...parentExpandChanges);
              nextPosition.x = change.x ? Math.max(origin[0] * width, change.x) : void 0;
              nextPosition.y = change.y ? Math.max(origin[1] * height, change.y) : void 0;
            }
            if (nextPosition.x !== void 0 && nextPosition.y !== void 0) {
              const positionChange = {
                id: id2,
                type: "position",
                position: { ...nextPosition },
              };
              changes.push(positionChange);
            }
            if (change.width !== void 0 && change.height !== void 0) {
              const setAttributes = !resizeDirection
                ? true
                : resizeDirection === "horizontal"
                  ? "width"
                  : "height";
              const dimensionChange = {
                id: id2,
                type: "dimensions",
                resizing: true,
                setAttributes,
                dimensions: {
                  width: change.width,
                  height: change.height,
                },
              };
              changes.push(dimensionChange);
            }
            for (const childChange of childChanges) {
              const positionChange = {
                ...childChange,
                type: "position",
              };
              changes.push(positionChange);
            }
            triggerNodeChanges(changes);
          },
          onEnd: ({ width, height }) => {
            const dimensionChange = {
              id: id2,
              type: "dimensions",
              resizing: false,
              dimensions: {
                width,
                height,
              },
            };
            store.getState().triggerNodeChanges([dimensionChange]);
          },
        });
      }
      resizer.current.update({
        controlPosition,
        boundaries: {
          minWidth,
          minHeight,
          maxWidth,
          maxHeight,
        },
        keepAspectRatio,
        resizeDirection,
        onResizeStart,
        onResize,
        onResizeEnd,
        shouldResize,
      });
      return () => {
        resizer.current?.destroy();
      };
    }, [
      controlPosition,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      keepAspectRatio,
      onResizeStart,
      onResize,
      onResizeEnd,
      shouldResize,
    ]);
    const positionClassNames = controlPosition.split("-");
    return u3("div", {
      className: cc([
        "react-flow__resize-control",
        "nodrag",
        ...positionClassNames,
        variant,
        className,
      ]),
      ref: resizeControlRef,
      style: {
        ...style2,
        scale,
        ...(color2 && { [isHandleControl ? "backgroundColor" : "borderColor"]: color2 }),
      },
      children: children2,
    });
  }
  var NodeResizeControl = N2(ResizeControl);
  function NodeResizer({
    nodeId,
    isVisible = true,
    handleClassName,
    handleStyle,
    lineClassName,
    lineStyle,
    color: color2,
    minWidth = 10,
    minHeight = 10,
    maxWidth = Number.MAX_VALUE,
    maxHeight = Number.MAX_VALUE,
    keepAspectRatio = false,
    autoScale = true,
    shouldResize,
    onResizeStart,
    onResize,
    onResizeEnd,
  }) {
    if (!isVisible) {
      return null;
    }
    return u3(S, {
      children: [
        XY_RESIZER_LINE_POSITIONS.map((position) =>
          u3(
            NodeResizeControl,
            {
              className: lineClassName,
              style: lineStyle,
              nodeId,
              position,
              variant: ResizeControlVariant.Line,
              color: color2,
              minWidth,
              minHeight,
              maxWidth,
              maxHeight,
              onResizeStart,
              keepAspectRatio,
              autoScale,
              shouldResize,
              onResize,
              onResizeEnd,
            },
            position,
          ),
        ),
        XY_RESIZER_HANDLE_POSITIONS.map((position) =>
          u3(
            NodeResizeControl,
            {
              className: handleClassName,
              style: handleStyle,
              nodeId,
              position,
              color: color2,
              minWidth,
              minHeight,
              maxWidth,
              maxHeight,
              onResizeStart,
              keepAspectRatio,
              autoScale,
              shouldResize,
              onResize,
              onResizeEnd,
            },
            position,
          ),
        ),
      ],
    });
  }

  // src/widget-app/fitGeometry.ts
  var FINDER_W = 308;
  var FINDER_MAX_VW = 62;
  var FINDER_BORDER = 2;
  var PANEL_MARGIN = 15;
  var FINDER_GAP = 14;
  var STACK_W = 600;
  var TOOLBAR_STACK = 58;
  var FIT_PAD = 0.2;
  var MAX_LEFT_SHARE = 0.34;
  function finderWidth(windowW) {
    if (windowW <= STACK_W) return windowW - PANEL_MARGIN * 2;
    return Math.min(FINDER_W, (windowW * FINDER_MAX_VW) / 100) + FINDER_BORDER;
  }
  function finderRightEdge(windowW) {
    return PANEL_MARGIN + finderWidth(windowW);
  }
  function finderReservation(windowW) {
    return finderRightEdge(windowW) + FINDER_GAP;
  }
  function finderCrowdsCanvas(canvasW, windowW) {
    return finderReservation(windowW) > canvasW * MAX_LEFT_SHARE;
  }
  function fitLeftPad(canvasW, windowW) {
    return Math.round(Math.min(finderReservation(windowW), canvasW * MAX_LEFT_SHARE));
  }
  function fitPadding(canvasW, windowW, hasFinder) {
    if (!hasFinder) return FIT_PAD;
    return {
      top: FIT_PAD,
      right: FIT_PAD,
      bottom: FIT_PAD,
      left: `${fitLeftPad(canvasW, windowW)}px`,
    };
  }

  // src/widget-app/rewire.ts
  function rewireKey(grouping, edgeId) {
    return grouping + ":" + edgeId;
  }
  function effectiveEnds(edge, rw) {
    return (
      rw ?? {
        source: edge.source,
        target: edge.target,
        sourceSide: edge.sourceSide,
        targetSide: edge.targetSide,
      }
    );
  }
  var SIDE_RE = /^[st]-([LRTB])$/;
  function rewireFromConnection(conn) {
    const s3 = SIDE_RE.exec(conn.sourceHandle ?? "");
    const t3 = SIDE_RE.exec(conn.targetHandle ?? "");
    if (!conn.source || !conn.target || !s3 || !t3) return null;
    if (conn.source === conn.target) return null;
    return { source: conn.source, target: conn.target, sourceSide: s3[1], targetSide: t3[1] };
  }
  function sameEnds(a3, b3) {
    return (
      a3.source === b3.source &&
      a3.target === b3.target &&
      a3.sourceSide === b3.sourceSide &&
      a3.targetSide === b3.targetSide
    );
  }

  // node_modules/html-to-image/es/util.js
  function resolveUrl(url, baseUrl) {
    if (url.match(/^[a-z]+:\/\//i)) {
      return url;
    }
    if (url.match(/^\/\//)) {
      return window.location.protocol + url;
    }
    if (url.match(/^[a-z]+:/i)) {
      return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement("base");
    const a3 = doc.createElement("a");
    doc.head.appendChild(base);
    doc.body.appendChild(a3);
    if (baseUrl) {
      base.href = baseUrl;
    }
    a3.href = url;
    return a3.href;
  }
  var uuid = /* @__PURE__ */ (() => {
    let counter = 0;
    const random = () =>
      // eslint-disable-next-line no-bitwise
      `0000${((Math.random() * 36 ** 4) << 0).toString(36)}`.slice(-4);
    return () => {
      counter += 1;
      return `u${random()}${counter}`;
    };
  })();
  function toArray(arrayLike) {
    const arr = [];
    for (let i4 = 0, l3 = arrayLike.length; i4 < l3; i4++) {
      arr.push(arrayLike[i4]);
    }
    return arr;
  }
  var styleProps = null;
  function getStyleProperties(options = {}) {
    if (styleProps) {
      return styleProps;
    }
    if (options.includeStyleProperties) {
      styleProps = options.includeStyleProperties;
      return styleProps;
    }
    styleProps = toArray(window.getComputedStyle(document.documentElement));
    return styleProps;
  }
  function px(node, styleProperty) {
    const win2 = node.ownerDocument.defaultView || window;
    const val = win2.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace("px", "")) : 0;
  }
  function getNodeWidth(node) {
    const leftBorder = px(node, "border-left-width");
    const rightBorder = px(node, "border-right-width");
    return node.clientWidth + leftBorder + rightBorder;
  }
  function getNodeHeight(node) {
    const topBorder = px(node, "border-top-width");
    const bottomBorder = px(node, "border-bottom-width");
    return node.clientHeight + topBorder + bottomBorder;
  }
  function getImageSize(targetNode, options = {}) {
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return { width, height };
  }
  function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
      FINAL_PROCESS = process;
    } catch (e3) {}
    const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
    if (val) {
      ratio = parseInt(val, 10);
      if (Number.isNaN(ratio)) {
        ratio = 1;
      }
    }
    return ratio || window.devicePixelRatio || 1;
  }
  var canvasDimensionLimit = 16384;
  function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
      if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvas.height) {
          canvas.height *= canvasDimensionLimit / canvas.width;
          canvas.width = canvasDimensionLimit;
        } else {
          canvas.width *= canvasDimensionLimit / canvas.height;
          canvas.height = canvasDimensionLimit;
        }
      } else if (canvas.width > canvasDimensionLimit) {
        canvas.height *= canvasDimensionLimit / canvas.width;
        canvas.width = canvasDimensionLimit;
      } else {
        canvas.width *= canvasDimensionLimit / canvas.height;
        canvas.height = canvasDimensionLimit;
      }
    }
  }
  function createImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        img.decode().then(() => {
          requestAnimationFrame(() => resolve(img));
        });
      };
      img.onerror = reject;
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = url;
    });
  }
  async function svgToDataURL(svg2) {
    return Promise.resolve()
      .then(() => new XMLSerializer().serializeToString(svg2))
      .then(encodeURIComponent)
      .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
  }
  async function nodeToDataURL(node, width, height) {
    const xmlns = "http://www.w3.org/2000/svg";
    const svg2 = document.createElementNS(xmlns, "svg");
    const foreignObject = document.createElementNS(xmlns, "foreignObject");
    svg2.setAttribute("width", `${width}`);
    svg2.setAttribute("height", `${height}`);
    svg2.setAttribute("viewBox", `0 0 ${width} ${height}`);
    foreignObject.setAttribute("width", "100%");
    foreignObject.setAttribute("height", "100%");
    foreignObject.setAttribute("x", "0");
    foreignObject.setAttribute("y", "0");
    foreignObject.setAttribute("externalResourcesRequired", "true");
    svg2.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg2);
  }
  var isInstanceOfElement = (node, instance) => {
    if (node instanceof instance) return true;
    const nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null) return false;
    return (
      nodePrototype.constructor.name === instance.name ||
      isInstanceOfElement(nodePrototype, instance)
    );
  };

  // node_modules/html-to-image/es/clone-pseudos.js
  function formatCSSText(style2) {
    const content = style2.getPropertyValue("content");
    return `${style2.cssText} content: '${content.replace(/'|"/g, "")}';`;
  }
  function formatCSSProperties(style2, options) {
    return getStyleProperties(options)
      .map((name) => {
        const value = style2.getPropertyValue(name);
        const priority = style2.getPropertyPriority(name);
        return `${name}: ${value}${priority ? " !important" : ""};`;
      })
      .join(" ");
  }
  function getPseudoElementStyle(className, pseudo, style2, options) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style2.cssText ? formatCSSText(style2) : formatCSSProperties(style2, options);
    return document.createTextNode(`${selector}{${cssText}}`);
  }
  function clonePseudoElement(nativeNode, clonedNode, pseudo, options) {
    const style2 = window.getComputedStyle(nativeNode, pseudo);
    const content = style2.getPropertyValue("content");
    if (content === "" || content === "none") {
      return;
    }
    const className = uuid();
    try {
      clonedNode.className = `${clonedNode.className} ${className}`;
    } catch (err) {
      return;
    }
    const styleElement = document.createElement("style");
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style2, options));
    clonedNode.appendChild(styleElement);
  }
  function clonePseudoElements(nativeNode, clonedNode, options) {
    clonePseudoElement(nativeNode, clonedNode, ":before", options);
    clonePseudoElement(nativeNode, clonedNode, ":after", options);
  }

  // node_modules/html-to-image/es/mimes.js
  var WOFF = "application/font-woff";
  var JPEG = "image/jpeg";
  var mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: JPEG,
    jpeg: JPEG,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp",
  };
  function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : "";
  }
  function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || "";
  }

  // node_modules/html-to-image/es/dataurl.js
  function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
  }
  function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
  }
  function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
  }
  async function fetchAsDataURL(url, init2, process2) {
    const res = await fetch(url, init2);
    if (res.status === 404) {
      throw new Error(`Resource "${res.url}" not found`);
    }
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onloadend = () => {
        try {
          resolve(process2({ res, result: reader.result }));
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsDataURL(blob);
    });
  }
  var cache = {};
  function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, "");
    if (includeQueryParams) {
      key = url;
    }
    if (/ttf|otf|eot|woff2?/i.test(key)) {
      key = key.replace(/.*\//, "");
    }
    return contentType ? `[${contentType}]${key}` : key;
  }
  async function resourceToDataURL(resourceUrl, contentType, options) {
    const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
    if (cache[cacheKey] != null) {
      return cache[cacheKey];
    }
    if (options.cacheBust) {
      resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + /* @__PURE__ */ new Date().getTime();
    }
    let dataURL;
    try {
      const content = await fetchAsDataURL(
        resourceUrl,
        options.fetchRequestInit,
        ({ res, result }) => {
          if (!contentType) {
            contentType = res.headers.get("Content-Type") || "";
          }
          return getContentFromDataUrl(result);
        },
      );
      dataURL = makeDataUrl(content, contentType);
    } catch (error) {
      dataURL = options.imagePlaceholder || "";
      let msg = `Failed to fetch resource: ${resourceUrl}`;
      if (error) {
        msg = typeof error === "string" ? error : error.message;
      }
      if (msg) {
        console.warn(msg);
      }
    }
    cache[cacheKey] = dataURL;
    return dataURL;
  }

  // node_modules/html-to-image/es/clone-node.js
  async function cloneCanvasElement(canvas) {
    const dataURL = canvas.toDataURL();
    if (dataURL === "data:,") {
      return canvas.cloneNode(false);
    }
    return createImage(dataURL);
  }
  async function cloneVideoElement(video, options) {
    if (video.currentSrc) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx === null || ctx === void 0
        ? void 0
        : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL2 = canvas.toDataURL();
      return createImage(dataURL2);
    }
    const poster = video.poster;
    const contentType = getMimeType(poster);
    const dataURL = await resourceToDataURL(poster, contentType, options);
    return createImage(dataURL);
  }
  async function cloneIFrameElement(iframe, options) {
    var _a;
    try {
      if (
        (_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null ||
        _a === void 0
          ? void 0
          : _a.body
      ) {
        return await cloneNode(iframe.contentDocument.body, options, true);
      }
    } catch (_b) {}
    return iframe.cloneNode(false);
  }
  async function cloneSingleNode(node, options) {
    if (isInstanceOfElement(node, HTMLCanvasElement)) {
      return cloneCanvasElement(node);
    }
    if (isInstanceOfElement(node, HTMLVideoElement)) {
      return cloneVideoElement(node, options);
    }
    if (isInstanceOfElement(node, HTMLIFrameElement)) {
      return cloneIFrameElement(node, options);
    }
    return node.cloneNode(isSVGElement(node));
  }
  var isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
  var isSVGElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SVG";
  async function cloneChildren(nativeNode, clonedNode, options) {
    var _a, _b;
    if (isSVGElement(clonedNode)) {
      return clonedNode;
    }
    let children2 = [];
    if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
      children2 = toArray(nativeNode.assignedNodes());
    } else if (
      isInstanceOfElement(nativeNode, HTMLIFrameElement) &&
      ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)
    ) {
      children2 = toArray(nativeNode.contentDocument.body.childNodes);
    } else {
      children2 = toArray(
        ((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes,
      );
    }
    if (children2.length === 0 || isInstanceOfElement(nativeNode, HTMLVideoElement)) {
      return clonedNode;
    }
    await children2.reduce(
      (deferred, child) =>
        deferred
          .then(() => cloneNode(child, options))
          .then((clonedChild) => {
            if (clonedChild) {
              clonedNode.appendChild(clonedChild);
            }
          }),
      Promise.resolve(),
    );
    return clonedNode;
  }
  function cloneCSSStyle(nativeNode, clonedNode, options) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) {
      return;
    }
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
      targetStyle.cssText = sourceStyle.cssText;
      targetStyle.transformOrigin = sourceStyle.transformOrigin;
    } else {
      getStyleProperties(options).forEach((name) => {
        let value = sourceStyle.getPropertyValue(name);
        if (name === "font-size" && value.endsWith("px")) {
          const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
          value = `${reducedFont}px`;
        }
        if (
          isInstanceOfElement(nativeNode, HTMLIFrameElement) &&
          name === "display" &&
          value === "inline"
        ) {
          value = "block";
        }
        if (name === "d" && clonedNode.getAttribute("d")) {
          value = `path(${clonedNode.getAttribute("d")})`;
        }
        targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
      });
    }
  }
  function cloneInputValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) {
      clonedNode.innerHTML = nativeNode.value;
    }
    if (isInstanceOfElement(nativeNode, HTMLInputElement)) {
      clonedNode.setAttribute("value", nativeNode.value);
    }
  }
  function cloneSelectValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
      const clonedSelect = clonedNode;
      const selectedOption = Array.from(clonedSelect.children).find(
        (child) => nativeNode.value === child.getAttribute("value"),
      );
      if (selectedOption) {
        selectedOption.setAttribute("selected", "");
      }
    }
  }
  function decorate(nativeNode, clonedNode, options) {
    if (isInstanceOfElement(clonedNode, Element)) {
      cloneCSSStyle(nativeNode, clonedNode, options);
      clonePseudoElements(nativeNode, clonedNode, options);
      cloneInputValue(nativeNode, clonedNode);
      cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
  }
  async function ensureSVGSymbols(clone, options) {
    const uses = clone.querySelectorAll ? clone.querySelectorAll("use") : [];
    if (uses.length === 0) {
      return clone;
    }
    const processedDefs = {};
    for (let i4 = 0; i4 < uses.length; i4++) {
      const use = uses[i4];
      const id2 = use.getAttribute("xlink:href");
      if (id2) {
        const exist = clone.querySelector(id2);
        const definition = document.querySelector(id2);
        if (!exist && definition && !processedDefs[id2]) {
          processedDefs[id2] = await cloneNode(definition, options, true);
        }
      }
    }
    const nodes = Object.values(processedDefs);
    if (nodes.length) {
      const ns = "http://www.w3.org/1999/xhtml";
      const svg2 = document.createElementNS(ns, "svg");
      svg2.setAttribute("xmlns", ns);
      svg2.style.position = "absolute";
      svg2.style.width = "0";
      svg2.style.height = "0";
      svg2.style.overflow = "hidden";
      svg2.style.display = "none";
      const defs = document.createElementNS(ns, "defs");
      svg2.appendChild(defs);
      for (let i4 = 0; i4 < nodes.length; i4++) {
        defs.appendChild(nodes[i4]);
      }
      clone.appendChild(svg2);
    }
    return clone;
  }
  async function cloneNode(node, options, isRoot) {
    if (!isRoot && options.filter && !options.filter(node)) {
      return null;
    }
    return Promise.resolve(node)
      .then((clonedNode) => cloneSingleNode(clonedNode, options))
      .then((clonedNode) => cloneChildren(node, clonedNode, options))
      .then((clonedNode) => decorate(node, clonedNode, options))
      .then((clonedNode) => ensureSVGSymbols(clonedNode, options));
  }

  // node_modules/html-to-image/es/embed-resources.js
  var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
  var URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
  var FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  function toRegex(url) {
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
  }
  function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url) => {
      urls.push(url);
      return raw;
    });
    return urls.filter((url) => !isDataUrl(url));
  }
  async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    try {
      const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
      const contentType = getMimeType(resourceURL);
      let dataURL;
      if (getContentFromUrl) {
        const content = await getContentFromUrl(resolvedURL);
        dataURL = makeDataUrl(content, contentType);
      } else {
        dataURL = await resourceToDataURL(resolvedURL, contentType, options);
      }
      return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
    } catch (error) {}
    return cssText;
  }
  function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat
      ? str
      : str.replace(FONT_SRC_REGEX, (match) => {
          while (true) {
            const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
            if (!format) {
              return "";
            }
            if (format === preferredFontFormat) {
              return `src: ${src};`;
            }
          }
        });
  }
  function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
  }
  async function embedResources(cssText, baseUrl, options) {
    if (!shouldEmbed(cssText)) {
      return cssText;
    }
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    const urls = parseURLs(filteredCSSText);
    return urls.reduce(
      (deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)),
      Promise.resolve(filteredCSSText),
    );
  }

  // node_modules/html-to-image/es/embed-images.js
  async function embedProp(propName, node, options) {
    var _a;
    const propValue =
      (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
    if (propValue) {
      const cssString = await embedResources(propValue, null, options);
      node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
      return true;
    }
    return false;
  }
  async function embedBackground(clonedNode, options) {
    (await embedProp("background", clonedNode, options)) ||
      (await embedProp("background-image", clonedNode, options));
    (await embedProp("mask", clonedNode, options)) ||
      (await embedProp("-webkit-mask", clonedNode, options)) ||
      (await embedProp("mask-image", clonedNode, options)) ||
      (await embedProp("-webkit-mask-image", clonedNode, options));
  }
  async function embedImageNode(clonedNode, options) {
    const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
    if (
      !(isImageElement && !isDataUrl(clonedNode.src)) &&
      !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))
    ) {
      return;
    }
    const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
    const dataURL = await resourceToDataURL(url, getMimeType(url), options);
    await new Promise((resolve, reject) => {
      clonedNode.onload = resolve;
      clonedNode.onerror = options.onImageErrorHandler
        ? (...attributes) => {
            try {
              resolve(options.onImageErrorHandler(...attributes));
            } catch (error) {
              reject(error);
            }
          }
        : reject;
      const image = clonedNode;
      if (image.decode) {
        image.decode = resolve;
      }
      if (image.loading === "lazy") {
        image.loading = "eager";
      }
      if (isImageElement) {
        clonedNode.srcset = "";
        clonedNode.src = dataURL;
      } else {
        clonedNode.href.baseVal = dataURL;
      }
    });
  }
  async function embedChildren(clonedNode, options) {
    const children2 = toArray(clonedNode.childNodes);
    const deferreds = children2.map((child) => embedImages(child, options));
    await Promise.all(deferreds).then(() => clonedNode);
  }
  async function embedImages(clonedNode, options) {
    if (isInstanceOfElement(clonedNode, Element)) {
      await embedBackground(clonedNode, options);
      await embedImageNode(clonedNode, options);
      await embedChildren(clonedNode, options);
    }
  }

  // node_modules/html-to-image/es/apply-style.js
  function applyStyle(node, options) {
    const { style: style2 } = node;
    if (options.backgroundColor) {
      style2.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
      style2.width = `${options.width}px`;
    }
    if (options.height) {
      style2.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
      Object.keys(manual).forEach((key) => {
        style2[key] = manual[key];
      });
    }
    return node;
  }

  // node_modules/html-to-image/es/embed-webfonts.js
  var cssFetchCache = {};
  async function fetchCSS(url) {
    let cache2 = cssFetchCache[url];
    if (cache2 != null) {
      return cache2;
    }
    const res = await fetch(url);
    const cssText = await res.text();
    cache2 = { url, cssText };
    cssFetchCache[url] = cache2;
    return cache2;
  }
  async function embedFonts(data, options) {
    let cssText = data.cssText;
    const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
    const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
    const loadFonts = fontLocs.map(async (loc) => {
      let url = loc.replace(regexUrl, "$1");
      if (!url.startsWith("https://")) {
        url = new URL(url, data.url).href;
      }
      return fetchAsDataURL(url, options.fetchRequestInit, ({ result }) => {
        cssText = cssText.replace(loc, `url(${result})`);
        return [loc, result];
      });
    });
    return Promise.all(loadFonts).then(() => cssText);
  }
  function parseCSS(source) {
    if (source == null) {
      return [];
    }
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    let cssText = source.replace(commentsRegex, "");
    const keyframesRegex = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    while (true) {
      const matches = keyframesRegex.exec(cssText);
      if (matches === null) {
        break;
      }
      result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, "");
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    const combinedCSSRegex =
      "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})";
    const unifiedRegex = new RegExp(combinedCSSRegex, "gi");
    while (true) {
      let matches = importRegex.exec(cssText);
      if (matches === null) {
        matches = unifiedRegex.exec(cssText);
        if (matches === null) {
          break;
        } else {
          importRegex.lastIndex = unifiedRegex.lastIndex;
        }
      } else {
        unifiedRegex.lastIndex = importRegex.lastIndex;
      }
      result.push(matches[0]);
    }
    return result;
  }
  async function getCSSRules(styleSheets, options) {
    const ret = [];
    const deferreds = [];
    styleSheets.forEach((sheet) => {
      if ("cssRules" in sheet) {
        try {
          toArray(sheet.cssRules || []).forEach((item, index2) => {
            if (item.type === CSSRule.IMPORT_RULE) {
              let importIndex = index2 + 1;
              const url = item.href;
              const deferred = fetchCSS(url)
                .then((metadata) => embedFonts(metadata, options))
                .then((cssText) =>
                  parseCSS(cssText).forEach((rule) => {
                    try {
                      sheet.insertRule(
                        rule,
                        rule.startsWith("@import") ? (importIndex += 1) : sheet.cssRules.length,
                      );
                    } catch (error) {
                      console.error("Error inserting rule from remote css", {
                        rule,
                        error,
                      });
                    }
                  }),
                )
                .catch((e3) => {
                  console.error("Error loading remote css", e3.toString());
                });
              deferreds.push(deferred);
            }
          });
        } catch (e3) {
          const inline = styleSheets.find((a3) => a3.href == null) || document.styleSheets[0];
          if (sheet.href != null) {
            deferreds.push(
              fetchCSS(sheet.href)
                .then((metadata) => embedFonts(metadata, options))
                .then((cssText) =>
                  parseCSS(cssText).forEach((rule) => {
                    inline.insertRule(rule, inline.cssRules.length);
                  }),
                )
                .catch((err) => {
                  console.error("Error loading remote stylesheet", err);
                }),
            );
          }
          console.error("Error inlining remote css file", e3);
        }
      }
    });
    return Promise.all(deferreds).then(() => {
      styleSheets.forEach((sheet) => {
        if ("cssRules" in sheet) {
          try {
            toArray(sheet.cssRules || []).forEach((item) => {
              ret.push(item);
            });
          } catch (e3) {
            console.error(`Error while reading CSS rules from ${sheet.href}`, e3);
          }
        }
      });
      return ret;
    });
  }
  function getWebFontRules(cssRules) {
    return cssRules
      .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
      .filter((rule) => shouldEmbed(rule.style.getPropertyValue("src")));
  }
  async function parseWebFontRules(node, options) {
    if (node.ownerDocument == null) {
      throw new Error("Provided element is not within a Document");
    }
    const styleSheets = toArray(node.ownerDocument.styleSheets);
    const cssRules = await getCSSRules(styleSheets, options);
    return getWebFontRules(cssRules);
  }
  function normalizeFontFamily(font) {
    return font.trim().replace(/["']/g, "");
  }
  function getUsedFonts(node) {
    const fonts = /* @__PURE__ */ new Set();
    function traverse(node2) {
      const fontFamily = node2.style.fontFamily || getComputedStyle(node2).fontFamily;
      fontFamily.split(",").forEach((font) => {
        fonts.add(normalizeFontFamily(font));
      });
      Array.from(node2.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          traverse(child);
        }
      });
    }
    traverse(node);
    return fonts;
  }
  async function getWebFontCSS(node, options) {
    const rules = await parseWebFontRules(node, options);
    const usedFonts = getUsedFonts(node);
    const cssTexts = await Promise.all(
      rules
        .filter((rule) => usedFonts.has(normalizeFontFamily(rule.style.fontFamily)))
        .map((rule) => {
          const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
          return embedResources(rule.cssText, baseUrl, options);
        }),
    );
    return cssTexts.join("\n");
  }
  async function embedWebFonts(clonedNode, options) {
    const cssText =
      options.fontEmbedCSS != null
        ? options.fontEmbedCSS
        : options.skipFonts
          ? null
          : await getWebFontCSS(clonedNode, options);
    if (cssText) {
      const styleNode = document.createElement("style");
      const sytleContent = document.createTextNode(cssText);
      styleNode.appendChild(sytleContent);
      if (clonedNode.firstChild) {
        clonedNode.insertBefore(styleNode, clonedNode.firstChild);
      } else {
        clonedNode.appendChild(styleNode);
      }
    }
  }

