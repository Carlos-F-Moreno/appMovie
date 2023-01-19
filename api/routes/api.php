<?php

use App\Http\Controllers\MovieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(MovieController::class)->group(function () {
    route::get('movies', 'index');
    route::get('movie/{id}', 'show');
    route::post('movie', 'store');
    route::put('movie/{id}', 'update');
    route::delete('movie/{id}', 'destroy');
});