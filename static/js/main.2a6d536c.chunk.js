(this["webpackJsonpdart-scoreboard"]=this["webpackJsonpdart-scoreboard"]||[]).push([[0],{60:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(22),s=r.n(c),i=(r(60),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,81)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))}),l=r(9),o=r(10),u=r(31),j=r(38),h=r(1),b=function(e){var t=e.title,r=e.goBackButton,n=e.resetButton,a=e.resetScoreList,c=Object(o.f)();return Object(h.jsxs)("div",{className:"header",children:[r&&Object(h.jsxs)(u.a,{onClick:function(){return c.goBack()},variant:"secondary",children:[Object(h.jsx)(j.a,{}),"Go back"]}),Object(h.jsx)("h1",{children:t}),n&&Object(h.jsx)(u.a,{onClick:function(){return a()},variant:"secondary",children:"Reset Game"})]})};var d=function(){var e={margin:"2px",padding:"10px",border:"2px solid black",borderRadius:"10px",background:"gray",width:"300px",fontSize:"25px",color:"black",display:"flex",textDecoration:"none",justifyContent:"center",alignItems:"center"};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Welcome"}),Object(h.jsxs)("div",{className:"btnTable",children:[Object(h.jsx)(l.b,{className:"optionBtn",to:"/create_player",style:e,children:"Create Player"}),Object(h.jsx)(l.b,{className:"optionBtn",to:"/rules",style:e,children:"Rules"})]})]})},y=r(17),x=r(3),O=r(6),m=r(80),g=r(74),p=r(75),f=r(51),v=r(76),P=r(11),k=function(e,t){var r=Object(n.useState)((function(){try{var r=localStorage.getItem(e);return r?JSON.parse(r):t}catch(n){return console.log(n),t}})),a=Object(O.a)(r,2),c=a[0],s=a[1];return[c,function(t){try{var r=t instanceof Function?t(c):t;s(r),localStorage.setItem(e,JSON.stringify(r))}catch(n){console.log(n)}}]},C=function(){var e=k("listOfPlayers",[]),t=Object(O.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(O.a)(c,2),i=s[0],l=s[1],o=Object(n.useState)(0),u=Object(O.a)(o,2),j=u[0],h=u[1],b=Object(n.useState)(0),d=Object(O.a)(b,2),y=d[0],x=d[1];return{playerList:r,game:i,turn:j,x01Points:y,setX01Points:x,addPlayer:function(e){a([].concat(Object(P.a)(r),[e]))},deletePlayer:function(e){var t=Object(P.a)(r);t.splice(e,1),a(t)},changeTurns:function(){h((j+1)%r.length)},getCurrentPlayer:function(){return r[j]},x01GameSelect:function(e){x(e)},assignX01PlayerScore:function(e){for(var t=Object(P.a)(r),n=0;n<t.length;n++)t[n].score=e,a(t)},assignPlayerLives:function(e){for(var t=Object(P.a)(r),n=0;n<t.length;n++)t[n].lives=Number(e),a(t)},resetScoreList:function(){for(var e=Object(P.a)(r),t=0;t<e.length;t++)e[t].scoreList=[],e[t].score=0,e[t].lives=0,a(e),h(0)},setGame:l,setPlayerList:a,setTurn:h,getCurrentPlayerByName:function(){return r[j].player},getCurrentPlayerById:function(){return r[j].id}}},L=function(e){var t=e.index,r=e.player,n=e.deletePlayer,a=r.player;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:t+1}),Object(h.jsx)("td",{children:a}),Object(h.jsx)("td",{children:Object(h.jsx)(u.a,{variant:"secondary",size:"sm",onClick:function(){return function(e){n(e)}(t)},children:"Delete"})})]},t+1)},B=function(){var e=C(),t=e.playerList,r=e.addPlayer,a=e.deletePlayer,c={id:Math.floor(100*Math.random()),player:"",score:0,scoreList:[],lives:0},s=Object(n.useState)(c),i=Object(O.a)(s,2),o=i[0],j=i[1],d=o.player;Object(n.useEffect)((function(){var e=function(e){"Enter"===e.key&&(e.preventDefault(),P())};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}));var P=function(){r(o),j(c)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Create Player",goBackButton:!0}),Object(h.jsx)(m.a,{children:Object(h.jsx)(g.a,{children:Object(h.jsxs)(p.a,{className:"justify-content-md-center",children:[Object(h.jsx)(f.a,{children:Object(h.jsx)("input",{type:"text",name:"player",placeholder:"Player Name",onChange:function(e){var t=e.target,r=t.name,n=t.value;j(Object(x.a)(Object(x.a)({},o),{},Object(y.a)({},r,n)))},value:d})}),Object(h.jsx)(f.a,{children:Object(h.jsx)(u.a,{onClick:P,children:"Add Player"})})]})})}),Object(h.jsx)(g.a,{children:Object(h.jsxs)(v.a,{striped:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Player #"}),Object(h.jsx)("th",{children:"Player Name"}),Object(h.jsx)("th",{})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,t){return Object(h.jsx)(L,{index:t,player:e,deletePlayer:a},t)}))})]})}),Object(h.jsx)(l.b,{to:"/game/create",children:Object(h.jsx)(u.a,{children:"Submit"})})]})},w=r(78),N=function(){var e=C(),t=e.game,r=e.setGame;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Create a Game",goBackButton:!0}),Object(h.jsx)("form",{children:Object(h.jsxs)(w.a,{value:t,onSelect:function(e){r(e)},children:[Object(h.jsx)(w.a.Toggle,{id:"gameDropDown",variant:"secondary",title:"Game DropDown",children:"Please Select a Game"}),Object(h.jsxs)(w.a.Menu,{variant:"dark",children:[Object(h.jsx)(w.a.Item,{as:l.b,to:"/game/x01/create",eventKey:"X01",children:"X01"}),Object(h.jsx)(w.a.Item,{as:l.b,to:"/game/baseball/",eventKey:"Baseball",children:"Baseball"}),Object(h.jsx)(w.a.Item,{as:l.b,to:"/game/elimination/create",eventKey:"Elimination",children:"Elimination"}),Object(h.jsx)(w.a.Item,{as:l.b,to:"/game/killer/create",eventKey:"Killer",children:"Killer"}),Object(h.jsx)(w.a.Item,{as:l.b,to:"/game/cricket",eventKey:"Cricket",children:"Cricket"})]})]})})]})};function S(){var e=C(),t=e.x01Points,r=e.setX01Points,n=e.x01GameSelect,a=e.assignX01PlayerScore;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"X01",goBackButton:!0}),Object(h.jsxs)(w.a,{value:t,onSelect:r,children:[Object(h.jsx)(w.a.Toggle,{id:"pointsDropdown",variant:"secondary",name:"pointsDropdown",children:"Points"}),Object(h.jsx)(w.a.Menu,{variant:"dark",children:[201,301,401,501,601,701].map((function(e){return Object(h.jsx)(w.a.Item,{eventKey:e,children:e},e)}))})]}),Object(h.jsxs)("h2",{children:["Game selected: ",t]}),Object(h.jsx)(u.a,{variant:"secondary",as:l.b,to:"/game/x01",onClick:function(){n(t),a(t)},disabled:0===t,children:"Continue to Game"})]})}var I=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Killer",goBackButton:!0}),Object(h.jsx)("h1",{children:"Coming Soon!"})]})},E=function(){var e=C().assignPlayerLives,t=Object(n.useState)(0),r=Object(O.a)(t,2),a=r[0],c=r[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Elimination",goBackButton:!0}),Object(h.jsxs)(w.a,{value:a,onSelect:function(e){c(e)},children:[Object(h.jsx)(w.a.Toggle,{id:"livesDropdown",variant:"secondary",name:"livesDropdown",children:"Lives"}),Object(h.jsx)(w.a.Menu,{variant:"dark",children:[3,4,5,6,7,8,9,10].map((function(e){return Object(h.jsx)(w.a.Item,{eventKey:e,children:e},e)}))})]}),Object(h.jsxs)("h2",{children:["Number of Lives Selected: ",a]}),Object(h.jsx)(u.a,{variant:"secondary",as:l.b,to:"/game/elimination",onClick:function(){e(a)},disabled:0===a,children:"Continue to Game"})]})},T=r(77),F=function(){return[20,19,18,17,16,15,"Del","Bull","Enter"]},D=function(e){return Object(h.jsx)(T.a,{onChange:function(){e.onChange(e.keyValue)},children:Object(h.jsx)(u.a,{variant:"secondary",onClick:function(){return e.onClick(e.keyValue)},children:e.keyValue})})},G=function(e){var t=e.playerList,r=e.setPlayerList,a=e.changeTurns,c=e.getCurrentPlayer,s=Object(n.useState)([]),i=Object(O.a)(s,2),l=i[0],o=i[1],u=function(e){l.push(e),o(Object(P.a)(l))},j=function(e){"Enter"===e?b():"Del"===e?o([]):u(e)},b=function(){var e=c();console.log("Current player for this round is: ".concat(e.player)),l.forEach((function(t){"Bull"===t?(e.scoreList.push(25),o([])):(e.scoreList.push(t),o([]))})),d()},d=function(){a(),r(Object(P.a)(t))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"scoreCalculator",children:Object(h.jsx)("div",{className:"scoreKeypad",children:F().map((function(e,t){return Object(h.jsx)(D,{name:"score",keyValue:e,onChange:u,onClick:j},t)}))})})})},K=r(28),V=r(47),X=["Player",1,2,3,4,5,6,7,8,9,"Total"],z=["Player",20,19,18,17,16,15,"Bull","Score"],A=["Player","Score","Lives"],W=["Player","Player #","Lives","Killer"],R=function(e){var t=e.variant;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:["baseball"===t&&X.map((function(e,t){return Object(h.jsx)("th",{children:e},t)})),"cricket"===t&&z.map((function(e,t){return Object(h.jsx)("th",{children:e},t)})),"elimination"===t&&A.map((function(e,t){return Object(h.jsx)("th",{children:e},t)})),"killer"===t&&W.map((function(e,t){return Object(h.jsx)("th",{children:e},t)}))]})})})},M=function(e){var t=e.playerList,r=e.variant,n=e.currentPlayer,a=e.currentPlayerById;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("tbody",{children:t.map((function(e,t){switch(r){case"baseball":return Object(h.jsx)(U,{player:e,index:t,currentPlayer:n,currentPlayerById:a},t);case"cricket":return Object(h.jsx)(J,{player:e,index:t,currentPlayer:n,currentPlayerById:a},t);case"x01":return Object(h.jsx)(H,{player:e,index:t,currentPlayer:n,currentPlayerById:a},t);case"elimination":return Object(h.jsx)(Q,{player:e,index:t,currentPlayer:n,currentPlayerById:a},t);case"killer":return Object(h.jsx)(Y,{player:e,index:t,currentPlayer:n,currentPlayerById:a},t);default:throw new Error("Invalid variant!")}}))})})},H=function(e){var t=e.player,r=e.index,n=e.currentPlayerById;return Object(h.jsxs)("tr",{children:[n===t.id?Object(h.jsxs)("th",{style:{borderColor:"black",borderWidth:"thin"},children:[t.player,Object(h.jsx)(K.a,{size:20})]}):Object(h.jsx)("th",{style:{borderColor:"black",borderWidth:"thin"},children:t.player}),Object(h.jsx)("td",{children:t.score})]},r)},q=[20,19,18,17,16,15,25],J=function(e){var t=e.player,r=e.index,n=e.currentPlayerById,a={};return t.scoreList.forEach((function(e){a[e]=a[e]?a[e]+1:1})),q.forEach((function(e){a[e]>3&&(t.score+=e)})),console.log({hitCount:a}),Object(h.jsxs)("tr",{children:[n===t.id?Object(h.jsxs)("th",{style:{borderColor:"black"},children:[t.player,Object(h.jsx)(K.a,{size:20})]},r):Object(h.jsx)("th",{style:{borderColor:"black"},children:t.player},r),q.map((function(e,t){return Object(h.jsx)("td",{children:Object(h.jsx)(_,{hitCount:a,target:e})},t)})),Object(h.jsx)("td",{children:t.score})]},r)},_=function(e){var t=e.hitCount,r=e.target;return 1===t[r]?Object(h.jsx)(j.b,{style:{fontSize:"25px"}}):2===t[r]?Object(h.jsx)(V.a,{style:{fontSize:"20px"}}):t[r]>=3?Object(h.jsx)(V.b,{style:{fontSize:"28px"}}):null},U=function(e){var t=e.player,r=e.index,n=e.currentPlayerById;return Object(h.jsxs)("tr",{children:[n===t.id?Object(h.jsxs)("th",{style:{borderColor:"black"},children:[t.player,Object(h.jsx)(K.a,{size:20})]}):Object(h.jsx)("th",{style:{borderColor:"black"},children:t.player}),Object(h.jsx)("td",{children:t.scoreList[0]}),Object(h.jsx)("td",{children:t.scoreList[1]}),Object(h.jsx)("td",{children:t.scoreList[2]}),Object(h.jsx)("td",{children:t.scoreList[3]}),Object(h.jsx)("td",{children:t.scoreList[4]}),Object(h.jsx)("td",{children:t.scoreList[5]}),Object(h.jsx)("td",{children:t.scoreList[6]}),Object(h.jsx)("td",{children:t.scoreList[7]}),Object(h.jsx)("td",{children:t.scoreList[8]}),Object(h.jsx)("td",{children:t.scoreList.reduce((function(e,t){return e+t}),0)})]},r)},Q=function(e){var t=e.player,r=e.index,n=e.currentPlayerById;return Object(h.jsxs)("tr",{children:[n===t.id?Object(h.jsxs)("th",{style:{borderColor:"black"},children:[t.player,Object(h.jsx)(K.a,{size:20})]}):Object(h.jsx)("th",{style:{borderColor:"black"},children:t.player}),Object(h.jsx)("td",{children:t.score}),Object(h.jsx)("td",{children:t.lives})]},r)},Y=function(e){var t=e.player,r=e.index,n=e.currentPlayerById;return Object(h.jsxs)("tr",{children:[n===t.id?Object(h.jsxs)("th",{style:{borderColor:"black"},children:[t.player,Object(h.jsx)(K.a,{size:20})]}):Object(h.jsx)("th",{style:{borderColor:"black"},children:t.player}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{})]},r)},Z=function(e){var t=e.playerList,r=e.x01Points,n=e.getCurrentPlayer,a=e.getCurrentPlayerByName,c=e.getCurrentPlayerById,s=e.variant,i=n(),l=a(),o=c();return Object(h.jsxs)(h.Fragment,{children:["It's ",l,"'s turn !",Object(h.jsxs)(v.a,{children:[Object(h.jsx)(R,{variant:s}),Object(h.jsx)(M,{playerList:t,variant:s,x01Points:r,currentPlayer:i,currentPlayerById:o})]})]})},$=function(){var e=C(),t=e.playerList,r=e.setPlayerList,n=e.changeTurns,a=e.getCurrentPlayer,c=e.resetScoreList,s=e.turn,i=e.getCurrentPlayerById,l=e.getCurrentPlayerByName;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Cricket",resetScoreList:c,goBackButton:!0,resetButton:!0}),Object(h.jsx)(Z,{playerList:t,variant:"cricket",getCurrentPlayer:a,getCurrentPlayerById:i,getCurrentPlayerByName:l}),Object(h.jsx)(G,{playerList:t,setPlayerList:r,changeTurns:n,getCurrentPlayer:a,turn:s})]})},ee=r(79),te=function(){return[9,8,7,6,5,4,3,2,1,"Del","0","Enter"]},re=function(e){return Object(h.jsx)(T.a,{onChange:function(){e.onChange(e.keyValue)},children:Object(h.jsx)(u.a,{variant:"secondary",onClick:function(){return e.onClick(e.keyValue)},children:e.keyValue})})},ne=function(e){var t=e.playerList,r=e.setPlayerList,a=e.changeTurns,c=e.getCurrentPlayer,s=e.resetScoreList,i=e.round,o=e.setRound,j=Object(n.useState)(0),b=Object(O.a)(j,2),d=b[0],y=b[1],x=function(e){y("".concat(d).concat(e))},m=function(){y(0)},g=function(e){"Enter"===e?(p(),y(0)):"Del"===e?m():x(e)},p=function(){var e=parseInt(d,10);isNaN(e)||f(e)},f=function(e){c().scoreList.push(e),r(Object(P.a)(t)),a(),v(),C()},v=function(){o(i+1)},k=function(){s(),o(0)},C=function(){var e=Math.floor(9*t.length);if(i===e){var r=-1,n=null;return t.forEach((function(e){var t=e.scoreList.reduce((function(e,t){return e+t}),0);t>r&&(r=t,n=e.player)})),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(ee.a,{variant:"success",style:{fontWeight:"bold"},children:[Object(h.jsxs)("p",{children:["The WINNER is: ",n]}),Object(h.jsx)("p",{children:"Congratulations!"}),Object(h.jsx)(u.a,{variant:"success",className:"m-3",onClick:function(){return k()},children:"Play Again"}),Object(h.jsx)(u.a,{variant:"success",as:l.b,to:"/game/create",onClick:function(){return k()},children:"Choose another game"})]})})}};return Object(n.useEffect)((function(){var e=function(e){var t=parseInt(d,10);(e.key<=57||e.key>=48)&&y(t+e.key),"Enter"===e.key?(p(),y(0)):"Backspace"===e.key&&m()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}})),Object(h.jsxs)(h.Fragment,{children:[C()?C():Object(h.jsxs)("p",{children:["Total: ",d]}),Object(h.jsx)("div",{className:"scoreCalculator",children:Object(h.jsx)("div",{className:"scoreInput",children:Object(h.jsx)("div",{className:"scoreKeypad",children:!C()&&te().map((function(e,t){return Object(h.jsx)(re,{name:"score",keyValue:e,onClick:g,onChange:x},t)}))})})})]})},ae=function(){var e=C(),t=e.playerList,r=e.setPlayerList,a=e.changeTurns,c=e.getCurrentPlayer,s=e.resetScoreList,i=e.turn,l=e.getCurrentPlayerById,o=e.getCurrentPlayerByName,u=Object(n.useState)(0),j=Object(O.a)(u,2),d=j[0],y=j[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Baseball",goBackButton:!0,resetButton:!0,resetScoreList:s}),Object(h.jsx)(Z,{playerList:t,variant:"baseball",getCurrentPlayer:c,getCurrentPlayerByName:o,getCurrentPlayerById:l,round:d}),Object(h.jsx)(ne,{playerList:t,setPlayerList:r,changeTurns:a,getCurrentPlayer:c,setRound:y,round:d,turn:i,resetScoreList:s})]})},ce=function(){return[9,8,7,6,5,4,3,2,1,"Del","0","Enter"]},se=function(e){return Object(h.jsx)(T.a,{onChange:function(){e.onChange(e.keyValue)},children:Object(h.jsx)(u.a,{variant:"secondary",onClick:function(){return e.onClick(e.keyValue)},children:e.keyValue})})},ie=function(e){var t=e.playerList,r=e.setPlayerList,a=e.changeTurns,c=e.getCurrentPlayer,s=e.resetScoreList,i=Object(n.useState)(""),o=Object(O.a)(i,2),j=o[0],b=o[1],d=function(e){b("".concat(j).concat(e))},y=function(){b("")},x=function(e){"Enter"===e?(m(),b("")):"Del"===e?y():d(e)},m=function(){var e=parseInt(j,10);isNaN(e)||g(e)},g=function(e){c().score-=e,r(Object(P.a)(t)),a(),p()},p=function(){var e=null;return t.forEach((function(t){0===t.score&&(e=t.player)})),e?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(ee.a,{variant:"success",style:{fontWeight:"bold"},children:[Object(h.jsxs)("p",{children:["The WINNER is: ",e]}),Object(h.jsx)("p",{children:"Congratulations!"}),Object(h.jsx)(u.a,{variant:"success",as:l.b,to:"/game/x01/create",className:"m-3",onClick:function(){return s()},children:"Play Again"}),Object(h.jsx)(u.a,{variant:"success",as:l.b,to:"/game/create",onClick:function(){return s()},children:"Choose another game"})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("p",{children:["Total: ",j]})})};return Object(n.useEffect)((function(){var e=function(e){var t=j;(e.key<=57||e.key>=48)&&b(t+e.key),"Enter"===e.key?(m(),b("")):"Backspace"===e.key&&y()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}})),Object(h.jsxs)(h.Fragment,{children:[p(),Object(h.jsx)("div",{className:"scoreCalculator",children:Object(h.jsx)("div",{className:"scoreKeypad",children:ce().map((function(e,t){return Object(h.jsx)(se,{name:"score",keyValue:e,onClick:x,onChange:d},t)}))})})]})},le=function(){var e=C(),t=e.x01Points,r=e.assignX01PlayerScore,n=e.playerList,a=e.setPlayerList,c=e.changeTurns,s=e.resetScoreList,i=e.getCurrentPlayer,l=e.getCurrentPlayerById,o=e.getCurrentPlayerByName;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:t,goBackButton:!0,resetButton:!0,resetScoreList:s}),Object(h.jsx)(Z,{variant:"x01",x01Points:t,playerList:n,setPlayerList:a,getCurrentPlayer:i,getCurrentPlayerById:l,getCurrentPlayerByName:o}),Object(h.jsx)(ie,{playerList:n,setPlayerList:a,changeTurns:c,getCurrentPlayer:i,assignX01PlayerScore:r,resetScoreList:s,x01Points:t})]})},oe=function(){return[9,8,7,6,5,4,3,2,1,"Del","0","Enter"]},ue=function(e){return Object(h.jsx)(T.a,{onChange:function(){e.onChange(e.keyValue)},children:Object(h.jsx)(u.a,{variant:"secondary",onClick:function(){return e.onClick(e.keyValue)},children:e.keyValue})})},je=function(e){var t=e.playerList,r=e.setPlayerList,a=e.changeTurns,c=e.turn,s=e.resetScoreList,i=Object(n.useState)(0),o=Object(O.a)(i,2),j=o[0],b=o[1],d=Object(n.useState)(-1),y=Object(O.a)(d,2),x=y[0],m=y[1],g=Object(n.useState)([]),p=Object(O.a)(g,2),f=p[0],v=p[1],k=function(e){b("".concat(j).concat(e))},C=function(){b(0)},L=function(e){"Enter"===e?(B(),b(0)):"Del"===e?C():k(e)},B=function(){var e=parseInt(j,10);isNaN(e)||w(e)},w=function(e){var n=t[c];if(0!==n.lives){n.scoreList.push(e);for(var s=0;s<n.scoreList.length;s++)n.score=n.scoreList[s],n.score<x&&(n.lives-=1)}0===n.lives?(f.push(n),v(Object(P.a)(f))):a(),m(n.score),r(Object(P.a)(t)),a(),N()},N=function(){var e=null;if(t.length===f.length+1&&(t.forEach((function(t){t.lives>0&&(e=t.player,console.log("The winner is ".concat(e)))})),e))return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(ee.a,{variant:"success",style:{fontWeight:"bold"},children:[Object(h.jsxs)("p",{children:["The WINNER is: ",e]}),Object(h.jsx)("p",{children:"Congratulations!"}),Object(h.jsx)(u.a,{variant:"success",className:"m-3",as:l.b,to:"/game/elimination/create",onClick:function(){return s()},children:"Play Again"}),Object(h.jsx)(u.a,{variant:"success",as:l.b,to:"/game/create",onClick:function(){return s()},children:"Choose another game"})]})})};return Object(n.useEffect)((function(){var e=function(e){var t=j;(e.key<=57||e.key>=48)&&b(t+e.key),"Enter"===e.key?(B(),b(0)):"Backspace"===e.key&&C()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}})),Object(h.jsxs)(h.Fragment,{children:[N()?N():Object(h.jsxs)("p",{children:["Total: ",j]}),Object(h.jsx)("div",{className:"scoreCalculator",children:Object(h.jsx)("div",{className:"scoreInput",children:Object(h.jsx)("div",{className:"scoreKeypad",children:oe().map((function(e,t){return Object(h.jsx)(ue,{name:"score",keyValue:e,onClick:L,onChange:k},t)}))})})})]})},he=function(){var e=C(),t=e.playerList,r=e.setPlayerList,n=e.changeTurns,a=e.getCurrentPlayer,c=e.getCurrentPlayerByName,s=e.getCurrentPlayerById,i=e.resetScoreList,l=e.turn;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Elimination",goBackButton:!0,resetButton:!0,resetScoreList:i}),Object(h.jsx)(Z,{playerList:t,variant:"elimination",getCurrentPlayer:a,getCurrentPlayerByName:c,getCurrentPlayerById:s}),Object(h.jsx)(je,{playerList:t,setPlayerList:r,changeTurns:n,turn:l,resetScoreList:i})]})},be=function(){var e=C(),t=e.playerList,r=e.getCurrentPlayer,n=e.getCurrentPlayerByName,a=e.getCurrentPlayerById,c=e.resetScoreList;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Killer",goBackButton:!0,resetButton:!0,resetScoreList:c}),Object(h.jsx)(Z,{variant:"killer",playerList:t,getCurrentPlayer:r,getCurrentPlayerById:a,getCurrentPlayerByName:n})]})},de=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{title:"Rules",goBackButton:!0}),Object(h.jsx)("h1",{className:"ruleHeader",children:"X01:"}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Game Play:"})," X01 is a tournament style game, where players start with X01 points and lower their score to exactly 0. First players have to define how many points they start with (typically 301 or 501) be can be any number of points the players want."]}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Scoring:"})," This game can be played either by double-in and double-out or just double out. Player take turns throwing darts into the board, adding up their points based on their scores. Then they subtract that from the number of points they have remaining. In order to successfully win the game, players must hit their score exactly on 0 by hitting a double, once this happens the game is over and that player wins."]}),Object(h.jsx)("hr",{})]})},ye=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"ruleHeader",children:"Baseball:"}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Game Play:"})," Players each take turns throwing three darts, starting with the 1. Once all players have thrown at the 1, the start of the next round players will throw at the 2. The game continues until all players have throw at the numbers 1 through 9 (like innings in a baseball game)."]}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Scoring:"})," As players throw at the numbers 1 - 9, scoring works as a single is 1, a double is 2, and a treble is 3. Players record their score, and whoever has the most points at the end of the game wins."]}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Note:"}),' As we play the game, there are a few exceptions. If a player successfully lands three darts in the number they are shooting for (single,double or treble), then that players hits a " home run " and darts are returned to hand and that player gets to re-shoot for that number.',Object(h.jsx)("br",{}),'Also, once the 9th inning has been reached if there is a tie, then the tieing players go into " extra innings ". Gameplay is then continued onto the 10 (maybe 11, 12, etc...) in a sudden death format. Both players shoot their 3 darts, and whoever has the most points, win.']}),Object(h.jsx)("hr",{})]})},xe=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"ruleHeader",children:"Cricket:"}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Game Play:"}),' Players take turns throwing three darts at the board, hitting the numbers 15 through 20; bulls-eye included. The game requires players to "close" the numbers by hitting them three times, once a player has all numbers "closed" the game ends. If a player hits a number outside of the 15 through 20 and bulls-eye then it doesn\'t have any effect to their score.']}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Scoring:"}),' If a player hits a single, it accounts for 1 mark on a number, a double counts as 2, and a treble counts as 3. Once a number has been "closed" by one player, it remains open for that player to score points on that number until all other players have "closed" the number. Ultimately the player who "closes" out all their numbers first win, unless another player has accumulated points (hit an open number more then three times). The game continues then until either the player without the numbers "closed", closes their respective numbers or the player with all numbers "closed" accumulates more points.']}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Note:"})," When it comes to the bulls-eye, a true bulls-eye is worth 2 of the 3 required marks for bull and a cow is worth 1 of the 3 required."]}),Object(h.jsx)("hr",{})]})},Oe=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"ruleHeader",children:"Elimination:"}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Game Play:"})," Players alternate throwing 3 darts at the board trying to achieve the highest possible scoring hand. The next player must score higher then the player in front of them, if the throwing player fails to do that then they lose a life, but if the throwing player successfully scores higer then they do not lose a life and the next player throws their darts. Typically games are played with a defined number of lives(we usually use 5). Game play continues until there is only one player left with lives."]}),Object(h.jsx)("hr",{})]})},me=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"ruleHeader",children:"Killer:"}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Game Play:"}),' The game begins by players throwing darts into the board with their hand opposite for throwing. (If I was right-handed, I would use my left hand for this.) A players number is assigned with whatever number you successfully hit (doubles and trebles are excluded in this). Once all players have been "assigned" a number game play will begin with the player with the lowest number and counting up.']}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"Scoring:"}),' Players take turns shooting at their assigned numbers (singles are 1, doubles are 2, trebles are 3), players gain lives relative to the scoring. Once a player reaches 5 lives, they are classified as a "Killer", once a player becomes a killer they begin then shooting towards other players numbers. If a player(s) is unsuccessful in hitting their number prior to a player becoming a killer they are eliminated from the game. There can be more then one killer at a time, and game play continues until there is only one player remaining.']}),Object(h.jsxs)("p",{className:"rulePar",children:[Object(h.jsx)("b",{children:"A few additional rules:"})," If a player has 4 lives and hits a double of their number, they in fact do not become a killer but instead they bring themself up to 5 then back down to 4 again. As such, if a player is a killer and they strike their own number instead of another player they bring their lives down equivilent to that score."]})]})},ge=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(de,{}),Object(h.jsx)(ye,{}),Object(h.jsx)(xe,{}),Object(h.jsx)(Oe,{}),Object(h.jsx)(me,{})]})};function pe(){return Object(h.jsx)(l.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:d}),Object(h.jsx)(o.a,{path:"/game/create",component:N}),Object(h.jsx)(o.a,{path:"/create_player",component:B}),Object(h.jsx)(o.a,{exact:!0,path:"/game/cricket",component:$}),Object(h.jsx)(o.a,{exact:!0,path:"/game/baseball",component:ae}),Object(h.jsx)(o.a,{exact:!0,path:"/game/x01",component:le}),Object(h.jsx)(o.a,{exact:!0,path:"/game/elimination",component:he}),Object(h.jsx)(o.a,{exact:!0,path:"/game/killer",component:be}),Object(h.jsx)(o.a,{path:"/game/x01/create",component:S}),Object(h.jsx)(o.a,{path:"/game/elimination/create",component:E}),Object(h.jsx)(o.a,{path:"/game/killer/create",component:I}),Object(h.jsx)(o.a,{path:"/rules",component:ge})]})})}r(66),r(67);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(pe,{})}),document.getElementById("root")),i()}},[[68,1,2]]]);
//# sourceMappingURL=main.2a6d536c.chunk.js.map