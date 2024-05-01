import{_ as e,c as a,o as s,a4 as t}from"./chunks/framework.HjHqGs9w.js";const g=JSON.parse('{"title":"Upgrade to v-13.0.0","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/upgrade.md","filePath":"shuttle-esb/upgrade.md"}'),n={name:"shuttle-esb/upgrade.md"},i=t(`<h1 id="upgrade-to-v-13-0-0" tabindex="-1">Upgrade to v-13.0.0 <a class="header-anchor" href="#upgrade-to-v-13-0-0" aria-label="Permalink to &quot;Upgrade to v-13.0.0&quot;">​</a></h1><h2 id="shuttle-core-container" tabindex="-1">Shuttle.Core.Container <a class="header-anchor" href="#shuttle-core-container" aria-label="Permalink to &quot;Shuttle.Core.Container&quot;">​</a></h2><p>Prior to version <code>13.0.0</code> all <code>Shuttle.*</code> components supported dependency injection via an adapter based on <a href="https://github.com/Shuttle/Shuttle.Core.Container" target="_blank" rel="noreferrer">Shuttle.Core.Container</a> and would typically register dependencies using a <code>IComponentRegistry.Register*</code> method.</p><p>You would have to choose and implementation, such as <code>Shuttle.Core.Ninject</code>, in order to support dependency injection.</p><p>From v-13.0.0 of <code>Shuttle.Esb</code> only <a href="https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection" target="_blank" rel="noreferrer">.NET dependency injection</a> is supported and the configuration of components has been refactored to make use of the <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-6.0" target="_blank" rel="noreferrer">options pattern</a>.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><p>As per the .Net dependency injection guidelines the components are added using an <code>IServiceCollection.Add{Library}</code> method. When there are options applicable to the component a <code>Builder</code> may be used to facilitate configuration, e.g.:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> services</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ServiceCollection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">service.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddLibrary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">builder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    builder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ConfigurationMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(args);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    builder.Options.option </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> optionValue;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Please see the documentation related to each component for specifics.</p><p>The <code>ServiceBus</code> instance no longer needs to be managed as the instance lifecycle is managed by the <code>ServiceBusHostedService</code>.</p><h2 id="queue-configuration" tabindex="-1">Queue configuration <a class="header-anchor" href="#queue-configuration" aria-label="Permalink to &quot;Queue configuration&quot;">​</a></h2><p>All queues URIs are now structured as <code>scheme://configuration-name/queue-name</code> and the <code>scheme</code> represents a unique name for the <code>IQueue</code> implementation. The <code>scheme</code> and <code>configuration-name</code> (represented by the URI&#39;s <code>Host</code> property) should always be lowercase as creating a <code>new Uri(uriString)</code> forces the scheme and host to lowercaseThe intention is to allow easier configuration of queue properties.</p><p>This does mean, however, that all existing queue configuration would need to be refactored, including subscriptions.</p><h2 id="shuttle-esb-azuremq" tabindex="-1">Shuttle.Esb.AzureMQ <a class="header-anchor" href="#shuttle-esb-azuremq" aria-label="Permalink to &quot;Shuttle.Esb.AzureMQ&quot;">​</a></h2><p>This package has been renamed to <code>Shuttle.Esb.AzureStorageQueues</code> and the scheme has been changed to <code>azuresq</code> from <code>azuremq</code>.</p><h2 id="streams" tabindex="-1">Streams <a class="header-anchor" href="#streams" aria-label="Permalink to &quot;Streams&quot;">​</a></h2><p>The <code>IQueue</code> interface now has an <code>IsStream</code> boolean property that indicates whether or not the queue represents a stream such as <code>Shuttle.Esb.Kafka</code>.</p><h2 id="discord" tabindex="-1">Discord <a class="header-anchor" href="#discord" aria-label="Permalink to &quot;Discord&quot;">​</a></h2><p>Should you have any questions or comments you are welcome to visit the <a href="https://discord.gg/Q2yEsfht6f" target="_blank" rel="noreferrer">Discord channel</a>.</p>`,19),o=[i];function r(d,c,h,l,p,u){return s(),a("div",null,o)}const m=e(n,[["render",r]]);export{g as __pageData,m as default};