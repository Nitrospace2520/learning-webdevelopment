import { Client, ID, Query, Databases, Storage } from "appwrite";
import config from "../config/config";

export class AppwriteService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // TODO: posts details:-
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      // console.log(slug);
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log(`Appwrite service :: createPost :: error :: ${error}`);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log(`Appwrite service :: updatePost :: error :: ${error}`);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(`Appwrite service :: deletePost :: error : ${error}`);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(`Appwrite service :: getPost :: error : ${error}`);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(`Appwrite service :: getPosts :: error : ${error}`);
      return false;
    }
  }

  // TODO: files releted services:-
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(`Appwrite service :: uploadFile :: error :: ${error}`);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(`Appwrite service :: deleteFile :: error :: ${error}`);
      return false;
    }
  }

  async getFile(fileId) {
    try {
      return await this.bucket.getFile(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log(`Appwrite service :: getFile :: error :${error}`);
      return false;
    }
  }

  getFilePreview(fileID) {
    try {
      return this.bucket.getFilePreview(config.appwriteBucketId, fileID);
    } catch (error) {
      console.log(`Appwrite service :: getFilePreview :: error :${error}`);
      return false;
    }
  }

  viewFile(fileId) {
    try {
      return this.bucket.getFileView(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log(`Appwrite service :: viewFile :: error :${error}`);
      return false;
    }
  }

  downloadFile(fileId) {
    try {
      console.log(`Appwrite service :: downloadFile :: ${this.bucket.client}`);
      return this.bucket.getFileDownload(config.bucket, fileId);
    } catch (error) {
      console.log(`Appwrite service :: downloadFile :: error :${error}`);
      return false;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
