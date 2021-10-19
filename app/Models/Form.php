<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Form extends Eloquent
{
    use HasFactory;

    protected $casts = [
        'form_items' => 'array'
    ];

    protected $fillable = [
        'name',
        'submissions',
        'user_id',
        'form_items'
    ];
}
