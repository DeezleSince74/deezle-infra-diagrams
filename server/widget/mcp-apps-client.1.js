/* Deezle Infra Diagrams: mcp-apps-client, part 1 of 1. The server joins the parts in order and inlines them into the widget page. Built from src/widget-app by scripts/build-server.mjs. */
"use strict";
(() => {
  // src/widget-app/appClient.ts
  var PROTOCOL_VERSION = "2026-01-26";
  var ParentWindowTransport = class {
    constructor() {
      this.listener = (event) => {
        if (event.source !== window.parent) return;
        const data = event.data;
        if (!data || data.jsonrpc !== "2.0") return;
        this.onmessage?.(data);
      };
    }
    async start() {
      window.addEventListener("message", this.listener);
    }
    async send(message) {
      window.parent.postMessage(message, "*");
    }
    async close() {
      window.removeEventListener("message", this.listener);
    }
  };
  var METHOD_NOT_FOUND = -32601;
  var App = class {
    constructor(appInfo, capabilities = {}, options = { autoResize: true }) {
      this.appInfo = appInfo;
      this.capabilities = capabilities;
      this.options = options;
      this.nextId = 0;
      this.pending = /* @__PURE__ */ new Map();
    }
    /** Start talking to the host: the ui/initialize handshake, then size reports. */
    async connect(transport = new ParentWindowTransport()) {
      if (this.transport) throw new Error("App is already connected.");
      this.transport = transport;
      transport.onmessage = (message) => this.receive(message);
      await transport.start();
      try {
        const result = await this.request("ui/initialize", {
          appCapabilities: this.capabilities,
          appInfo: this.appInfo,
          protocolVersion: PROTOCOL_VERSION,
        });
        if (!result) throw new Error("The host sent an empty ui/initialize result.");
        this.hostContext = result.hostContext;
        this.hostInfo = result.hostInfo;
        this.hostCapabilities = result.hostCapabilities;
        await this.notify("ui/notifications/initialized");
        if (this.options.autoResize) this.stopResizeWatch = this.watchSize();
      } catch (error) {
        await this.close();
        throw error;
      }
    }
    getHostContext() {
      return this.hostContext;
    }
    getHostVersion() {
      return this.hostInfo;
    }
    getHostCapabilities() {
      return this.hostCapabilities;
    }
    /** Tell the host how big the page is, so it can size the iframe. */
    sendSizeChanged(size) {
      return this.notify("ui/notifications/size-changed", size);
    }
    async close() {
      this.stopResizeWatch?.();
      this.stopResizeWatch = void 0;
      const transport = this.transport;
      this.transport = void 0;
      for (const { reject } of this.pending.values()) reject(new Error("Connection closed."));
      this.pending.clear();
      await transport?.close?.();
    }
    request(method, params) {
      const id = this.nextId++;
      return new Promise((resolve, reject) => {
        this.pending.set(id, { resolve, reject });
        this.send({ jsonrpc: "2.0", id, method, params }).catch((error) => {
          this.pending.delete(id);
          reject(error);
        });
      });
    }
    notify(method, params) {
      return this.send(params ? { jsonrpc: "2.0", method, params } : { jsonrpc: "2.0", method });
    }
    async send(message) {
      if (!this.transport) throw new Error("App is not connected.");
      await this.transport.send(message);
    }
    receive(message) {
      if (message.method === void 0 && message.id !== void 0) {
        const waiting = this.pending.get(message.id);
        if (!waiting) return;
        this.pending.delete(message.id);
        if (message.error)
          waiting.reject(new Error(`${message.error.message} (${message.error.code})`));
        else waiting.resolve(message.result);
        return;
      }
      if (message.method === void 0) return;
      if (message.id !== void 0) {
        if (message.method === "ping" || message.method === "ui/resource-teardown") {
          void this.send({ jsonrpc: "2.0", id: message.id, result: {} });
        } else {
          void this.send({
            jsonrpc: "2.0",
            id: message.id,
            error: { code: METHOD_NOT_FOUND, message: `Method not found: ${message.method}` },
          });
        }
        return;
      }
      if (message.method === "ui/notifications/tool-result") {
        this.ontoolresult?.(message.params ?? {});
      } else if (message.method === "ui/notifications/host-context-changed") {
        const changed = message.params ?? {};
        this.hostContext = { ...this.hostContext, ...changed };
        this.onhostcontextchanged?.(changed);
      }
    }
    /**
     * Report the page's size now and whenever it changes. The height is the content's
     * natural height: the root element is set to `max-content` just long enough to measure.
     * At most one measurement runs per animation frame.
     */
    watchSize() {
      let scheduled = false;
      let lastWidth = 0;
      let lastHeight = 0;
      const measure = () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          scheduled = false;
          const root = document.documentElement;
          const before = root.style.height;
          root.style.height = "max-content";
          const height = Math.ceil(root.getBoundingClientRect().height);
          root.style.height = before;
          const width = Math.ceil(window.innerWidth);
          if (width !== lastWidth || height !== lastHeight) {
            lastWidth = width;
            lastHeight = height;
            void this.sendSizeChanged({ width, height }).catch(() => {});
          }
        });
      };
      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(document.documentElement);
      observer.observe(document.body);
      return () => observer.disconnect();
    }
  };

  // src/widget-app/extApps.ts
  globalThis.ExtApps = { App };
})();
