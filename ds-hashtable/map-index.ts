export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */

export function buildIndex(docs: Document[]): DocumentIndex {
  const index = new Map<string, Set<Document>>();
  for (const doc of docs) {
    const words = doc.content.match(/\b(\w+)\b/g) || [];
    for (const word of words) {
      const value = word.toLowerCase();
      if (!index.has(value)) {
        index.set(value, new Set());
      }
      index.get(value)!.add(doc);
    }
  }
  return index;
}
