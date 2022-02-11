import "../assets/css/style.css";

// const app = document.getElementById("app");

// app.innerHTML = `<h1>Javascript Basic</h1>
// <ul id="myUl">
//    <li>1</li>
//   </ul>`;

// interview purpose : Inheritance achiving in ES5

/*

 one object can acces the member (propert and method) from another object
 (resusablity , maintainbility , sclaibility)

  parent class --> Human --> property ---> firstname , lastname , age
                           --> method   --> getfirstname() --> this.firstname
                           --> method   --> getfullName() --> firstname + lastname
          
                                

    child  class --> Employee --> Property --> salary 
                              method   --> getsalary() --> salary
                              method   --> getfullInformation() -->   firstname , lastname , age , salary                   


  super() ---> callimd the parent constructor from child class

  this is the rule whenever you are doing inheritance , you must have to call parent constructor from child constructor using super function

*/

/*
class Human {
  firstname;
  lastname;
  age;

  constructor(fn, ln, ag) {
    this.firstname = fn;
    this.lastname = ln;
    this.age = ag;
  }

  getfirstname() {
    console.log(this.firstname);
  }

  getfullName() {
    console.log(this.firstname + this.lastname);
  }
}

class Employee extends Human {
  salary;
  constructor(fn, ln, ag, sal) {
    super(fn, ln, ag);
    this.salary = sal;
  }

  getsalary() {
    console.log(this.salary);
  }

  getfullInformation() {
    console.log(this.firstname + this.lastname + this.salary + this.age);
  }
}

const emp1 = new Employee("sarang", "jain", 32, 50000);
// emp1.___proto = Employee.prototype

 //  Employee.prototype : { getsalary() , getfullInformation()}

 

console.log(emp1);

console.log(emp1 instanceof Employee);
console.log(emp1 instanceof Human);
console.log(emp1 instanceof Object);
*/

/*

 one object can acces the member (propert and method) from another object
 (resusablity , maintainbility , sclaibility)

  parent class --> Human --> property ---> firstname , lastname , age
                           --> method   --> getfirstname() --> this.firstname
                           --> method   --> getfullName() --> firstname + lastname
          
                                

    child  class --> Employee --> Property --> salary 
                              method   --> getsalary() --> salary
                              method   --> getfullInformation() -->   firstname , lastname , age , salary                   


  super() ---> callimd the parent constructor from child class

  this is the rule whenever you are doing inheritance , you must have to call parent constructor from child constructor using super function

*/

/*
function Human(fn, ln, ag) {
  this.firstname = fn;
  this.lastname = ln;
  this.age = ag;
}

// Human.prototype = {getfirstname() , getfullName()}

Human.prototype.getfirstname = function () {
  console.log(this.firstname);
};

Human.prototype.getfullName = function () {
  console.log(this.firstname + this.lastname);
};

var vasu = new Human("vasu", "shrivastava", 25);

// ==============================

function Employee(fn, ln, ag, sl) {
  Human.call(this, fn, ln, ag); // this line inheritedd all the property members of parent , not method
  this.salary = sl;
}

Employee.prototype = Human.prototype;

Employee.prototype = Human.prototype; // this line inheritedd all the property member (method)

Employee.prototype = new Human(); //--> not recommnede

Employee.prototype.getsalary = function () {
  console.log(this.salary);
};

Employee.prototype.getFullInformation = function () {
  console.log(this.firstname + this.lastname + this.age + this.salary);
};

let emp1 = new Employee("sarang", "jain", 32, 5000);
// emp1.__proto__ = Employee.prototype
console.log(emp1);
//emp1.getFullInformation();

emp1.getfullName();

*/

/*
===========================================
// DOM ----> DOCUMENT OBJECT MODEL

//  what is dom nodes
// console.log(document);
// console.dir(document);

// // html nodes
// console.log(document.documentElement);
// console.dir(document.documentElement);

// // body nodes
// console.log(document.body);
// console.dir(document.body);

// // head node
// console.log(document.head);
// console.dir(document.head);

console.log("--------------------------------------------");

console.dir(document.body instanceof HTMLBodyElement);
console.dir(document.body instanceof HTMLElement);
console.dir(document.body instanceof Element);
console.dir(document.body instanceof Node);
console.dir(document.body instanceof EventTarget);

console.dir(app);



// Nodetype --> number
console.log(document.body.nodeType);
console.log(document.nodeType);

// nodetype name
console.log(document.body.nodeName);
console.log(document.nodeName);

// tagname
console.log(document.body.tagName);
console.log(document.tagName);

*/

