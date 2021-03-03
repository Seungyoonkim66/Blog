import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate:{
        type: Date,
        default: Date.now,
    },
    user: {
        _id: mongoose.Types.ObjectId,
        username: String, 
    }
});

// mongoose.miodel(스키마 이름, 스키마 객체)
const Post = mongoose.model('Post', PostSchema);
// >> 실제 DB에 만드는 컬렉션 이름 = posts (복수)
export default Post;
