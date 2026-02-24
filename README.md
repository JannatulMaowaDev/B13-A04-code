1.
getElementById()= it works with id and returns single Element.

getElementsByClassName()= it finds all elements with a specific class.It returns HTMLCollection.It updates automatically if the page changes.

querySelector()= it finds the first element that matches a CSS selector.it also returns single element.it can use id, class, tag, or any CSS selector.

querySelectorAll()= it finds all elements that match a CSS selector.it returns NodeList.it can use .forEach() to loop.it does NOT change automatically if the page changes.


2. const newDiv = document.createElement("div");       
newDiv.textContent = "Hello World";
newDiv.className = "my-class";
newDiv.id = "my-id"; 
 const parent = document.getElementById("container");
parent.appendChild(newDiv);


document.createElement("div") creates a new <div> in memory.newDiv.textContent = "Hello World" adds text inside the div.newDiv.className gives it a class.newDiv.id gives it an id.parent.appendChild(newDiv) adds it to the page inside the element with id "container".

output:
<div id="container">
  <div id="my-id" class="my-class">Hello World</div>
</div>


3.
Event Bubbling is a process where an event starts from the target element and propagates upward through its parent elements.

4.Event Delegation is a technique where a parent element handles events for its child elements using event bubbling.
it is useful for 
* Better performance because less event listeners means less memory used. 
* it works for dynamic elements.If new elements are added later, they still work.

5.preventDefault() stops the default action of an element.
 stopPropagation() stops the event from propagating to parent elements.