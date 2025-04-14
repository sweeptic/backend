import { Request, Response } from 'express';
import Movies from 'models/movies';

export function getMovies(_req: Request, res: Response): void {
    Movies.find()
        .limit(10)
        .then((movies) => {
            res.status(200).json({
                message: 'fetched movies successfully',
                movies: movies,
            });
        });
}

export function getMovie(req: Request, res: Response): void {
    const movieId = req.params.movieId;

    Movies.findById(movieId).then((movieDetails) => {
        console.log('getMovie run');
        return res.status(200).json({ movieDetails: movieDetails });
    });
}
