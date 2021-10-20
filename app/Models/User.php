<?php

namespace App\Models;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Laravel\Sanctum\HasApiTokens;
class User extends Eloquent
{
    use AuthenticatableTrait;
    use Notifiable;
    use HasApiTokens;
    protected $connection = 'mongodb';
    protected $collection = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $dates = ['email_verified_at'];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function forms()
    {
        return $this->hasMany(Form::class);
    }
}
