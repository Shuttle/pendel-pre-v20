import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.CfygL32k.js";
const __pageData = JSON.parse('{"title":"Message Idempotence","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/concepts/patterns/message-idempotence.md","filePath":"shuttle-esb/concepts/patterns/message-idempotence.md"}');
const _sfc_main = { name: "shuttle-esb/concepts/patterns/message-idempotence.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="message-idempotence" tabindex="-1">Message Idempotence <a class="header-anchor" href="#message-idempotence" aria-label="Permalink to &quot;Message Idempotence&quot;">​</a></h1><p>Idempotence as defined on <a href="https://en.wikipedia.org/wiki/Idempotence" target="_blank" rel="noreferrer">WikiPedia</a>:</p><blockquote><p>Idempotence is the property of certain operations in mathematics and computer science, that can be applied multiple times without changing the result beyond the initial application</p></blockquote><p>When working with messages this means that no matter how many times we apply a message the outcome should be the same.</p><p>Let&#39;s use the following message structure:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DebitAccount</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AccountNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> decimal</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>If we send two messages for account number <code>A-001</code> with an amount of <code>50</code> the account will be debited twice resulting in a total debit of <code>100</code>. This may not be intended. We can change the structure to the following:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SetBalance</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AccountNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> decimal</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Now if we had the balance before the debit we could apply the change and send the <code>SetBalance</code> message. Having the message processed twice would solve our issue as the balance would be the same.</p><p>However, this means that we need to know the balance up front <em>and</em> it does not solve the issue of the balance changing between calls as the balance would be overwritten.</p><p>We need to find a way to truly make this message idempotent:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DebitAccount</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Guid</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TransactionId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AccountNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> decimal</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Adding the <code>TransactionId</code> means that we can check whether the transaction has been actioned and, if so, ignore any other messages arriving with the same <code>TransactionId</code>. This means we need to track the <code>TransactionId</code> is a persistent data store of sorts.</p><p>All messages dispatched with Shuttle.Esb are wrapped in a <code>TransportMessage</code> envelope that contains a unique <code>MessageId</code>. Using an implementation of the <code>IIdempotenceService</code> will be able to make messages idempotent on a technical level. Thie means that messages that are duplicated due to edge cases of the <code>at-least-once</code> delivery mechanism will not be retried.</p><p>Some messages are idempotent by their very nature, as in the case of storing a result rather than applying a change, and if you can design messages to work in this way it would be first prize. This isn&#39;t always possible. An example of idempotent processing may be the activation of a member on a website. If you store the <code>DateActivated</code> for a member and you receive an <code>ActivateMember</code>, perhaps from the member clicking on a link in an activation e-mail, you could set the <code>DateActivated</code> to the current date where the <code>username</code> is equal to the received value and the <code>DateActivated</code> is null. As soon as the member is activated all subsequent activation requests can be ignored since the member has already been activated.</p><h2 id="exactly-once-delivery" tabindex="-1">Exactly-Once Delivery <a class="header-anchor" href="#exactly-once-delivery" aria-label="Permalink to &quot;Exactly-Once Delivery&quot;">​</a></h2><p>This mechanism requires a distributed transaction that includes the queue. Since not many queues support distrubuted transactions Shuttle.Esb no longer supports this mechanism as from version <code>3.0.0</code>. An issue facing Exactly-Once delivery is that when an endpoint is marked as not requiring/supporting a distributed transaction any messages will be immediately sent</p><h2 id="at-least-once-delivery" tabindex="-1">At-Least-Once Delivery <a class="header-anchor" href="#at-least-once-delivery" aria-label="Permalink to &quot;At-Least-Once Delivery&quot;">​</a></h2><p>This the mechanism that Shuttle.Esb uses. It does, however, imply that in some rare edge cases a technically <em>duplicate</em> message can arrive at an endpoint. You should attempt to design your system in such a way that the message handling remains idempotent.</p><h2 id="at-most-once-delivery" tabindex="-1">At-Most-Once Delivery <a class="header-anchor" href="#at-most-once-delivery" aria-label="Permalink to &quot;At-Most-Once Delivery&quot;">​</a></h2><p>This implies that the message will never be processed more than once, but may also not arrive at all. Shuttle.Esb has never implemented this mechanism.</p>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
const messageIdempotence = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  messageIdempotence as default
};
