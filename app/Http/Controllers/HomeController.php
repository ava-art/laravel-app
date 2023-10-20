<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Tag;
class HomeController extends Controller
{
    public function index() {
         $articles = Article::LastLimit(4);
         return view('app.home', compact('articles'));
    }
   
}
