import{_ as r,r as s,o as d,c as u,a as e,b as o,d as t,w as i,e as a}from"./app.e21f8b55.js";const c={},h={class:"custom-container danger"},p=e("p",{class:"custom-container-title"},"DANGER",-1),f=e("p",null,"This guide only exists as an archive - we won't be making noticeable changes to this guide in the future if anything happens.",-1),g=e("p",null,"Regardless, if you choose to install or continue to use rootful palera1n, do note that there will likely be less and less support over time given, and that newer tweaks will be less and less likely to support this setup of palera1n.",-1),y=a('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide, and will need to obtain a bootable medium and follow the below steps using that bootable medium.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><p>palen1x is a live bootable Linux environment that allows you to quickly run palera1n on a compatible device. palera1n is capable of jailbreaking iOS devices with A8(X) to A11 SoC&#39;s on iOS 15 and later</p><p>On A11 devices, you <strong>must disable your passcode</strong> and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.</p><p>Additionally, if your device is an A11 device on iOS 16 and you&#39;ve set a passcode before, you will need to <strong>erase all content and settings</strong> in order to be able to jailbreak.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>',6),m=e("li",null,[o("A 64MB or greater USB Drive "),e("ul",null,[e("li",null,"If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive")])],-1),b={href:"https://github.com/palera1n/palen1x/releases",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},w=a('<h2 id="installing-ventoy" tabindex="-1"><a class="header-anchor" href="#installing-ventoy" aria-hidden="true">#</a> Installing Ventoy</h2><ol><li>Download and extract the contents of the <code>Ventoy.zip</code> file</li><li>Insert your USB drive if you have not already done so, and open the <code>Ventoy2Disk.exe</code> file</li><li>Select the USB drive you would like to boot palen1x from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Install</code> and confirm that you are ok erasing the USB drive <ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once it has installed, copy the palen1x iso file that you downloaded onto the USB drive</li></ol><h2 id="booting-palen1x" tabindex="-1"><a class="header-anchor" href="#booting-palen1x" aria-hidden="true">#</a> Booting palen1x</h2><ol><li>Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li><li>Press enter once you see the Ventoy screen to boot into palen1x</li></ol><h2 id="running-palera1n" tabindex="-1"><a class="header-anchor" href="#running-palera1n" aria-hidden="true">#</a> Running palera1n</h2><h3 id="creating-the-fakefs-bindfs" tabindex="-1"><a class="header-anchor" href="#creating-the-fakefs-bindfs" aria-hidden="true">#</a> Creating the FakeFS/BindFS</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div><ol><li>Once you have loaded palen1x, select <code>palera1n</code></li><li>Select <code>Options</code></li><li>Enable one of the two options, depending on your devices capacity, amount of free space, and iOS version: <ul><li>16GB devices should enable <code>Create BindFS</code> - note that you&#39;ll need to have 2-3GB of storage space free.</li><li>Devices with more than 2-3GB (if on iOS 15) or more than 5-6GB (if on iOS 16) of storage space free but with less than 10-15GB of storage space free also can enable <code>Create BindFS</code></li><li>Devices which have more than 10-15GB of storage space free should enable <code>Create FakeFS</code></li></ul></li></ol>',8),_={class:"custom-container warning"},S=e("p",{class:"custom-container-title"},"WARNING",-1),x=e("p",null,"If your device is either:",-1),k=e("ul",null,[e("li",null,"On iOS 15 and does not have at least 2-3GB of storage space free"),e("li",null,"On iOS 16 and does not have at least 5-6GB of storage space free")],-1),B=e("p",null,"You won't be able to continue following this guide.",-1),I={start:"4"},D=e("li",null,[o("Press "),e("code",null,"Enter"),o(" to save the options you just selected, then select "),e("code",null,"Start"),e("ul",null,[e("li",null,"Make sure your device is plugged in when you do this.")])],-1),O=a('<p>Your device should create the FakeFS or BindFS (depending on the option you chose).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you&#39;ll need to do the following:</p><ol><li>In the terminal window, press <code>Control</code> + <code>C</code> on your keyboard</li><li>Type <code>exit</code></li><li>Rerun the steps in palen1x that you just did</li></ol></div><h3 id="jailbreaking-with-palera1n" tabindex="-1"><a class="header-anchor" href="#jailbreaking-with-palera1n" aria-hidden="true">#</a> Jailbreaking with palera1n</h3>',3),U=e("li",null,[o("When prompted to "),e("code",null,"press enter to exit"),o(", press the enter key.")],-1),A=e("li",null,[o("Once the palen1x menu loads again, reselect "),e("code",null,"palera1n")],-1),C=e("li",null,[o("Select "),e("code",null,"Start"),e("ul",null,[e("li",null,"Make sure your device is plugged in when you do this.")])],-1),F=a('<p>Your device should now begin to jailbreak.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you&#39;ll need to do the following:</p><ol><li>In the terminal window, press <code>Control</code> + <code>C</code> on your keyboard</li><li>Type <code>exit</code></li><li>Rerun the steps in palen1x that you just did</li></ol></div><p>Once the device boots up, open the palera1n loader app and tap <code>Install</code>. After a bit of time, you&#39;ll be prompted to respring and <code>Sileo</code> should be on your home screen.</p>',3);function V(G,N){const n=s("router-link"),l=s("ExternalLinkIcon");return d(),u("div",null,[e("div",h,[p,f,e("p",null,[o("For users who are looking for a maintained palera1n guide - we generally recommend following the normal "),t(n,{to:"/using-palen1x"},{default:i(()=>[o("Using palen1x")]),_:1}),o(" guide instead, as it will provide an overall better experience in almost every way compared to using rootful palera1n via palen1x, and is the general direction that most developers are prioritizing tweak support towards.")]),e("p",null,[o("If you currently use rootful palera1n, we recommend following this guide to "),t(n,{to:"/removing-palera1n"},{default:i(()=>[o("remove rootful palera1n")]),_:1}),o(" and then use palen1x to "),t(n,{to:"/using-palen1x"},{default:i(()=>[o("Install rootless palera1n")]),_:1})]),g]),y,e("ul",null,[m,e("li",null,[o("The latest version of "),e("a",b,[o("palen1x"),t(l)])]),e("li",null,[e("a",v,[o("Ventoy"),t(l)])])]),w,e("div",_,[S,x,k,B,e("p",null,[o("If you cannot free up enough storage to follow this, you should instead use rootless palera1n by following "),t(n,{to:"/using-palen1x"},{default:i(()=>[o("Using palera1n")]),_:1}),o(" instead.")])]),e("ol",I,[D,e("li",null,[o("Follow the on screen instructions to enter "),t(n,{to:"/faq/#what-is-dfu-mode"},{default:i(()=>[o("DFU mode")]),_:1}),o(".")])]),O,e("ol",null,[U,A,C,e("li",null,[o("Follow the on screen instructions to enter "),t(n,{to:"/faq/#what-is-dfu-mode"},{default:i(()=>[o("DFU mode")]),_:1}),o(".")])]),F])}var T=r(c,[["render",V],["__file","index.html.vue"]]);export{T as default};
