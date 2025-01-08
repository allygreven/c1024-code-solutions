# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.
  a data structure that resembles an upside down tree, with a "root" at the top and children beneath it. Each node in the tree contains the node's value and references to the children beneath it

- What are some examples of when you would use a Binary Search Tree?
  when you need to store and quickly search for data that can be ordered
  Database Indexing, Word Dictionaries, Sorting Numbers or Strings, File Systems

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  Start at the root.
  Compare the element with the current node:
  If the element is smaller, move to the left child.
  If the element is larger, move to the right child.
  If the element is equal, you've found it.
  -average case

- How do you add an element into a Binary Search Tree? What is its time complexity?
  Start at the root.
  Compare the element with the current node:
  If the element is smaller, move to the left child.
  If the element is larger, move to the right child.
  Repeat the comparison until you reach a null child (where there is no node).
  Insert the new element at that position (null).
  -average case

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  Find the node to remove by traversing the tree.
  Depending on the node's children:
  No children: Simply remove the node.
  One child: Replace the node with its child.
  Two children: Find the in-order successor (smallest node in the right subtree) or in-order predecessor (largest node in the left subtree), replace the node with it, and remove the successor/predecessor.
  -average case

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
