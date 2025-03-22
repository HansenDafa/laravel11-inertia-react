<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){

        $posts =Post::all();
        return Inertia::render('Posts/Index',[
            'posts' => $posts,
        ]);


    }
}
