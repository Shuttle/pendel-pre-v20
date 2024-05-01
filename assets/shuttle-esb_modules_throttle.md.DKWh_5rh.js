import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.CfygL32k.js";
const __pageData = JSON.parse('{"title":"Throttle","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/modules/throttle.md","filePath":"shuttle-esb/modules/throttle.md"}');
const _sfc_main = { name: "shuttle-esb/modules/throttle.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="throttle" tabindex="-1">Throttle <a class="header-anchor" href="#throttle" aria-label="Permalink to &quot;Throttle&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PM&gt; Install-Package Shuttle.Esb.Throttle</span></span></code></pre></div><p>The Throttle module for Shuttle.Esb aborts pipeline processing when the CPU usage exceeds given percentage.</p><p>The module will attach the <code>ThrottleObserver</code> to the <code>OnPipelineStarting</code> event of the <code>InboxMessagePipeline</code> and abort the pipeline if the CPU usage exceeds the given percentage.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">services.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddThrottle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">builder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	builder.Options.CpuUsagePercentage </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	builder.Options.AbortCycleCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	builder.Options.DurationToSleepOnAbort </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TimeSpan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; { TimeSpan.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FromSeconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) };</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>CpuUsagePercentage</code></td><td>65</td><td>The CPU usage percentage threshold to start throttling.</td></tr><tr><td><code>AbortCycleCount</code></td><td>5</td><td>The number of times a pipeline will be aborted before running at least once.</td></tr><tr><td><code>DurationToSleepOnAbort</code></td><td>&quot;00:00:01&quot;</td><td>The duration(s) to sleep when aborting a pipeline. Can be incremented for each abort.</td></tr></tbody></table>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const throttle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  throttle as default
};
