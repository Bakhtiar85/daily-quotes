"use client";

import { useEffect } from "react";

interface AdUnit {
  id: string;
  scriptSrc?: string;
  inlineScript?: string;
  containerId?: string;
  async?: boolean;
  defer?: boolean;
  attrs?: Record<string, string>;
}

const adUnits: AdUnit[] = [
  {
    id: "popunder",
    scriptSrc: "https://pl29415993.profitablecpmratenetwork.com/55/a2/b0/55a2b0f582ea2723947312b36e755bb5.js",
  },
  {
    id: "native-banner",
    scriptSrc: "https://pl29415994.profitablecpmratenetwork.com/a9cf82c648cdb581dd0808f54d243690/invoke.js",
    async: true,
    attrs: { "data-cfasync": "false" },
    containerId: "container-a9cf82c648cdb581dd0808f54d243690",
  },
  {
    id: "social-bar",
    scriptSrc: "https://pl29415996.profitablecpmratenetwork.com/10/f6/5c/10f65c5350d3acc377a22422ead15eaa.js",
  },
  {
    id: "banner-468x60",
    inlineScript: `atOptions = {
      'key' : 'ac0dea131f046f5aae356507d60ec891',
      'format' : 'iframe',
      'height' : 60,
      'width' : 468,
      'params' : {}
    };`,
    scriptSrc: "https://www.highperformanceformat.com/ac0dea131f046f5aae356507d60ec891/invoke.js",
    containerId: "ad-468x60",
  },
  {
    id: "banner-300x250",
    inlineScript: `atOptions = {
      'key' : 'fccda9411e282cdac0055dac9640b543',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };`,
    scriptSrc: "https://www.highperformanceformat.com/fccda9411e282cdac0055dac9640b543/invoke.js",
    containerId: "ad-300x250",
  },
  {
    id: "banner-160x600",
    inlineScript: `atOptions = {
      'key' : '3f0b0068d1616ac6043c68ccc9307d5c',
      'format' : 'iframe',
      'height' : 600,
      'width' : 160,
      'params' : {}
    };`,
    scriptSrc: "https://www.highperformanceformat.com/3f0b0068d1616ac6043c68ccc9307d5c/invoke.js",
    containerId: "ad-160x600",
  },
  {
    id: "banner-160x300",
    inlineScript: `atOptions = {
      'key' : '980d71902ad828adacc8402b3f0f2603',
      'format' : 'iframe',
      'height' : 300,
      'width' : 160,
      'params' : {}
    };`,
    scriptSrc: "https://www.highperformanceformat.com/980d71902ad828adacc8402b3f0f2603/invoke.js",
    containerId: "ad-160x300",
  },
  {
    id: "banner-320x50",
    inlineScript: `atOptions = {
      'key' : '954d0a2f8bc45010bd4cc8988a3a31f3',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };`,
    scriptSrc: "https://www.highperformanceformat.com/954d0a2f8bc45010bd4cc8988a3a31f3/invoke.js",
    containerId: "ad-320x50",
  },
  {
    id: "banner-728x90",
    inlineScript: `atOptions = {
      'key' : '269fc229db033df18121fe9f91acfcde',
      'format' : 'iframe',
      'height' : 90,
      'width' : 728,
      'params' : {}
    };`,
    scriptSrc: "https://www.highperformanceformat.com/269fc229db033df18121fe9f91acfcde/invoke.js",
    containerId: "ad-728x90",
  },
];

const smartlinkUrl = "https://www.profitablecpmratenetwork.com/r575wyid?key=a4dad990dd4392d0e5772752fd35bbf4";

function appendScript(script: HTMLScriptElement, container: HTMLElement) {
  if (script.getAttribute("data-loaded") === "true") return;
  container.appendChild(script);
  script.setAttribute("data-loaded", "true");
}

export default function AdsterraAd() {
  useEffect(() => {
    adUnits.forEach((unit) => {
      const container = unit.containerId
        ? document.getElementById(unit.containerId) || document.body
        : document.body;

      if (!container) return;

      if (unit.inlineScript) {
        const inline = document.createElement("script");
        inline.type = "text/javascript";
        inline.text = unit.inlineScript;
        appendScript(inline, container);
      }

      if (unit.scriptSrc) {
        const script = document.createElement("script");
        script.src = unit.scriptSrc;
        script.async = unit.async ?? true;
        if (unit.defer) script.defer = true;
        if (unit.attrs) {
          Object.entries(unit.attrs).forEach(([name, value]) => {
            script.setAttribute(name, value);
          });
        }
        appendScript(script, container);
      }
    });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sponsored Content</h2>
          <p className="text-gray-500">These ad units are loaded directly from the provided ad scripts.</p>
        </div>

        <div className="space-y-6">
          <div id="container-a9cf82c648cdb581dd0808f54d243690" className="mx-auto"></div>
          <div id="ad-468x60" className="mx-auto" style={{ width: 468, height: 60 }} />
          <div id="ad-300x250" className="mx-auto" style={{ width: 300, height: 250 }} />
          <div id="ad-160x600" className="mx-auto" style={{ width: 160, height: 600 }} />
          <div id="ad-160x300" className="mx-auto" style={{ width: 160, height: 300 }} />
          <div id="ad-320x50" className="mx-auto" style={{ width: 320, height: 50 }} />
          <div id="ad-728x90" className="mx-auto" style={{ width: 728, height: 90 }} />
          <div className="flex justify-center">
            <a
              href={smartlinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
            >
              Visit Smartlink Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