/*Node Type
https://www.w3schools.com/jsref/prop_node_nodetype.asp
1	Element	
2	Attr	
3	Text	
4	CDATASection	
5	EntityReference	
6	Entity	
7	ProcessingInstruction	
8	Comment	
9	Document	
10	DocumentType	
11 	DocumentFragment	
12	Notation
*/

// // how to create nodes.

// const div = document.createElement("div");
// const text = document.createTextNode("this is dom");
// const comment = document.createComment("This is my commment");

// // append --> we can put inside the node others node

// div.append(text);
// app.append(div);
// app.append(comment);

// let myul = document.createElement("ul");
// let li = document.createElement("li");
// let liText = document.createTextNode("I am li text");

// li.append(liText);
// myul.append(li);

// console.log(myul);

// app.append(myul);

//=======================================================
// let h1Tag = document.createElement("h1");
// h1Tag.innerText = "This is Dom class";
// app.append(h1Tag);

// // getter dom content......
// // gives the full html visible or onvisible.
// console.log(app.innerHTML);
// // give the text , remove whitespaces. only return visible text
// // applies on Elements
// console.log(app.innerText);
// // give the full text (visible or invisible), inclusing whitespaces etc
// // aplies on nodes
// console.log(app.textContent);
// //==================================================================
// // creating dom node using innerHtml with literal string v/s createelement

// // create dom node using createelement
// function createInputElement({label,type}){
//   const labelElem=document.createElement("label");
//   const inputElem=document.createElement("input");
//   labelElem.innerText=label;
//   inputElem.type=type;
//   labelElem.append(inputElem);
//   return labelElem;
// }

// const namefield= createInputElement({label:"first name",type:"text"});
// console.log(namefield);
// app.append(namefield);

// // create dom node  using innerHtml with literal string
// function createInputElement2({label,type}){
//   return ` <label>${label}<input type="${type}"</label>`;
// }

// const pwd= createInputElement2({label:"pwd please",type:"password"});
// app.innerHTML+=pwd;
// console.log(pwd);

// // inserting dom elements (node)
// const div=document.createElement("div");
// const span=document.createElement("span");
// const p=document.createElement("p");
// const i=document.createElement("i");
// const b=document.createElement("b");

// div.append(span);
// div.prepend(i);
// span.after(p);
// span.before(b);
// app.append(div);
// console.log(app);
// //================================================

// // inserting string template :getelementbyid() returns an Element object that describes the DOM element object with the specified id
// const ulElement= document.getElementById("myUl");
// console.log(ulElement);
// ulElement.insertAdjacentHTML("beforebegin", `<p>My onordered list</p>`);
// ulElement.insertAdjacentHTML("afterbegin", `<li>first item position</li>`);
// ulElement.insertAdjacentHTML("beforeend", `<li>last item position</li>`);
// ulElement.insertAdjacentHTML("afterend", `<p> list is completed</p>`);

//=======================================================
//replacing dom element
// const app = document.getElementById("app");
// app.innerHTML=`<h1> javascript dom</h1>
// <div id="divelem"> RELACE ME</div>`;

// const divelem= document.getElementById("divelem");
// console.log(divelem);

// const newdiv= document.createElement("div");
// newdiv.innerText="i will replace";

// setTimeout(() => {
//   divelem.replaceWith(newdiv);
// }, 3000);

//======================================================

//cloning the dom
// const app = document.getElementById("app");
// app.innerHTML=`<h1> javascript dom</h1>`;

// const div = document.createElement("div");
// const span = document.createElement("span");

// span.innerText="CLONE ME";
// div.append(span);

// console.log(div);
// app.append(div);

// const clone = div.cloneNode(true); //only cloneme clonned
// console.log(clone);
// app.append(clone);

