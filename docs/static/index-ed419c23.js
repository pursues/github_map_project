import{d,D as r,U as B,c as A,V as p,W as c,R as D}from"./@vue-22a1dd50.js";import{A as m}from"./ant-design-vue-a6fb4da4.js";import{c as l,a as _}from"./vue-router-de4e9685.js";import"./@ant-design-9605645d.js";import"./@ctrl-6d75cd93.js";import"./@babel-b147166c.js";import"./resize-observer-polyfill-f6056bd3.js";import"./@emotion-cf591d0e.js";import"./stylis-2f05d2c7.js";import"./scroll-into-view-if-needed-89343fb4.js";import"./compute-scroll-into-view-ba76188b.js";import"./vue-types-5fd8cc4b.js";import"./dom-align-3cce50be.js";import"./lodash-es-1f4dcf2e.js";import"./dayjs-87914488.js";import"./async-validator-6f7dcde3.js";import"./throttle-debounce-514b295c.js";const y=function(){const F=document.createElement("link").relList;if(F&&F.supports&&F.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))E(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&E(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function E(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};y();var f="./static/png/wenwu1-3a6ba402.png",v="./static/png/wenwu2-079004d6.png",g="./static/png/wenwu3-0228f68a.png",h="./static/png/wenwu4-c1222cc4.png",w="./static/jpg/wenwu5-91017f5c.jpg",S="./static/png/bo1-ace68d7a.png",O="./static/png/bo2-3aa03322.png",L="./static/png/wen1-8d9f7923.png",b="./static/png/wen2-0d1819a1.png",U="./static/png/yi1-0f6e20eb.png",I="./static/png/yi2-28e2aebc.png";var N=(n,F)=>{const i=n.__vccOpts||n;for(const[E,e]of F)i[E]=e;return i};const P={class:"app-content"},R=d({__name:"App",setup(n){r(()=>{window.addEventListener("resize",F,!1),i(),E(),e()});function F(){var t=document.documentElement.clientWidth,u=t/1920;document.documentElement.style.zoom=u}function i(){const t=localStorage.getItem("cultural");let u=JSON.parse(t)||[];u.length==0&&(u=[{title:"\u5434\u695A\u8001\u5173",desc:"\u5434\u695A\u5173\u9698\u9057\u5740\u5EA7\u843D\u5728\u6C5F\u897F\u7701\u840D\u4E61\u5E02\u6E58\u4E1C\u533A\u8001\u5173\u9547\u8001\u5173\u6751\uFF0C\u53E4\u4E3A\u5434\u695A\u8981\u585E\u3002\u8001\u5173\u5730\u5904\u8D63\u897F\u8FB9\u754C\uFF0C\u76F8\u4F20\u81EA\u6625\u79CB\u8BBE\u5173\u5361\u5728\u6B64\uFF0C\u660E\u5609\u9756\u5E74\u95F4\uFF081522-1566\uFF09\u5E74\u77E5\u53BF\u6768\u81EA\u6CBB\u5728\u8001\u5173\u5EFA\u8425\u623F\u3001\u7F6E\u5173\u697C\uFF0C\u73B0\u5173\u5361\u867D\u6BC1\uFF0C\u57CE\u5899\u9057\u8FF9\u5C1A\u5B58\uFF0C\u6545\u79F0\u8001\u5173\u3002\u8BE5\u9057\u5740\u901A\u4F53\u4E3A\u7EA2\u77F3\u6240\u780C\uFF0C\u523020\u4E16\u7EAA60\u5E74\u4EE3\u5C1A\u4FDD\u5B58\u826F\u597D\uFF0C\u5B58\u6709\u5173\u95E8\uFF0C\u7531\u660E\u671D\u91CD\u5320\u9898\u5199\u7684\u201C\u63D2\u5CAD\u5173\u201D\u201C\u6C5F\u897F\u9501\u94DC\u201D\u7684\u754C\u7891\uFF0C\u5E76\u5B58\u6709132\u7C73\u957F\uFF0C6\u7C73\u9AD8\u7684\u53E4\u57CE\u5899\uFF0C\u8BE5\u9057\u5740\u6BC1\u4E8E20\u4E16\u7EAA70\u5E74\u4EE3\u7684\u7F6E\u7530\u8FD0\u52A8\uFF0C\u73B0\u4EC5\u5B58132\u7C73\u957F\u30012.3\u7C73\u9AD8\u3001\u5BBD2.61\u7C73\u7684\u57CE\u5899\u3002",icon:f,address:1,address_name:"\u6E58\u4E1C\u533A",type:2,type_name:"\u6587\u7269\u70B9",point:"113.614505,27.639449",update_time:"2024-07-18 20:20:20",id:"1234567"},{point:"113.656329,27.539471",title:"\u7A91\u524D\u6297\u6218\u5230\u5E95\u6469\u5D16\u77F3\u523B",address:1,address_name:"\u6E58\u4E1C\u533A",type:2,type_name:"\u6587\u7269\u70B9",icon:v,update_time:"2024-07-18 20:20:20",id:"23456787",desc:"\u8BE5\u77F3\u523B\u4F4D\u4E8E\u6C5F\u897F\u7701\u840D\u4E61\u5E02\u6E58\u4E1C\u533A\u6392\u4E0A\u9547\u6392\u4E0A\u6751\u7A91\u524D\u7EC4\uFF0C\u5750\u897F\u671D\u4E1C\uFF0C\u201C\u6297\u6218\u5230\u5E95\u201D\u56DB\u5B57\u4E3A\u7F8E\u672F\u9ED1\u4F53\u5B57\uFF0C\u523B\u4E8E1945\u5E74\uFF0C\u9634\u523B\u3002\u6BCF\u4E2A\u5B57\u7684\u9AD8\u5EA6\u548C\u957F\u5EA6\u5206\u522B\u4E3A1.2\u7C73\u548C1\u7C73\uFF0C\u77F3\u523B\u603B\u957F\u4E3A7\u7C73\u3002\u636E\u8003\u8BC1\uFF0C\u5F53\u5E74\u840D\u4E61\u4E2D\u5B66\u5168\u4F53\u5E08\u751F\u4ECE\u840D\u57CE\u4E3A\u8EB2\u907F\u65E5\u673A\u8F70\u70B8\u8FC1\u4E8E\u6B64\u5730\uFF0C\u5E08\u751F\u4EEC\u5BF9\u4FB5\u7565\u8005\u6DF1\u6076\u75DB\u7EDD\uFF0C\u4E8E\u662F\u523B\u6807\u8BED\u4E8E\u6B64\u5730\u3002"},{point:"113.725315,27.681262",title:"\u840D\u6D32\u747E\u73CA\u5BB6\u587E",address:1,address_name:"\u6E58\u4E1C\u533A",type:2,type_name:"\u6587\u7269\u70B9",icon:g,update_time:"2024-07-18 20:20:20",id:"3456789",desc:"\u747E\u73CA\u5BB6\u587E\u53C8\u540D\u9ECE\u6C0F\u516C\u7960\uFF0C\u4F4D\u4E8E\u6C5F\u897F\u7701\u840D\u4E61\u5E02\u6E58\u4E1C\u533A\u8377\u5C27\u9547\u840D\u6D32\u6751\u6850\u7530\u7EC4\uFF0C\u8BE5\u7960\u5802\u4E3A\u9ECE\u5BB6\u79C0\u624D\u9ECE\u6D1B\u7530\u4E8E\u6E05\u4EE3\u6240\u5EFA\uFF0C\u5750\u5317\u671D\u5357\uFF0C\u9762\u5BBD13\u7C73\uFF0C\u957F21\u7C73\uFF0C\u9762\u79EF273\u65B9\u7C73\uFF0C\u5E72\u6253\u5792\u7816\u6728\u6DF7\u5EFA\uFF0C\u786C\u5C71\u9876\uFF0C\u98CE\u706B\u5899\uFF0C\u5357\u65B9\u4F20\u7EDF\u6C11\u5C45\u5EFA\u7B51\uFF0C\u4FA7\u623F\u9A6C\u5934\u5899\u4E0A\u7ED8\u6709\u5F69\u8272\u5E45\u7EB9\u56FE\u6848\uFF0C\u524D\u4E3A\u95E8\u5385\uFF0C\u540E\u4E3A\u6B63\u6BBF\uFF0C\u6B63\u6BBF\u5185\u6709\u63CF\u91D1\u7F15\u7A7A\u82B1\u677F\u95E8\uFF0C\u8BE5\u5EFA\u7B51\u5BF9\u5F53\u5730\u4F20\u7EDF\u5C45\u6C11\u7684\u98CE\u683C\u6709\u7814\u7A76\u4EF7\u503C\u3002"},{point:"113.630042,27.634447",title:"\u8001\u5173\u706B\u8F66\u7AD9\u6218\u6597\u9057\u5740",address:1,address_name:"\u6E58\u4E1C\u533A",type:2,type_name:"\u6587\u7269\u70B9",icon:h,update_time:"2024-07-18 20:20:20",id:"45678967",desc:"\u8BE5\u9057\u5740\u4F4D\u4E8E\u840D\u4E61\u5E02\u6E58\u4E1C\u533A\u8001\u5173\u9547\u8001\u5173\u6751\u8001\u5173\u8F66\u7AD9\u7EC4\uFF0C\u603B\u5360\u5730\u9762\u79EF15876\u5E73\u65B9\u7C73\uFF0C\u8F66\u7AD9\u59CB\u5EFA\u4E8E\u6C11\u56FD\u65F6\u671F\uFF0C\u5448\u4E1C\u897F\u8D70\u5411\uFF0C\u65E5\u524D\u4FDD\u7559\u4E1C\u897F\u957F378\u7C73\uFF0C\u5357\u5317\u5BBD42\u7C73\u7684\u8F66\u7AD9\u9057\u5740\uFF0C\u4EC5\u5B58\u90E8\u4EFD\u529E\u516C\u697C\u3001\u5019\u8F66\u5BA4\u3001\u6C34\u5854\u53CA\u8D27\u8FD0\u573A\u7B49\u9644\u5C5E\u5EFA\u7B51\u3002\u8BE5\u7AD9\u57281927\u5E749\u6708\u521D\u65F6\u4E3A\u79CB\u6536\u8D77\u4E49\u90E8\u961F\u7B2C\u4E00\u8DEF\u7EB5\u961F\u7684\u5B89\u6E90\u5DE5\u4EBA\u77FF\u8B66\u961F\u4E3A\u4E3B\u529B\uFF0C\u5728\u653B\u5360\u840D\u4E61\u53BF\u57CE\u5931\u8D25\u540E\u8F6C\u5411\u8FDB\u653B\u91B4\u9675\u53BF\u57CE\u7684\u91CD\u8981\u4EA4\u901A\u67A2\u7EBD\uFF0C\u4E3A\u7814\u7A76\u79CB\u6536\u8D77\u4E49\u90E8\u961F\u7684\u8F6C\u79FB\u63D0\u4F9B\u4E86\u91CD\u8981\u7684\u5B9E\u7269\u4F9D\u636E\u3002"},{point:"113.866634,27.64644",title:"\u840D\u4E61\u535A\u7269\u9986",address:1,address_name:"\u6E58\u4E1C\u533A",type:4,type_name:"\u535A\u7269\u9986",icon:S,update_time:"2024-07-20 14:04:20",id:"bo45678967",desc:"\u840D\u4E61\u535A\u7269\u9986\u662F\u4FDD\u62A4\u3001\u7814\u7A76\u548C\u5C55\u793A\u5386\u53F2\u6587\u5316\u9057\u4EA7\u548C\u4EBA\u7C7B\u73AF\u5883\u7269\u8BC1\u7684\u4E13\u95E8\u673A\u6784\uFF0C\u662F\u96C6\u6536\u85CF\u3001\u8003\u53E4\u3001\u7814\u7A76\u548C\u5C55\u793A\u4E8E\u4E00\u4F53\u7684\u7EFC\u5408\u6027\u73B0\u4EE3\u5316\u535A\u7269\u9986\uFF0C\u662F\u8FDB\u884C\u7231\u56FD\u4E3B\u4E49\u6559\u80B2\u3001\u5386\u53F2\u6587\u5316\u548C\u79D1\u666E\u5BA3\u4F20\u7684\u91CD\u8981\u9635\u5730\u3002"},{point:"114.073576,27.641866",title:"\u5434\u695A\u98CE\u535A\u7269\u9986",address:2,address_name:"\u5B89\u6E90\u533A",type:4,type_name:"\u535A\u7269\u9986",icon:O,update_time:"2024-07-20 14:04:20",id:"bo456734568967",desc:"\u5434\u695A\u98CE\u535A\u7269\u9986\u662F\u5F53\u5730\u4E00\u5EA7\u8001\u7960\u5802\u6539\u5EFA\u800C\u6210\uFF0C\u91CC\u9762\u6536\u85CF\u4E86\u4E1C\u9633\u6751\u51E0\u767E\u5E74\u7559\u5B58\u4E0B\u6765\u7684\u6587\u7269\uFF0C\u5176\u4E2D\u73CD\u85CF\u4E86\u4E00\u5757\u4E7E\u9686\u5723\u65E8\u533E\u989D\uFF0C\u582A\u79F0\u201C\u9547\u9986\u4E4B\u5B9D\u201D\u3002"},{point:"113.964001,27.135573",title:"\u83B2\u82B1\u53BF\u6587\u5316\u9986",address:4,address_name:"\u83B2\u82B1\u53BF",type:1,type_name:"\u6587\u7269\u9986",icon:L,update_time:"2024-07-20 14:04:20",id:"wen23456734568967",desc:"\u83B2\u82B1\u53BF\u6587\u5316\u9986\u88AB\u6587\u5316\u548C\u65C5\u6E38\u90E8\u8BA4\u5B9A\u4E3A\u4F20\u7EDF\u7F8E\u672F\u201C\u9521\u96D5\uFF08\u83B2\u82B1\u6253\u9521\uFF09\u201D\u9879\u76EE\u7684\u4FDD\u62A4\u5355\u4F4D\u3002"},{point:"113.89159,27.66826",title:"\u840D\u4E61\u5E02\u6587\u5316\u9986",address:2,address_name:"\u5B89\u6E90\u533A",type:1,type_name:"\u6587\u7269\u9986",icon:b,update_time:"2024-07-20 14:04:20",id:"wen56774567345e68967",desc:"\u840D\u4E61\u5E02\u6587\u5316\u9986\u65B0\u9986\u9986\u820D\u5EFA\u7B51\u9762\u79EF\u4E3A9000\u591A\u5E73\u65B9\u7C73,\u914D\u5907\u4E86\u4E13\u4E1A\u7684\u57F9\u8BAD\u529F\u80FD\u6559\u5BA4\u3001\u5C55\u793A\u5C55\u89C8\u5C55\u5385\u3001\u5F00\u5C55\u7FA4\u4F17\u6D3B\u52A8\u7684\u6F14\u827A\u5385\u3001\u827A\u672F\u521B\u4F5C\u7684\u5F55\u97F3\u5BA4\u5F55\u64AD\u5BA4\u7B49\u3002"},{point:"114.046543,27.636402",title:"\u82A6\u6EAA\u53BF\u7F8E\u672F\u9986",address:5,address_name:"\u82A6\u6EAA\u53BF",type:3,type_name:"\u827A\u672F\u9986",icon:U,update_time:"2024-07-20 14:04:20",id:"yi56774567345e68967",desc:"\u840D\u4E61\u5E02\u82A6\u6EAA\u53BF\u7F8E\u672F\u9986\u7CFB\u56FD\u5BB6\u516C\u76CA\u6027\u4E8B\u4E1A\u5355\u4F4D\uFF0C\u56FD\u5BB6\u4E8C\u7EA7\u9986\u3002\u82A6\u6EAA\u53BF\u7F8E\u672F\u9986\u524D\u8EAB\u4E3A 1942 \u5E74\u5EFA\u7ACB\u7684\u6C11\u4F17\u6559\u80B2\u9986\uFF0C\u8FC4\u4ECA\u6709 73 \u5E74\u7684\u5386\u53F2\u3002"},{point:"113.867472,27.651515",title:"\u7AE5\u753B\u91CC\u7684\u827A\u672F\u9986",address:2,address_name:"\u5B89\u6E90\u533A",type:3,type_name:"\u827A\u672F\u9986",icon:I,update_time:"2024-07-20 14:04:20",id:"yi5677456337345e68967",desc:"\u7AE5\u753B\u91CC\u7684\u827A\u672F\u9986\u81F4\u529B\u4E8E\u516C\u5171\u827A\u672F\u6559\u80B2\u4E8B\u4E1A,\u7ED3\u5408\u5E02\u827A\u672F\u9986\u5404\u79CD\u7C7B\u578B\u5C55\u89C8,\u4E0D\u65AD\u7B56\u5212\u4E3E\u529E\u5404\u79CD\u516C\u5171\u6559\u80B2\u6D3B\u52A8,\u6D3B\u52A8\u5185\u5BB9\u4E30\u5BCC,\u6D89\u53CA\u5C11\u513F\u6D3B\u52A8,\u827A\u672F\u8BB2\u5EA7,\u516C\u76CA\u827A\u672F\u8BB2\u5802\u7B49\u3002"},{point:"113.898132,27.837116",title:"\u6C5F\u897F\u4E0A\u6817\u53BF\u4E58\u5E7F\u7985\u5E08\u5854",address:2,address_name:"\u4E0A\u6817\u53BF",type:2,type_name:"\u6587\u7269\u70B9",icon:w,update_time:"2024-07-20 14:04:20",id:"yi5677456337345e68934",desc:"\u7504\u53D4\u7985\u5E08\u5854\u6709\u5510\u738B\u89C2\u4F5C\u94ED\u3001\u50E7\u81F3\u95F2\u64B0\u5E8F\u3001\u5143\u4E66\u7684\u5854\u94ED\u300A\u5927\u5510\u8881\u5DDE\u840D\u4E61\u53BF\u6768\u5C90\u5C71\u6545\u7504\u53D4\u5927\u5E08\u5854\u94ED\u5E76\u5E8F\u300B\u3002\u4E58\u5E7F\u7985\u5E08\u5854\u548C\u7504\u53D4\u7985\u5E08\u5854\u5747\u4E3A\u5510\u4EE3\u5854\u5893\uFF0C\u6709\u786E\u5207\u7684\u5EFA\u9020\u8BB0\u8F7D\uFF0C\u662F\u7814\u7A76\u5510\u4EE3\u5854\u5893\u7684\u5B9D\u8D35\u5B9E\u7269\u53F2\u6599\uFF0C\u5BF9\u4E8E\u7814\u7A76\u548C\u8003\u8BC1\u5F53\u5730\u5510\u4EE3\u7684\u4F5B\u6559\u5854\u846C\u5236\u5EA6\u5177\u6709\u91CD\u8981\u7684\u5386\u53F2\u4EF7\u503C\u3002\u540C\u65F6\u4E24\u5EA7\u7985\u5E08\u5854\u5854\u4F53\u575A\u5B9E\u6D51\u539A\u3001\u96D5\u523B\u3001\u505A\u5DE5\u4F53\u73B0\u4E86\u5F53\u65F6\u6C11\u95F4\u5DE5\u5320\u7684\u6280\u827A\uFF0C\u5177\u6709\u8F83\u9AD8\u7684\u5EFA\u7B51\u827A\u672F\u4EF7\u503C\u3002"},{point:"113.97449,27.288648",title:"\u7518\u7956\u660C\u5C06\u519B\u6545\u5C45",address:5,address_name:"\u82A6\u6EAA\u53BF",type:1,type_name:"\u6587\u7269\u9986",icon:"",update_time:"2024-07-22 09:01:00",id:1721610039376,desc:"\u7518\u7956\u660C\u5C06\u519B\u6545\u5C45"},{point:"113.983002,27.297031",title:"\u79CB\u6536\u8D77\u4E49\u7518\u5BB6\u6BDB\u6CFD\u4E1C\u65E7\u5C45",address:4,address_name:"\u83B2\u82B1\u53BF",type:1,type_name:"\u6587\u7269\u9986",icon:"",update_time:"2024-07-22 09:00:26",id:1721609999606,desc:"\u79CB\u6536\u8D77\u4E49\u7518\u5BB6\u6BDB\u6CFD\u4E1C\u65E7\u5C45"},{point:"113.920122,27.722003",title:"\u77F3\u6D1E\u53E3\u50A9\u5E99",address:3,address_name:"\u4E0A\u6817\u53BF",type:1,type_name:"\u6587\u7269\u9986",icon:"",update_time:"2024-07-22 08:58:37",id:1721609891870,desc:"\u77F3\u6D1E\u53E3\u50A9\u5E99"},{point:"114.047724,27.215282",title:"\u826F\u574A\u738B\u6C0F\u5927\u7960",address:4,address_name:"\u83B2\u82B1\u53BF",type:2,type_name:"\u6587\u7269\u70B9",icon:"",update_time:"2024-07-22 09:10:57",id:1721610573989,desc:"\u826F\u574A\u738B\u6C0F\u5927\u7960"},{point:"113.903098,27.608734",title:"\u6BDB\u6CFD\u4E1C\u3001\u674E\u7ACB\u4E091921\u5E74\u51AC\u6765\u5B89\u6E90\u65E7\u5C45",address:2,address_name:"\u5B89\u6E90\u533A",type:2,type_name:"\u6587\u7269\u70B9",icon:"",update_time:"2024-07-22 09:12:46",id:1721610706412,desc:"\u6BDB\u6CFD\u4E1C\u3001\u674E\u7ACB\u4E091921\u5E74\u51AC\u6765\u5B89\u6E90\u65E7\u5C45"},{point:"113.856321,27.094931",title:"\u9F99\u4E0A\u6539\u7F16\u4F1A\u8BAE\u65E7\u5740",address:5,address_name:"\u82A6\u6EAA\u53BF",type:2,type_name:"\u6587\u7269\u70B9",icon:"",update_time:"2024-07-22 09:14:29",id:1721610794395,desc:"\u9F99\u4E0A\u6539\u7F16\u4F1A\u8BAE\u65E7\u5740"},{point:"113.800266,27.883829",title:"\u840D\u4E61\u5E02\u96F7\u950B\u6587\u5316\u535A\u7269\u9986",address:5,address_name:"\u82A6\u6EAA\u53BF",type:4,type_name:"\u535A\u7269\u9986",icon:"",update_time:"2024-07-22 09:17:14",id:1721611003548,desc:"\u840D\u4E61\u5E02\u96F7\u950B\u6587\u5316\u535A\u7269\u9986"},{point:"114.135813,27.495322",title:"\u6B66\u529F\u5C71\u5730\u8D28\u535A\u7269\u9986",address:5,address_name:"\u82A6\u6EAA\u53BF",type:4,type_name:"\u535A\u7269\u9986",icon:"",update_time:"2024-07-22 09:19:23",id:1721611140427,desc:"\u6B66\u529F\u5C71\u5730\u8D28\u535A\u7269\u9986"},{point:"113.902724,27.610065",title:"\u5B89\u6E90\u8DEF\u77FF\u5DE5\u4EBA\u8FD0\u52A8\u7EAA\u5FF5\u9986",address:2,address_name:"\u5B89\u6E90\u533A",type:4,type_name:"\u535A\u7269\u9986",icon:"",update_time:"2024-07-22 09:20:47",id:1721611221523,desc:"\u5B89\u6E90\u8DEF\u77FF\u5DE5\u4EBA\u8FD0\u52A8\u7EAA\u5FF5\u9986"},{point:"113.901629,27.654032",title:"\u84DD\u6CE2\u6E7E\u827A\u672F\u9986",address:2,address_name:"\u5B89\u6E90\u533A",type:3,type_name:"\u827A\u672F\u9986",icon:"",update_time:"2024-07-22 09:22:42",id:1721611348210,desc:"\u84DD\u6CE2\u6E7E\u827A\u672F\u9986"},{point:"113.727949,27.558142",title:"\u840D\u4E61\u5E02\u6E58\u4E1C\u533A\u56FD\u9F99\u4F20\u7EDF\u6728\u96D5\u827A\u672F\u9986",address:1,address_name:"\u6E58\u4E1C\u533A",type:3,type_name:"\u827A\u672F\u9986",icon:"",update_time:"2024-07-22 09:25:40",id:1721611524026,desc:"\u840D\u4E61\u5E02\u6E58\u4E1C\u533A\u56FD\u9F99\u4F20\u7EDF\u6728\u96D5\u827A\u672F\u9986"}],localStorage.setItem("cultural",JSON.stringify(u)))}function E(){const t=localStorage.getItem("camera");let u=JSON.parse(t)||[];u.length==0&&(u=[{point:"113.602263,27.637603",title:"\u8001\u5173\u6865\u53F3",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000113_34020000001320000113.flv",desc:"",update_time:"2024-07-18 20:20:20",id:"cam123456"},{point:"113.592346,27.611998",title:"\u8001\u5173\u6865\u5DE6",type:5,icon:"",videoUrl:"",desc:"",update_time:"2024-07-18 20:20:20",id:"cam1234562"},{point:"113.630003,27.602267",title:"\u8001\u5173\u706B\u8F66\u7AD9\u5DE6\u8FC7\u9053",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000165_34020000001320000165.flv",desc:"",update_time:"2024-07-18 20:20:20",id:"cam1234563"},{point:"113.614624,27.631459",title:"\u8001\u5173\u706B\u8F66\u7AD9\u540E\u5DE6",type:5,icon:"",videoUrl:"",desc:"",update_time:"2024-07-18 20:20:20",id:"cam1234565"},{point:"113.577829,27.594327",title:"\u8001\u5173\u706B\u8F66\u7AD9\u540E\u53F3",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000167_34020000001320000167.flv",desc:"",update_time:"2024-07-18 20:20:20",id:"cam1234566"},{point:"113.91087,27.651954",title:"\u8001\u5173\u706B\u8F66\u7AD9\u524D",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000168_34020000001320000168.flv",desc:"",update_time:"2024-07-18 20:20:20",id:"cam1234567"},{point:"113.825638,27.601641",title:"\u8001\u5173\u706B\u8F66\u7AD9",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320000011_34020000001320000011.flv",desc:"",update_time:"2024-07-18 20:20:20",id:"cam1234568"},{point:"113.725836,27.682071",title:"\u840D\u6D32\u747E\u73CA\u5BB6\u587E\u53F3",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320003101_34020000001320003101.flv",desc:"",update_time:"2024-07-22 09:34:30",id:"1721611949480"},{point:"113.725728,27.68455",title:"\u840D\u6D32\u747E\u73CA\u5BB6\u587E\u5C4B\u540E",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320003102_34020000001320003102.flv",desc:"",update_time:"2024-07-22 09:35:30",id:"1721612100288"},{point:"113.729214,27.683622",title:"\u840D\u6D32\u747E\u73CA\u5BB6\u587E\u5DE6",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320003104_34020000001320003104.flv",desc:"",update_time:"2024-07-22 09:37:30",id:"1721612228361"},{point:"113.725423,27.686661",title:"\u840D\u6D32\u747E\u73CA\u5BB6\u587E\u524D",type:5,icon:"",videoUrl:"http://59.62.61.24:10000/sms/34020000002020000001/flv/hls/34020000001320003105_34020000001320003105.flv",desc:"",update_time:"2024-07-22 09:38:06",id:"1721612263611"}],localStorage.setItem("camera",JSON.stringify(u)))}function e(){const t=localStorage.getItem("user");let u=JSON.parse(t)||[];u.length==0&&(u=[{id:"23423423",name:"\u7BA1\u7406\u5458",account:"admin",desc:"\u7BA1\u7406\u5458\u7528\u6237\uFF0C\u67E5\u770B\u6240\u6709\u6743\u9650",update_time:"2024-07-18 20:20:20"},{id:"23234324423423",name:"\u5F20\u4E09",account:"zhangsan",desc:"zhangsan",update_time:"2024-07-19 10:20:20"}],localStorage.setItem("user",JSON.stringify(u)))}return(t,u)=>{const a=p("router-view");return c(),B("div",P,[A(a)])}}});var V=N(R,[["__scopeId","data-v-06c55518"]]);const k="modulepreload",o={},J="./",s=function(F,i){return!i||i.length===0?F():Promise.all(i.map(E=>{if(E=`${J}${E}`,E in o)return;o[E]=!0;const e=E.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${t}`))return;const u=document.createElement("link");if(u.rel=e?"stylesheet":k,e||(u.as="script",u.crossOrigin=""),u.href=E,document.head.appendChild(u),e)return new Promise((a,C)=>{u.addEventListener("load",a),u.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${E}`)))})})).then(()=>F())},T=[{path:"/",component:()=>s(()=>import("./index-6cebaea0.js"),["static/index-6cebaea0.js","static/css/index-d7359158.css","static/flv.js-98ce14be.js","static/dayjs-87914488.js","static/screenfull-6419e9e3.js","static/WaitFor-57e2b412.js","static/@vue-22a1dd50.js","static/ant-design-vue-a6fb4da4.js","static/css/ant-design-vue-be2af2e8.css","static/@ant-design-9605645d.js","static/@ctrl-6d75cd93.js","static/@babel-b147166c.js","static/resize-observer-polyfill-f6056bd3.js","static/@emotion-cf591d0e.js","static/stylis-2f05d2c7.js","static/scroll-into-view-if-needed-89343fb4.js","static/compute-scroll-into-view-ba76188b.js","static/vue-types-5fd8cc4b.js","static/dom-align-3cce50be.js","static/lodash-es-1f4dcf2e.js","static/async-validator-6f7dcde3.js","static/throttle-debounce-514b295c.js","static/@antv-8e107f90.js","static/tslib-ac9ac0a2.js","static/detect-browser-e47ad41c.js","static/gl-matrix-e9de0988.js","static/d3-ease-87ebcb0b.js","static/d3-interpolate-44f8d4ab.js","static/d3-color-720d53fe.js","static/d3-timer-5d6fe2f2.js","static/fecha-84f6ced9.js","static/size-sensor-e5f68e0b.js","static/d3-regression-d92a1bd4.js","static/d3-hierarchy-8ee04244.js","static/fmin-644a69e7.js","static/pdfast-eb98cc29.js","static/vue-router-de4e9685.js"]),redirect:"/home"},{path:"/home",component:()=>s(()=>import("./index-6cebaea0.js"),["static/index-6cebaea0.js","static/css/index-d7359158.css","static/flv.js-98ce14be.js","static/dayjs-87914488.js","static/screenfull-6419e9e3.js","static/WaitFor-57e2b412.js","static/@vue-22a1dd50.js","static/ant-design-vue-a6fb4da4.js","static/css/ant-design-vue-be2af2e8.css","static/@ant-design-9605645d.js","static/@ctrl-6d75cd93.js","static/@babel-b147166c.js","static/resize-observer-polyfill-f6056bd3.js","static/@emotion-cf591d0e.js","static/stylis-2f05d2c7.js","static/scroll-into-view-if-needed-89343fb4.js","static/compute-scroll-into-view-ba76188b.js","static/vue-types-5fd8cc4b.js","static/dom-align-3cce50be.js","static/lodash-es-1f4dcf2e.js","static/async-validator-6f7dcde3.js","static/throttle-debounce-514b295c.js","static/@antv-8e107f90.js","static/tslib-ac9ac0a2.js","static/detect-browser-e47ad41c.js","static/gl-matrix-e9de0988.js","static/d3-ease-87ebcb0b.js","static/d3-interpolate-44f8d4ab.js","static/d3-color-720d53fe.js","static/d3-timer-5d6fe2f2.js","static/fecha-84f6ced9.js","static/size-sensor-e5f68e0b.js","static/d3-regression-d92a1bd4.js","static/d3-hierarchy-8ee04244.js","static/fmin-644a69e7.js","static/pdfast-eb98cc29.js","static/vue-router-de4e9685.js"]),name:"home",meta:{title:"\u9996\u9875",icon:"HomeFilled",affix:!0}},{path:"/user",component:()=>s(()=>import("./user-ee850be5.js"),["static/user-ee850be5.js","static/css/user-a9bf6b74.css","static/dayjs-87914488.js","static/@vue-22a1dd50.js","static/ant-design-vue-a6fb4da4.js","static/css/ant-design-vue-be2af2e8.css","static/@ant-design-9605645d.js","static/@ctrl-6d75cd93.js","static/@babel-b147166c.js","static/resize-observer-polyfill-f6056bd3.js","static/@emotion-cf591d0e.js","static/stylis-2f05d2c7.js","static/scroll-into-view-if-needed-89343fb4.js","static/compute-scroll-into-view-ba76188b.js","static/vue-types-5fd8cc4b.js","static/dom-align-3cce50be.js","static/lodash-es-1f4dcf2e.js","static/async-validator-6f7dcde3.js","static/throttle-debounce-514b295c.js","static/vue-router-de4e9685.js"]),name:"user",meta:{title:"\u7528\u6237\u7BA1\u7406",icon:"Tools",roles:["admin"]}},{path:"/cultural_relics",component:()=>s(()=>import("./cultural_relics-cfe1ab59.js"),["static/cultural_relics-cfe1ab59.js","static/css/cultural_relics-07890bea.css","static/dayjs-87914488.js","static/WaitFor-57e2b412.js","static/@ant-design-9605645d.js","static/@vue-22a1dd50.js","static/@ctrl-6d75cd93.js","static/ant-design-vue-a6fb4da4.js","static/css/ant-design-vue-be2af2e8.css","static/@babel-b147166c.js","static/resize-observer-polyfill-f6056bd3.js","static/@emotion-cf591d0e.js","static/stylis-2f05d2c7.js","static/scroll-into-view-if-needed-89343fb4.js","static/compute-scroll-into-view-ba76188b.js","static/vue-types-5fd8cc4b.js","static/dom-align-3cce50be.js","static/lodash-es-1f4dcf2e.js","static/async-validator-6f7dcde3.js","static/throttle-debounce-514b295c.js","static/vue-router-de4e9685.js"]),name:"cultural_relics",meta:{title:"\u6587\u7269\u7BA1\u7406",icon:"Histogram",roles:["admin","editor"]}},{path:"/camera",component:()=>s(()=>import("./camera-f66b69f8.js"),["static/camera-f66b69f8.js","static/css/camera-6e27a8ca.css","static/dayjs-87914488.js","static/@vue-22a1dd50.js","static/ant-design-vue-a6fb4da4.js","static/css/ant-design-vue-be2af2e8.css","static/@ant-design-9605645d.js","static/@ctrl-6d75cd93.js","static/@babel-b147166c.js","static/resize-observer-polyfill-f6056bd3.js","static/@emotion-cf591d0e.js","static/stylis-2f05d2c7.js","static/scroll-into-view-if-needed-89343fb4.js","static/compute-scroll-into-view-ba76188b.js","static/vue-types-5fd8cc4b.js","static/dom-align-3cce50be.js","static/lodash-es-1f4dcf2e.js","static/async-validator-6f7dcde3.js","static/throttle-debounce-514b295c.js","static/vue-router-de4e9685.js","static/flv.js-98ce14be.js"]),name:"camera",meta:{title:"\u6444\u50CF\u5934\u7BA1\u7406",icon:"Flag",roles:["admin"]}},{path:"/:pathMatch(.*)*",redirect:"/"}],x=l({history:_("/dist/"),routes:T});D(V).use(x).use(m).mount("#app");export{N as _};
