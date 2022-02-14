<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/rate-landlord', [\App\Http\Controllers\LLS_Controller::class, store])
    ->name('storesurvey');
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::resource('LandlordSurvey', 'LLS_Controller');
Route::resource('TenantSurvey', 'TSController');
Route::fallback(function (){
    return view('app');
});
//Route::get('/', function () {
//    return view('welcome');
//});

require __DIR__.'/auth.php';