// const appclone= app.cloneNode(true); //whole app clone
// console.log(appclone);
// app.append(appclone);
//=======================================================

//remove dom nodes
// const app = document.getElementById("app");
// app.innerHTML=`<h1> javascript dom</h1>`;

// const div= document.createElement("div");
// div.innerText="I am a message";
// app.append(div);
// setTimeout(() => {
//   div.remove();
//   app.remove();
// }, 2000);
//=========================================================

//querying dom nodes
//getelementbyid:live data

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <ul id="ulElement" class="ul-list"></ul>
// `;
// const ulElem = document.getElementById("ulElement");

// const names = ["A", "B", "C", "D"];
// names.forEach((name) => {
//   const liItem = document.createElement("li");
//   liItem.textContent = name;
//   //liItem.className = "li-list";
//   ulElem.append(liItem);
// });
// console.dir(ulElem);
//==============================================

//getElementsByClassName :  HTMLCollection live collection
// const listbyclassname = document.getElementsByClassName("li-list");
// console.log(listbyclassname);

// const newfriend= `<li class="li-list">nida</li>`;
// ulElem.innerHTML+=newfriend;

// //// getElementBYTagname :  HTMLCollection live collection
// const listByTagname = document.getElementsByTagName("li");
// console.log(listByTagname);
// console.log("===================");

// console.log(listbyclassname);
//=================================================

// Querying DOM Nodes (NodeLists)---> this gives snapshot

// const app= document.getElementById("app");
// app.innerHTML=`<h1>javascript dom</h1>
// <ul id="ulelement" class="ul-list"></ul>`;

// const ulelem= document.querySelector("ul");
// console.log(ulelem);

// const names=["a","b","c","d"];
// names.forEach((name)=>{
//   const liitem= document.createElement("li");
//   liitem.textContent=name;
//   liitem.className="li-list";
//   ulelem.append(liitem);
//});
//=============================================

//querySelectorAll :nodeList
// const app= document.getElementById("app");
// app.innerHTML=`<h1>javascript dom</h1>
// <ul id="ulelement" class="ul-list"></ul>`;

// const ulelem= document.querySelector("ul");
// console.log(ulelem);

// const names=["a","b","c","d"];
// names.forEach((name)=>{
//   const liitem= document.createElement("li");
//   liitem.textContent=name;
//   liitem.className="li-list";
//   ulelem.append(liitem);
// });
// const ulElemt = `<li class="li-list">e</li>`;
// ulelem.innerHTML += ulElemt;
// const ulElemt1 = `<li class="li-list">f</li>`;
// ulelem.innerHTML += ulElemt1;
// const ulElemAll = document.querySelectorAll("li");
// console.log(ulElemAll);
//========================================================
// Looping over DOM Elements
// const app = document.getElementById("app");
// app.innerHTML = `<h1>javascriptt dom</h1>
//                   <ul id="ulelem" class="ul-list">
//                   <li class="li-list">A</li>
//                   <li class="li-list">B</li>
//                   <li class="li-list">C</li>
//                   <li class="li-list">D</li></ul>`;
// const ullielem = document.querySelectorAll(".li-list");
// console.log(ullielem);

// for (let i = 0; i < ullielem.length; i++) {
//   console.log(ullielem[i]);
// }
// console.log("===for..of====");
// for (let item of ullielem) {
//   console.log(item);
// }

// ullielem.forEach((item) => console.log(item));
// [...ullielem].forEach((item) => console.log(item));

// // Finding Child Elements
// const ulElemet = document.querySelector("#ulelem"); //id ke baad children access
// const liElemnts = ulElemet.querySelectorAll(".li-list");
// console.log(ulElemet);
// console.log(liElemnts);
// console.log("===childre/childNodes==========");
// console.log(ulElemet.children); // HtmlCollection
// console.log(ulElemet.childNodes); // nodes with whitespace
// //=========================================================
// console.log("===first/last==========");
// console.log(ulElemet.firstChild);
// console.log(ulElemet.firstElementChild);
// // using inerHtml and using createElement
// console.log(ulElemet.lastChild);
// console.log(ulElemet.lastElementChild);
//=============================================================
// finding parent element
// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>Javascript Basic</h1>
//   <button> Click Me </button>
//   <div class="item"></div>`;

