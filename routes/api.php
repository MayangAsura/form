<?php

use App\Http\Controllers\K_iqraController;
use App\Http\Controllers\ThalibController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['api', HandlePrecognitiveRequests::class])->group(function () {
    Route::resource('thalibs', ThalibController::class);
    Route::resource('k-iqra', K_iqraController::class);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
