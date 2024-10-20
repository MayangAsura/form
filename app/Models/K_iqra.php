<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class K_iqra extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'gender',
        'phone',
        'address'
        // 'is_commit'
    ];
}
