<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('settings/{vue?}', function () {
    return view('settings.index');
})->where('vue', '.*?');

Route::get('customers/{vue?}', function () {
    return view('customers.index');
})->where('vue', '.*?');

Route::get('scheduling/{vue?}', function () {
    return view('scheduling.index');
})->where('vue', '.*?');


