(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,i)=>{const a=i(89),{lightningChart:s,Themes:r,AxisTickStrategies:o,emptyTick:l,AxisScrollStrategies:n,emptyLine:d}=a,c=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({defaultAxisY:{type:"linear-highPrecision"},theme:r[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Multi-dimensional Axis Chart");c.getDefaultAxisY().setScrollStrategy(n.progressive).setMouseInteractions(!1).setTickStrategy(o.DateTime,(e=>e.setDateOrigin(new Date).setGreatTickStyle(l).setFormatting(void 0,{second:"2-digit",minute:"2-digit",hour:"2-digit"},void 0).setCursorFormatter((e=>new Date(e).toLocaleTimeString(void 0,{second:"2-digit",minute:"2-digit",hour:"2-digit"}))))).setDefaultInterval((e=>({start:e.dataMax??0,end:(e.dataMax??0)-3e4,stopAxisAfter:!1}))).setTitle("Time"),c.getDefaultAxisX().dispose();const S=c.addAxisX({opposite:!0,iParallel:0,iStack:0}).setTitle("Ch 1").setMargins(0,10),g=c.addAxisX({opposite:!0,iParallel:1,iStack:0}).setTitle("Ch 2").setMargins(0,10),h=c.addAxisX({opposite:!0,iParallel:2,iStack:0}),p=c.addAxisX({opposite:!0,iParallel:3,iStack:0}),k=c.addAxisX({opposite:!0,iParallel:0,iStack:1}).setTitle("Ch 3").setMargins(10,0),u=c.addAxisX({opposite:!0,iParallel:1,iStack:1}).setTitle("Ch 4").setMargins(10,0),y=c.addAxisX({opposite:!0,iParallel:2,iStack:1}).setTitle("Ch 5").setMargins(10,0),A=c.addAxisX({opposite:!0,iParallel:3,iStack:1}).setTitle("Ch 6").setMargins(10,0);c.forEachAxisX((e=>e.setTickStrategy(o.Numeric,(e=>e.setMajorTickStyle((e=>e.setGridStrokeStyle(d))).setMinorTickStyle((e=>e.setGridStrokeStyle(d))))))),h.setTickStrategy(o.Empty).setStrokeStyle(d).setMouseInteractions(!1),p.setTickStrategy(o.Empty).setStrokeStyle(d).setMouseInteractions(!1);const m=e=>(e.setInterval({start:0,end:300}),c.addLineSeries({dataPattern:{pattern:"ProgressiveY"},xAxis:e}).setStrokeStyle((e=>e.setThickness(1))).setCursorSolveBasis("nearest-y").setDataCleaning({minDataPointCount:1})),T=m(S),x=m(g),X=m(k),M=m(u),C=m(y),P=m(A),v=()=>{let e=10+190*Math.random();return()=>{const t=e+1*(2*Math.random()-1);return e=t,t}},w=v(),D=v(),f=v(),I=v(),L=v(),U=v();setInterval((()=>{const e=1e3/60;T.addArrayX([w()],e),x.addArrayX([D()],e),X.addArrayX([f()],e),M.addArrayX([I()],e),C.addArrayX([L()],e),P.addArrayX([U()],e)}),1e3/60)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);