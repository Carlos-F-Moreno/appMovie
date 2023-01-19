<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $fillable = ['titulo','descripcion','fecha_de_estreno','portada'];
    public function comments(){
        return $this->hasMany(Comment::class, 'id');

    }
}
