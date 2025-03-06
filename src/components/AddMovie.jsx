import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddMovie = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        genre: "",
        releaseYear: "",
        synopsis: "",
        posterUrl: "",
    });

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Add Movie</h2>
            <form>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
                <input type="text" name="director" placeholder="Director" onChange={handleChange} required />
                <select name="genre" onChange={handleChange} required>
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                </select>
                <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} required />
                <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange} required></textarea>
                <input type="url" name="posterUrl" placeholder="Poster Image URL" onChange={handleChange} required />

                <button type="submit">Submit</button>
                <button type="button" onClick={() => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
};

export default AddMovie;