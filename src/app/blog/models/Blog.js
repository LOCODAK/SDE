import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 6
    }, 
    category: {
        type: String,
        required: true,
        enum: [
            'Training',
            'Grooming',
            'Experience',
            'Nutrition',
            'Health',
            'Adoption'
        ]
    },
    imageUrl: {
        type: String,
        required: true
    }, 
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    }
})

export default mongoose?.models?.Blog || mongoose.model("Blog", BlogSchema)

// const Blogmodel = mongoose.model("Blog", BlogSchema);

// export default Blogmodel;