// console.log(app);
// const div = document.querySelector(".item");
// console.log(div);
// console.log(div.parentNode);
// console.log(div.parentNode.parentNode.parentNode);
// console.log(div.closest("#app"));
//===============================================
// finding the sibling
// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <ul id="ulElement" class="ul-list">
//     <li class="li-list">Sarng</li>
//     <li class="li-list">Saurabh</li>
//     <li class="li-list">manish</li>
//     <li class="li-list">kk</li>
//  </ul>
// `;
// const listItem = document.querySelector("#ulElement li");
// console.log(listItem);
// // next sibling
// console.log(listItem.nextSibling);
// console.log(listItem.nextElementSibling);
// console.log(listItem.previousSibling);
// console.log(listItem.previousElementSibling);
//=================================================
// ******** Html attributes v/s javascript dom properties**************
// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <input type="text" />
//   `;

// const input = document.querySelector("input");
// console.log(input);
// input.value = 40;
// console.log(input.value);

// input.setAttribute("value", 50);

//============================================================

// ******** setting and getting styles**************
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Javascript Basic</h1>
//    <button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button>

//    `;
// const btn = document.querySelector("button");
// console.log(btn.style.cssText);
// const myStyle =
//   "padding:20px; font-size:20; color:red;border-left:2px solid green";
// btn.style.cssText = myStyle;
// btn.style.padding = "20px";
// btn.style.fontSize = "20px";
// btn.style.color = "red";
// btn.style["border-left"] = "2px solid green";
// document.querySelector("h1").style.color = "red";
//======================================================
// setting and getting class
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Javascript Basic</h1>
//    <!--button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button--!>
//    <button class="one  two"> Click Me </button>
//    `;
// const btn = document.querySelector("button");
// console.log(btn.className);
// btn.className += "two"; //old way
// btn.classList.add("three");
// console.log(btn.className);

// btn.classList.toggle("twotwo");
// console.log(btn.className);
//===================================================
// *****************Event ****************\
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Javascript Basic</h1>
//    <!--button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button--!>
//    <button class="one  two"> Click Me </button>
//    `;

// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");
// // event capturing
// btn.onmouseenter = function () {
//   console.log("entered");
// };

// btn.onmouseleave = function () {
//   console.log("leaving");
// };

// h1.onclick = function () {
//   console.log("I am also clicked");
// };

// h1.oncopy = function () {
//   console.log("I am copied");
// };
//==============================================================

//// event listing using addEventListner // this is the recommened way to use
// node.addEventListener('event name' , 'function name')
//capturing, bubbling

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Javascript Basic</h1>
//    <!--button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button--!>
//    <button class="one  two"> Click Me </button>
//    `;
// const btn = document.querySelector("button");
// function handleclick() {
//   console.log("task 1");
// }

// function handleclick2() {
//   console.log("task 2");
// }

// btn.addEventListener("click", handleclick);
// btn.addEventListener("click", handleclick2);
// btn.addEventListener("click", () => {
//   console.log("task 3");
// });

// function handleClick3(ev) {
//   console.log(ev); // all the information about event
//   console.log(this); // this will be the same node , where addEventListener applied
//   console.log(ev.target);
//   console.log("click event");
// }
// btn.addEventListener("click", handleClick3);
// console.log("==============================");
// btn.addEventListener("click", (ev) => {
//   console.log(ev);
//   // console.log(this);
//   console.log(ev.target);
//   console.log("click from arrow function");
// });
//========================================================
// 2) Remove  Event listnets

// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Javascript Basic</h1>
//    <!--button style="padding:20px; font-size:20; color:red;border-left:2px solid green"> Click Me </button--!>
//    <button class="one  two"> Click Me </button>
//    `;
// const btn = document.querySelector("button");
// function handleClickonlyOnce() {
//   console.log("clicked happened");
//   btn.removeEventListener("click", handleClickonlyOnce);
// }
// btn.addEventListener("click", handleClickonlyOnce);
// btn.addEventListener("click", () => {
//   console.log("clicked happened from arrow");
//   });

