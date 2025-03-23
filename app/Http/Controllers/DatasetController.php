<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Dataset;
use App\Http\Resources\DatasetResource;

class DatasetController extends Controller
{
    public function index(){
        $datasets = Dataset::with('user')->get();
        return Inertia::render('Datasets/Index',[
            'datasets' => DatasetResource::collection($datasets)
        ]);
    }

}
