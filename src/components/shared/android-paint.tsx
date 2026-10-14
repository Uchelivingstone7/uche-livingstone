"use client";

import { useEffect } from "react";

const painted = new WeakMap<HTMLElement, string>();

const selectorFor = (element: Element) => {
  const parts: string[] = [];
  let node: Element | null = element;
  while (node && node !== document.body) {
    const parent: Element | null = node.parentElement;
    if (!parent) break;
    const index = Array.prototype.indexOf.call(parent.children, node) + 1;
    parts.unshift(`${node.tagName.toLowerCase()}:nth-child(${index})`);
    node = parent;
  }
  return `body>${parts.join(">")}`;
};

const imageFor = (btn: HTMLElement, force: boolean) => {
  const label = btn.querySelector<HTMLElement>(".btn-ink");
  if (!label) return "";
  const width = btn.offsetWidth;
  const height = btn.offsetHeight;
  if (width < 2 || height < 2) return "";
  const text = (label.textContent || "").replace(/\s+/g, " ").trim();
  const font = getComputedStyle(label);
  const key = `${text}|${width}|${height}|${font.font}`;
  const cached = painted.get(btn);
  if (!force && cached?.endsWith(key)) return cached.slice(0, cached.length - key.length);
  const ratio = Math.min(window.devicePixelRatio || 1, 3);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  ctx.scale(ratio, ratio);
  ctx.beginPath();
  ctx.roundRect(0, 0, width, height, height / 2);
  ctx.fillStyle = "#f0a45a";
  ctx.fill();
  ctx.fillStyle = "#1c140c";
  ctx.font = font.font;
  if (font.letterSpacing && font.letterSpacing !== "normal") ctx.letterSpacing = font.letterSpacing;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const buttonBox = btn.getBoundingClientRect();
  const labelBox = label.getBoundingClientRect();
  ctx.fillText(
    text,
    labelBox.left - buttonBox.left + labelBox.width / 2,
    labelBox.top - buttonBox.top + labelBox.height / 2,
  );
  const url = canvas.toDataURL("image/png");
  painted.set(btn, `${url}${key}`);
  return url;
};

const paintAll = (force: boolean) => {
  const style = document.getElementById("android-ink");
  if (!style) return;
  const rules = [".btn-ink{opacity:0!important}"];
  document.querySelectorAll<HTMLElement>(".btn-lime").forEach((btn) => {
    const url = imageFor(btn, force);
    if (!url) return;
    rules.push(
      `${selectorFor(btn)}{background-color:#f0a45a!important;background-image:url("${url}")!important;background-repeat:no-repeat!important;background-size:100% 100%!important}`,
    );
  });
  style.textContent = rules.join("");
};

const AndroidPaint = () => {
  useEffect(() => {
    if (!/Android/i.test(navigator.userAgent)) return;
    let style = document.getElementById("android-ink");
    if (!style) {
      style = document.createElement("style");
      style.id = "android-ink";
      document.head.appendChild(style);
    }
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        paintAll(false);
      });
    };
    paintAll(false);
    const fonts = document.fonts?.ready.then(() => paintAll(true));
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      void fonts;
    };
  }, []);

  return null;
};

export default AndroidPaint;
