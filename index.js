const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1024,
    height: 900,
  });
  await page.goto("about:blank");
  await page.setContent(html);
  await page.waitForTimeout(2000);
  await page.click("aria/Pause story");
  let el = await page.$("amp-story-page:nth-child(1) .page-safe-area");
  await el.screenshot({ path: "page1.png" });
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(1000);
  el = await page.$("amp-story-page:nth-child(2) .page-safe-area");
  await el.screenshot({ path: "page2.png" });

  await browser.close();
})();

const html = `<html amp="" lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/><script async="" src="https://cdn.ampproject.org/v0.js"></script><script async="" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" custom-element="amp-story"></script><link href="https://fonts.googleapis.com/css2?display=swap&amp;family=Oswald%3Awght%40300&amp;family=Cookie&amp;family=Roboto+Condensed" rel="stylesheet"/><style amp-boilerplate="">body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate="">body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript><style amp-custom="">
amp-story-page {
  background-color: #131516;
}

amp-story-grid-layer {
  overflow: visible;
}

@media (max-aspect-ratio: 9 / 16)  {
  @media (min-aspect-ratio: 320 / 678) {
    amp-story-grid-layer.grid-layer {
      margin-top: calc((100% / 0.5625 - 100% / 0.6666666666666666) / 2);
    }
  }
}

@media not all and (min-resolution:.001dpcm) {
  @media {
    p.text-wrapper > span {
      font-size: calc(100% - 0.5px);
    }
  }
}

.page-fullbleed-area,
.page-background-overlay-area {
  position: absolute;
  overflow: hidden;
  width: 100%;
  left: 0;
  height: calc(1.1851851851851851 * 100%);
  top: calc((1 - 1.1851851851851851) * 100% / 2);
}

.element-overlay-area {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.page-safe-area {
  overflow: visible;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(0.84375 * 100%);
  margin: auto 0;
}

.mask {
  position: absolute;
  overflow: hidden;
}

.fill {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

@media (prefers-reduced-motion: no-preference) {
  .animation-wrapper {
    opacity: var(--initial-opacity);
    transform: var(--initial-transform);
  }
}
</style><meta name="web-stories-replace-head-start"/><title></title><link rel="canonical" href="http://localhost:8899/?post_type=web-story&amp;p=1276"/><meta name="web-stories-replace-head-end"/></head><body><amp-story standalone="" publisher="Web Stories Dev" title="" poster-portrait-src=""><amp-story-page id="e5cda888-e4ea-4ba0-9669-f9abb00d9c55" auto-advance-after="7s"><amp-story-grid-layer template="vertical" aspect-ratio="412:618" class="grid-layer"><div class="page-fullbleed-area" style="background-color:#2a2929"><div class="page-safe-area"><div style="position:absolute;pointer-events:none;left:0%;top:-9.25926%;width:100%;height:118.51852%;opacity:1"><div style="pointer-events:initial;width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:0" class="mask" id="el-70be9513-10a2-4f31-b431-42570f3b7ebc"><div class="fill" style="will-change:transform"></div></div></div></div></div></amp-story-grid-layer><amp-story-grid-layer template="vertical" aspect-ratio="412:618" class="grid-layer"><div class="page-fullbleed-area"><div class="page-safe-area"><div style="position:absolute;pointer-events:none;left:33.49515%;top:3.23625%;width:33.25243%;height:22.16828%;opacity:1"><div style="pointer-events:initial;width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:0;clip-path:url(#mask-triangle-5c5d03b4-d00c-40fe-90ae-a2ff069bad0f-output);-webkit-clip-path:url(#mask-triangle-5c5d03b4-d00c-40fe-90ae-a2ff069bad0f-output)" class="mask" id="el-5c5d03b4-d00c-40fe-90ae-a2ff069bad0f"><svg width="0" height="0"><defs><clipPath id="mask-triangle-5c5d03b4-d00c-40fe-90ae-a2ff069bad0f-output" transform="scale(1 1)" clipPathUnits="objectBoundingBox"><path d="M 0.5 0 L 1 1 L 0 1 Z"></path></clipPath></defs></svg><div class="fill" style="background-color:#c4c4c4;will-change:transform"></div></div></div><div style="position:absolute;pointer-events:none;left:9.70874%;top:32.20065%;width:80.58252%;height:6.14887%;opacity:1"><div style="pointer-events:initial;width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:0" id="el-6992e489-0ab8-4c28-a4f2-ecb46e798d34"><p class="fill text-wrapper" style="white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word;margin:1.1042168674698791% 0;font-family:&quot;Oswald&quot;,sans-serif;font-size:0.420712em;line-height:1.2;text-align:center;padding:0% 0%;color:#000000"><span><span style="font-weight: 300; color: #ff8e25; letter-spacing: 0.08em">QUICK RECIPE</span></span></p></div></div><div style="position:absolute;pointer-events:none;left:9.70874%;top:40.29126%;width:80.58252%;height:12.94498%;opacity:1"><div style="pointer-events:initial;width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:0" id="el-95606d81-4663-456a-bf34-603c59a6375d"><p class="fill text-wrapper" style="white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word;margin:1.1819277108433734% 0;font-family:&quot;Cookie&quot;,cursive;font-size:1.165049em;line-height:1;text-align:center;padding:0% 0%;color:#000000"><span><span style="color: #ff8e25">Apple Pie</span></span></p></div></div><div style="position:absolute;pointer-events:none;left:19.66019%;top:55.50162%;width:60.67961%;height:11.97411%;opacity:1"><div style="pointer-events:initial;width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:0" id="el-d32621d7-8537-4979-adb2-1099acdde99e"><p class="fill text-wrapper" style="white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word;margin:-1.18125% 0;font-family:&quot;Roboto Condensed&quot;,sans-serif;font-size:0.291262em;line-height:1.5;text-align:center;padding:0% 0%;color:#000000"><span><span style="color: #666">Easy to follow, this guide will get you to bake a delicious crusty apple pie right off the bat.</span></span></p></div></div></div></div></amp-story-grid-layer></amp-story-page><amp-story-page id="a4636990-4a58-47f3-8bdf-06d6791fcf87" auto-advance-after="7s"><amp-story-grid-layer template="vertical" aspect-ratio="412:618" class="grid-layer"><div class="page-fullbleed-area" style="background-color:#9a2f2f"><div class="page-safe-area"><div style="position:absolute;pointer-events:none;left:0%;top:-9.25926%;width:100%;height:118.51852%;opacity:1"><div style="pointer-events:initial;width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:0" class="mask" id="el-be342de6-7fe9-463d-a634-64d893cbaaec"><div class="fill" style="will-change:transform"></div></div></div></div></div></amp-story-grid-layer><amp-story-grid-layer template="vertical" aspect-ratio="412:618" class="grid-layer"><div class="page-fullbleed-area"><div class="page-safe-area"><div style="position:absolute;pointer-events:none;left:31.79612%;top:2.91262%;width:45.63107%;height:54.04531%;opacity:1"><div style="pointer-events:initial;width:100%;height:100%;display:block;position:absolute;top:0;left:0;z-index:0" class="mask" id="el-ea4347e2-37c2-40e9-8fec-31283545a890"><div style="position:absolute;width:100%;height:100.11657%;left:0%;top:-0.05828%" data-leaf-element="true"><amp-img layout="fill" src="http://localhost:8899/wp-content/uploads/2021/07/example-3-10.png" alt="example-3" srcSet="http://localhost:8899/wp-content/uploads/2021/07/example-3-10.png 375w,http://localhost:8899/wp-content/uploads/2021/07/example-3-10-169x300.png 169w,http://localhost:8899/wp-content/uploads/2021/07/example-3-10-150x267.png 150w" sizes="(min-width: 1024px) 21vh, 46vw" disable-inline-width="true"></amp-img></div></div></div></div></div></amp-story-grid-layer></amp-story-page></amp-story></body></html>`;
