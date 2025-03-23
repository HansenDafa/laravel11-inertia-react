<?php

namespace Database\Seeders;

use App\Models\Dataset;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatasetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dataset::factory()->count(10)->for(User::create([
            'name' => 'akimbo',
            'email' => 'akimbo@example.com',
            'password' => bcrypt('12345678'),
        ]))->create();
        

    }
}