//====================================================
// 3) event-bubbling-capturing-propagation
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Javascript Basic</h1>
//  <div class="one" style ="border:1px solid red; padding:20px">
//     <div class="two" style ="border:1px solid green; padding:20px">
//      <button> Click Me </button>
//     </div>
//  </div>
//  `;

// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const btn = document.querySelector("button");

// function handleClick(event) {
//   event.stopImmediatePropagation();
//   console.log(event.target);
// }
// function handleClickOne(event) {
//   console.log(event.target); // target
// }
// function handleClickTwo(event) {
//   console.log(event.target); // target
// }
// one.addEventListener("click", handleClickOne);
// two.addEventListener("click", handleClickTwo);
// btn.addEventListener("click", handleClick);
//=======================================================

// preventing-default-event-actions
// const app = document.getElementById("app");
// app.innerHTML = `<h1>javascript dom</h1>
//                  <form>
//                  <label>Sign Up Email
//                  <input type="email" id="email"/>
//                  </label>

//                  <label for="condition"><input type="checkbox" id="condition" name="condition" value="yes">I agree terms and conditions

//                  </label>

//                  <input type="submit">
//                  <a href="www.google.com">click me</a>
//                  </form>`;

// //event prevent default
// const form = document.querySelector("form");
// const email = document.querySelector("#email");
// const condition = document.querySelector("#condition");
// const anchor = document.querySelector("a");

// //register form submit event
// form.addEventListener("submit", handleform);
// condition.addEventListener("click", handlecheckbox);
// anchor.addEventListener("click", (event) => {
//   event.preventDefault();
// });

// function handleform(event) {
//   event.preventDefault();
//   if (email.value && condition.checked) {
//     alert("form submitted successfully");
//   } else {
//     alert("fill correct details");
//   }
// }

// function handlecheckbox(event) {
//   event.preventDefault();
//   console.log(condition.checked);
// }
//========================================================

//event-delegation-dynamic-events

// const app = document.getElementById("app");
// app.innerHTML = `<h1> javascript dom</h1>
//                 <button> add list</button>
//                 <ul id="list" style="border:1px solid red">
//                 <li>item 1</li>
//                 <li>item 2</li>
//                 <li>item 3</li>
//                 <li>item 4</li></ul>`;

// const list = document.querySelector("list");
// const btn = document.querySelector("button");

// btn.addEventListener("click", handlebutton);
// list.addEventListener("click", handleclick);

// function handleclick(event) {
//   if (event.target.nodeName === "li") {
//     console.log(event.target.innerText);
//   }
// }
// function handlebutton() {
//   const listItems = document.querySelectorAll("li");
//   const li = document.createElement("li");
//   li.innerText = `Item ${listItems.length + 1}`;
//   list.append(li);
// }
//==========================================================

//keyboard event
// const app = document.getElementById("app");
// document.addEventListener("keyup", (event) => {
//   console.log(event);
// });

// document.addEventListener("keydown", (event) => {
//   console.log(event);
// });
//==========================================================

//access-forms-and-elements
// const app = document.getElementById("app");
// app.innerHTML = `
//    <h1>Javascript Basic</h1>
//     <form name="order">
//       <label for="userName">
//         Full Name
//         <input type="text" name="userName"  id="userName"/>
//       </label>
//     </form>
//    `;

// // **********Form and events*************
// // create a form and access the form

// // console.log(document.forms)  --> [order]
// // console.log(form);  form.elemnts --. [userName]
// // console.dir(form.elements);

// const orderform = document.forms.order;
// const username = orderform.elements.userName;
// console.log(username);

// function handleChnage(event) {
//   console.log("changeed");
//   console.log(event.target.value);
// }

// function handleInput(event) {
//   console.log(event.target.value);
// }
// username.addEventListener("change", handleChnage);
// username.addEventListener("input", handleInput);
//==========================================================

//access forms and elements

// const app = document.getElementById("app");
// app.innerHTML = `<h1>javascript dom</h1>
// <form name="order" >
// <label> full name<input type="text" name ="fullname"/><label>
// <br/>
// <button type="submit">order please</button>
// </form>
// `;

