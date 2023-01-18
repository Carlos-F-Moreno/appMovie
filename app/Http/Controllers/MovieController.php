<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function getmovies(request $request){
        $movies = Movie::all();
        return response()->json($movies);
    }
}
