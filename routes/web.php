<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('{any?}', function() {
    return view('application');
})->where('any', '.*')
->middleware([HandlePrecognitiveRequests::class]);
