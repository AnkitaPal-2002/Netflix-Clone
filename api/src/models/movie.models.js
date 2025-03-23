import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    movieId:{
        type: Number,
        required: true,
        unique: true
    },
    backdropPath:{
        type: String,
        required: true
    },
    budget:{
        type: Number,
        required: true
    },
    genres:{
        type: Array,
        required: true
    },
    genreIds:{
        type: Array,
        required: true
    },
    originalTitle:{
        type: String,
        required: true
    },
    overview:{
        type: String,
        required: true
    },
    popularity:{
        type: Number,
        required: true
    },
    posterPath:{
        type: String,
        required: true
    },
    productionCompanies:{
        type: Array,
        required: true
    },
    releaseDate:{
        type: Date,
        required: true
    },
    revenue:{
        type: Number,
        required: true
    },
    runtime:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    watchProviders:{
        type: String,
        required: true
    },
    logos:{
        type: String,
        required: true
    },
    downloadLink:{
        type: String,
        required: true
    },
    ratings:{
        type: Number,
        required: true
    }
},{timestamps:true});

export const Movie = mongoose.model("Movie", movieSchema);
