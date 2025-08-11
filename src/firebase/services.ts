import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, auth, storage } from './config';

// Image upload service
export const imageService = {
  uploadImage: async (file: File, folder: string): Promise<string> => {
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  },

  deleteImage: async (imageUrl: string): Promise<void> => {
    if (imageUrl && imageUrl.includes('firebase')) {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    }
  }
};

// Student services
export const studentService = {
  async create(studentData: any) {
    const docRef = await addDoc(collection(db, 'students'), {
      ...studentData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getAll() {
    const q = query(collection(db, 'students'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async update(id: string, data: any) {
    const docRef = doc(db, 'students', id);
    await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() });
  },

  async delete(id: string) {
    await deleteDoc(doc(db, 'students', id));
  }
};

// Institution services
export const institutionService = {
  async create(institutionData: any) {
    const docRef = await addDoc(collection(db, 'institutions'), {
      ...institutionData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getAll() {
    const q = query(collection(db, 'institutions'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async update(id: string, data: any) {
    const docRef = doc(db, 'institutions', id);
    await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() });
  },

  async delete(id: string) {
    await deleteDoc(doc(db, 'institutions', id));
  }
};

// Resource services
export const resourceService = {
  async create(resourceData: any) {
    const docRef = await addDoc(collection(db, 'resources'), {
      ...resourceData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getAll() {
    const q = query(collection(db, 'resources'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async update(id: string, data: any) {
    const docRef = doc(db, 'resources', id);
    await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() });
  },

  async delete(id: string) {
    await deleteDoc(doc(db, 'resources', id));
  }
};

// Blog services
export const blogService = {
  async create(blogData: any) {
    const docRef = await addDoc(collection(db, 'blogs'), {
      ...blogData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getAll() {
    const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async update(id: string, data: any) {
    const docRef = doc(db, 'blogs', id);
    await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() });
  },

  async delete(id: string) {
    await deleteDoc(doc(db, 'blogs', id));
  }
};

// Partner services
export const partnerService = {
  async create(partnerData: any) {
    const docRef = await addDoc(collection(db, 'partners'), {
      ...partnerData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getAll() {
    const q = query(collection(db, 'partners'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async update(id: string, data: any) {
    const docRef = doc(db, 'partners', id);
    await updateDoc(docRef, { ...data, updatedAt: Timestamp.now() });
  },

  async delete(id: string) {
    await deleteDoc(doc(db, 'partners', id));
  }
};

// Admin services
export const adminService = {
  async createDefaultAdmin() {
    try {
      const defaultAdminEmail = 'admin@edubridge.com';
      const defaultAdminPassword = 'admin123';
      
      // Create admin user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        defaultAdminEmail, 
        defaultAdminPassword
      );
      
      // Store admin profile in Firestore
      const adminData = {
        uid: userCredential.user.uid,
        email: defaultAdminEmail,
        role: 'admin',
        name: 'System Administrator',
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, 'admins'), adminData);
      
      console.log('Default admin created successfully:', {
        email: defaultAdminEmail,
        password: defaultAdminPassword,
        uid: userCredential.user.uid,
        docId: docRef.id
      });
      
      return {
        success: true,
        email: defaultAdminEmail,
        password: defaultAdminPassword,
        uid: userCredential.user.uid
      };
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Default admin already exists');
        return {
          success: true,
          message: 'Admin already exists',
          email: 'admin@edubridge.com',
          password: 'admin123'
        };
      }
      console.error('Error creating default admin:', error);
      throw error;
    }
  },

  async getAdminProfile(uid: string) {
    const q = query(collection(db, 'admins'));
    const querySnapshot = await getDocs(q);
    const admin = querySnapshot.docs.find(doc => doc.data().uid === uid);
    return admin ? { id: admin.id, ...admin.data() } : null;
  }
};