"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67745],{859671:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-63f698fa","path":"/guide/adapters/flashing/flashing_via_cc2538-bsl.html","title":"Flashing the firmware via cc2538-bsl","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Method with Docker (Linux only)","slug":"method-with-docker-linux-only","link":"#method-with-docker-linux-only","children":[]},{"level":2,"title":"Method without Docker","slug":"method-without-docker","link":"#method-without-docker","children":[{"level":3,"title":"Prepare your system (debian based)","slug":"prepare-your-system-debian-based","link":"#prepare-your-system-debian-based","children":[]},{"level":3,"title":"Download cc2538-bsl","slug":"download-cc2538-bsl","link":"#download-cc2538-bsl","children":[]},{"level":3,"title":"Download the Firmware","slug":"download-the-firmware","link":"#download-the-firmware","children":[]},{"level":3,"title":"How-to check the installed firmware version","slug":"how-to-check-the-installed-firmware-version","link":"#how-to-check-the-installed-firmware-version","children":[]}]}],"git":{"updatedTime":1675355476000},"filePathRelative":"guide/adapters/flashing/flashing_via_cc2538-bsl.md"}')},453462:(e,a,n)=>{n.r(a),n.d(a,{default:()=>p});var s=n(166252);const t=(0,s._)("h1",{id:"flashing-the-firmware-via-cc2538-bsl",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#flashing-the-firmware-via-cc2538-bsl","aria-hidden":"true"},"#"),(0,s.Uk)(" Flashing the firmware via cc2538-bsl")],-1),i={href:"https://github.com/JelmerT/cc2538-bsl",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/JelmerT",target:"_blank",rel:"noopener noreferrer"},o=(0,s.uE)('<p>In this case we use a Sonoff Zigbee 3.0 USB Dongle Plus and flash the firmware without opening the case to press the &quot;Boot&quot; button.</p><h2 id="method-with-docker-linux-only" tabindex="-1"><a class="header-anchor" href="#method-with-docker-linux-only" aria-hidden="true">#</a> Method with Docker (Linux only)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>\n    <span class="token parameter variable">--device</span> /dev/ttyUSB0:/dev/ttyUSB0 <span class="token punctuation">\\</span>\n    <span class="token parameter variable">-e</span> <span class="token assign-left variable">FIRMWARE_URL</span><span class="token operator">=</span>https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20221226.zip <span class="token punctuation">\\</span>\n    ckware/ti-cc-tool <span class="token parameter variable">-ewv</span> <span class="token parameter variable">-p</span> /dev/ttyUSB0 --bootloader-sonoff-usb\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),l={href:"https://github.com/git-developer/ti-cc-tool",target:"_blank",rel:"noopener noreferrer"},d=(0,s.uE)('<h2 id="method-without-docker" tabindex="-1"><a class="header-anchor" href="#method-without-docker" aria-hidden="true">#</a> Method without Docker</h2><h3 id="prepare-your-system-debian-based" tabindex="-1"><a class="header-anchor" href="#prepare-your-system-debian-based" aria-hidden="true">#</a> Prepare your system (debian based)</h3><ol><li>Install python and python-pip.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python3 python3-pip \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Install needed python packages.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pip3 <span class="token function">install</span> pyserial intelhex\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="download-cc2538-bsl" tabindex="-1"><a class="header-anchor" href="#download-cc2538-bsl" aria-hidden="true">#</a> Download cc2538-bsl</h3><ol start="3"><li>Create a directory named &quot;cc2538-bsl&quot;, download the last master of cc2538-bsl as tarball and extract in same folder.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> cc2538-bsl\n<span class="token builtin class-name">cd</span> cc2538-bsl\n<span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://github.com/JelmerT/cc2538-bsl/archive/refs/heads/master.tar.gz <span class="token operator">|</span> <span class="token function">tar</span> xz <span class="token parameter variable">--strip</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The sonoff feature is in the master since 20.01.2022.</p><h3 id="download-the-firmware" tabindex="-1"><a class="header-anchor" href="#download-the-firmware" aria-hidden="true">#</a> Download the Firmware</h3>',11),c=(0,s._)("code",null,"c2538-bsl",-1),u=(0,s.uE)('<ol start="4"><li>In this case we will flash <code>CC1352P2_CC2652P_launchpad_coordinator_***.zip</code>.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20221226.zip\n<span class="token function">unzip</span> CC1352P2_CC2652P_launchpad_coordinator_20221226.zip\n\n<span class="token function">sudo</span> python3 cc2538-bsl.py <span class="token parameter variable">-ewv</span> <span class="token parameter variable">-p</span> /dev/ttyUSB0 --bootloader-sonoff-usb ./CC1352P2_CC2652P_launchpad_coordinator_20221226.hex\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-ewv</code> means Mass <strong>e</strong>rase, <strong>w</strong>rite, <strong>v</strong>erify<br><code>-p</code> is the port on which your device is running, in this case <code>/dev/ttyUSB0</code><br><code>--bootloader-sonoff-usb</code> means that the bootloader is activated by the script, by toggeling RTS and DTR in the correct pattern for Sonoff USB dongle (remove this if your device is not a Sonoff dongle).</p><p>If the flash process was successfully done, an output like this appears:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sonoff\nOpening port /dev/ttyUSB0, baud 500000\nReading data from ../CC1352P2_CC2652P_launchpad_coordinator_20221226.hex\nYour firmware looks like an Intel Hex file\nConnecting to target...\nCC1350 PG2.0 (7x7mm): 352KB Flash, 20KB SRAM, CCFG.BL_CONFIG at 0x00057FD8\nPrimary IEEE Address: 00:00:00:00:00:00:00:00\n    Performing mass erase\nErasing all main bank flash sectors\n    Erase done\nWriting 360448 bytes starting at address 0x00000000\nWrite 104 bytes at 0x00057F988\n    Write done\nVerifying by comparing CRC32 calculations.\n    Verified (match: 0xe0c256fd)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version" aria-hidden="true">#</a> How-to check the installed firmware version</h3><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2022-01-05 22:36:34: Coordinator firmware version: &#39;{&quot;meta&quot;:{&quot;maintrel&quot;:1,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;product&quot;:1,&quot;revision&quot;:20221226,&quot;transportrev&quot;:2},&quot;type&quot;:&quot;zStack3x0&quot;}&#39;&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the above example the version is <code>20221226</code>.</p>',9),h={},p=(0,n(983744).Z)(h,[["render",function(e,a){const n=(0,s.up)("ExternalLinkIcon"),h=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s._)("p",null,[(0,s._)("a",i,[(0,s.Uk)("TI CC13xx/CC2538/CC26xx Serial Boot Loader"),(0,s.Wm)(n)])]),(0,s._)("p",null,[(0,s.Uk)("CC2538-bsl is a python script by "),(0,s._)("a",r,[(0,s.Uk)("Jelmer Tiete"),(0,s.Wm)(n)]),(0,s.Uk)(" that communicates with the boot loader of the Texas Instruments CC2538, CC26xx and CC13xx SoCs (System on Chips).")]),o,(0,s._)("p",null,[(0,s.Uk)("You can find details on the Docker command "),(0,s._)("a",l,[(0,s.Uk)("here"),(0,s.Wm)(n)])]),d,(0,s._)("p",null,[(0,s.Uk)("Download the firmware for your adapter from the "),(0,s.Wm)(h,{to:"/guide/adapters/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Supported adapter page")])),_:1}),(0,s.Uk)(" and unzip it in the "),c,(0,s.Uk)(" directory. So everything needed is in one folder.")]),u])}]])}}]);