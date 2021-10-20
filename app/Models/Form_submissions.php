<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Form_submissions extends Eloquent
{
    use HasFactory;
    protected $casts = [
        'from_data' => 'array'
    ];

    protected $fillable = [
        'name',
        'from_data',
        'form_id',

    ];
}
