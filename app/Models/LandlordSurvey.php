<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandlordSurvey extends Model
{
    use HasFactory;
    protected $fillable = ['tenant', 'property', 'start_date', 'end_date', 'communication', 'discretion',
    'responsiveness', 'compliance', 'overall_rating', 'overall_comment', 'anonymous', 'contact', 'agency',
        'agency_name'];
}
