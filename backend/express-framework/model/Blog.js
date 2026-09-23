import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

// source: https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/

const { Schema, model } = mongoose;

const blogSchema = new Schema(
  // SCHEMA: schema definition
  {
    /**
     * Basic definition only requires field and type, no validation
     * needed, such as:
     *
     * title: String,
     *
     * The definitions below also validates. By default, required is false.
     */
    title: { type: String, required: true },
    published: Boolean,
    author: { type: String, required: true },
    content: { type: String, required: true }
  },
  // OPTIONS: timestamps manage `createAt`/`updatedAt` fields
  {
    // collection?: 'blogs',
    timestamps: true
  }
);

const Blog = model(
  'Blog',
  blogSchema
  // collection?:
  // 'blogs',
);
/**
 * By default,Mongoose builds Collection names out of the model's names
 * and pluralizes it, such that `Blog` becomes `blogs`.
 */

// export for use in the server.js
export default Blog;
