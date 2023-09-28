import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  increment,
} from "firebase/firestore";
import { db, storage } from "../../config";

const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const posts = [];
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        const post = { ...doc.data(), id: doc.id };
        posts.push(post);
      });

      return posts;
    } catch (error) {
      alert(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addPost = createAsyncThunk(
  "posts/addPost",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await fetch(postData.image);
      const blobImage = await response.blob();
      const blobImageLocalPath = "post-image/" + blobImage._data.blobId;

      await uploadBytes(ref(storage, blobImageLocalPath), blobImage);
      const blobImageURL = await getDownloadURL(
        ref(storage, blobImageLocalPath)
      );

      const newPost = {
        ...postData,
        image: blobImageURL,
      };
      const { id } = await addDoc(collection(db, "posts"), newPost);

      return { id, ...newPost };
    } catch (error) {
      alert(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(db, "posts", id), {
        comments: arrayUnion({ ...comment }),
      });
      return { id, comment };
    } catch (error) {
      alert(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addLike = createAsyncThunk(
  "posts/addLike",
  async (id, { rejectWithValue }) => {
    try {
      await updateDoc(doc(db, "posts", id), {
        likes: increment(1),
      });

      return id;
    } catch (error) {
      alert(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export { getAllPosts, addPost, addComment, addLike };
