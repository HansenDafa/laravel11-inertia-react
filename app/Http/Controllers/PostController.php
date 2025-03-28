<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index(){

        $posts =Post::with('user')->get();
        return Inertia::render('Posts/Index',[
            'posts' => PostResource::collection($posts)
        ]);


    }

    public function store(Request $request){
        dd($request->all());
    }
}
