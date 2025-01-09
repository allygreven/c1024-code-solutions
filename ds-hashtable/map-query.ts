import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const value = new Set<Document>();
  const words = query.match(/\b(\w+)\b/g) || [];
  for (const word of words) {
    const docs = index.get(word.toLowerCase());
    if (docs) {
      for (const doc of docs) {
        value.add(doc);
      }
    }
  }
  return value;
}