// const orderform = document.forms.order;
// const user = orderform.elements.fullname;

// console.log(orderform);
// console.log(user);

// user.addEventListener("input", handleUser);
// function handleUser(event) {
//   console.log(event.target.value);
//   console.log(event.target);
//   console.log(event.target.form);
// }
//===============================================================

//submit event
// const app = document.getElementById("app");
// app.innerHTML = `
//   <h1>Javascript Basic</h1>
//   <form name="order">
//      <label>
//        Customer Name
//         <input type="text" name="fullname"/>
//      </label>

//      <br/><br/>
//      <label>
//       <select name="pizza">
//           <option>Select the pizza ?</option>
//             <option value="peproni">Peproni</option>
//             <option value="cheesy">cheesy</option>
//             <option value="onion">onion</option>
//       </select>
//      </label>
//      <br/><br/>
//      what sizes?
//      <label type="radio" value="small" name="sizes"/>small</label>
//      <label type="radio" value="medum" name="sizes"/>medium</label>
//      <label type="radio" value="large" name="sizes"/>large</label>
//      <label type="radio" value="xlarge" name="sizes"/>xlarge</label>
//      <br/><br/>
//      <label>quantity?
//      <input type="number" name="quantity" value="1"/></label>
//      <br/><br/>
//      <button type="submit">Order Please</button>
//   </form>
//   `;
// const orderForm = document.forms.order;
// const user = orderForm.elements.fullname; //grab elemnt fullname

// console.log(orderForm);
// console.log(user);

// function handleUser(event) {
//   console.log(event.target.value); //target value in input ie username
// }
// function handlesubmit(event) {
//   event.preventDefault();
//   const orderForm = event.target;
//   new FormData(orderForm); // formData event will emit or fire: empty,iteratable
// }

// function handleformData(event) {
//   const formdata = event.formData;
//   console.log(formdata);
//   console.log([...formdata]); // entries [key , value]
//   console.log([...formdata.values()]); // [values , values]
//   console.log([...formdata.entries()]); // entries [key , value]

//   const entriesdata = [...formdata.entries()];
//   const entriesobj = Object.fromEntries(entriesdata); //converts datat into obj
//   console.log(entriesobj);
//   const payloadjson = JSON.stringify(entriesobj); //object data into json string
//   console.log(payloadjson);

//   //communicate server
//   fetch("/fakeaddress", {
//     method: "post",
//     body: payloadjson,
//     headers: {
//       "Content-Type": "application/json",
//       "x-my-custom-header": "test",
//     },
//   });
// }
// user.addEventListener("input", handleUser); //input box
// orderForm.addEventListener("submit", handlesubmit); //form submit
// orderForm.addEventListener("formdata", handleformData); // when new formdata construct
//=========================================================================================
const app = document.getElementById("app");
app.innerHTML = `<h1>javascript dom</h1>
<form name="shopping" >
<label> full name :<input type="text" name ="fullname" id="fullName"/><label>
<br/>
<label> mobile number :<input type="number" name ="mobileno" id="mobileno"/><label>
<br/>
<label> email<input type="email" name ="email" id="email" /><label>
<br/>
<label> amount<input type="number" name ="amount" id="amount"/><label>
<br/>
<button type="submit">submit</button>
</form>
`;

const fname = document.getElementById("#fullName");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const amount1 = document.querySelector("#amount");
const submit = document.querySelector("submit");
console.log(amount1.target.value);
const orderForm = document.forms.shopping;
const amount = orderForm.elements.amount1; //grab elemnt fullname
console.log(amount);
// //register form submit event

submit.addEventListener("submit", handleform);

function handleform(event) {
  event.preventDefault();
}

form.addEventListener("submit", handlesubmit); //form submit

function handlesubmit() {
  if (amount1 > 5000) {
    total = amount1 * 0.5;
    console.log(" " + total);
  } else if (amount > 2000 && amount < 5000) {
    total = amount * 0.25;
    alert("" + total);
  } else if (amount < 2000) {
    alert("no discount your total is:" + amount);
  }
}
