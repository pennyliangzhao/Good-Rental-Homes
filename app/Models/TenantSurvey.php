<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenantSurvey extends Model
{
    use HasFactory;
    protected $fillable = ['landlord', 'tenant', 'property', 'start_date', 'end_date', 'rent_on_time',  'dwelling_tidiness',
        'grounds_tidiness', 'considerate', 'overall_rating', 'overall_comment', 'anonymous', 'contact'];
}
