From <a href="https://www.theodinproject.com/lessons/javascript-linked-lists">The Odin Project</a>:
 
 <h3>Assignment</h3>

   <p>You will need two classes or factories:</p>
    <ol>
      <li><code>LinkedList</code> class / factory, which will represent the full list.</li>
      <li><code>Node</code> class / factory, containing a <code>value</code> property and a link to the <code>nextNode</code>, set both as <code>null</code> by default.</li>
    </ol>
    <p>Build the following functions in your linked list class / factory:</p>

   <ol>
      <li><code>append(value)</code> adds a new node containing <code>value</code> to the end of the list</li>
      <li><code>prepend(value)</code> adds a new node containing <code>value</code> to the start of the list</li>
      <li><code>size</code> returns the total number of nodes in the list</li>
      <li><code>head</code> returns the first node in the list</li>
      <li><code>tail</code> returns the last node in the list</li>
      <li><code>at(index)</code> returns the node at the given <code>index</code></li>
      <li><code>pop</code> removes the last element from the list</li>
      <li><code>contains(value)</code> returns true if the passed in value is in the list and otherwise returns false.</li>
      <li><code>find(value)</code> returns the index of the node containing value, or null if not found.</li>
      <li><code>toString</code> represents your LinkedList objects as strings, so you can print them out and preview them in the console.
 The format should be: <code>( value ) -&gt; ( value ) -&gt; ( value ) -&gt; null</code></li>
    </ol>

   <h3 id="extra-credit">Extra credit</a></h3>

   <ol>
      <li><code>insertAt(value, index)</code> that inserts a new node with the provided <code>value</code> at the given <code>index</code>.</li>
      <li><code>removeAt(index)</code> that removes the node at the given <code>index</code>.</li>
    </ol>

   <p><strong>Extra Credit Tip:</strong> When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their <code>nextNode</code> link updated.</p>
