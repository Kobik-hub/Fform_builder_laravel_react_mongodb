<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FormController;
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






// Public routes
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/forms/{id}',[FormController::class,'show']);


// Protected routes
Route::group(['middleware' =>['auth:sanctum']], function () {
    Route::get('/users/forms/{id}',[\App\Http\Controllers\UserController::class,'showForms']);
    Route::post('/forms/create',[FormController::class,'store']);
    Route::get('/forms/',[FormController::class,'index']);
    Route::post('/logout',[AuthController::class,'logout']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
