// firebaseFirestoreService.js
import firebase from '.configurations/firebaseConfig'


class FirebaseFirestoreService {
  constructor() {
    this.firestore = firebase.firestore();
  }

  // Get a reference to a Firestore collection
  getCollection(collectionName) {
    return this.firestore.collection(collectionName);
  }

  // Add document to a Firestore collection
  async addDocument(collectionName, data) {
    try {
      const docRef = await this.firestore.collection(collectionName).add(data);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  }

  // Update document in a Firestore collection
  async updateDocument(collectionName, docId, data) {
    try {
      await this.firestore.collection(collectionName).doc(docId).update(data);
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  }

  // Delete document from a Firestore collection
  async deleteDocument(collectionName, docId) {
    try {
      await this.firestore.collection(collectionName).doc(docId).delete();
    } catch (error) {
      console.error("Error deleting document: ", error);
      throw error;
    }
  }
}

export default new FirebaseFirestoreService();
